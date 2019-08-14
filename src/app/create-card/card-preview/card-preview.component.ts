import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/core/services/card.service';
import { Subscription } from 'rxjs';
import { helpers } from 'src/app/core/model/Bloogroups';

@Component({
  selector: 'card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.css']
})
export class CardPreviewComponent implements OnInit {
  card$ = this.cardService.getCards().asObservable();
  totalCards$ = this.cardService.getTotalCards().asObservable();
  private sub: Subscription;
  public hlp = helpers;
  constructor(private cardService: CardService) { }

  ngOnInit() { 
this.totalCards$.subscribe(data=>console.log(data))
  }

}
