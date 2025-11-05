import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulepage } from './modulepage';

describe('Modulepage', () => {
  let component: Modulepage;
  let fixture: ComponentFixture<Modulepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modulepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
