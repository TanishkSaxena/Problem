class GAME{
    constructor(){

    }
    play(){
        var form = new FORM();
        form.hide();
        textSize(30);
        text("Game is about to Start",120,100);
        PLAYER.getPlayerInfo();
        if(allPlayer!==undefined){
            var display_position = 130;
            for (var plr in allPlayer){
                if(plr === "player"+player.index)
                fill(255,0,0);
                else 
                fill(0,0,0);
                display_position+=20;
                textSize(15);
                text(allPlayer[plr].name + " : " + allPlayer[plr].distance,120,display_posisiton);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance+=5000000000;
            player.update();
        }
    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val()
        });
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            var player = new PLAYER();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            var form = new FORM();
            form.display();
        }
    }
};