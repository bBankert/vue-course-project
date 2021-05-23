function getRandValue(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return{
            playerHealth: 100,
            monsterHealth: 100,
            round: 0,
            specialCooldown: 0,
            winner: null,
            log: []
        };
    },
    computed:{
        monsterBarStyles(){
            if(this.monsterHealth <= 0){
                return { width: '0%'};
            }
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles(){
            if(this.playerHealth <= 0){
                return { width: '0%'};
            }
            return {width: this.playerHealth + '%'};
        },
        specialAvailable(){
            return this.specialCooldown !== 0;
        }
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0)
                this.winner = 'draw';
            else if(value <= 0)
                this.winner = 'monster';
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0)
                this.winner = 'draw';
            else if(value <= 0)
                this.winner = 'player';
        }
    },
    methods: {
        initializeGame(){
            this.winner = null;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.round = 0;
            this.specialCooldown = 0;
            this.log = [];
        },
        attackMonster(){
            const dmg = getRandValue(5,12);
            this.monsterHealth -= dmg;
            this.updateLog('player','attack',dmg);
            this.updateTurn();
        },
        attackPlayer(){
            const dmg = getRandValue(8,15);
            this.playerHealth -= dmg;
            this.updateLog('monster','attack',dmg);
        },
        specialAttackMonster(){
            const dmg = getRandValue(10,25);
            this.monsterHealth -= dmg;
            this.specialCooldown = 3;
            this.updateLog('player','special-attack',dmg);
            this.updateTurn();
        },
        reduceCooldown(){
            if(this.specialCooldown > 0)
                this.specialCooldown -= 1;
        },
        updateTurn(){
            this.attackPlayer();
            this.round++;
            this.reduceCooldown();
        },
        healPlayer(){
            const heal = getRandValue(8,20);
            if(this.playerHealth + heal <= 100)
                this.playerHealth += heal;
            else
                this.playerHealth = 100;
            this.updateLog('player','heal',heal);
            this.updateTurn();
        },
        surrender(){
            this.winner = 'monster';
        },
        updateLog(who,what,value){
            console.log("Updating Log: " + who + ' ' + what + ' ' + value);
            this.log.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});

app.mount('#game');