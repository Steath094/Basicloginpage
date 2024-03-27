function showpassword() {
    const eye = document.querySelector(".check");
    const key = document.getElementById("key");;
    console.log("Its running");
    console.log(eye);
    // logic for eye button
    eye.addEventListener("click", (e) => {
        // console.log(eye);
        if (document.querySelector(".eyeclosed").style.display == "none") {
            document.querySelector(".eyeclosed").style.display = "block";
            document.querySelector(".eyeopen").style.display = "none";
            key.type = "text";
        }
        else if (document.querySelector(".eyeclosed").style.display == "block") {
            document.querySelector(".eyeopen").style.display = "block";
            document.querySelector(".eyeclosed").style.display = "none";
            key.type = "password";
        }
    })
    //logic for input fields
    const email = document.getElementById("email");
    const loginButton = document.querySelector(".signinbutton");
    var useremail = '';
    var userpassword= '';
    console.log(loginButton);
    loginButton.addEventListener("click",(e)=>{
        
        if(email.value !='' && key.value != ''){
            console.log(loginButton);
            if(!email.value.endsWith("@gmail.com") || key.value.length<8) {
                if(!email.value.endsWith("@gmail.com")){
                    
                    document.querySelectorAll(".input")[0].style.border = "2px solid red";
                }
                else{
                    document.querySelectorAll(".input")[0].style.border = "unset";
                }
                if (key.value.length<8) {
                    document.querySelectorAll(".input")[1].style.border = "2px solid red";
                }
                else{
                    document.querySelectorAll(".input")[1].style.border = "unset";
                }
            }
            else if (email.value.endsWith("@gmail.com") && key.value.length>=8) {
                console.log("hi");
                useremail = email.value;
                userpassword= key.value;
                email.value = '';
                key.value = '';
                console.log(useremail);
                console.log(userpassword);
            }


            // if (key.value.length<8) {
            //     document.querySelectorAll(".input")[1].style.border = "2px solid red";
            // }
            else{

                document.querySelectorAll(".input")[0].style.border = "unset"
                document.querySelectorAll(".input")[1].style.border = "unset"
            }
        }
        else{
            document.querySelectorAll(".input")[0].style.border = "2px solid red"
            document.querySelectorAll(".input")[1].style.border = "2px solid red"
            
        }
    })
    if (!email.value.endsWith("@gmail.com")) {
        // document.querySelector(".input").style.border = "2px solid red"
    }

    

}

showpassword();