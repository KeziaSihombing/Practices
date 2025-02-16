let aboutButtons = [document.querySelectorAll(".navbutton button")[0], document.querySelectorAll(".mobile-menu button")[0], document.querySelectorAll(".footer-buttons button")[0]];
let serviceButtons = [document.querySelectorAll(".navbutton button")[1], document.querySelectorAll(".mobile-menu button")[1], document.querySelectorAll(".footer-buttons button")[1]];
let testButtons = [document.querySelectorAll(".navbutton button")[2], document.querySelectorAll(".mobile-menu button")[2], document.querySelectorAll(".footer-buttons button")[2]];


aboutButtons.forEach(button => {
    button.addEventListener("click", ()=>{displayAbout()})
})

serviceButtons.forEach(button => {
    button.addEventListener("click", ()=>{displayService()})
})

testButtons.forEach(button => {
    button.addEventListener("click", ()=>{displayTest()})
})

function displayAbout(){
    document.querySelectorAll(".about")[0].scrollIntoView({behavior: "smooth"});
}

function displayService(){
    document.querySelectorAll(".service1")[0].scrollIntoView({behavior: "smooth"});
}

function displayTest(){
    document.querySelectorAll(".testimony")[0].scrollIntoView({behavior: "smooth"});
}




