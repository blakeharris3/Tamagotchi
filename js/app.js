// const userInput = $('<input />').attr('id', 'name')
// 	$('body').append(userInput)

// const inputValue = $('#tamName').val()


let timer = 0;
const startGame = () => {

	const decision = prompt('What is the name of your pet?');
	$('#name').append(decision);

	class Tamagotchi {
		constructor(name) {
			this.name = decision;
			this.isAlive = true;
			this.hunger = 0;
			this.sleepiness = 0;
			this.boredom = 0;
			this.age = 0;
		}

		ageInc() {
			const ageInterval = setInterval(() => {
				this.age++;
				console.log(this.age)
				if (this.isAlive === false) {
					clearInterval(ageInterval);
				} else {
					$('#age').text('Age: ' + this.age)
					if (this.age === 5) {
						$('#photo').attr('src', 'mediumdragon.png')
						alert(`${decision} is getting older`)
					}
					if (this.age === 15) {
						$('#photo').attr('src', 'olddragon.png')
						alert(`${decision} is getting pretty old`)
					}
					if (this.age === 25) {
						this.isAlive = false
						$('#photo').attr('src', 'deaddragon.png')
						alert(this.name + ' has died of old age');
						clearInterval(interval)
					}
				}
			}, 2000)
		}

		hungerInc() {
			const hungerInterval = setInterval(() => {
				if (this.hunger === 10) {
					this.isAlive = false
					alert(this.name + ' has died of hunger')
					$('#photo').attr('src', 'deaddragon.png')
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
					$('#photo').attr('src', 'deaddragon.png')
					clearInterval(sleepInterval)
				}
				if (this.isAlive === false) {
					clearInterval(sleepInterval)
				} else {
					this.sleepiness++;
					console.log(this.sleepiness)
					$('#sleepy').text('Sleepiness: ' + this.sleepiness)
				}
			}, 9000)
		}

		boredomInc() {
			const boredInterval = setInterval(() => {
				if (this.boredom === 10) {
					this.isAlive = false
					alert(this.name + ' has died of boredom')
					$('#photo').attr('src', 'deaddragon.png')
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


	const name = new Tamagotchi(decision);
	name.ageInc()
	name.hungerInc()
	name.sleepinessInc()
	name.boredomInc()

	const setTimer = () => {
		const timerInterval = setInterval(() => {
			if (name.isAlive === true) {
				timer++;
				$('#timer').text('Time Alive: ' + timer + ' sec')
			} else {
				clearInterval(timerInterval);
			}
		}, 1000)
	}
	setTimer();

	const gameControls = {
		resetFeed() {

			name.resetFeed();
		},

		resetSleep() {
			name.resetSleepiness();
		},

		resetBoredom() {
			name.resetBoredom();
		}

	}
	$('#feed').on('click', gameControls.resetFeed)
	$('#lights').on('click', gameControls.resetSleep)
	$('#play').on('click', gameControls.resetBoredom)



}

$('#starter').on('click', startGame)



