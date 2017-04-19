(function(){
  'use strict';

var mongodb = require('mongodb');
var uri = 'mongodb://hermosillo:herm0sill0@localhost:27017/hermosillo';

 mongodb.MongoClient.connect(uri, function(error, db){
   if(error){
     console.log(error);
     return callback(error, 'No se pudo conectar a la base de datos');
   }
   db.collection('detencion').find().toArray(function(error, result){
     if(error){
       console.log(error);
     }
     console.log(JSON.stringify(result));
   });
 });

})();
