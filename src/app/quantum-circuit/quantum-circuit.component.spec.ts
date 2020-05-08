import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuantumCircuitComponent } from "./quantum-circuit.component";

describe("QuantumCircuitComponent", () => {
  let component: QuantumCircuitComponent;
  let fixture: ComponentFixture<QuantumCircuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuantumCircuitComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantumCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
