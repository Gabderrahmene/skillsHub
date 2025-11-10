import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherModuleGrid } from './teacher-module-grid';

describe('TeacherModuleGrid', () => {
  let component: TeacherModuleGrid;
  let fixture: ComponentFixture<TeacherModuleGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherModuleGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherModuleGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
