<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es ese Pokémon?</h1>
    <PokemonPicture
      data-test="picture"
      :pokemonId="pokemon.id"
      :showPokemon="showPokemon"
    />
    <PokemonOption
      data-test="options"
      :pokemons="pokemonArr"
      @selection="checkAnswer"
    />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
  </div>
</template>

<script>
import PokemonOption from "@/components/PokemonOption.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: { PokemonPicture, PokemonOption },
  data() {
    return {
      pokemonArr: [],
      pokemon: {},
      showPokemon: false,
      shoAnswer: false,
      message: "",
    };
  },
  methods: {
    newGame() {
      (this.pokemonArr = []),
        (this.pokemon = {}),
        (this.showPokemon = false),
        (this.showAnswer = false),
        (this.message = ""),
        this.mixPokemonArray();
    },
    checkAnswer(pokemonId) {
      if (this.showPokemon) return;
      this.message =
        pokemonId == this.pokemon.id
          ? `Ganaste, ${this.pokemon.name}`
          : `Oops, era ${this.pokemon.name}`;
      this.showAnswer = true;
      this.showPokemon = true;
    },
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions(this.pokemonArr);

      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
