class Game {
  constructor(){}
  // reads state
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }
//updates game state in the game
  update(state){
    database.ref("/").update({
      gameState: state
    });
  }
// starts game
 async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      form.hide();
    }
  }

  playGame(){
    form.hide();
    textSize(20);
    text("Game Start",100,100);
    Player.getPlayerInfo();

    if(allPlayers!==undefined){
      for(var i in allPlayers){
        if(i==="player"+player.index){
          fill("red");
        }else{
          fill("black");
        }
      }
      var p = 100;
      p = p + 10;
      text(allPlayers[i].name+":"+allPlayers[i].distance,120,p);
      
    }
    if(keyDown(UP_ARROW)&&player.index!==null){
      player.distance +=30;
      player.update();
      
    }
  }
}
