import random

random_number = random.randint(1,10)
guess = ""

while guess != random_number:
    guess = int(input("Qual é seu palpite? "))

print(f"Parabéns, você acertou! O número era {random_number}")