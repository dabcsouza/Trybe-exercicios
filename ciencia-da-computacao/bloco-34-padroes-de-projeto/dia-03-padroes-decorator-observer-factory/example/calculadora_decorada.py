from calculadora import Calculadora


class CalculadoraDecorada:
    def __init__(self, calculadora):
        self.calculadora = calculadora

    def converterNumero(self, numero):
        if not isinstance(numero, str):
            return numero
        return {
            "um": 1, "dois": 2, "três": 3, "quatro": 4, "cinco": 5,
            "seis": 6, "sete": 7, "oito": 8, "nove": 9, "dez": 10,
        }.get(numero)

    def soma(self, x, y):
        return self.calculadora.soma(
            self.converterNumero(x),
            self.converterNumero(y),
        )


calculadora = Calculadora()
calculadora_decorada = CalculadoraDecorada(calculadora)
print(calculadora_decorada.soma(2, 3))
print(calculadora_decorada.soma('um', 'oito'))
