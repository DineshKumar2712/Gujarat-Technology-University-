<<<<<<< HEAD
function saved(){
    let Enrollement=document.getElementById('input_text-username-or_Enrollement').value;
    let password=document.getElementById('user_password').value;
    /*storing data*/

    let user_enrollement=localStorage.setItem("Enrollment No",Enrollement);
    let u_password=localStorage.setItem("Password",password);
    confirm("confirm login")
}


function openpopup(){
   $("#popup").css("visibility", "visible");
}

function removepopup(){
    $("#popup").css("visibility", "hidden");
}

function forgotpage(){
    $("#forgotten").css("visibility", "visible");
}

=======
function saved(){
    let Enrollement=document.getElementById('input_text-username-or_Enrollement').value;
    let password=document.getElementById('user_password').value;
    /*storing data*/

    let user_enrollement=localStorage.setItem("Enrollment No",Enrollement);
    let u_password=localStorage.setItem("Password",password);
    confirm("confirm login")
}


function openpopup(){
   $("#popup").css("visibility", "visible");
}

function removepopup(){
    $("#popup").css("visibility", "hidden");
}

function forgotpage(){
    $("#forgotten").css("visibility", "visible");
}

>>>>>>> 9ed454085a29b49b634c34e42e03018bddfeb731
