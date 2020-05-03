# coding=utf-8

from flask import Flask, jsonify, request

from .entities.entity import Session, engine, Base
from .entities.gate import Gate, GateSchema

# creating the Flask application
app = Flask(__name__)

# if needed, generate database schema
Base.metadata.create_all(engine)


@app.route('/gates')
def get_gates():
    # fetching from the database
    session = Session()
    gate_objects = session.query(Gate).all()

    # transforming into JSON-serializable objects
    schema = GateSchema(many=True)
    gates = schema.dump(gate_objects)

    # serializing as JSON
    session.close()
    return jsonify(gates)


@app.route('/gates', methods=['POST'])
def add_gate():
    # mount gate object
    posted_gate = GateSchema(only=('title', 'description'))\
        .load(request.json)

    gate = Gate(**posted_gate, created_by="HTTP post request")

    # persist gate
    session = Session()
    session.add(gate)
    session.commit()

    # return created gate
    new_gate = GateSchema().dump(gate)
    session.close()
    return jsonify(new_gate), 201
