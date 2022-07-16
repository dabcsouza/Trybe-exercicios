from calculadora import Calculadora


class CalculadoraDecoradaIngles:
    def __init__(self, calculator):
        self.__calculator = calculator

    def convert_number(self, number):
        if not isinstance(number, str):
            return number

        return {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6,
                'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10}.get(number)

    def soma(self, x, y):
        return self.__calculator.soma(
            self.convert_number(x),
            self.convert_number(y)
        )


calculadora = Calculadora()
calculadora_decorada = CalculadoraDecoradaIngles(calculadora)
print(calculadora_decorada.soma(2, 3))
print(calculadora_decorada.soma('one', 'eight'))
