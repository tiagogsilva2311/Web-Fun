function vanish() { const element = document.getElementById("subbox");
element.remove()}

let int1 =document.getElementById('t1score')
let integer= 314 

let int2 = document.getElementById(`t2score`)
let integer2  = 159
let tv=13




function add() {integer += 1;
    int1.innerHTML = integer}
    
    function add2() {integer2 += 1;
        int2.innerHTML = integer2}

        

            

            var timeleft = 13;
var countdown = setInterval(function(){
if(timeleft <= 0){ alert("The match has ended");
    clearInterval(countdown);
    document.getElementById("time").innerHTML = "0";
} else {
    document.getElementById("time").innerHTML = timeleft;
}
timeleft -= 1;
}, 1300);