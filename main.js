//generates a random number between the two given number
function randomNumber(start , end){
  let range=end-start;
  return (start+Math.round(range*Math.random()));
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
let gameOver=false;

chechBtn.addEventListener('click',function(){
  if(gameOver){
    return;
  }
  let val=Number(checkInput.value);
  if(!val){
    msg.textContent='No number detected';
  }
  else if(correctNumber==val){
    showBox.textContent=correctNumber;
    msg.textContent='You gussed right';
    if(score>highScore){
      highScoreValue.textContent=score;
      highScore=score;
    }
    gameOver=true;
  }
  else if(correctNumber<val){
    ifWrongNumber('Lower')
  }
  else{
    ifWrongNumber('Higher')
  }
})

function ifWrongNumber(msgContent){
  score--;
  scoreValue.textContent=score;
  if(score==0){
    gameOver=true;
    msg.textContent='You lost';
  }
  else{
    msg.textContent=msgContent;
  }
}
// things that happens when again is clicked
let againBtn= document.querySelector('.again_btn');

againBtn.addEventListener('click',function(){
  correctNumber=randomNumber(1,20);
  score=20;
  msg.textContent='Start guessing..';
  showBox.textContent='?';
  checkInput.value='';
  scoreValue.textContent=score;
  gameOver=false;
})