const dao = require('./GolferDaoMongo');

exports.getAll = async function(req,res){ // get (all) method
    res.status(200);
    res.send(await dao.readAll() );
    res.end(); 
};

exports.golfer = function(req,res){ // Creeate new golfer
    res.status(200);
    let newgolfer = {};
    newgolfer.name = req.body.golfername;
    newgolfer.rank = parseInt(req.body.golferrank);
    dao.create(newgolfer);
    res.redirect('golfrankings.html');
}; 

exports.updateGolfer = function(req,res){ // Update golfer by rank
    console.log('Updating user');
    dao.updateName(req.body.newname, parseInt(req.body.newrank));
    res.redirect('golfrankings.html');
}; 

exports.deleteGolfer = function(req,res){  // Delete golfer
    dao.del( req.params.rank );
    res.redirect('../golfrankings.html');
};
