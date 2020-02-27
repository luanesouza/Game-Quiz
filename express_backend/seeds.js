const  User  = require('./models/UserModel')

let user1 = new User({name: 'Sarah'})
let user2 = new User({name: 'Sarah'})
// let user3 = User.create({name: 'Sarah'})
// let user4 = User.create({name: 'Sarah'})
let ruby = Quiz.create({ topic: 'Ruby'})
let javascript = Quiz.create({ topic: 'Javascript'})
let sql = Quiz.create({ topic: 'SQL'})
let node = Quiz.create({ topic: 'Node'})

console.log('seed done');
