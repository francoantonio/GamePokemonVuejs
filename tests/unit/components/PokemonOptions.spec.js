import PokemonOptions from "@/components/PokemonOption";
import { shallowMount } from "@vue/test-utils";
import { pokemons } from "../mocks/pokemons.mock";
describe("PokemonOptions", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: pokemons,
      },
    });
  });

  test("should match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de mostrar las 4 opciones correctamente", () => {
    const liArray = wrapper.findAll("li");

    expect(liArray).toHaveLength(4);
    liArray.forEach((li, i) => {
      expect(li.text()).toEqual(pokemons[i].name);
    });
  });

  test("debe de emitir 'Selection' con sus respectivos parametros al hacer click", () => {
    const [li, li2, li3, li4] = wrapper.findAll("li");

    li.trigger("click");
    li2.trigger("click");
    li3.trigger("click");
    li4.trigger("click");

    expect(wrapper.emitted("selection")).toBeTruthy();
    expect(wrapper.emitted("selection")).toHaveLength(4);
    expect(wrapper.emitted("selection")[0]).toStrictEqual([1]);
    expect(wrapper.emitted("selection")[1]).toStrictEqual([2]);
    expect(wrapper.emitted("selection")[2]).toStrictEqual([3]);
    expect(wrapper.emitted("selection")[3]).toStrictEqual([4]);
  });
});
