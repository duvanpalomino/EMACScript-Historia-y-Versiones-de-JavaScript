const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana Kiwe, Apple, Orange, etc. etc. etc.';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
};

