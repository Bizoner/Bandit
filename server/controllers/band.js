var UsersModel = require('../models/users').UsersModel;
var BandsModel = require('../models/bands').BandsModel;
var SongsModel = require('../models/songs').SongsModel;
var ChannelsModel = require('../models/channels').ChannelsModel;

function getBandData (req,res,next) {
    if (!req.body.id) return next('missingid');
    BandsModel.getBandById(req.body.id,(err,band) => {
        if (err || !band) return next('missingband');
        band = band.toObject();
        if (req.user && req.user._id) {
            if (band.adminId && (band.adminId.equals(req.user._id))) {
                band.isAdmin = true;
            } else {
                band.members.forEach((member) => {
                    if (member.equals(req.user._id)) {
                        band.isMember = true;
                    }
                })
            }
        }
        UsersModel.getUsersByIds(band.members, (err, members) => {
            if (err) return next(err)
            band.members = members;
            SongsModel.getSongsByBandId(band._id,(err,songs)=>{
                if (err) return next(err);
                band.songs = songs;
                res.json(band);
            });
        });
    });
}

function createNewBand(req,res,next) {
    if (!req.user || !req.user._id) return next('missingid');
    if (req.body.members) {
        const emailArr = req.body.members.split(',');
        UsersModel.getUsersByEmails(emailArr,(err,regUsers) => {
            regUsers.forEach((regUser) => {
                emailArr.splice(emailArr.indexOf(regUser.email),1);
            });
            const objReq = {
                adminId : req.user._id,
                members: [req.user._id].concat(regUsers.map(user => user._id)),
                pendingMembers: emailArr,
                name :req.body.name,
                description: req.body.description,
                icon : req.body.icon,
                genre : req.body.genre
            };
            BandsModel.addNewBand(objReq,(err,band)=> {
                if (err) return next(err);
                res.json({_id: band._id});
            })
        });
    } else {
        const objReq = {
            adminId : req.user._id,
            members: [req.user._id],
            pendingMembers: [],
            name :req.body.name,
            description: req.body.description,
            icon : req.body.icon,
            genre : req.body.genre
        };
        BandsModel.addNewBand(objReq,(err,band)=> {
            if (err) return next(err);
            res.json({_id: band._id});
        })
    }
}

function createNewSong (req,res,next) {
    if (!req.user || !req.user._id) return next('missingid');
    SongsModel.addNewSong(req.body.id,(err,song)=> {
        if (err) return next(err);
        ChannelsModel.addNewChannel({instrument: 'guitar', title: 'New Channel', songId: song._id, audioFiles:[]},(err) => {
            if (err) return next(err);
            res.json({_id: song._id});
        });
    })
}

function getSongUrl (req,res,next) {
    SongsModel.getSongById(req.body.songId,(err,song) => {
        song = song.toObject();
        if (err) return next(err);
        BandsModel.getBandById(song.bandId,(err,band) => {
            band = band.toObject();
            song = Object.assign(song,{bandName: band.name, bandIcon: band.icon})
            res.json(song);
        });
    });
}

function favoriteSong(req,res,next) {
    if (!req.user || !req.user._id) return next('missingid');
    UsersModel.addToFavorites({_id: req.user._id,songId:req.body.songId},(err,favorite) => {
        if (err) next(err);
        console.log()
        res.json(favorite);
    })
}

function getFavorites(req,res,next) {
    if (!req.user || !req.user._id) return next('missingid');
    UsersModel.getUserById(req.user._id,(err,user) => {
        user = user.toObject();
        SongsModel.getSongsByIds(user.favorites,(err,songs) => {
            const bandIdMap = songs.map(song => song.bandId);
            BandsModel.getBandsByIds(bandIdMap,(err,bands) => {
                songs.forEach((song,index) => {
                    bands.forEach((band) => {
                        band = band.toObject();
                        if (band._id.equals(song.bandId)) {
                            songs[index] = songs[index].toObject();
                            songs[index].band = band;
                        }
                    })
                });
                res.json(songs);
            });
        })
    })
}

function getAllSongs(req,res,next) {
    if (!req.user || !req.user._id) return next('missingid');
    BandsModel.getBandsByUserId(req.user._id,(err,bands) => {
        const bandIdMap = bands.map(band => band._id);
        SongsModel.getSongsByBandIds(bandIdMap,(err,songs) => {
            songs.forEach((song,index) => {
                bands.forEach((band) => {
                    band = band.toObject();
                  if (song.bandId.equals(band._id)) {
                      songs[index] = songs[index].toObject();
                      songs[index].band = band;
                  }
                })
            });
            res.json(songs);
        })
    })
}

module.exports = {getBandData,createNewSong,createNewBand,getSongUrl,favoriteSong,getFavorites,getAllSongs};