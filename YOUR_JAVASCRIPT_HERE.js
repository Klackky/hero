// Write your JS here
//hero object
const hero = {
    name: `Harry Potter`,
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: `magic wand`,
        damage: 2
    }
};

const enemies = [
    {
        name: `Voldemort`,
        health: 10,
        weakness: `eyes`,
        weapon: {
            type: `magic wand`,
            damage: 2
        }

    },
    {
        name: `Chicken`,
        health: 10,
        weakness: `head`,
        weapon: {
            type: `feet`,
            damage: 1
        }
    },
    {
        name: `Freddy krueger`,
        health: 10,
        weakness: `hands`,
        weapon: {
            type: `Bladed work glove`,
            damage: 5
        }
    },
    {
        name: `Jason Voorhees`,
        health: 10,
        weakness: `head`,
        weapon: {
            type: `Knife`,
            damage: 3
        }
    },
    {
        name: `Michael Myers`,
        health: 10,
        weakness: `feet`,
        weapon: {
            type: `Chef's knife`,
            damage: 3
        }
    },
    {
        name: `Darth Vader`,
        health: 10,
        weakness: `head`,
        weapon: {
            type: `Lightsaber`,
            damage: 5
        }
    }

]

//container for images
const container = document.createElement(`div`);
const main = document.querySelector(`main`);
container.setAttribute(`id`, `container`);
main.appendChild(container);


// rest funtion + UI
const imageRest = document.createElement(`img`);
imageRest.setAttribute(`id`, `inn`);
imageRest.setAttribute(`src`, `https://www.carrgolf.com/wp-content/uploads/2016/11/Dromoland.jpg`);
container.appendChild(imageRest);

const rest = (character) => {
   character.health = 10;
   return character;
}

imageRest.addEventListener(`click`, () => {
    rest(hero);
    displayStats(hero);
});


// pickUpItem function + UI
const imagePickUpItem = document.createElement(`img`);
imagePickUpItem.setAttribute(`id`, `dagger`);
imagePickUpItem.setAttribute(`src`, `https://www.darksword-armory.com/wp-content/uploads/2014/09/medieval-knight-dagger-1801.jpg`);
container.appendChild(imagePickUpItem);

const pickUpItem = (character, weapon) => {
  weapon.type = `dagger`;
  weapon.damage = 2;
  character.inventory.push(weapon);
}

imagePickUpItem.addEventListener(`click`, () => {
  pickUpItem(hero, hero.weapon);
});

// equipWeapon function + UI
const equipWeapon = (character) => {
    if(character.inventory.length > 0) {
    character.weapon = character.inventory[0];
    }
    return false;
}


const bagImage = document.createElement(`img`);
bagImage.setAttribute(`id`, `bag`);
bagImage.setAttribute(`src`, `https://cdn.notonthehighstreet.com/fs/c2/89/79d3-29de-47d6-bb2a-3618f84dbbaa/original_avocardio-funny-gym-bag.jpg`);
container.appendChild(bagImage);

bagImage.addEventListener(`click`, () => {
  equipWeapon(hero);
  displayStats(hero);
});

const form = document.querySelector(`form`);
const statsContainer = document.querySelector(`.stats-container`);
const enemyContainer = document.querySelector(`.enemy-container`);
const fightForm = document.querySelector(`.fight-form`);
let randomEnemyNumber;
const changeName = (character) => {
  const newName = document.querySelector(`#name`).value;
  character.name = newName;
  return character;
}

form.addEventListener(`submit`, (event) => {
console.log(statsContainer);
  event.preventDefault();
  changeName(hero);
  displayStats(hero);
  form.reset();
});

const displayStats = (hero) => {
  
  const template = `<p class="name"> name: ${hero.name} </p> <p> health: ${hero.health} </p> <p> weapon type: ${hero.weapon.type} </p> weapon damage: ${hero.weapon.damage} <p> </p>`
  if(hero.heroic) {
    statsContainer.innerHTML = '';
    statsContainer.insertAdjacentHTML(`beforeend`, template);
  } else {
    enemyContainer.innerHTML = ``;
    enemyContainer.insertAdjacentHTML(`beforeend`, template);
  }
  
}

//fight

const getEnemyButton = document.querySelector(`.getEnemy`);
const hitButtons = Array.from(document.querySelectorAll(`.fight`));
const result = document.querySelector(`.result`);
const tryAgain = document.querySelector(`.try-again__button`);

const fightEnemy = (hero, enemy) => {
    if (hero.health > 0 && enemy.health > 0) {
        if(event.currentTarget.classList.contains(enemy.weakness)) {
            enemy.health = enemy.health - hero.weapon.damage * 2;
        } else {
        enemy.health = enemy.health - hero.weapon.damage;
    }
    hero.health = hero.health - enemy.weapon.damage; 
    } 
    if (hero.health <= 0 && enemy.health <= 0) {
        result.innerHTML = `You killed each other`
        hero.health = 0;
        enemy.health = 0;
        tryAgain.classList.add(`show`);
    }
    else if (hero.health <= 0) {
       result.innerHTML = `You were heroically killed by ${enemy.name}`;
       tryAgain.classList.add(`show`);
    } else if (enemy.health <=0) {
        enemy.health = 0;
        enemies.splice(randomEnemyNumber, 1);
        result.innerHTML = `${enemy.name} was killed!`;
    }
   
}

hitButtons.forEach(button => {
    button.addEventListener(`click`, (event) => {
        fightEnemy(hero, randomEnemy);
        displayStats(hero);
        displayStats(randomEnemy);
    });
})


getEnemyButton.addEventListener(`click`, () => {
    randomEnemyNumber = Math.floor(Math.random() * enemies.length)
    randomEnemy = enemies[randomEnemyNumber];
    fightForm.classList.add(`show`);
    displayStats(randomEnemy);
});


tryAgain.addEventListener(`click`, () => {
    randomEnemyNumber = Math.floor(Math.random() * enemies.length)
    tryAgain.classList.remove(`show`);
    result.innerHTML = "";
    hero.health = 10;
    randomEnemy = enemies[randomEnemyNumber];
    randomEnemy.health = 10;
    displayStats(randomEnemy);
    displayStats(hero);
})

displayStats(hero);