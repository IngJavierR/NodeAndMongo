(function(){
  'use strict';

var mongodb = require('mongodb');
var textJson = require('./textjson.js');
var uri = 'mongodb://hermosillo:herm0sill0@localhost:27017/hermosillo';

var o_id = new mongodb.ObjectID("58d19bb40e69441c700b132e");
var toUpdate = { '_id': o_id };
var toSave = textJson();

 mongodb.MongoClient.connect(uri, function(error, db){
   if(error){
     console.log(error);
     return callback(error, 'No se pudo conectar a la base de datos');
   }
   db.collection('detencion').save(toSave, function(error, result){
   //db.collection('detencion').update(toUpdate, toSave, function(error, result){
     if(error){
       console.log(error);
     }
     console.log(JSON.stringify(result));
   });
 });

})();
