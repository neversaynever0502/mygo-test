var should = require('should')
var {
  objectFirstKey,objectFirstValue,
  reverseNestedObject
} = require("../run");


describe("test run.js", function(){
  it("check objectFirstKey",function(){
    let inputValue = {
      deserve: 'I'
    };
    let output = Object.keys(inputValue)[0]
    let outputValueShouldBe = 'deserve'
    output.should.equal(outputValueShouldBe)
  }),
  it("check objectFirstValue",function(){
    let inputValue = {
      deserve: 'I'
    };
    let output = inputValue[Object.keys(inputValue)[0]]
    let outputValueShouldBe = 'I'
    output.should.equal(outputValueShouldBe)
  }),
  it("check if reverseNestedObject right", function(){
    let inputValue = {
      hired: {
        be: {
          to: {
            deserve: 'I'
          }
        }
      }
    };
    let outputValue = reverseNestedObject(inputValue)
    let outputValueShouldBe = {
      I: {
        deserve: {
          to: {
             be: 'hired'
          }
        }
      }
    }
    outputValue.should.be.an.Object()
    JSON.stringify(outputValue).should.equal(JSON.stringify(outputValueShouldBe))
  })

})

