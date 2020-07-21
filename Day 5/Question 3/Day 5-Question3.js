//Async await
async function getUserAsync() 
{
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await response.json();
  return data;
}
//getUserAsync().then(data => console.log(data)); 
getUserAsync().then(data => {
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
        if(data[key].completed){
            console.log(data[key]);
        }
    
  }
});


//Promises
async function getData(){
  let response =await fetch("https://jsonplaceholder.typicode.com/todos");
  let data =await response.json();
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
        if(data[key].completed){
            console.log(data[key]);
        }
    }
  }
}
function promise(){  
  return new Promise((resolve,reject)=>{
    const error = false;
    if(error){
      reject("Oops an error occured:(");
    }
    else{
      resolve();
    }
  })
}
promise().then(getData).catch(error=>console.log(error));
    

//fetch
fetch("https://jsonplaceholder.typicode.com/todos").then(response=>response.json()).then(data=>{
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
        if(data[key].completed){
            console.log(data[key]);
        }
    }
  }
});