let score = JSON.parse(localStorage.getItem('score')) || {

        win: 0,
        lose: 0,
        tie: 0
       
      };  
// const score={
//         win:0,
//         lose:0,
//         tie:0
// };
      console.log(score);    
        const elmRock=document.getElementById("rock");
        console.log(elmRock);
        const elmPaper=document.getElementById("paper");
        console.log(elmPaper);
        const elmScissors=document.getElementById("scissors");
        console.log(elmScissors);
        const elmReset=document.getElementById('reset');
        
        // .................rock.............
        elmRock.addEventListener("click",()=>{
                playGame('rock');
        });
        // ...................paper...........
        elmPaper.addEventListener("click",()=>{
               playGame('paper');
        });
        // .......................scissor.................
        elmScissors.addEventListener("click",()=>{
                playGame('scissors');
        });
        //.................... reset...............
        elmReset.addEventListener("click",()=>{
                score.win = 0;
                score.lose = 0;
                score.tie = 0;
               localStorage.removeItem('score');
                
                updateScoreElement();

        });
        // ..........................functions................

        function numGen(){
                let randomNum=Math.random()*10;
                let randomNumNatural=Math.round(randomNum);
                let code;
        if(randomNumNatural>=0 && randomNumNatural<3)
        {
                code='rock';
        }
        else if(randomNumNatural>=3 && randomNumNatural<6){
                code='paper';
        }
        else  {
                code='scissors';
        }

        return code;
        }
       
        // Rock
        
                
                function playGame(playerMove)

                {
                        
        
                        const code=numGen();
                       
                        let result='';
                        
                      
                                if(playerMove==='rock')
                                {

                                        if(code==='rock'){
                                        result='Its a tie';
                                        
                                        
                                        }
                                        else if(code==='paper')
                                        {
                                         result='You lose';
                                         
                                        
                                        }
                                        else {result='You win';
                                        }
                                        
                                }
                
                                if(playerMove==='paper')
                                {
                                        if(code==='paper')
                                        {
                                        result='Its a tie';
                                        }
                                        else if(code==='scissors')
                                        {
                                        result='You lose';
                                        
                                        }
                                        else {result='You win';
                                              }
                                }
                // scissor
                                if(playerMove==='scissors')
                                {
                                        if(code==='scissors')
                                        {
                                        result='Its a tie';
                                        
                                        }
                                        else if(code==='paper')
                                        {
                                        result='You win';
                                        
                                         }
                                        else {
                                                result='You lose';
                                        }
                                }
                        
                                if (result =='You win') {
                                        score.win += 1;
                                      } else if (result == 'You lose') {
                                        score.lose += 1;
                                      } else if (result == 'Its a tie') {
                                        score.tie += 1;
                                      }
                 console.log(playerMove);               
               console.log(code);  
               console.log(result);     
   localStorage.setItem('score', JSON.stringify(score));                                          
                updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;
      
        document.querySelector('.js-moves').innerHTML = `You
      <img src="${playerMove}-emoji.png" class="move-icon">
      <img src="${code}-emoji.png" class="move-icon">
      Computer`;
                                }
                                
      
      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
      }