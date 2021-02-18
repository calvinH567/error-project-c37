class Form {
  constructor() {
    this.input = createInput("Replace this text");
    this.button = createButton("CLick Me!");
    this.message = createElement('h1');
  }

  display(){
    // title of game
    this.message.html("Car Racing ");
    this.message.position(130, 0);
      
    //sets location of html element
    this.input.position(130, 160);
    this.button.position(250, 200);

    //detects when button is pressed
    this.button.mousePressed(()=>{  // => makes a function to go to next line
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      //increments pc and calls functions
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.message.html("Hello " + this.name );
      this.message.position(130, 160);
    });

  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.message.hide();

  }
}
