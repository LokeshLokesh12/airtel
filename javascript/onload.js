function onload(){
    document.getElementById("onload-fram").style.display = 'flex' ;
    document.body.style.overflow = 'hidden'
   
}
function close_button(){
    document.getElementById("onload-fram").style.display = 'none' ;
    document.body.style.overflow = 'auto'

}

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

// for we-offer
function geolocation() {


    navigator.geolocation.watchPosition(function (position) {
        console.log("i'm tracking you!");
        navigator.geolocation.getCurrentPosition(showPosition)
    },
        function (error) {
            if (error.code == error.PERMISSION_DENIED)
                console.log("you denied me :-(");
                alert(`You have not allowed to access your Geolocation

    We need this in order to help find jobs more relevant to you. You can provide access to this by going to your device/browser settings > Privacy & Security > Permissions.`)
        });
}

function showPosition(data) {

    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    console.log(lat);
    console.log(long);

    document.getElementById("we-but").style.transition = '3s';
    document.getElementById("we-but").style.display = 'none';
    document.getElementById("we-offer-par").style.display = 'flex';

    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    fetch(url, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let cityName = data.city.name;
            let temp = data.list[0].temp.day;
            if (temp > 0 && temp < 22) {
                document.getElementById("we-heading").innerText = `currently temprature in your location is ${temp}
                        it may rainy ;) 
                        so buy our hotest unlimited anuual plan and relax `
                        console.log("temp > 0 && temp < 22");

            }
            if (temp >22 && temp<31) {
                document.getElementById("we-heading").innerText = `currently temprature in your location is ${temp} 
                        it may little sunnyday ;)
                        buy our unlimited anuual plan and relax `
                        console.log("temp > 22 && temp < 31");
            }
            if (temp > 31) {
                document.getElementById("we-heading").innerText = `currently temprature in your location is ${temp} 
                        it may sunny ;)
                        so buy our coolest unlimited anuual plan and relax `
                        console.log("temp > 31");
            }
         
        })
        .catch((err) => {
            console.log(err)
        })

}
