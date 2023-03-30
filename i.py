import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel, QLineEdit, QPushButton

class MyWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        # Configuração da janela principal
        self.setGeometry(100, 100, 400, 200)
        self.setWindowTitle('Cadastro de Nome e Idade')

        # Criação do rótulo "Nome" e da caixa de texto correspondente
        self.lbl_nome = QLabel('Nome:', self)
        self.lbl_nome.move(50, 50)
        self.txt_nome = QLineEdit(self)
        self.txt_nome.move(150, 50)

        # Criação do rótulo "Idade" e da caixa de texto correspondente
        self.lbl_idade = QLabel('Idade:', self)
        self.lbl_idade.move(50, 100)
        self.txt_idade = QLineEdit(self)
        self.txt_idade.move(150, 100)

        # Criação do botão "Salvar"
        self.btn_salvar = QPushButton('Salvar', self)
        self.btn_salvar.move(150, 150)
        self.btn_salvar.clicked.connect(self.salvar_dados)

        # Criação do rótulo para exibir os dados cadastrados
        self.lbl_resultado = QLabel(self)
        self.lbl_resultado.move(50, 180)
        self.lbl_resultado.resize(300, 20)

    def salvar_dados(self):
        # Obtém o nome e a idade inseridos pelo usuário
        nome = self.txt_nome.text()
        idade = self.txt_idade.text()

        # Exibe os dados na interface
        self.lbl_resultado.setText(f'Nome: {nome}, Idade: {idade}')

if __name__ == '__main__':
    # Criação da aplicação PyQt5
    app = QApplication(sys.argv)

    # Criação da janela principal
    window = MyWindow()
    window.show()

    # Inicialização da aplicação PyQt5
    sys.exit(app.exec_())
