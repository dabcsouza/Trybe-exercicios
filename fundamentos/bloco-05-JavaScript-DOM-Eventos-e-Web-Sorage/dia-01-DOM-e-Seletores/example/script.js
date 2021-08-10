document.querySelector("h1").style.backgroundColor = "#036b52";
document.querySelector("h1").style.color= "#FFF";
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "#DFFCE0";
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "#F1FCD4";

for (let i = 0; i < 2; i += 1 ){

document.querySelectorAll("div > h3:nth-child(-n + 2)")[i].style.backgroundColor = "#6392FF"
document.querySelectorAll("div > h3:nth-child(-n + 2)")[i].style.color = "#000"

}

for (let i = 2; i < 4; i += 1 ){

    document.querySelectorAll("div > h3:nth-child(n - 2)")[i].style.backgroundColor = "#53E0A5"
    document.querySelectorAll("div > h3:nth-child(n - 2)")[i].style.color = "#555"
    
    }