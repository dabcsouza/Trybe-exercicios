from abc import ABC, abstractmethod
from typing import Type

from perfil import Perfil


class Notificador(ABC):
    @abstractmethod
    def notificar(self):
        raise NotImplementedError


class NotificadorMensagem(Notificador):
    def __init__(self, perfil: type[Perfil], seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Notificando via Mensagens: {self.seguidores}")


class NotificadorPushNotification(Notificador):
    def __init__(self, perfil: Type[Perfil], seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Disparando Push Notification para: {self.seguidores}")


class NotificadorEmail(Notificador):
    def __init__(self, perfil: type[Perfil], seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Disparando Email's para: {self.seguidores}")
