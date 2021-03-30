const actualYear = 2019;
//this variable is for have just ten years.
let minYear = actualYear - 10;

for (let i = actualYear; actualYear > minYear; minYear++) {
   let option = document.createElement("option");
   option.value = minYear;
   option.textContent = minYear;
   document.getElementById("year").appendChild(option);
}

function getCars() {
   return [
      {
         marca: "BMW",
         modelo: "Serie 3",
         year: 2012,
         precio: 30000,
         puertas: 4,
         color: "Blanco",
         transmision: "automatico",
      },
      {
         marca: "Audi",
         modelo: "A4",
         year: 2018,
         precio: 40000,
         puertas: 4,
         color: "Negro",
         transmision: "automatico",
      },
      {
         marca: "Ford",
         modelo: "Mustang",
         year: 2015,
         precio: 20000,
         puertas: 2,
         color: "Blanco",
         transmision: "automatico",
      },
      {
         marca: "Audi",
         modelo: "A6",
         year: 2010,
         precio: 35000,
         puertas: 4,
         color: "Negro",
         transmision: "automatico",
      },
      {
         marca: "BMW",
         modelo: "Serie 5",
         year: 2016,
         precio: 70000,
         puertas: 4,
         color: "Rojo",
         transmision: "automatico",
      },
      {
         marca: "Mercedes Benz",
         modelo: "Clase C",
         year: 2015,
         precio: 25000,
         puertas: 4,
         color: "Blanco",
         transmision: "automatico",
      },
      {
         marca: "Chevrolet",
         modelo: "Camaro",
         year: 2018,
         precio: 60000,
         puertas: 2,
         color: "Rojo",
         transmision: "manual",
      },
      {
         marca: "Ford",
         modelo: "Mustang",
         year: 2019,
         precio: 80000,
         puertas: 2,
         color: "Rojo",
         transmision: "manual",
      },
      {
         marca: "Dodge",
         modelo: "Challenger",
         year: 2017,
         precio: 40000,
         puertas: 4,
         color: "Blanco",
         transmision: "automatico",
      },
      {
         marca: "Audi",
         modelo: "A3",
         year: 2017,
         precio: 55000,
         puertas: 2,
         color: "Negro",
         transmision: "manual",
      },
      {
         marca: "Dodge",
         modelo: "Challenger",
         year: 2012,
         precio: 25000,
         puertas: 2,
         color: "Rojo",
         transmision: "manual",
      },
      {
         marca: "Mercedes Benz",
         modelo: "Clase C",
         year: 2018,
         precio: 45000,
         puertas: 4,
         color: "Azul",
         transmision: "automatico",
      },
      {
         marca: "BMW",
         modelo: "Serie 5",
         year: 2019,
         precio: 90000,
         puertas: 4,
         color: "Blanco",
         transmision: "automatico",
      },
      {
         marca: "Ford",
         modelo: "Mustang",
         year: 2017,
         precio: 60000,
         puertas: 2,
         color: "Negro",
         transmision: "manual",
      },
      {
         marca: "Dodge",
         modelo: "Challenger",
         year: 2015,
         precio: 35000,
         puertas: 2,
         color: "Azul",
         transmision: "automatico",
      },
      {
         marca: "BMW",
         modelo: "Serie 3",
         year: 2018,
         precio: 50000,
         puertas: 4,
         color: "Blanco",
         transmision: "automatico",
      },
      {
         marca: "BMW",
         modelo: "Serie 5",
         year: 2017,
         precio: 80000,
         puertas: 4,
         color: "Negro",
         transmision: "automatico",
      },
      {
         marca: "Mercedes Benz",
         modelo: "Clase C",
         year: 2018,
         precio: 40000,
         puertas: 4,
         color: "Blanco",
         transmision: "automatico",
      },
      {
         marca: "Audi",
         modelo: "A4",
         year: 2016,
         precio: 30000,
         puertas: 4,
         color: "Azul",
         transmision: "automatico",
      },
   ];
}

