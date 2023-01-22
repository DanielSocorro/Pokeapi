import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeAlphabetComponent } from './poke-alphabet.component';

describe('PokeAlphabetComponent', () => {
  let component: PokeAlphabetComponent;
  let fixture: ComponentFixture<PokeAlphabetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeAlphabetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
