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
    imgurl: 'assets/photos/with_no_words_picture.jpg',
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
    imgurl: 'assets/photos/pictures_destruction.jpg',
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

  photos = [
    'assets/photos/newspaper_picture.jpg',
    'assets/photos/pictures_of_kidnapped_israeli_kids.jpg',
    'assets/photos/pictures_destruction.jpg',
    'assets/photos/rescue_te2_picture.jpg',
    'assets/photos/rescue_teampicture.jpg',
    'assets/photos/terrorists_in_israel.jpg',
    'assets/photos/terrorists_in_israel_2.jpg',
    'assets/photos/terrorists_in_israel_3.jpg',
    'assets/photos/terrorists_in_israel_4.jpg',
    'assets/photos/new_york_times_pictures.jpg',
    'assets/photos/with_no_words_picture.jpg',
  ]
}
