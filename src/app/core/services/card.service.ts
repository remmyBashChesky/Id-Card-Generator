import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cardsSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private totalCardsSubject: BehaviorSubject<any> = new BehaviorSubject<any>(0)
  constructor() { }

  getCards(){
    return this.cardsSubject;
  }
  getTotalCards(){
    return this.totalCardsSubject;
  }

  collectFormData(data){
    this.cardsSubject.next({data})
  }
}
