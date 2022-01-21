const logger = (text, timeout) => {
    setTimeout(()=>{
        console.log(text);
    }, timeout);
}


for( var i = 1; i <= 10; i++ ){
   logger(i, i*1000)
}

