function compute()
{
    // extracting principal value
    var principal = document.getElementById("principal").value;

    // throwing out an alert if the principal is entered incorrectly
    if((principal=="") || (principal<=0)){
        alert("Please, enter a positive number");
        principal.focus();
        return false;
    }

    // extracting rate and years
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // calculating interest
    var interest = principal * years * rate / 100;

    // calculating the future year
    var year = new Date().getFullYear() + parseInt(years);

    // displaying the result
    var result = document.getElementById("result")
    result.innerText="If you deposit "+principal+",\nat an interest rate of "
    +rate+"%\nYou will receive an amount of "+interest+",\nin the year "
    +year+"\n\n"

    return true

}

function updateRate()
{
    // updating the rate value
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validatePrincipal()
{

}



