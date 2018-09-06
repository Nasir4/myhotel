import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionsWeddingsComponent } from './traditions-weddings.component';

describe('TraditionsWeddingsComponent', () => {
  let component: TraditionsWeddingsComponent;
  let fixture: ComponentFixture<TraditionsWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionsWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionsWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
