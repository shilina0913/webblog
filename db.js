/**
 * Created by Administrator on 2016/12/21.
 */
var settings=require('/settings');
var Db=require('mongodb').Db;
var Connection=require('mongodb').Connevtion;
var Server=require('mongodb').Server;
module.exports=new Db(settings.db,new Server(settings.host,Connection.DEFAULT_PORT,{}));