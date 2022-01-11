const size14 = 655; // screensize for 14inch devices

let body = document.querySelector("body");

let startbtn = document.getElementsByClassName("windowbtn")[0];
let startmenu = document.createElement("div");
let iconsDiv = document.createElement("div");
let searchDiv = document.createElement("div");
let searchField = document.createElement("input");
startmenu.className = "startmenu";
startmenu.style.top = "125%";

iconsDiv.className = "icons-div";
//sets style property for div accordingly to screen dimensions of device
if (window.innerHeight >= size14) {
  iconsDiv.style.left = "6%";
} else {
  iconsDiv.style.left = "4%";
}
searchDiv.className = "search-div";
searchField.className = "search-field";
let powerDiv = document.createElement("div");
searchField.placeholder = "Type here to search";
powerDiv.className = "power-div";

let powerOff = document.createElement("div");
powerOff.className = "powerOff";
powerOff.style.height = "30px";
powerOff.style.width = "30px";


document.body.appendChild(startmenu);
powerDiv.appendChild(powerOff);
searchDiv.appendChild(searchField);
startmenu.append(searchDiv, iconsDiv, powerDiv);

startbtn.addEventListener("click", function(){
  startmenuTransition();
});



//shutdown
powerOff.addEventListener("click", function () {
  shutdown();
});

let utilsbtn = document.getElementsByClassName("utils")[0];
let utilsdiv = document.createElement("div");
utilsdiv.className = "utilsDiv";
utilsdiv.style.left = "25%";

//sets style property for div accordingly to screen dimensions of device
if (window.innerHeight >= size14) {
  utilsdiv.style.bottom = "25vh";
} else {
  utilsdiv.style.bottom = "41vh";
}

let bSlider = document.createElement("div");
bSlider.className = "bSlider";

let brightnessIcon = document.createElement("img");
brightnessIcon.src = "./img/brightness.png";
let brange = document.createElement("input");
brange.type = "range";
brange.id = "brightness-range";
brange.min = "30";
brange.max = "100";
brange.value = "100";
brange.onchange = function () {
  brightness(brange);
};

bSlider.appendChild(brange);
bSlider.appendChild(brightnessIcon);
utilsdiv.appendChild(bSlider);

document.body.appendChild(utilsdiv);

utilsbtn.addEventListener("click", () => {
  if (utilsdiv.style.left == "25%") {
    utilsdiv.style.left = "-1%";
  } else {
    utilsdiv.style.left = "25%";
  }
});

let folder = document.getElementsByClassName("folder")[0];

folder.style.width = "100%";
let mypc = document.getElementsByClassName("mypc")[0];


let close = document.getElementsByClassName("close")[0];
let maximize = document.getElementsByClassName("maximize")[0];

mypc.addEventListener("dblclick", function () {
  open(folder);
  console.log(folderStartmenu);
});
// folderStartmenu.addEventListener("click",function(){
//   open(folder);
// });

close.addEventListener("click", function () {
  closeFunc(folder);
});

maximize.addEventListener("click", function () {
  maximizeFunc(folder);
});
