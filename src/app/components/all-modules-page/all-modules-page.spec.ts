import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllModulesPage } from './all-modules-page';

describe('AllModulesPage', () => {
  let component: AllModulesPage;
  let fixture: ComponentFixture<AllModulesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllModulesPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AllModulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
