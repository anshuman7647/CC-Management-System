 var username=window.sessionStorage.getItem("firstname");
     if(username==null){
      window.location="index.html";
      alert("Please Login First...!!");
     }

function getlogout_success(){

      window.sessionStorage.removeItem("lastname");
      window.sessionStorage.removeItem("gname");
      window.sessionStorage.removeItem("loggedIn");
      window.sessionStorage.removeItem("firstname");
      window.sessionStorage.removeItem("username");
      // window.sessionStorage.removeItem("Complaint_num");
      location.replace("index.html");
      
    }

function a(){
   
	var username=window.sessionStorage.getItem("firstname");
	document.getElementById("usern").innerHTML = username;
	document.getElementById("usernn").innerHTML = username;
}
 function loadxyz(){
     var username=window.sessionStorage.getItem("firstname");
     document.getElementById("usern").innerHTML = username;
      document.getElementById("usernn").innerHTML = username;
      var fname = window.sessionStorage.getItem("firstname");
      var lname = window.sessionStorage.getItem("lastname");
      var email1 = window.sessionStorage.getItem("username");
      var gname = window.sessionStorage.getItem('gname');
      document.getElementById("f_name").value = fname + " " + lname;
      document.getElementById("c_email").value = email1 ;
      document.getElementById("c_gno").value = gname ;
}
 function ac()
   {
        var fname = window.sessionStorage.getItem("firstname");
        var lname = window.sessionStorage.getItem("lastname");           
        document.getElementById("empname").value = fname + " " + lname;           
   }
