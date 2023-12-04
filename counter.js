/*
Counter App : Counters are a simple yet important feature that can be 
found in various web applications, including e-commerce or social platforms
counters can be used to track the number of likes, share , clicks or even the number of any item
A counter is variable that keeps track of a numerical value
It can be incremented, decremented or reset based on User's Actions.

*/

let counter = 0 ;

//Reference the HTML Elements that we will interact with
counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");

counterValue.innerHTML = 0;

//Increment the value of the counter
//Add an Event Listner
incrementBtn.addEventListener('click',()=>{
    counter ++;
    counterValue.innerHTML = counter;
});

function increment(){
    counter ++;
    counterValue.innerHTML = counter;
}

function decrement(){
    if(counter > 0){
        counter--;
        counterValue.innerHTML = counter;
    }
    else{
        alert("You can not decrement more !! ");
    } 
}


function reset(){
    counterValue.innerHTML = 0;
}
