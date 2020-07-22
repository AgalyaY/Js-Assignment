colors = ["blue","yellow","orange","green","red","Brown","pink","violet"];

let i=0;
setInterval(()=>{  
    document.body.style.backgroundColor = colors[i];  
    i+=1;
},5000);   
