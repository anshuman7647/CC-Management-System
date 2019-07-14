function validate_p()
            {
    
                 var paswrd = document.getElementById("passw").value;
                 var cpaswrd = document.getElementById("cpassw").value;
                 

                if(paswrd.length<8)
                {
                   document.getElementById("passw").style.border = "2px solid #FB6B6B" ;
                   document.getElementById("passw").style.outline = "none";
                       
                  // document.styleSheets[0].insertRule('#passw:hover { background-color: red;}', 0);
                }

           
                else{
                   document.getElementById("passw").style.border = "2px solid #ccc" ;
                   document.getElementById("passw").style.outline = "";
              
                }
               
            }

function validate_cp(){
                 var paswrd = document.getElementById("passw").value;
                 var cpaswrd = document.getElementById("cpassw").value;

                    if(paswrd!=cpaswrd ){
                 document.getElementById("cpassw").style.border = "2px solid #FB6B6B" ;
                       document.getElementById("cpassw").style.outline = "none";
                       }

                   else{
                   document.getElementById("cpassw").style.border = "2px solid #ccc" ;
                         document.getElementById("cpassw").style.outline = "";
                    
                }
}