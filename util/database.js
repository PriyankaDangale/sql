const Sequelize=require('sequelize');
const sequelize=new Sequelize('node-complete','root','dolly',{dialect:'mysql',host:'localhost'});
module.exports=sequelize;