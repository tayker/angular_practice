import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CarouselModule } from 'angular2-carousel';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SectionMainComponent } from './section-main/section-main.component';
import { SectionGetStartedComponent } from './section-get-started/section-get-started.component';
import { SectionUsabilityComponent } from './section-usability/section-usability.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionDonateComponent } from './section-donate/section-donate.component';
import { SectionHelpComponent } from './section-help/section-help.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionMainComponent,
    SectionGetStartedComponent,
    SectionUsabilityComponent,
    SectionAboutComponent,
    SectionDonateComponent,
    SectionHelpComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
