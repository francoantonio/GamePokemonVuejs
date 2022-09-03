<template>
  <div class="pokemon-container">
    <img
      :src="imgSrc"
      v-bind:class="{ 'fade-in': showPokemon, 'pokemon-hidden': !showPokemon }"
      alt="pokemon"
    />
  </div>
</template>

<script>
export default {
  name: "PokemonPicture",

  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return this.pokemonId
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        : "";
    },
  },
};
</script>

<style scoped>
.pokemon-hidden {
  filter: brightness(0);
}
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
