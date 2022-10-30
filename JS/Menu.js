function deletecookies(){
    document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "regdate=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log('Deleted');
}

let x = document.cookie;
x = x.split(";")

let username = x.filter((v) => {return v.startsWith(" username")? v : ""});
username = JSON.stringify(username).split("=").pop().split('"')[0];

let id = x.filter((v) => {return v.startsWith(" id")? v : ""});
id = JSON.stringify(id).split("=").pop().split('"')[0];

let regdate = x.filter((v) => {return v.startsWith(" regdate")? v : ""});
ragdate = JSON.stringify(id).split("=").pop().split('"')[0];

document.getElementById("announce").innerHTML = "Hey "+username+", Your ID is: "+id;

var ti = setInterval(function() {
    let date = new Date(regdate);
    date.setDate(date.getDate() + 7);
    // Get today's date and time
    var now = new Date();
    
    // Find the distance between now and the count down date
    var diff = new Date(date.getTime() - now.getTime());
    
    // Time calculations for days, hours, minutes and seconds
    var days = diff.getUTCDate()-1;
    let hours = diff.getUTCHours();
    let minutes = diff.getUTCMinutes();
    let seconds = diff.getUTCSeconds();
    
    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = days + "d : " + hours + "h : "
    + minutes + "m : " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (diff < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);