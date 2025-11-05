import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Optionlist } from './optionlist';

describe('Optionlist', () => {
  let component: Optionlist;
  let fixture: ComponentFixture<Optionlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Optionlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Optionlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
