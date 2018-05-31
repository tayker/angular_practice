import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionDonateComponent } from './section-donate/section-donate.component';
import { SectionHelpComponent } from './section-help/section-help.component';
import { SectionGetStartedComponent } from './section-get-started/section-get-started.component';
import { SectionUsabilityComponent } from './section-usability/section-usability.component';


const routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: SectionAboutComponent },
    { path: 'help', component: SectionHelpComponent},
    { path: 'getStarted', component: SectionGetStartedComponent },
    { path: 'donate', component: SectionDonateComponent },
    { path: 'usability', component: SectionUsabilityComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { 
}