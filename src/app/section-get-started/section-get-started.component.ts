import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-get-started',
  templateUrl: './section-get-started.component.html',
  styleUrls: ['./section-get-started.component.scss']
})
export class SectionGetStartedComponent implements OnInit {

  constructor() { }

        person = {
        firstname: {
            label:  'FIrstname',
            value:  'Juri',
            type:   'text',
            validators: {
                required: true
            }
        },
        lastname: {
            label:  'Lastname',
            value:  'Kovtuh',
            type:   'text'
        },
        age: {
            label:  'Age',
            value:  32,
            type:   'number'
        },
        email: {
            label:  'E-mail',
            value:  'kovtuh228@gmail.com',
            type:   'email'
        },
        city: {
            label: 'City',
            value: 'Kv',
            type: 'select',
            options: [
                { label: '(choose one)', value: ''},
                { label: 'Kiev', value: 'Kv'},
                { label: 'Poltava', value: 'Pl'},
                { label: 'Kharkiv', value: 'Kh'}
            ]
        },
        gender: {
            label: 'Gender',
            value: 'male',
            type: 'radio',
            options: [
                { label: 'Male', value: 'male'},
                { label: 'FeMale', value: 'female'}
            ]
        }
    };
  ngOnInit() {
  }
}