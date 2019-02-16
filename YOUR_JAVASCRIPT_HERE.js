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


// rest funtion + UI
const imageRest = document.createElement(`img`);
imageRest.setAttribute(`id`, `inn`);
document.body.appendChild(imageRest);

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
document.body.appendChild(imagePickUpItem);

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
document.body.appendChild(bagImage);

bagImage.addEventListener(`click`, () => {
  equipWeapon(hero);
});