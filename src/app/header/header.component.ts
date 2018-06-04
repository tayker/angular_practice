import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    slides = [
        { url: '/getStarted', linkDescr: 'Get Started', imgUrl: 'http://via.placeholder.com/350x150', title: 'dog'},
        { url: '/usability', linkDescr: 'Usability', imgUrl: 'http://via.placeholder.com/350x150', title: 'cat'},
        { url: '/about', linkDescr: 'About', imgUrl: 'http://via.placeholder.com/350x150', title: 'duck'},
        { url: '/donate', linkDescr: 'Donate', imgUrl: 'http://via.placeholder.com/350x150', title: 'olyphaunt'},
        { url: '/help', linkDescr: 'Help', imgUrl: 'http://via.placeholder.com/350x150', title: 'mouse'}
    ]
    
  constructor() { }

    getStatus(event){
        console.log(event.activeIndex);
    }
  ngOnInit() {
      
  }

}