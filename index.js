let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let months = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12
};
let randomNumber = Math.floor(Math.random()*10+1);
let randomgif = [];
document.querySelector("button").addEventListener("click", function() {
  let givenDate = document.querySelector(".date").value;
  let givenMonth = document.querySelector(".month").value;
  let finalMonth = months[givenMonth];
  let givenYear = document.querySelector(".year").value;
  let userDate = new Date(givenYear,finalMonth,givenDate);
  let difference = Date.now() - userDate.getTime();
  let age = new Date(difference);
  let newAge = Math.abs(age.getUTCFullYear() - 1970);
  document.querySelector(".output").innerHTML = "You are "+newAge+" years old.😋💖";
});
