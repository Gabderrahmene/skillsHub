import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleContainer } from './module-container';

describe('ModuleContainer', () => {
  let component: ModuleContainer;
  let fixture: ComponentFixture<ModuleContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
