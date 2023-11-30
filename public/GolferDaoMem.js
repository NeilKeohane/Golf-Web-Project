exports.golfers = [ //For this phase, we will store the data in memory, on the server
    { rank:1,name:'Jon Rahm'},
    { rank:2,name:'Collin Morikawa'},
    { rank:3,name:'Viktor Hovland'},
    { rank:4,name:'Patrick Cantlay'},
    { rank:5,name:'Scottie Scheffler'},
    { rank:6,name:'Cameron Smith'},
    { rank:7,name:'Justin Thomas'},
    { rank:8,name:'Rory McIlroy'},
    { rank:9,name:'Xander Schauffele'},
    { rank:10,name:'Sam Burns'},
];

exports.readAll = function(){
    return exports.golfers;
}

exports.create = function(golfer){
    exports.golfers.push(golfer);
    return golfer;
};

exports.updateName = function(golfer){
    console.log("Golfers Rank: " + golfer.rank + " Name: " + golfer.name);
    for(let i=0; i< exports.golfers.length; i++){
        console.log("Current Golfers Rank: " + exports.golfers[i].rank + " Name: " + exports.golfers[i].name);
        if(exports.golfers[i].rank === golfer.rank){
            exports.golfers[i].name = golfer.name;
        }
    }
};

exports.del = function(rank){
    let index = pos(rank);
    console.log("Index: " + index);
    let deletedgolfer = null;
    if(index >= 0){
        deletedgolfer = exports.golfers[index];
        exports.golfers.splice(index,1);
    }
    return deletedgolfer;
};

function pos(rank){
    for(let i=0; i<exports.golfers.length; i++){
        if(exports.golfers[i].rank === rank){
            return i;
        }
    }
    return -1;
}