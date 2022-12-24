const sausage = document.querySelector('.sausage');
const kolPlus = document.querySelector(".kol-plus");
const kolMinus = document.querySelector(".kol-minus");


const cheese = document.querySelector(".cheese");
const chesPlus = document.querySelector(".sir-plus");
const chesMinus = document.querySelector(".sir-minus");

const tomato = document.querySelector(".tomatoes");
const tomPlus = document.querySelector(".tom-plus");
const tomMinus = document.querySelector(".tom-minus");

const grib = document.querySelector(".gribi");
const gribPlus = document.querySelector(".grib-plus");
const gribMinus = document.querySelector(".grib-minus");

const cher = document.querySelector(".chernika");
const cherPlus = document.querySelector(".cher-plus");
const cherMinus = document.querySelector(".cher-minus");

const submit = document.querySelector(".submit");

let summa = 13000;
let h2 = document.querySelector("h2");
h2.textContent = `Narxi: ${summa} sum`;



kolPlus.addEventListener('click', () => {
    sausage.style.display = "block";
    kolPlus.style.display = "none";
    kolMinus.style.display = "block";
    summa = summa + 33750;
    h2.textContent = `Narxi: ${summa} sum`;
})
kolMinus.addEventListener("click", () => {
  sausage.style.display = "none";
  kolPlus.style.display = "block";
  kolMinus.style.display = "none";
  summa = summa - 33750;
  h2.textContent = `Narxi: ${summa} sum`
});

chesPlus.addEventListener("click", () => {
  cheese.style.display = "block";
  chesPlus.style.display = "none";
  chesMinus.style.display = "block";
  summa = summa + 11200;
  h2.textContent = `Narxi: ${summa} sum`;
});

chesMinus.addEventListener("click", () => {
  cheese.style.display = "none";
  chesPlus.style.display = "block";
  chesMinus.style.display = "none";
  summa = summa - 11200;
  h2.textContent = `Narxi: ${summa} sum`;
});


tomPlus.addEventListener("click", () => {
  tomato.style.display = "block";
  tomPlus.style.display = "none";
  tomMinus.style.display = "block";
  summa = summa + 11200;
  h2.textContent = `Narxi: ${summa} sum`;
});

tomMinus.addEventListener("click", () => {
  tomato.style.display = "none";
  tomPlus.style.display = "block";
  tomMinus.style.display = "none";
  summa = summa - 11200;
  h2.textContent = `Narxi: ${summa} sum`;
});


gribPlus.addEventListener("click", () => {
  grib.style.display = "block";
  gribPlus.style.display = "none";
  gribMinus.style.display = "block";
  summa = summa + 11200;
  h2.textContent = `Narxi: ${summa} sum`;
});

gribMinus.addEventListener("click", () => {
  grib.style.display = "none";
  gribPlus.style.display = "block";
  gribMinus.style.display = "none";
  summa = summa - 11200;
  h2.textContent = `Narxi: ${summa} sum`;
});

cherPlus.addEventListener("click", () => {
  cher.style.display = "block";
  cherPlus.style.display = "none";
  cherMinus.style.display = "block";
  summa = summa + 11200;
  h2.textContent = `Narxi: ${summa} sum`;
});

cherMinus.addEventListener("click", () => {
  cher.style.display = "none";
  cherPlus.style.display = "block";
  cherMinus.style.display = "none";
  summa = summa - 11200;
  h2.textContent = `Narxi: ${summa} sum`;
});

submit.addEventListener("click", () => {
  alert(`Narxi: ${summa} sum! Haridingiz uchun rahmat!`);

})