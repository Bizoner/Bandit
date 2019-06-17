var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongsSchema = new Schema({
    bandId: Schema.Types.ObjectId,
    title : {type: String, default: 'New Song'},
    cDate: {type: Date, default: Date.now()},
    lmDate: {type: Date, default: Date.now()},
    bpm : {type: Number, default: 90},
    length: {type: Number, default: 0},
    lastExportedUrl: String,
    isPublic: {type: Boolean, default: true},
    playCounter: {type:Number, default: 0},
    timeSignature: {type:String, default: '4/4'},
    key: {type:String, default: 'Am'},
});

SongsSchema.statics.addNewSong = function(id,cb) {
    var SongsObjModel = new SongsModel({bandId:id});
    SongsObjModel.save(cb);
}

SongsSchema.statics.getSongById = function (id,cb) {
    return this.findOne({_id:id},cb);
};

SongsSchema.statics.getSongsByBandId = function (id,cb) {
    return this.find({bandId:id},cb);
};

SongsSchema.statics.updateSong = function (updateObj,cb) {
    console.log(updateObj);
    var update = {
        title: updateObj.title,
        lmDate: new Date(),
        bpm: updateObj.bpm,
        timeSignature: updateObj.timeSignature,
        key: updateObj.key
    };
    return this.update({_id:updateObj.songId},update,cb);
}

SongsSchema.statics.updateSongExport = function (updateObj,cb) {
    return this.update({_id: updateObj._id},{lastExportedUrl:updateObj.lastExportedUrl},cb)
};

SongsSchema.statics.getSongsByIds = function (idsArray,cb) {
    return this.find({_id: {$in : idsArray}},cb)
};

SongsSchema.statics.getSongsByBandIds = function (idsArray,cb) {
    return this.find({bandId: {$in : idsArray}},cb)
};

// Export the model
var SongsModel = mongoose.model('songs', SongsSchema);
module.exports.SongsModel = SongsModel;