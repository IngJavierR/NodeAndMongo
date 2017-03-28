(function(){
  'use strict';

var mongodb = require('mongodb');
var uri = 'mongodb://root:root@localhost:27017/test';

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
