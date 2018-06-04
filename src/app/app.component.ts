import { Component, HostListener } from '@angular/core';

import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    @HostListener("window:scroll", [])
    onWindowScroll(){
        if(window.pageYOffset > 100){
//            header.classList.add('mini');
        }
        else{
//            header.classList.remove('mini');
        }
    }
    
//    currentSlide: number = 2;
    
    ngOnInit(){
        var header = document.getElementById('header');

    }
}