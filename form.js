class Form{
    constructor(){
        this.title=createElement('h1');
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.reset = createButton('Reset')
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
      }

   display(){
     
       this.title.html("Car Racing Game");
       this.title.position(displayWidth/2-50,0);

       
       this.input.position(displayWidth/2-40,displayHeight/2-80);

       
       this.button.position(displayWidth/2+10,displayHeight/2);
this.reset.position(displayWidth+400, 100)
       
       
       this.button.mousePressed( ()=>{
     this.input.hide();
           //hide input
           this.button.hide();
            player.name=this.input.value();
           //the name written by the player in the input box is now a variable 'name'
           
           playerCount+=1
           player.index=playerCount;
           //incrementing player count by 1
           player.updateCount(playerCount)
           //updating playerCount in the database
           player.update()
           //updating name of the player in the database
           this.greeting.html("hello"+ player.name)
           this.greeting.position(displayWidth/2-30, displayHeight/4)

       }

       )
      this.reset.mousePressed(  () =>{
          player.updateCount(0)
          game.update(0)
      } 

      ) 
   }
   
}