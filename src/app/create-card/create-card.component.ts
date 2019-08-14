import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BloodGroup } from '../core/model/Bloogroups';
import { Card } from '../core/model/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CardService } from '../core/services/card.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', Validators.required],
    bloodGroup: ['', Validators.required],
    location: [''],
  });
  bloodGroups = [
    { value: BloodGroup.A, name: 'A' },
    { value: BloodGroup.B, name: 'B' },
    { value: BloodGroup.AB, name: 'AB' },
    { value: BloodGroup.O, name: 'O' },
  ]
 card$ = this.cardService.getCards();
  constructor(private fb: FormBuilder, private _snackbar: MatSnackBar, private cardService: CardService) { }

  ngOnInit() { 
    this.profileForm.valueChanges.subscribe((
      data => {
        console.log('data',data)
        this.cardService.collectFormData(data)
      }
    ))
  }

  onSubmit() {
    const cardForm: Card = this.profileForm.value;
    let cards = JSON.parse(localStorage.getItem('cards'));
    cards = cards ? cards : null;

    let card: Card;

    card = {
      ...card,
      firstName: cardForm.firstName,
      lastName: cardForm.lastName,
      age: cardForm.age,
      bloodGroup: cardForm.bloodGroup,
      location: cardForm.location
    };

    let newIdCards: any;

    if (!cards) {
      newIdCards = [];
      newIdCards = [...newIdCards, card]
    } else {
      cards.push(card)
      newIdCards = cards;
    }
    newIdCards = this.hasDuplicates(newIdCards);
    console.log(newIdCards);
    localStorage.setItem('cards', JSON.stringify(newIdCards));
    this.cardService.getTotalCards().next(newIdCards.length) 
    this._snackbar.open('Card Created Successfully', 'cancel', {
      duration: 10000
    });

    this.profileForm.reset();
  }

  hasDuplicates(arr) {
    return Array.from(new Set(arr.map(a => a.firstName)))
      .map(firstName => {
        return arr.find(a => a.firstName === firstName);
      })
  }
}
