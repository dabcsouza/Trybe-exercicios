import json

def main():
    with open("pokemon-info.json") as pokemon_json:
        pokemons = json.load(pokemon_json)["results"]

    grass_type_pokemons = [
          pokemon for pokemon in pokemons
              if "Grass" in pokemon["type"]
    ]
    
    with open("grass_pokemons.json", "w") as file:
        json_to_write = json.dumps(
            grass_type_pokemons
        )
        file.write(json_to_write)


main()