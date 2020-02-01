const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  return array.find(element => element.result === "W").year;
  //return ((typeof result === 'undefined') ? undefined : result.year)
}