var db;
var dbCreated = false;

// var scroll = new iScroll('wrapper', {
//  vScrollbar : false,
//  hScrollbar : false,
//  hScroll : false
// });
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
 db = window.openDatabase("UserDb", "1.0", "Cordova Demo", 200000);
 if (dbCreated)
  {
      alert('db not created')
  }
 
 else{
 db.transaction(getregistdata, transaction_error);
 }
}

function getregistdata(tx){
 
  var sql = "select email, paswrd from RegTable";
  tx.executeSql(sql, [], getlogin_success);
}

function transaction_error(tx, error) {
 alert("Database Error: " + error);
}

function getlogin_success(tx, results){
   var len = results.rows.length;
   var status;
   for (var i=0; i< len; i++) {  
    var employee = results.rows.item(i);
    var username=document.getElementById("username").value;
    var password=document.getElementById("psw").value;
    var uname=employee.email;
    var pasw=employee.paswrd;
    alert(username);
    alert(password);
    if(username==uname && password==pasw){
     alert("Login Success");
     break;
    }
    else{
        status = 1;
     }
   }
   
   if(status==1)
    {
      
       alert("login failed");
    }
}

