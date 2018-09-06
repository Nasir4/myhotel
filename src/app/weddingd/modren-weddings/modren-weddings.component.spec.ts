import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModrenWeddingsComponent } from './modren-weddings.component';

describe('ModrenWeddingsComponent', () => {
  let component: ModrenWeddingsComponent;
  let fixture: ComponentFixture<ModrenWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModrenWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModrenWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
