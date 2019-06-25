new Vue({
	el:'#app',
	data:{
		playerHealth: 100,
		monsterHealth: 100,
		gameRunning: false,
		turns:[]
	},
	methods:{
		startNew: function () {
			this.playerHealth=100;
			this.monsterHealth=100;
			this.gameRunning=true;
			this.turns = [];
		},
		attack:function () {
			var damage = this.findDamage(10,3);
			this.monsterHealth -= damage;
			if (this.checkWin()) {
				return;
			}
			// Logging Turns in array
			this.turns.unshift({
				'isPlayer': true,
				'text' : 'Player hits Monster for ' + damage
			});
			this.monsterAttacks();
			// this.playerHealth -=this.findDamage(12,5);
			// this.checkWin();
			// From Step by step
			// var max = 10;
			// var min =3;
			// var damage = Math.max(Math.floor(Math.random() * max)+1,min); -- Other Ways
			// damage = this.findDamage(10,3);

			// Monster HEalth
			// if(this.monsterHealth <= 0)
			// {
			// 	alert('You Won!');
			// 	this.gameRunning = false;
			// 	return;
			// }
			// max = 12;
			// min = 5;
			// damage = Math.max(Math.floor(Math.random() * max)+1,min); -- Other Ways
			// damage = this.findDamage(12,5);
			// PLayer Health 
			// if(this.playerHealth <= 0)
			// {
			// 	alert('You Lost!');
			// 	this.gameRunning = false;
			// }
		},
		specialAttack: function () {
			var damage = this.findDamage(10,20);
			this.monsterHealth -=damage;
			if (this.checkWin()) {
				return;
			}
			// Logging Turns in array
			this.turns.unshift({
				'isPlayer': true,
				'text' : 'Player hits Monster hard for '+damage
			});
			this.monsterAttacks();

		},
		Heal:function () {
			if(this.playerHealth <= 90)
			{
				this.playerHealth +=10;
			}
			else{
				this.playerHealth = 100;
			}
			// Logging Turns in array
			this.turns.unshift({
				'isPlayer': true,
				'text' : 'Player Heals for 10'
			});
			this.monsterAttacks();
		},
		giveUp:function() {
			this.gameRunning = false;
		},
		findDamage: function (max, min) {
			return Math.max(Math.floor(Math.random() * max)+1,min);
		},
		checkWin: function() {
			if (this.monsterHealth <= 0) {
				if(confirm('You Won! New Game?'))
				{
					this.startNew();
				}
				else
				{
					this.gameRunning = false;
				}
				return true;
			}
			else if (this.playerHealth <= 0) {
				if(confirm('You Lost! New Game?'))
				{
					this.startNew();
				}
				else
				{
					this.gameRunning = false;
				}
				return true;
			}
			return false;
		},
		monsterAttacks: function() {
			var damage = this.findDamage(12,5);
			this.playerHealth -= damage;
			this.checkWin();
			// Logging Turns in array
			this.turns.unshift({
				'isPlayer': false,
				'text' :'Monster hits PLayer for ' + damage
			});
		}
	}
});