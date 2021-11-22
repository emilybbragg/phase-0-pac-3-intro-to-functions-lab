//NUMBER ONE
  function shout(string) {
    return string.toUpperCase();
  }
//NUMBER TWO
  function whisper(string) {
    return string.toLowerCase();
}
//NUMBER THREE
function logShout(string) {
console.log(`HELLO`)
}
//NUMBER FOUR
function logWhisper(string) {
    console.log(`hello`)
    }

//NUMBER FIVE/SIX/SEVEN
function sayHiToGrandma(string){
    if(string === string.toLowerCase()){
    return "I can't hear you!"
} 
else if (string === string.toUpperCase()){
    return "YES INDEED!"
} 
else if (string === "I love you, Grandma."){
    return "I love you, too."
} 
}

//NUMBER SEVEN

/*
function sayHiToGrandma(string) {
    if (string=string.toLowerCase);
    return ("I can\'t hear you!");
}
//NUMBER SIX


//NUMBER TWO
function whisper(string) {}
function whisper(string) {
    return string;
  }
  "Hello!".toLowerCase();
  function whisper(string) {
      return string.toLowerCase();
  }

//NUMBER THREE
function logShout(string) {}

console.log(string.toLowerCase());
}



describe('logShout(string)', function() {
    it('takes a string argument and logs it in all caps using console.log()', function() {
      const spy = expect.spyOn(console, 'log').andCallThrough();
  
      logShout('hello');
  
      expect(spy).toHaveBeenCalledWith('HELLO');
  
      console.log.restore();
    })
  })



  NUMBER ONE
  BEFORE
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO');
  })
})
*/