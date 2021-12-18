function validation() {
    let username = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    var enteredEmail = document.getElementById("username").value;

    var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(enteredEmail.match(mail_format))
    {
    	alert(“Yeah! a valid email!”);
    }
    else
    {
    	alert(“Sorry! an invalid email!”);
    }

    if (username != "" && pass != "") {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }
}