class Perfil:
    def __init__(self):
        self.__sistemas_de_notificacao = []
        self.__new_post = None

    def adicionar_sistema_de_notificacao(self, sistema):
        self.__sistemas_de_notificacao.append(sistema)

    def remover_sistema_de_notificacao(self, sistema):
        try:
            self.__sistemas_de_notificacao.remove(sistema)
        except ValueError:
            print("Sistema de notificação não encontrado")


    def notificar_todos(self):
        for sistema in self.__sistemas_de_notificacao:
            sistema.notificar()
    
    def adicionar_post(self, post):
        self.__new_post = post
        self.mostrar_post()
        self.notificar_todos()
    
    def mostrar_post(self):
        print(f"\nPost: {self.__new_post}\n")