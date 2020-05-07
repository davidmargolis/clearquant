import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QasmInfoPanelComponent } from './qasm-info-panel.component';

describe('QasmInfoPanelComponent', () => {
  let component: QasmInfoPanelComponent;
  let fixture: ComponentFixture<QasmInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QasmInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QasmInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
