import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Character {
  name: string;
  gender: string;
  class: string;
  faction?: string;
  startingLocation?: string;
  funFact?: string;
}

export interface NewCharacter{
  character: Character;
  characterId: number;
 }

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="order-form-container">
      <form
        class="order-form"
        #tacoOrderForm="ngForm"
        (ngSubmit)="createCharacter()"
      >
        <h1>Complete the form below to place a new order.</h1>
        <fieldset>
          <legend>Create Character</legend>
          <div>
            <label for="genderType">Gender</label>
            <select
              name="genderType"
              id="genderType"
              [(ngModel)]="gender"
              ngModel
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label for="classType">Class</label>
            <select
              name="classType"
              id="classType"
              [(ngModel)]="class"
              ngModel
            >
              <option value="Warrior">Warrior</option>
              <option value="Mage">Mage</option>
              <option value="Rogue">Rogue</option>
            </select>
          </div>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="name-input"
            [(ngModel)]="name"
            ngModel
          />
<br>
          <input type="submit" value="Create Character" />
        </fieldset>
      </form>
    </div>
  `,
  styles: ``,
})
export class CreateCharacterComponent {
  character: Character;
  characterId: number;
  name: string;
  gender: string;
  class: string;
  newCharacter: NewCharacter;

  characters: Character[] = [
    { name: 'Thorn', gender: 'Male', class: 'Warrior', faction: 'The Iron Brotherhood', startingLocation: 'Ironhold', funFact: 'Thorn once single-handedly defeated a dragon.' },
    { name: 'Badger', gender: 'Female', class: 'Mage', faction: 'The Forest', startingLocation: 'Cavern', funFact: 'Badger has protective skin that is tough to penetrate in combat.' },
    { name: 'Tank', gender: 'Male', class: 'Rogue', faction: 'Hounds of the Oasis', startingLocation: 'Hideaway', funFact: 'Tank can craft and store up to 5 weapons' },
    { name: 'Rose', gender: 'Female', class: 'Warrior', faction: 'The Iron Brothers', startingLocation: 'Ironhold', funFact: 'Rose has the ability to take down seven enemies in one strike.' },
    { name: 'L', gender: 'Male', class: 'Mage', faction: 'The Forest', startingLocation: 'Cavern', funFact: 'L is super intellegent and witty, he uses this to his advantage.' },
    { name: 'Suki', gender: 'Female', class: 'Rogue', faction: 'Hounds of the Oasis', startingLocation: 'Hideaway', funFact: 'Suki has a great eye of buying favorable goods.' },
    { name: 'Eren', gender: 'Male', class: 'Warrior', faction: 'The Iron Brotherhood', startingLocation: 'Ironhold', funFact: 'Eren can defeat enemies twice his size with ease' },
    { name: 'Cloud', gender: 'Female', class: 'Mage', faction: 'The Forest', startingLocation: 'Cavern', funFact: 'Cloud carries a huge sword.' },
    { name: 'Minato', gender: 'Male', class: 'Rouge', faction: 'Hounds of the Oasis', startingLocation: 'Hideaway', funFact: 'Minato has lightning speed.' },
    { name: 'Usagi', gender: 'Female', class: 'Warrior', faction: 'The Ironbrotherhood', startingLocation: 'Ironhold', funFact: 'Fights for love and justice.' },
  ];

  constructor() {
    this.name = '';
    this.gender = '';
    this.class = '';
    this.characterId = 0;

    this.character = {
      name: "",
      gender: "",
      class: ""
    }

    this.newCharacter = {character: this.character, characterId: 0}
  }



  createCharacter() {
    console.log("class", this.class)
    this.characterId = Math.floor(Math.random() * 1000) + 1;

    let formChar = {
      name: this.name,
      gender: this.gender,
      class:  this.class
    }

    this.newCharacter = {
      character: formChar,
      characterId: this.characterId
    }
  }

  resetForm(){
    this.name = ''
    this.gender = ''
    this.class = ''
  }


}
