class Form{

    constructor()
    {
        
        this.input = createInput ("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.title = createElement ("h1");

    }
    display(){
       
        this.title.html("Memory Mahjong");
        this.title.position(displayWidth/2-250, 20);
      
        this.input.position(displayWidth/2 -40,displayHeight/2 -60);
       
        this.button.position(displayWidth/2 +5, displayHeight/2);
      
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount +=1;
            player.index = playerCount;
            player.update()
            player.updateCount(playerCount);

            this.greeting.html("Hello "+ player.name);
           
        });

        
    
    

    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
}
        
    
  
