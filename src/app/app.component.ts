import { Component, HostListener } from '@angular/core';

import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public isMini: boolean = false;
    @HostListener("window:scroll", [])
    onWindowScroll(){
       
        
        if(window.pageYOffset > 100){
            console.log(this.isMini = true)
        }
        else{
            console.log(this.isMini = false)
        }
    }
    
    ngOnInit(){

    }
}