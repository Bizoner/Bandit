var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;
var CacheSchema = new Schema({
    songId : {type: ObjectId, unique:true},
    userId: ObjectId,
    expireAt: {type: Date, expires: 60}
});

CacheSchema.statics.getOrCreateSongLock = function(cache,cb) {
    this.findOne({songId:cache.songId},(err,res) => {
       if (err || !res || res.userId.equals(cache.userId)) {
           this.update({songId:cache.songId},{expireAt: new Date(),userId:cache.userId},{ upsert: true },cb)
       } else {
           cb('songLocked');
       }
    });
};

var CacheModel = mongoose.model('cache', CacheSchema);
module.exports.CacheModel = CacheModel;