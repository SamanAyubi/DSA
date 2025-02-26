
// object singleton
const user = {}
user.id = "123"
user.name = "Sammy"
user.isLoggedin  = false

const reguser ={
    email: 'sj@gmail.com',
    fullname : {
        userfullname : 'ehjkhke'
    }
}
// combining diff objs 
const newObj = {...user, ...reguser}
const newObjs = Object.assign({}, user, reguser)

//console.log ('user', newObj);
//console.log ('user', newObjs);

//array of objs
const users = [
    {
        name : 'hjdh',
        id: '1232'
    },
    {
        name : 'hjkj',
        id: '123892'
    },
    {
        name : 'fknf',
        id: '123892'
    }
]

// console.log(Object.keys(reguser));
// console.log(Object.values(reguser));

// console.log(Object.entries(reguser));


//destructuring example
const course = {
    coursename : 'js course',
    price : "898",
    instructur: "sammy"
}
const {price} = course
const {price: rate} = course
console.log('price -->>', price);
console.log('price now with rate -->>', rate);

// In react - destructure example
const nav = (comp) => {
 console.log('comp', comp);
}
nav(comp = 'ghhd')