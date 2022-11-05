//generates a random number between the two given number
function randomNumber(start , end){
  return (start+Math.round((end-1)*Math.random()));
}
let correctNumber=randomNumber(1,20);
let score=20;
let highScore=0;

//whats done when check btn clicked
let chechBtn = document.querySelector('.check_btn');
let checkInput = document.querySelector('.check_input');
let scoreValue = document.querySelector('.score_value');
let highScoreValue = document.querySelector('.high_score_value');
let showBox = document.querySelector('.show_box');
let msg = document.querySelector('.massage');

chechBtn.addEventListener('click',function(){
  if(correctNumber==checkInput.value){
    showBox.textContent=correctNumber;
    msg.textContent='You gussed right';
    if(score>highScore){
      highScoreValue.textContent=score;
      highScore=score;
    }
  }
  else if(correctNumber<checkInput.value){
    msg.textContent='Lower';
    score--;
    scoreValue.textContent=score;
  }
  else{
    msg.textContent='Higher';
    score--;
    scoreValue.textContent=score;
  }
})

// things that happens when again is clicked
let againBtn= document.querySelector('.again_btn');
againBtn.addEventListener('click',function(){
  correctNumber=randomNumber(1,20);
  score=20;
  msg.textContent='Start guessing..';
  showBox.textContent='?';
  checkInput.value='';
  scoreValue.textContent=score;
})