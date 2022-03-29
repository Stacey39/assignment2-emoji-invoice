import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  today = new Date();
  invoice = 123456789;
  emojiSrc = 'assets/images/emoji.png';
  address = `Emoji Web Design, Inc.<br>
              12345 Sunny Road<br>
              Sunnyville, TX 12345`;

  constructor() { }

  ngOnInit(): void {
  }

}
