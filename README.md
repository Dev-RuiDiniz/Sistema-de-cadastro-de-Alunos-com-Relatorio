# 🎓 Sistema de Cadastro de Alunos com Geração de Relatórios em PDF

Este projeto é um sistema completo de cadastro e gerenciamento de alunos, desenvolvido com **React (Vite)** no frontend e **Flask** no backend. Ideal para escolas, cursos técnicos ou qualquer instituição de ensino que precise manter um registro simples, eficiente e exportável de seus alunos.

---

## ⚙️ Tecnologias Utilizadas

### Backend (API REST)
- [Python 3.10+](https://www.python.org/)
- [Flask](https://flask.palletsprojects.com/)
- [Flask-CORS](https://flask-cors.readthedocs.io/)
- [ReportLab](https://www.reportlab.com/) (para geração de PDFs)

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)

---

## 💡 Funcionalidades

- Cadastro de alunos com nome, idade, curso e nota
- Listagem de todos os alunos cadastrados
- Geração de relatório em **PDF** com os dados dos alunos
- Interface amigável e responsiva

---

## 🚀 Como executar o projeto

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # (Windows)
pip install -r requirements.txt
python app.py
