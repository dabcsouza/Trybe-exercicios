from liquidificador import Liquidificador

liquidificador_azul = Liquidificador('Azul', 300, 127)


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def __str__(self):
        return f"""
        Nome: {self.nome}
        Saldo bancário: {self.saldo_na_conta}
        """

    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def tirar_saldo(self):
        print(self.saldo_na_conta)


pessoa_cozinheira = Pessoa("Jacquin", 3000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_azul)
pessoa_cozinheira.tirar_saldo()
print(pessoa_cozinheira)
