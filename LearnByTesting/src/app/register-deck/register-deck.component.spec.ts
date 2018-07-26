import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeckComponent } from './register-deck.component';

describe('RegisterDeckComponent', () => {
  let component: RegisterDeckComponent;
  let fixture: ComponentFixture<RegisterDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
