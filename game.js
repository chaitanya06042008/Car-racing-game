class Game{

constructor(){

}

getState(){
   var gameStateRef= database.ref("gameState")
gameStateRef.on("value",function(data){
    gameState=data.val();

} )
}

update(state){
    database.ref('/').update({
        gameState:state
    })
}

start(){
    if(gameState===0){
        form=new Form();
        form.display();
        player=new Player();
        player.getCount();
    }
    car1=createSprite(100, 200)
    car2=createSprite(100, 200)
    car3=createSprite(100, 200)
    car4=createSprite(100, 200);
    cars=[car1,car2,car3,car4];
car1.addImage(car1Img)
car2.addImage(car2Img)
car3.addImage(car3Img)
car4.addImage(car4Img)

}

play(){
    form.hide();
    textSize(30);
    text("Game Start",600,100);
    Player.getPlayerInfo();
    player.getCarsAtEnd();


    if(allPlayers!==undefined){
background("brown")
image(trackImg,0, -displayHeight*4, displayWidth, displayHeight*5)
        var index=0;
      var x=175;
      var y;
        
        for(var plr in allPlayers){
           index=index+1;
           x=x+200;
           y=displayHeight-allPlayers[plr].distance;

           cars[index-1].x=x;
           cars[index-1].y=y;

           if(index===player.index){
               fill("green")
               ellipse(x, y, 60, 60)
               camera.position.x=displayWidth/2;
               camera.position.y=cars[index-1].y;

           }
           
        }
    }
    if(keyIsDown(UP_ARROW) && player.index!=null){
        player.distance+=10;
        player.update();
    }
    if (player.distance>4450){
        gameState=2
        player.rank+=1
Player.updateCarsAtEnd(player.ref);
        
    }

    drawSprites();
}
end(){
  //console.log("Game Has Ended")  
  //console.log(player.rank)
}
}
