var should = require('should')
var {
  reverseNestedObject
} = require("../run");


describe("test run.js", function(){
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

