<template>
  <div class="wrapper">
    <daily-activity
      v-for="activity in activities"
      :key="activity.id"
      :id="activity.id"
      :title="activity.title"
      :daily="activity.timeframes.daily"
      :image="activity.topImage"
      :backgroundColor="activity.backgroundColor"
    ></daily-activity>
  </div>
</template>
<script>
import DailyActivity from "./DailyActivity.vue";
export default {
  components: {
    DailyActivity,
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