const startGame = () => {

	class Tamagotchi {
		constructor(name) {
			this.name = name;
			this.isAlive = true;
			this.hunger = 0;
			this.sleepiness = 0;
			this.boredom = 0;
			this.age = 0;
		}

		ageInc() {
			const interval = setInterval(() => {
				this.age++;	
				console.log(this.age)
				$('#age').text('Age: ' + this.age)
				if (this.age === 3) {
					$('#photo').attr('src', 'https://media.giphy.com/media/U4Q6v5tkTLrXi/giphy.gif')
				}
				if (this.age === 15) {
					$('#photo').attr('src', 'http://bestanimations.com/Fantasy/Dragons/dragon-animated-gif-60.gif')
				}
				if (this.age === 30) {
					$('#photo').attr('src', 'https://i.imgur.com/v1GIFns.jpg')
					alert(this.name + ' has died of old age');
					clearInterval(interval)
				}

			}, 600000)
		}

		hungerInc() {
			

			const hungerInterval = setInterval(() => {
				if (this.hunger === 10) {
					this.isAlive =
					 false
					alert(this.name + ' has died of hunger')
					$('#photo').attr('src', 'https://i.imgur.com/oKqvI75.png')	
					clearInterval(hungerInterval)
					}
				if (this.isAlive === false) {
				 	clearInterval(hungerInterval);
				 	
				} else {
					this.hunger++;	
					console.log(this.hunger)
					$('#hunger').text('Hunger: ' + this.hunger) 
				}
			}, 10000)
		}

		sleepinessInc() {

			const sleepInterval = setInterval(() => {
				if (this.sleepiness === 10) {
					this.isAlive = false;
					alert(this.name + ' has died of sleepiness')
					$('#photo').attr('src', 'https://i.imgur.com/oKqvI75.png')
					clearInterval(sleepInterval)
					}
				if (this.isAlive === false) {
				 	clearInterval(sleepInterval)
				} else {
					this.sleepiness++;	
					console.log(this.sleepiness)
					$('#sleepy').text('Sleepiness: ' + this.sleepiness)
				}	
			}, 4000)
		}

		boredomInc() {
			const boredInterval = setInterval(() => {
				if (this.boredom === 10) {
					this.isAlive = false
					alert(this.name + ' has died of boredom')
					$('#photo').attr('src', 'https://i.imgur.com/oKqvI75.png')
					clearInterval(boredInterval)
					}
				if (this.isAlive === false) {
			 		clearInterval(boredInterval)
				} else {
					this.boredom++;	
					console.log(this.boredom)
					$('#bored').text('Boredom: ' + this.boredom)
				}
			}, 11000)
		}

		morph() {
			if (this.age === 3) {
				$('#photo').attr('src', 'https://media.giphy.com/media/U4Q6v5tkTLrXi/giphy.gif')
			}
		}

		resetFeed() {
			$('#photo').velocity('callout.shake')
			this.hunger--;
			$('#hunger').text('Hunger: ' + this.hunger) 
			return this.hunger
			}

		resetSleepiness() {
			$('#photo').velocity('callout.flash')
			this.sleepiness--;
			$('#sleepy').text('Sleepiness: ' + this.sleepiness)
			return this.sleepiness
		}

		resetBoredom() {
			$('#photo').velocity('callout.pulse')
			this.boredom--;
			$('#bored').text('Boredom: ' + this.boredom)
			return this.boredom
		}
		



	}


	const phil = new Tamagotchi('Phil');
	phil.ageInc()
	phil.hungerInc()
	phil.sleepinessInc()
	phil.boredomInc()
	phil.morph()
	const name = new Tamagotchi() 



const gameControls = {
		resetFeed() {

			phil.resetFeed();
		},

		resetSleep() {
			phil.resetSleepiness();
		},

		resetBoredom() {
			phil.resetBoredom();
		}

	}
$('#feed').on('click', gameControls.resetFeed)	
$('#lights').on('click', gameControls.resetSleep)	
$('#play').on('click', gameControls.resetBoredom)	

}

$('#starter').on('click', startGame)

























