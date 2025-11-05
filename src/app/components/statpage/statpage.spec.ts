import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statpage } from './statpage';

describe('Statpage', () => {
  let component: Statpage;
  let fixture: ComponentFixture<Statpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
