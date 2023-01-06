<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const { loading, error, result } = useQuery(CHARACTERS_QUERY);
</script>
<template>
  <div class="about">
    <h1>Characters from Rick and Morty</h1>

    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <p
      v-else
      v-for="character in result.characters.results"
      :key="character.id"
    >
      {{ character.name }}
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
