<template>
  <div class="wrapper">
    <monthly-activity
      v-for="activity in activities"
      :key="activity.id"
      :id="activity.id"
      :title="activity.title"
      :backgroundColor="activity.backgroundColor"
      :image="activity.topImage"
      :monthly="activity.timeframes.monthly"
    ></monthly-activity>
  </div>
</template>

<script>
import MonthlyActivity from "./MonthlyActivity.vue";
export default {
  components: {
    MonthlyActivity,
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