import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGetStartedComponent } from './section-get-started.component';

describe('SectionGetStartedComponent', () => {
  let component: SectionGetStartedComponent;
  let fixture: ComponentFixture<SectionGetStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionGetStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
