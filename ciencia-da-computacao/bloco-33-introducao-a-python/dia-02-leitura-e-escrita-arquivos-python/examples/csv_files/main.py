import csv

with open("graduacao_unb.csv") as graduacao_unb:
    graduacao_reader = csv.reader(graduacao_unb, delimiter=",", quotechar='"')
    header, *data = graduacao_reader


print(header)
