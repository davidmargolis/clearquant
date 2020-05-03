# coding=utf-8

from .entities.entity import Session, engine, Base
from .entities.circuit import Circuit

# generate database schema
Base.metadata.create_all(engine)

# start session
session = Session()

# check for existing data
circuits = session.query(Circuit).all()

if len(circuits) == 0:
    # create and persist dummy circuit
    python_circuit = Circuit("MyCircuit", "This is my first circuit.", "script")
    session.add(python_circuit)
    session.commit()
    session.close()

    # reload circuits
    circuits = session.query(Circuit).all()

# show existing circuits
print('### Circuits:')
for circuit in circuits:
    print(f'({circuit.id}) {circuit.title} - {circuit.description}')
