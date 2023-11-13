import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'In-Unity-We-Rebuild-Israel';
  showMore = false;

  institutions = [{
    name: 'United Hazalah',
    href: 'https://israelrescue.org/',
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
    href: 'https://www.ufis.org.il/en/',
    imgurl: 'assets/swords-of-iron-war-eng.jpg',
    text: 'Help Us Raise Funds For ',
    targetText: 'Raised Already 150,000 USD'
  },
  {
    name: 'The Sha`ar HaNegev Regional Council',
    href: 'https://www.sng.org.il/7251/',
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
  },
{
  name: 'The Organization for Victims of Terrorism in Israel',
  href: 'https://givetovictims.org/',
  imgurl: 'assets/Victims_of_Terrorism_in_Israel.jpg',
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
  ];

  causes = [{
    name: 'Emergency Services',
    color: '#0d6efd'
  }, {
    name: 'Rebuilding Houses and Comuunities',
    color: '#198754'
  }, {
    name: 'Military support',
    color: '#ffc107'
  }, {
    name: 'Infrastracture Rehabilitation',
    color: '#6c757d'
  }, {
    name: 'Supporting Orphans & Widows',
    color: '#dc3545'
  }, {
    name: 'Animal Rescue',
    color: '#fd7e14'
  }];

  contributors = [{
    name: 'Eran Perelman',
    linkedin: 'https://www.linkedin.com/in/eran-perelman-021a0178'
  },
  {
    name: 'Ido Kerner',
    linkedin: 'https://www.linkedin.com/in/idokerner/'
  },
  {
    name: 'Limor Amrani',
    linkedin: 'https://www.linkedin.com/in/limor-amrani-690989288'
  },
  {
    name: 'Liat Sade Lavan',
    linkedin: 'https://www.linkedin.com/in/liat-sade-lavan-0543801'
  },
  {
    name: 'Keren Nissel-Keren',
    linkedin: '',
    facebook: 'https://www.facebook.com/KerenKerenInteriorDesign?mibextid=ZbWKwL'
  }];
}
