let int1 =document.getElementById('counter1')
let integer= 0 

let int2 = document.getElementById(`counter2`)
let integer2  = 0

let int3 = document.getElementById('counter3')
integer3 = 0

var tiempo=getElementById('time')

function add() {integer += 1;
int1.innerHTML = integer}

function add2() {integer2 += 1;
    int2.innerHTML = integer2}

    function add3() {integer3 += 1;
        int3.innerHTML = integer3}


function timeout(){if(tiempo.innerHTML <= 13){tiempo.innerHTML-=1}}
