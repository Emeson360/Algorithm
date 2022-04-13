// world object
function worldCons(noOfPerson, setTime) {
  this.noOfPerson = noOfPerson;
  this.setTime = setTime;
}

let world = new worldCons(20,20);
let time = world.setTime;


// bus object
function busCons(maxPass, speed, start) {
  this.maxPass = maxPass;
  this.speed = speed;
  this.start = start;
}

let busObj = new busCons(4, 0.025,[1,2,3,4]);
let velocity = busObj.speed;

// path object
function pathCons(radius, noOfBusStop) {
  this.radius = radius;
  this.noOfBusStop = noOfBusStop;
}

let pathObj = new pathCons('', 4);
let busStopNo = pathObj.noOfBusStop;

// busStop object
function busStopCons(noOfUnbooked) {
  this.noOfUnbooked = noOfUnbooked;
}

let busStopObj = new busStopCons(16);


// person object
function person(destination, position, booked) {
  this.destination = destination;
  this.position = position;
  this.booked = booked;
}

var personArray = [];

for (let i = 1; i <= 20; i++) {
  // personArray.push(new person([1,2,3], [1,2,3,4], "false"));
  personArray[i] = new person([1,2,3], [1,2,3,4], "unbooked");

}

console.log(personArray);



// Bus functions (methods)



// move function
let busDiv = document.getElementById('bus');
let acce = 0;

// setInterval(() => {
//   acce += velocity;
//   bus.style.top = `${Math.sin(acce) * 200}px`;
//   bus.style.left = `${Math.cos(acce) * 200}px`;
// }, time)


function moveBus() {
  acce += velocity;
  let x = `${Math.cos(acce) * 145}px`;
  let y = `${Math.sin(acce) * 145}px`;
  // console.log(x);
  // console.log(y);
  busDiv.style.left = x;
  busDiv.style.top = y;

}

setInterval(moveBus,time);















