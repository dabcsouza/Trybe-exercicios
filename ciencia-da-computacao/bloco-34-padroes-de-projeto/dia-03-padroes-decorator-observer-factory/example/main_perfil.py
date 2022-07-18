from perfil import Perfil
from notificador import NotificadorMensagem, NotificadorEmail, NotificadorPushNotification


seguidores_mensagem = ["Carlos", "Claudia", "Marcia", "Rodolfo"]
seguidores_push_notification = ["Carlos"]
seguidores_email = ["Claudia", "Marcia"]


meu_perfil = Perfil()
NotificadorMensagem(meu_perfil, seguidores_mensagem)
NotificadorPushNotification(meu_perfil, seguidores_push_notification)
NotificadorEmail(meu_perfil, seguidores_mensagem)

meu_perfil.adicionar_post("Olá universo da programação")

