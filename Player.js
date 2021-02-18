class Player {
  constructor(d){
    this.d = 0;
    this.name = null
    this.index = null

  }
//reads the playercount
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }
//updates the count in the game
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
// updates name
  update(){
    var playerIndex = "players/player"+this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.d
    });
  }
//takes the player info
  static getPlayerInfo(){
    var playerInfo = database.ref("players");
    playerInfo.on("value",(data)=>{
      allPlayers = data.val();
    });
  }
}
