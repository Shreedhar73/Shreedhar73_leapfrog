
//camera
let cameradiv = document.getElementsByClassName("cameradiv")[0];
cameradiv.style.width = "100%";
let camera = document.createElement("video");
camera.id = "cam";

let capturebtn = document.createElement("button");
capturebtn.id = "snap";
capturebtn.innerHtml = "SnapPhoto";

cameradiv.appendChild(camera);



let cambtn = document.getElementsByClassName("camera")[0];
let closecam = document.getElementsByClassName("close")[1];
let maximizecam = document.getElementsByClassName("maximize")[1];

cambtn.addEventListener("dblclick",function(){
    open(cameradiv);
    initCamera();
})

closecam.addEventListener("click",function(){
    closeFunc(cameradiv);
    closeCamera();
})

maximizecam.addEventListener("click",function(){maximizeFunc(cameradiv)})



//function to initialize camera of Device
function initCamera(){
var video = document.getElementById('cam');
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video: true})
        .then(function(stream){
            video.srcObject = stream;
            video.play();

        })
}}
//function to close Camera
function closeCamera(){
    var video = document.getElementById('cam');
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video: true})
            .then(function(){
                video.srcObject = null;
    
            })
    }}


