// Input:
let inputValue = {
  hired: {
    be: {
      to: {
        deserve: 'I'
      }
    }
  }
};

function objectFirstKey(object){
  return Object.keys(object)[0]
}

function objectFirstValue(object){
  return object[objectFirstKey(object)]
}

function runAuto(input){
  let detailObject = {...input}
  let newArray = []
  let index = 0
  let returnObject = {}
  let tempObject = returnObject

  while(typeof detailObject === 'object'){
    newArray.push(objectFirstKey(detailObject))
    index = index + 1
    detailObject = detailObject[objectFirstKey(detailObject)]
  }

  newArray.push(objectFirstValue(detailObject))
  newArray = newArray.reverse()

  for(var i = 0; i < newArray.length; i++) {
      if(i<newArray.length-2){
        tempObject = tempObject[newArray[i]] = {};
      }
      if(i==newArray.length-2){
        tempObject = tempObject[newArray[i]] = newArray[i+1]
      }
  }
  
  console.log(JSON.stringify(returnObject));
  return returnObject
}

runAuto(inputValue)

function run(input){
  let firstObjectKey = objectFirstKey(input)
  let secondObjectKey = objectFirstKey(input[firstObjectKey])
  let thirdObjectKey = objectFirstKey(input[firstObjectKey][secondObjectKey])
  let forthObjectKey = objectFirstKey(input[firstObjectKey][secondObjectKey][thirdObjectKey])
  let forthObjectValue = objectFirstValue(input[firstObjectKey][secondObjectKey][thirdObjectKey])
  console.log(firstObjectKey,secondObjectKey,thirdObjectKey,forthObjectKey,forthObjectValue)
  let returnObject = {}
  returnObject[forthObjectValue] = {}
  returnObject[forthObjectValue][forthObjectKey] = {}
  returnObject[forthObjectValue][forthObjectKey][thirdObjectKey] = {}
  returnObject[forthObjectValue][forthObjectKey][thirdObjectKey][secondObjectKey] = firstObjectKey
  return returnObject
}

// run(inputValue)
 
// Output:
let outputValue = {
  I: {
    deserve: {
      to: {
         be: 'hired'
      }
    }
  }
};