import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDonateComponent } from './section-donate.component';

describe('SectionDonateComponent', () => {
  let component: SectionDonateComponent;
  let fixture: ComponentFixture<SectionDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
