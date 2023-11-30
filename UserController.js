const dao = require('./public/UserController'); // Import the module
const mod = require('./public/GolferDaoMongo'); // Import golfer data
 
 test('Create User Test', function(){
    let newdata = {rank:0,name:"New User",login:"n@n.com"};
    let size = mod.golfers.length;
    mod.create(newdata);
    expect(mod.golfers.length).toBe(size+1);
    expect(mod.golfers).toContain(newdata);
 });

 test('Update User Test', function(){
    let newdata = {rank:1,name:"New User",login:"n@n.com"};
    let name = newdata.name;
    mod.updateName(newdata);
    expect(mod.golfers[0].name).toBe(name);
 });

 test('Delete User Test', function(){
   let size = mod.golfers.length;
   let deletedgolfer = mod.del(1);
   expect(mod.golfers.length).toBe(size-1);
});
