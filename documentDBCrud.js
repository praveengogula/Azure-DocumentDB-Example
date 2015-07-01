var DocumentClient = require("documentdb").DocumentClient;

var endpoint="https://documentdbstorage1.documents.azure.com:443/";
var authkey="JqslSbdSvG4wo9NbyK5D+ZNvTzKCiGhn9AAPItDRhDVTV1SPQe4plDT5J+j8aGFguJ8iAMsiQwIMByJDIyX/PQ==";

var client = new DocumentClient(endpoint,{"masterKey": authkey});

var databaseDefinition = {"id": "documentdb1"};
var collectionDefinition = {"id": "table2"};
var documentDefinition = {
		"id": "pgogula",
		"stuff": "Hello World",
		"bibbidi": {
		"bobbidi": "boo"
		}
};


client.createDatabase(databaseDefinition, function(err,database){
client.createCollection(database._self,collectionDefinition, function(err,collection){

client.createDocument(collection._self, documentDefinition, function(err,document){
client.queryDocuments(collection._self,"SELECT * FROM docs d WHERE d.bibbidi.bobbidi='boo'").toArray(function(err, results){
 console.log("Query Results:");
 console.log(results);
 });
});
});
});