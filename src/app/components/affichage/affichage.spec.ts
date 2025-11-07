import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Affichage } from './affichage';

describe('Affichage', () => {
  let component: Affichage;
  let fixture: ComponentFixture<Affichage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Affichage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Affichage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
