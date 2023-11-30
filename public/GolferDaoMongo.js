const mongoose = require('mongoose');

const golferSchema = new mongoose.Schema({
    name: String,
    rank: Number 
});

const golferModel = mongoose.model('golfer', golferSchema);

exports.readAll = async function(){ 
    let golfers = await golferModel.find();
    return golfers;
}

exports.read = async function(id){ 
    let golfer = await golferModel.findById(id);
    return golfer;
}

exports.create = async function(golfer){ 
    const mongoGolfer = new golferModel(golfer);
    await mongoGolfer.save();
    return mongoGolfer;
};

exports.updateName = async function(newName, golferRank){ 
    const filter = { rank: golferRank };
    const update = { name: newName };
    await golferModel.findOneAndUpdate(filter, update);
};

exports.del = async function(findRank){ 
    let deletedGolfer = await golferModel.findOneAndDelete( { rank: { $eq: findRank } } );
    return deletedGolfer;
};