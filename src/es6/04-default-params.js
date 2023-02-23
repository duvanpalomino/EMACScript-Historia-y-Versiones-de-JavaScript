function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || '27';
    var country = country || 'MX';
    console.log(name, age, country);
};

newUser();
newUser('David', 15, 'Colombia');

function newAdmin(name = 'Oscar', age = 27, country = 'cl'){
    console.log(name, age, country);
};

newAdmin();
newAdmin('Ana', 28, 'PE');