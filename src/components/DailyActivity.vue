<template>
  <div class="card" :style="{ 'background-color': backgroundColor }">
    <div class="card-header">
      <img :src="image" alt="" />
    </div>
    <div class="card-body">
      <div class="card-wrapper">
        <h2>{{ title }}</h2>
        <div class="menu">
          <font-awesome-icon
            icon="fa-ellipsis"
            class="ellipsis"
          ></font-awesome-icon>
        </div>
      </div>
      <p class="current">{{ daily.current }}hrs</p>
      <p class="previous">Yesterday - {{ daily.previous }}hr</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    daily: {
      type: Object,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  width: 160px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 100px;
}
.card-header {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 30px;
}
.card-header img {
  height: 40px;
  object-fit: cover;
  float: right;
}
.card-body {
  border-radius: 10px;
  background-color: hsl(235, 46%, 20%);
  height: calc(150px - 20px);
  position: relative;
  z-index: 1;
  cursor: pointer;
}
.card-body:hover {
  background-color: hsl(235, 45%, 30%);
}
.card-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 10px;
}
.card-wrapper h2 {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}
.ellipsis {
  color: hsl(236, 100%, 87%);
  cursor: pointer;
}
.ellipsis:hover,
.ellipsis:active {
  color: #fff;
}
.card-body .current {
  font-size: 40px;
  color: #fff;
  margin: 0 15px 5px;
  font-weight: 300;
}
.card-body .previous {
  color: hsl(236, 100%, 87%);
  font-size: 13px;
  margin: 0 15px;
}
</style>
