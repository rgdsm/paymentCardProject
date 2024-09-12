import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { format } from 'node:path';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  placeCard: string = '0000 0000 0000 0000';
  
  formatCardNumber(){
    let value = this.placeCard.replace(/\s+/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || '';

    this.placeCard = formattedValue;
  }

   placeName: string = 'Cardholder Name';
   constructor(){
    this.placeName = this.placeName.toUpperCase()
   }
  

   monthData: string = "12"
   formattedMonth(){
   }

   yearData: string = '24';

   cvvData: string = 'CVV'

}
