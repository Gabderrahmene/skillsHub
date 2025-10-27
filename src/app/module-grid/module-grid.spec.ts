import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleGrid } from './module-grid';

describe('ModuleGrid', () => {
  let component: ModuleGrid;
  let fixture: ComponentFixture<ModuleGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