//Datar for searchs
let dataSearch = {
   brand: '',
   year: '',
   min: '',
   max: '',
   doors: '',
   transmission: '', 
   color: ''
}

//Event Listener DOM Loaded
const cars = getCars();
document.addEventListener("DOMContentLoaded", () => {
   showCars(cars);
});


//Event Listener for the form [brand]
const brand = document.getElementById('brand')
brand.addEventListener('input', (e)=>{
   dataSearch.brand = e.target.value;
   //Send to call filter car function
   filterCar();
})

//Event Listener for the form [year]
const year = document.getElementById('year')
year.addEventListener('input', (e)=>{
   dataSearch.year = Number(e.target.value);
   //Send to call filter car function
   filterCar();
})

//Event Listener for the form [min price]
const minimalPrice = document.getElementById('minimal-price')
minimalPrice.addEventListener('input', (e)=>{
   dataSearch.min = Number(e.target.value);
   //Send to call filter car function
   filterCar();
})

//Event Listener for the form [max price]
const maximunPrice = document.getElementById('maximun-price')
maximunPrice.addEventListener('input', (e)=>{
   dataSearch.max = Number(e.target.value);
   //Send to call filter car function
   filterCar();
})

//Event Listener for the form [max price]
const doors = document.getElementById('doors')
doors.addEventListener('input', (e)=>{
   dataSearch.doors = Number(e.target.value);
   //Send to call filter car function
   filterCar();
})

//Event Listener for the form [transmission]
const transmision = document.getElementById('transmission')
transmision.addEventListener('input', (e)=>{
   dataSearch.transmission = e.target.value;
   //Send to call filter car function
   filterCar();
})

//Event Listener for the form [color]
const color = document.getElementById('color')
color.addEventListener('input', (e)=>{
   dataSearch.color = e.target.value;
   //Send to call filter car function
   filterCar();
})

function clearHtml(){
   document.querySelector('.not-found-message').style.display = 'none';

   const results = document.querySelector(".results");
   while(results.firstChild){
      results.removeChild(results.firstChild);
   }
}

function showCars(cars) {
   clearHtml();
   const results = document.querySelector(".results");
   let html = '';
   cars.forEach((car) => {
      html += `<div class="result">
         <img src="img/car.png" alt="car" />
         <div class="car-details">
            <p class="car-name">${car.modelo}</p>
            <p>Brand: ${car.marca}</>
            <p>Year: ${car.year}</p>
            <p>Doors: ${car.puertas}</p>
            <p>Transmission: ${car.transmision}</p>
            <p>Price: $${car.precio}</p>
            <p>Color: ${car.color}</p>
         </div>
      </div>`;
   });
   results.innerHTML = html;
}

function filterCar(){
   const result = getCars().filter(filterBrand).filter(filterYear).filter(filterMin).filter(filterMax).filter(filterDoors).filter(filterTrans).filter(filterColor);
   if(result.length){
      showCars(result);
   }else{
      showNotFound();
   }
}

function showNotFound(){
   clearHtml();
   let notFoundMessage = document.querySelector('.not-found-message');
   notFoundMessage.style.display = 'block'; 
}

function filterBrand(car){
   if(dataSearch.brand){
      return car.marca === dataSearch.brand;
   }else{
      return car;
   }
}

function filterYear(car){
   if(dataSearch.year){
      return car.year === dataSearch.year;
   }else{
      return car;
   }
}

function filterMin(car){
   if(dataSearch.min){
      return car.precio >= dataSearch.min;
   }else{
      return car;
   }
}

function filterMax(car){
   if(dataSearch.max){
      return car.precio <= dataSearch.max;
   }else{
      return car;
   }
}

function filterDoors(car){
   if(dataSearch.doors){
      return car.puertas === dataSearch.doors;
   }else{
      return car;
   }
}

function filterTrans(car){
   if(dataSearch.transmission){
      return car.transmision === dataSearch.transmission;
   }else{
      return car;
   }
}

function filterColor(car){
   if(dataSearch.color){
      return car.color === dataSearch.color;
   }else{
      return car;
   }
}