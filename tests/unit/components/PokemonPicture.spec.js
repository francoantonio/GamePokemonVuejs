import { shallowMount } from "@vue/test-utils";

import PokemonPicture from "@/components/PokemonPicture.vue";
describe("PokemonPicture", () => {
  let wrapper;

  test("should toMatchSnapshot", () => {
    wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen oculta y el pokemon 100", () => {
    wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });
    const img = wrapper.find("img");
    expect(img.classes("pokemon-hidden")).toBe(true);
    expect(img.classes("fade-in")).toBe(false);
    expect(wrapper.vm.pokemonId).toBe(100);
    expect(img.attributes("src").includes("100.svg")).toBeTruthy();
  });

  test("debe de mostrar el pokemon si showPokemon : true", () => {
    wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 50,
        showPokemon: true,
      },
    });
    const img = wrapper.find("img");
    expect(img.classes("pokemon-hidden")).toBe(false);
    expect(img.classes("fade-in")).toBe(true);
    expect(wrapper.find(".fade-in")).toBeTruthy();
  });

  test("valor del method computed is ''", () => {
    wrapper = shallowMount(PokemonPicture, {});
    expect(wrapper.vm.imgSrc).toBe("");
  });
});
