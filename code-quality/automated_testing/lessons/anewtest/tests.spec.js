describe ("Add function with assert",function(){
    it("add array of 4,5,2 to return 11",function(){
        assert.equal(add([4,5,2]), 11)
  
    })
  })
describe ("Add function with expect",function(){
    it("add array of 4,5,2 to return 11",function(){
        expect(11).equal(add([4,5,2]))
  
    })
  })