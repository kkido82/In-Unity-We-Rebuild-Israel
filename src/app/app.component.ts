import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'In-Unity-We-Rebuild-Israel';
  institutions = [{
    name: 'United Hazalah',
    href: 'https://1221.org.il/',
    imgurl: 'assets/united_hazala.webp',
    text: 'Help Us Raise Funds For ',
    targetText: 'Raised Already 150,000 USD'
  },
  {
    name: 'eshkol',
    href: 'https://eshkol.info/',
    imgurl: 'assets/hevel_eshkol.jpg',
    text: 'Help Us Raise Funds For ',
    targetText: 'Raised Already 150,000 USD'
  },
  {
    name: 'The Association for the Israel Soldiers',
    href: 'https://www.ufis.org.il/',
    imgurl: 'assets/swords-of-iron-war-eng.jpg',
    text: 'Help Us Raise Funds For ',
    targetText: 'Raised Already 150,000 USD'
  },
  {
    name: 'The Sha`ar HaNegev Regional Council',
    href: 'https://www.sng.org.il/',
    imgurl: 'assets/shaar_hanegev.jpg',
    text: 'Help Us Raise Funds For ',
    targetText: 'Raised Already 150,000 USD'
  },
  {
    name: 'Soldiers of Gold',
    href: 'https://www.facebook.com/GoldSoldiers/',
    imgurl: 'assets/soldiers_of_gold.jpg',
    text: 'Help Us Raise Funds For ',
    targetText: 'Raised Already 150,000 USD'
  }];
}
