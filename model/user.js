/**
 * Created by Administrator on 2016/12/22.
 */
var mongodb=require('./db');

function User(user){
    this.name=user.name;
    this.password=user.password;
}
module.exports=User;

User.prototype.save=function save(callback){
  var user={
      name:this.name,
      password:this.password,
  };
  mongodb.open
};