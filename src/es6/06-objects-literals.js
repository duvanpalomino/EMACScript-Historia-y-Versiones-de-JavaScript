// enahced object literals

function newUser(user, age, country, uId){
    return{
        user,
        age,
        country,
        id: uId
    };
};

console.log(newUser('duvanpalomino', 27, 'CO', 1));