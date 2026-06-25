<template>
  <div class="container">
    <the-header
      @change-view="currentView = $event"
      :current-view="currentView"
    ></the-header>
    <activities-grid :timeframe="currentView"></activities-grid>
  </div>
</template>

<script>
import { activities } from "./data/activities.js";
import ActivitiesGrid from "./components/ActivitiesGrid.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: { TheHeader, ActivitiesGrid },
  data() {
    return {
      currentView: "daily",
    };
  },
  provide() {
    return {
      activities,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: hsl(226, 43%, 10%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
  padding: 2rem 1rem;
}
.container {
  max-width: 900px;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 2rem;
}
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    grid-row-gap: 1.5rem;
  }
}
</style>
