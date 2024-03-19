let flyer = document.querySelector('h1');
let title = document.createElement("p");
title.textContent = ("Freelancer Forum");
flyer.append(title);

const averageWage = function () {
  let total = 0;
  let length = workers.length;
  for (let index = 0; index < workers.length; index++) {
    const element = workers[index];
    total += element.price;
  }
  return total / length;
}

const workers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];



let wage = document.querySelector('h3');
let newWage = document.createElement("p");
newWage.innerText = ("The average starting wage is $" + averageWage())
wage.append(newWage);



const addWorkerIntervalId = setInterval(addWorker, 3000);
render();

// if setInterval > 7 {
//   clearInterval(addWorkerIntervalId)
// }

function render() {
  const info = document.querySelector('#information');
  for (let index = 0; index < 2; index++) {
    const workerName = workers[index].name;
    let element = document.createElement("li");
    element.textContent = workerName;
    info.append(element)
  }


  const occupation = document.querySelector('#Occupation');
  for (let index = 0; index < 2; index++) {
    const workerJob = workers[index].occupation;
    let jobList = document.createElement("li");
    //fix the occupations so they look nicer.
    jobList.textContent = workerJob[0].toUpperCase() + workerJob.slice(1);
    occupation.append(jobList)
  }


  const price = document.querySelector('#Price');
  for (let index = 0; index < 2; index++) {
    const workerPrice = workers[index].price;
    let jobPrice = document.createElement("li");
    jobPrice.textContent = "$" + workerPrice;
    price.append(jobPrice)
  }

}


// let somebody = [];
// for (let index = 0; index < workers.length; index++) {
//   const element = workers[index];
//   somebody.push(element);
// }


setInterval();


function addWorker() {
  const newNew = workers[Math.floor(Math.random() * workers.length)];
  workers.push({ newNew })
  render();
}
//We call this function once to render the initial state





//;

// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.

