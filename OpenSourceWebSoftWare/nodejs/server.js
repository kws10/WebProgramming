
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwer1234",
    database: "university"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "UPDATE student SET Name = '이상호' WHERE Name = '제갈현민' ";

  con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
