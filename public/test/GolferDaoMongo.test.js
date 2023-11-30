const dbcon = require('../DbConnection');
const dao = require('../GolferDaoMongo');

beforeAll(function(){
    console.log("Before all.........")
    dbcon.connect('test');
});

afterAll(async function(){
    console.log("After all.........")
    dbcon.disconnect();
});

beforeEach(async function(){
    console.log("Before each.........")
});

test('Create new golfer test',async function(){
    let newdata = {rank:1000,name:"NewUser"};
    let golfers = await dao.readAll();
    let size = golfers.length;
    await dao.create(newdata);
    golfers = await dao.readAll();
    expect(golfers.length).toBe(size+1);
});

test('Update new golfer test',async function(){
    let newdata = {rank:1000,name:"NewUser"};
    let name = newdata.name;
    await dao.updateName(newdata.name, newdata.rank);
    let golfers = await dao.readAll();
    expect(golfers[golfers.length - 1].name).toBe(name);
    await dao.del(1000);
});

test('Read All', async function(){

});