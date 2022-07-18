import sys
count = 0

if __name__ == "__main__":
    for argument in sys.argv:
        print(f"Received {count + 1} -> ", argument)
        count += 1
print(f"{count} argumentos")