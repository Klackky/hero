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

//container for images
const container = document.createElement(`div`);
container.setAttribute(`id`, `container`);
document.body.appendChild(container);


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
});

const form = document.querySelector(`form`);
const changeName = (character) => {
  const newName = document.querySelector(`#name`).value;
  character.name = newName;
  return character;
}

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  changeName(hero);
  displayStats(hero);
  form.reset();
});

const displayStats = (hero) => {
  const template = `<p class="name"> name: ${hero.name} </p> <p> health: ${hero.health} </p> <p> weapon type: ${hero.weapon.type} </p> weapon damage: ${hero.weapon.damage} <p> </p>`
  container.insertAdjacentHTML(`beforebegin`, template);
}
