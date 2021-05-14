class Player{
    constructor(){

        this.index=null;
        this.name=null;
        this.distance=0;
        this.rank=0
    }
   getCarsAtEnd(){
    var getCarsAtEndRef = database.ref('carsAtEnd')
    getCarsAtEndRef.on("value", function(data){
       this.rank=data.val(); 
    })
   }
  static updateCarsAtEnd(rank){
    
    database.ref('/').update({
        carsAtEnd:rank

            })
    
  }
getCount(){
    var playerCountRef = database.ref('playerCount')
    playerCountRef.on("value", function(data){
       playerCount=data.val(); 
    })


}
updateCount(count){
    database.ref('/').update({
playerCount:count
    })
}
update(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).set({
        name:this.name,
        distance: this.distance
    })
}

static getPlayerInfo(){
    var playerInfoRef= database.ref('players');
    playerInfoRef.on("value",(data)=>{
        allPlayers=data.val();
    })
}


}