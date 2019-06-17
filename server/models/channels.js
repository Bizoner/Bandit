var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChannelsSchema = new Schema({
    instrument: String,
    title: String,
    songId: Schema.Types.ObjectId,
    audioFiles: [new Schema ({
        location: Number,
        audioUrl: String
    })],
    audioEffects: {
        volume: {type: Number, default: 1},
        distortion: {type: Number, default: 0},
        delay: {type: Number, default: 0},
        reverb: {type: Number, default: 0},
    },
    cDate: {type: Date, default: Date.now()},
    lmDate: {type: Date, default: Date.now()},
});

ChannelsSchema.statics.addNewChannel = function (channel,cb) {
    var ChannelsObjModel = new ChannelsModel(channel);
    ChannelsObjModel.save(cb);
};

ChannelsSchema.statics.updateChannel = function (channel,cb) {
    channel.lmDate = new Date();
    return this.update({_id:channel._id},channel,cb);
};

ChannelsSchema.statics.deleteChannel = function (channel,cb) {
    return this.remove({_id:channel._id},cb);
};

ChannelsSchema.statics.getChannelsBySongId = function (id,cb) {
    return this.find({songId:id},cb);
};

// Export the model
var ChannelsModel = mongoose.model('channels', ChannelsSchema);
module.exports.ChannelsModel = ChannelsModel;