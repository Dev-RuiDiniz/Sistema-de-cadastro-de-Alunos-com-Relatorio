from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///alunos.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Aluno(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    idade = db.Column(db.Integer, nullable=False)
    nota1 = db.Column(db.Float, nullable=False)
    nota2 = db.Column(db.Float, nullable=False)

    @property
    def media(self):
        return (self.nota1 + self.nota2) / 2

    @property
    def aprovado(self):
        return self.media >= 6.0

@app.route('/alunos', methods=['POST'])
def adicionar_aluno():
    data = request.get_json()
    aluno = Aluno(**data)
    db.session.add(aluno)
    db.session.commit()
    return jsonify({'mensagem': 'Aluno cadastrado com sucesso!'})

@app.route('/alunos', methods=['GET'])
def listar_alunos():
    alunos = Aluno.query.all()
    resultado = [{
        'id': a.id,
        'nome': a.nome,
        'idade': a.idade,
        'nota1': a.nota1,
        'nota2': a.nota2,
        'media': a.media,
        'aprovado': a.aprovado
    } for a in alunos]
    return jsonify(resultado)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
