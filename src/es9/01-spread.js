const user = { 
    username: 'duvanpalomino',
    age: 27,
    county: 'Colombia'
};

const {username, ...values} = user;
console.log(username);
console.log(values);