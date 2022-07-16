class Liquidificador:
    def __init__(self, cor, potencia, voltagem):
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.preco = 300

    def ligar(self, velocidade):
        print('ligando......')
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) *
            (self.__velocidade / self.__velocidade_maxima)
        )
        self.__ligado = True

    def desligar(self):
        print('desligando....')
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    def qual_cor(self):
        return self.__cor
