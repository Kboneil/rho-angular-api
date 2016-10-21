console.log('About to make a promise');
var promise = New Promise(function(resolve){
  setTimeout(function(){
    console.log('resolving the promise');
    resolve(42);
  }, 2000);
});

console.log('promise object', promise);

promise.then(function(result){
  console.log('Inside then number 1', result);
  console.log('result', result);
  return result + 1;
  //this return is going to get passed into the next function as newResult 
}).then(function(newResult){
  console.log('Inside then number 2', result);
  console.log('newResult', newResult);
})
