function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //convert the years value to future year.
    var year = new Date().getFullYear() + parseInt(years);

    interest = principal * rate / years;

    if(principal <= 0 || principal ==""){
        alert("please enter a positive number");
        document.getElementById("principal").focus();
    }else{
            document.getElementById("result").innerHTML = "If you deposit <span class ='yellow'> " + principal + "</span> <br>"
        + "at an interest rate of <span class ='yellow'>" + rate +
        "</span> <br>" + " You will receive an amount of <span class ='yellow'>" + interest + "</span> <br>" +
        "in the year <span class ='yellow'>" + year + "</span>";
    }

}

//function to show slider value
function slider() {
    document.getElementById("rate_value").innerText = document.getElementById("rate").value;
}
        