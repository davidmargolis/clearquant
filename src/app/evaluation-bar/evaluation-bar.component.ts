import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
// import { QuantumCircuit } from 'quantum-circuit'
import QuantumCircuit from 'quantum-circuit'

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-evaluation-bar',
  templateUrl: './evaluation-bar.component.html',
  styleUrls: ['./evaluation-bar.component.scss'],
})
export class EvaluationBarComponent implements OnInit {
  stateForm: FormGroup = this._formBuilder.group({
    state: '',
  });

  @Output() inputEvaluated: EventEmitter<QuantumCircuit> = new EventEmitter<QuantumCircuit>();

  state: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  stateOptions: Observable<string[]>;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.stateOptions = this.stateForm.get('state')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  onSubmit(value: any): void {
    var circuit = new QuantumCircuit(3);
    circuit.importQASM("OPENQASM 2.0;\nimport \"qelib1.inc\";\nqreg q[2];\nh q[0];\ncx q[0],q[1];\n", function(errors) {
      console.log(errors);
    });

    this.inputEvaluated.emit(circuit);
  }

  private _filterGroup(value: string): string[] {
    if (value) {
      return this.state
        .filter(item => item.toLowerCase().startsWith(value.toLowerCase()));
    }

    return this.state;
  }

}
