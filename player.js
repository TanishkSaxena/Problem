class PLAYER {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount(){
        var pcountref = database.ref('playerCount');
        pcountref.on("value",function(data){
            playerCount = data.val()
        });
    }

    updateCount(count){
       database.ref('/').update({
            playerCount : count
       });
    }

    update(){
        var playerIndex ='players/player'+this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        });
    }
    
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",data => {
            allPlayer = data.val();
        })
    }
};