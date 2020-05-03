import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationEditorComponent } from './equation-editor.component';

describe('EquationEditorComponent', () => {
  let component: EquationEditorComponent;
  let fixture: ComponentFixture<EquationEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquationEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
