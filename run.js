
function objectFirstKey(object){
  return Object.keys(object)[0]
}

function objectFirstValue(object){
  return object[objectFirstKey(object)]
}

function reverseNestedObject(input){
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

  if(newArray.length>2){
    for(var i = 0; i < newArray.length; i++) {
      if(i<newArray.length-2){
        tempObject = tempObject[newArray[i]] = {};
      }
      if(i==newArray.length-2){
        tempObject = tempObject[newArray[i]] = newArray[i+1]
      } 
    }
  }else{
    returnObject[newArray[1]] = newArray[0]
  }
  
  console.log(`${JSON.stringify(input)} => ${JSON.stringify(returnObject)}`);
  return returnObject
}

// Input:
// let inputValue = {
//   hired: {
//     be: {
//       to: {
//         deserve: 'I'
//       }
//     }
//   }
// };

// reverseNestedObject(inputValue)

module.exports = {
  reverseNestedObject
}
