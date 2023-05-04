////////////////////////////////////////
// v86+ is licensed under GNU GPL 3.0 //
//     v86+ 1.0 main code file        //
////////////////////////////////////////

function waitForUrlMatch(matchString, callback) {
  const interval = setInterval(() => {
    if (location.href.includes(matchString)) {
      clearInterval(interval);
      callback();
    }
  }, 1000); // Check every 1 second
}
function main(){
  console.log("URL matched!");

//   document.body.style.overflow = "hidden"
  document.body.style.marginBottom = "50px"
  document.getElementById("terminal").style.display = "none"

  var loadedString = document.createElement("a")
  loadedString.innerHTML = "v86+ Loaded"
  loadedString.style.float = "right"
  document.body.appendChild(loadedString)


  const runtimeOptionsDiv = document.getElementById("runtime_options");
  const childElements = runtimeOptionsDiv.querySelectorAll("*");
  
  childElements.forEach((element) => {
    if (element.value === "Go fullscreen") {
      element.style.display = "none";
    }
  });
  var newInput = document.createElement("input");
  newInput.type = "button";

  // Set the value and onclick attributes of the button
  newInput.value = "Fullscreen";
  newInput.onclick = () => {
    document.getElementById("vga").requestFullscreen()
    navigator.keyboard.lock()
  };

  var vga = document.getElementById("vga")
  vga.removeAttribute("style");
  vga.style = "image-rendering: pixelated"
  // Append the new button to the runtimeOptionsDiv
  runtimeOptionsDiv.appendChild(newInput);
  var newInput = document.createElement("input");
  newInput.type = "button";
  newInput.id = "aa"

  // Set the value and onclick attributes of the button
  newInput.value = "Enable AA";
  newInput.onclick = () => {
    var aa = document.getElementById("aa")
    if (aa.value === "Enable AA"){
      document.getElementById("vga").style = "image-rendering: none"
      aa.value = "Disable AA"
    } else if (aa.value === "Disable AA"){
      document.getElementById("vga").style = "image-rendering: pixelated"
      aa.value = "Enable AA"      
    }
    
  };

  // Append the new button to the runtimeOptionsDiv
  runtimeOptionsDiv.appendChild(newInput);
}
if (location.href.includes("https://copy.sh/v86/?profile=")){
  main()
} else{
  waitForUrlMatch("https://copy.sh/v86/?profile=", () => {
    main()
  });
}
