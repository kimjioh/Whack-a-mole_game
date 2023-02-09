const cursor = document.querySelector('.cursor');
const holes = [...document.querySelectorAll('.hole')];
const scoreEl = document.querySelector('.score span');
let score = 0;
let count=30;

const sound =  new Audio("audio/assets_smash.mp3")

// console.log(holes)
function run(){
    if(count >= 1){
        const i = Math.floor(Math.random() * holes.length);
        //console.log(i)
        const hole = holes[i];
        let timer = null;

        const img = document.createElement('img');
        img.classList.add('mole');
        img.src = 'img/mole.png';

        img.addEventListener('click', () => {
            score += 10;
            sound.play();
            scoreEl.textContent = score;
            img.src = 'img/mole-whacked.png';
            clearTimeout(timer);
            setTimeout(() => {
                hole.removeChild(img);
                run();
            }, 500);
        });

        hole.appendChild(img);

        timer = setTimeout(() => {
            hole.removeChild(img);
            run();
        }, 1500);
    };
}
    
run();

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY +'px';
    cursor.style.left = e.pageX +'px';
});

window.addEventListener('mousedown', () => {
    cursor.classList.add('action');
});

window.addEventListener('mouseup', () => {
    cursor.classList.remove('action');
});


//타이머



let counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }
  document.getElementById("timer").innerHTML=count /* + " secs" */; // watch for spelling
  //Do code for showing the number of seconds here
}