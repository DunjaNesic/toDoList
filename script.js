let circle = document.querySelector(".circle");
let task = document.querySelector("#task");
let list = document.querySelector("ul");

circle.addEventListener("click", () => {
  const li = document.createElement("li");
  const newItem = document.createElement("div");

  if (task.value === "") {
    alert("Task can not be empty!");
  } else {
    newItem.innerHTML = `
<p> ${task.value} </p>
<section class="btns">
<i class="fa-solid fa-pen-to-square edit"></i> 
<i class="fa-solid fa-xmark"></i>
</section>
  `;
    newItem.classList.add("newItem");
    li.append(newItem);
    list.prepend(li);
  }
  task.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.parentElement.tagName === "LI") {
    e.target.firstElementChild.classList.toggle("checked");
  }
});

list.addEventListener("click", (e) => {
  if (e.target.parentElement.tagName === "UL") {
    e.target.firstElementChild.classList.toggle("checked");
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});

list.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("fa-pen-to-square") &&
    e.target.classList.contains("edit")
  ) {
    const par = document.querySelector(".newItem");
    const editPar = par.children[0].innerHTML;
    const input = document.createElement("input");
    input.type = "text";
    input.value = editPar;
    list.firstElementChild.insertBefore(input, par);
    console.log(par);
    console.log(list.children[0].children[1].children[0]);
    list.children[0].children[1].children[0].remove();
    e.target.classList.remove("edit");
    e.target.classList.add("save");
  } else if (
    e.target.classList.contains("fa-pen-to-square") &&
    e.target.classList.contains("save")
  ) {
    const dunja = document.querySelector(".newItem");
    const par = list.children[0].children[0].value;
    list.children[0].children[0].remove;
    const editPar = document.createElement('p');
    editPar.textContent=par;
    dunja.classList.add('dunja');
    list.firstElementChild.insertBefore(editPar, dunja);
    list.children[0].children[0].remove();
    e.target.classList.remove("save");
    e.target.classList.add("edit");
  }
});

const date = new Date();

const day = date.getDate();
const number = document.querySelector('.number');
number.firstChild.innerHTML=day;

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const mesec = month[date.getMonth()];

const mth = document.querySelector('.month');
console.log(mth);
mth.firstElementChild.innerHTML = mesec;
//NE MOZE mth.firstChild.innerHTML = mesec; jer kupi razmak iz HTNL-a

let dayOfWeekContainer = document.querySelector(".dayOfWeek");

switch (new Date().getDay()) {
  case 0:
    dayOfWeekContainer.scrollLeft = 0;
    dayOfWeekContainer.classList.add("biggerMargin");
    break;
  case 1:
    dayOfWeekContainer.scrollLeft = 115;
    break;
  case 2:
    dayOfWeekContainer.scrollLeft = 255;
    break;
  case 3:
    dayOfWeekContainer.scrollLeft = 395;
    break;
  case 4:
    dayOfWeekContainer.scrollLeft = 520;
    break;
  case 5:
    dayOfWeekContainer.scrollLeft = 670;
    break;
  case 6:
  dayOfWeekContainer.scrollLeft = 800;
    break;
  default:
    day = "Dunja";
    }