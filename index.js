const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  return (typeof (let result = array.find(element => element.result === "W")) === 'undefined') ? undefined : result.year;
  //return ((typeof result === 'undefined') ? undefined : result.year)
}