// function onload(){
//     document.getElementById("onload-fram").style.display = 'flex' ;
//     document.body.style.overflow = 'hidden'
   
// }
// function close_button(){
//     document.getElementById("onload-fram").style.display = 'none' ;
//     document.body.style.overflow = 'auto'

// }

// for change darkmode -- lightmode


function mode(){
    let img = document.getElementById("image-mode");
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        document.getElementById("mode-p").innerText = 'LIGHT'
        img.src="./images/sun.png";
    }
    else{
        document.getElementById("mode-p").innerText = 'DARK' 
        img.src="./images/moon.png"
    }
}