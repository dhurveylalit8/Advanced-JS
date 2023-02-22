const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Hey Lalit, what's up!");
    }, 2000);
})
myPromise.then((result)=>{
    console.log(result)
})