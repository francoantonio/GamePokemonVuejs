import { shallowMount } from "@vue/test-utils";
import Pokemonpage from "@/pages/PokemonPage";
import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonPaged", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Pokemonpage);
  });

  test("debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de llamar mixPokemonArray al montar", () => {
    const mixPokemonArraySpy = jest.spyOn(
      Pokemonpage.methods,
      "mixPokemonArray"
    );
    wrapper = shallowMount(Pokemonpage);

    expect(mixPokemonArraySpy).toHaveBeenCalled();
    expect(mixPokemonArraySpy).toHaveBeenCalledTimes(1);
  });

  test("Debe de hacer match co el snapshot cuando cargan los pokemons", () => {
    const wrapper = shallowMount(Pokemonpage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          shoAnswer: false,
          message: "",
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Debe de mostrar los componentes de pokemonPicture y PokemonOptions", () => {
    const wrapper = shallowMount(Pokemonpage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          shoAnswer: false,
          message: "",
        };
      },
    });

    const pokemonPicture = wrapper.find("[data-test=picture]");
    const pokemonOptions = wrapper.find("[data-test=options]");

    expect(pokemonPicture.exists()).toBeTruthy();
    expect(pokemonOptions.exists()).toBeTruthy();

    expect(pokemonPicture.attributes("pokemonid")).toBe("1");
    expect(pokemonOptions.attributes("pokemons")).toBeTruthy();
  });

  test("Debe de mostrar la etiqeta h2 en la vista con la leyenda ganaste.", async () => {
    const wrapper = shallowMount(Pokemonpage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          shoAnswer: false,
          message: "",
        };
      },
    });
    await wrapper.vm.checkAnswer(1);

    const h2 = wrapper.find("h2");
    expect(h2).toBeTruthy();
    expect(h2.text()).toBe(`Ganaste, ${pokemons[0].name}`);
    expect(wrapper.vm.showPokemon).toBeTruthy();
  });

  test("Debe de mostrar la etiqeta h2 en la vista con la leyenda 'Oops, era'.", async () => {
    const wrapper = shallowMount(Pokemonpage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          shoAnswer: false,
          message: "",
        };
      },
    });
    await wrapper.vm.checkAnswer(2);

    const h2 = wrapper.find("h2");
    expect(h2).toBeTruthy();
    expect(h2.text()).toBe(`Oops, era ${pokemons[0].name}`);
    expect(wrapper.vm.showPokemon).toBeTruthy();
  });
});
