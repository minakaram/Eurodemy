// form people number
const peopleNumberPlus = document.getElementById("increasePeopleNumber");
const pepleNubmerMinus = document.getElementById("decreasePeopleNumber");
const peopleNubmer = document.getElementById("peopleNumber");
peopleNumberPlus.addEventListener("click", () => {
  peopleNubmer.value++;
});
pepleNubmerMinus.addEventListener("click", () => {
  let currentValue = parseInt(document.getElementById("peopleNumber").value);
  if (!isNaN(currentValue) && currentValue > 0) {
    document.getElementById("peopleNumber").value--;
  }
});

function increaseBags() {
  document.getElementById("bagsNumber").value++;
}

function decreaseBags() {
  let currentValue = parseInt(document.getElementById("bagsNumber").value);
  if (!isNaN(currentValue) && currentValue > 0) {
    document.getElementById("bagsNumber").value--;
  }
}
