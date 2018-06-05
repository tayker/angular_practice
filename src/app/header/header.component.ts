import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input()
    isMini;
    slides = [
        { url: '/getStarted', linkDescr: 'Get Started', imgUrl: 'http://via.placeholder.com/350x150', title: 'dog'},
        { url: '/usability', linkDescr: 'Usability', imgUrl: 'http://via.placeholder.com/350x150', title: 'cat'},
        { url: '/about', linkDescr: 'About', imgUrl: 'http://via.placeholder.com/350x150', title: 'duck'},
        { url: '/donate', linkDescr: 'Donate', imgUrl: 'http://via.placeholder.com/350x150', title: 'olyphaunt'},
        { url: '/help', linkDescr: 'Help', imgUrl: 'http://via.placeholder.com/350x150', title: 'mouse'}
    ]
    
  constructor(private router: Router) { }

    getStatus(event){
        console.log(event);
       this.router.navigateByUrl(this.slides[event.activeIndex].url)
    }
  ngOnInit() {
      
  }

}