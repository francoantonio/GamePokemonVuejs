import getPokemonOptions, {
  getPokemon,
  getPokemonNames,
} from "@/helpers/getPokemonOptions";
import { pokemons } from "../mocks/pokemons.mock";
describe("getPokemonOption", () => {
  test("debe de regresar un arreglo de numeros con una longitud de 650", () => {
    const pokemon = getPokemon();
    expect(pokemon.length).toEqual(650);
    expect(pokemon[0]).toBe(1);
    expect(pokemon[649]).toBe(650);
  });

  test("debe de retornar un arreglo de 4 elementos con nombre de 4 pokemones", async () => {
    const pokemon = await getPokemonNames([1, 2, 3, 4]);
    expect(pokemon).toStrictEqual(pokemons);
  });

  test("getPokemonOptions debe de retornar un arreglo mezclado", async () => {
    const pokemon = await getPokemonOptions();
    expect(pokemon.length).toEqual(4);
    expect(pokemon).toEqual([
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
    ]);
  });
});
