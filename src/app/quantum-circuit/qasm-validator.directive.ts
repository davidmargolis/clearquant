import { AbstractControl, ValidatorFn } from '@angular/forms'
import QuantumCircuit from 'quantum-circuit';

class ErrorType {
  line: string;
  col: number;
  msg: number;
}

export function QasmValidatorDirective(circuit: QuantumCircuit): ValidatorFn {
  return (control: AbstractControl): string[] => {
    let theErrors: ErrorType[];
    circuit.importQASM(control.value, function (errors: ErrorType[]) {
      theErrors = errors;
    });
    return (theErrors.length > 0) ? theErrors.map(e =>
      `Error (line ${e.line}, col ${e.col}): ${e.msg}`
    ) : null;
  };
};
