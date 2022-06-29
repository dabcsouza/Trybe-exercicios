def print_greater_name(name_list):
    len_dic_name = dict()
    for name in name_list:
        len_dic_name[name] = len(name)
    greater_len = max(len_dic_name, key=len_dic_name.get)
    print(f"lista de nomes: {name_list}")
    print(f"O nome com maior número de caracteres é: {greater_len}")

name_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana", "Maria"]
print_greater_name(name_list)