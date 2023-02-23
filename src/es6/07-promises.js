const anotherFuntion = () => {
    return new Promise((resolve, reject) =>{
        if(false){
            resolve('Hey!!');
        } else {
            reject('Whoopss!');
        };
    })
};

anotherFuntion()
    .then(Response => console.log(Response)) 
    .catch(err => console.log(err));