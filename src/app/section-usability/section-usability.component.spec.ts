import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionUsabilityComponent } from './section-usability.component';

describe('SectionUsabilityComponent', () => {
  let component: SectionUsabilityComponent;
  let fixture: ComponentFixture<SectionUsabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionUsabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionUsabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
