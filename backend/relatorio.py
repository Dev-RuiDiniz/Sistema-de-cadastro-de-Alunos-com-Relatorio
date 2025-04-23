from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas


def gerar_relatorio_pdf(alunos, nome_arquivo="relatorio_alunos.pdf"):
    pdf = canvas.Canvas(nome_arquivo, pagesize=A4)
    largura, altura = A4

    pdf.setTitle("Relatório de Alunos")
    pdf.setFont("Helvetica-Bold", 16)
    pdf.drawString(200, altura - 50, "Relatório de Alunos")

    pdf.setFont("Helvetica", 12)
    y = altura - 100

    for aluno in alunos:
        status = "Aprovado" if aluno.aprovado else "Reprovado"
        linha = f"Nome: {aluno.nome} | Idade: {aluno.idade} | Média: {aluno.media:.2f} | Situação: {status}"
        pdf.drawString(50, y, linha)
        y -= 20

        if y < 100:
            pdf.showPage()
            y = altura - 50
            pdf.setFont("Helvetica", 12)

    pdf.save()
    print(f"\n📄 Relatório PDF gerado com sucesso: {nome_arquivo}")