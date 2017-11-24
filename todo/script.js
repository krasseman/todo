$(document).ready(function(){
    

     
    
        var stuffToDo = [
            "Klipp gräset" , 
            "Betala räkningar",
            "Köp mjölk", 
            "Spika upp tavlor"
            ];


        var json_str = JSON.stringify(stuffToDo);       
        localStorage.doList = json_str; 
    
        var loopArray = JSON.parse(localStorage.doList);
       
    //welcome message
      
     

       
    
        $(".loginButton").click(function(){
            if ($(".userN").val() == sessionStorage.userName && $(".passW").val() == sessionStorage.passWord) {
                sessionStorage.setItem("userId", $(".userN").val());

                loggedInPage();
                
                
            }
            else{
                
                loggedOutPage();
    
                
            }
            
    
        });
    
        $(".logoutButton").click(function(){
        
            sessionStorage.clear();
            location.reload();
        });
        

        sessionStorage.userName = "jesper";
        sessionStorage.passWord = "password";
   

   
        function loggedInPage () {
            
                    $(".welcome").hide();
                    $(".incorrect").hide();
                    $(".userN").hide();
                    $(".passW").hide();
                    $(".loginButton").hide();
                    $(".logoutButton").show();
                    $(".loggedIn").fadeIn(1000);
                    $(".nameMessage").text(sessionStorage.userName + "'s ToDo:");
                    $(".toDoList").text(loopArray);
              
                }
    
   
        function loggedOutPage () {

            $(".loggedIn").hide();
            $(".welcome").hide();
            $(".logoutButton").hide(); 
            $(".incorrect").fadeIn(1000);

        }
   
     


        if (sessionStorage.getItem("userId"))  {
            loggedInPage();                      
        }
     
     //Om inte, visa första sidan
        else{
            $(".welcome").hide();
            $(".loggedIn").hide();
            $(".incorrect").hide();
            $(".logoutButton").hide();
            $(".welcome").fadeIn(1000);
        }

    });
    


