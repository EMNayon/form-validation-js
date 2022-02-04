function validation(){
    var text;
    if(document.myForm.name.value == ""){
        text = "Name can not be empty";
        document.getElementById("demo").innerHTML = text;
        //  The focus() method is used to give focus to an element (if it can be focused).
        document.myForm.name.focus();
        return false;
    }
    if(document.myForm.email.value == ""){
        text = "E-mail can not be empty";
        document.getElementById("demo").innerHTML = text;
        document.myForm.email.focus();
        return false;
    }

    var emailID = document.myForm.email.value;
    // The indexOf() method returns the position of the first occurrence of a value in a string.
    // The indexOf() method returns -1 if the value is not found.
    // The indexOf() method is case sensitive.
    atposn = emailID.indexOf("@");
    //  The lastIndexOf() method searches the string from the end to the beginning.
    //  The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
    dotposn = emailID.lastIndexOf("."); // 

    if(atposn < 1 || (dotposn - atposn < 2)){
        text == "Please enter valid email ID";
        document.getElementById("demo").innerHTML = text;
        document.myForm.email.focus();
        return false;
    }

    if((document.myForm.phone.value == " ") || isNaN(document.myForm.phone.value) || (document.myForm.phone.value.lenght != 11)){
        text = "Please enter a valid 11-digit phone number";
        document.getElementById("demo").innerHTML = text;
        document.myForm.phone.focus();
        return false;
    }
    if(document.myForm.subject.value == "0"){
        text = "Please provide your area of expertise";
        document.getElementById("demo").innerHTML = text;
        return false;
    }
    return true;
}
