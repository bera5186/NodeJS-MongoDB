const mongoClient = require('mongodb'); 
var url = 'mongodb://localhost:27017/mydb'

mongoClient.connect(url, (error, db) => {
    if (error) throw error ;

    console.log('Database Created');
    db.close();
});