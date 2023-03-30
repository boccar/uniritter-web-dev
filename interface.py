import sys
from PyQt5.QtCore import Qt
from PyQt5.QtGui import QPixmap
from PyQt5.QtWidgets import (
    QApplication, QWidget, QLabel, QLineEdit, QPushButton, QVBoxLayout, QHBoxLayout
)

import tensorflow as tf
import numpy as np

# Define a função para gerar uma imagem a partir de uma descrição de texto
def generate_image(model, caption):
    noise = tf.random.normal([1, 100])
    caption = tf.convert_to_tensor(caption)
    generated_image = model(noise, caption, training=False)
    return generated_image.numpy().reshape(28, 28)

# Define a classe da interface gráfica
class MainWindow(QWidget):
    def __init__(self):
        super().__init__()

        # Define os widgets
        self.caption_label = QLabel('Descrição:')
        self.caption_input = QLineEdit()
        self.generate_button = QPushButton('Gerar')
        self.image_label = QLabel()
        self.image_label.setAlignment(Qt.AlignCenter)

        # Define o layout
        self.layout = QVBoxLayout()
        self.layout.addWidget(self.caption_label)
        self.layout.addWidget(self.caption_input)
        self.layout.addWidget(self.generate_button)
        self.layout.addWidget(self.image_label)
        self.setLayout(self.layout)

        # Conecta o botão ao evento de gerar imagem
        self.generate_button.clicked.connect(self.generate_image)

        # Carrega o modelo treinado
        self.model = tf.keras.models.load_model('mnist_generator.h5')

    # Define a função para gerar a imagem
    def generate_image(self):
        caption = self.caption_input.text()
        image = generate_image(self.model, caption)
        pixmap = QPixmap.fromImage(
            QImage(
                image.data.tobytes(), 28, 28, QImage.Format_Grayscale8
            ).scaled(224, 224, Qt.KeepAspectRatio)
        )
        self.image_label.setPixmap(pixmap)

# Cria a aplicação e mostra a janela
if __name__ == '__main__':
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec_())
