class FORM {

    constructor(){
        this.input = createInput("name");
        this.button = createButton('To play, Or not to Play, that is ze question!');
        this.greeting = createElement('h2');
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("|-|-|-|-| Racing Game |-|-|-|-|");
        title.position(130,0);
        this.input.position(130,160);
        this.button.position(250,200);                                                              
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var player = new PLAYER();
            player.name = this.input.value();
            playerCount+=1
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello, player "+player.name);
            this.greeting.position(130,160);    
        })
    }
}