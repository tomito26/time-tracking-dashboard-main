<template>
  <div class="wrapper">
    <activity-card
      v-for="activity in activities"
      :key="activity.id"
      :id="activity.id"
      :title="activity.title"
      :data="activity.timeframes[timeframe]"
      :image="activity.topImage"
      :backgroundColor="activity.backgroundColor"
      :timeframe="timeframe"
    ></activity-card>
  </div>
</template>

<script>
import ActivityCard from "./ActivityCard.vue";
export default {
  components: { ActivityCard },
  inject: {
    activities: {
      type: Object,
      required: true,
    },
  },
  props: {
    timeframe: {
      type: String,
      required: true,
      validator: (v) => ["daily", "weekly", "monthly"].includes(v),
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
@media (max-width: 768px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
