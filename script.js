var a = new Audio("./assets/music/Good Wishes For Your BirthdaySusann SchonfeldMiss Line Dance.mp3");

window.addEventListener('click',() => {
a.play();
});

function start(){
    document.getElementById("all").innerHTML=" ";
    document.getElementById("all").style.display="none";
    document.getElementById("all").style.background="trasparent";
}

setInterval(start, 5000);


