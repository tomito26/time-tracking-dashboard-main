<template>
  <div class="wrapper">
    <weekly-activity
      v-for="activity in activities"
      :key="activity.id"
      :id="activity.id"
      :title="activity.title"
      :backgroundColor="activity.backgroundColor"
      :image="activity.topImage"
      :weekly="activity.timeframes.weekly"
    ></weekly-activity>
  </div>
</template>
<script>
import WeeklyActivity from "./WeeklyActivity.vue";
export default {
  components: {
    WeeklyActivity,
  },
  inject: {
    activities: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
}
</style>