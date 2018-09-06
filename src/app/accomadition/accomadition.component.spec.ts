import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomaditionComponent } from './accomadition.component';

describe('AccomaditionComponent', () => {
  let component: AccomaditionComponent;
  let fixture: ComponentFixture<AccomaditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomaditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomaditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
