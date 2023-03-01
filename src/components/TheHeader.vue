<template>
  <header>
    <div class="profile-details">
      <div class="profile-image">
        <img :src="image" alt="image-of-jeremy" />
      </div>
      <p>Report for <span>Jeremy Robson</span></p>
    </div>
    <nav>
      <ul>
        <li
          @click="$emit('show-daily-cmp', 'daily-activities')"
          :class="{ active: displayComponent === 'daily-activities' }"
        >
          Daily
        </li>
        <li
          @click="$emit('show-weekly-cmp', 'weekly-activities')"
          :class="{ active: displayComponent === 'weekly-activities' }"
        >
          Weekly
        </li>
        <li
          @click="$emit('show-monthly-cmp', 'monthly-activities')"
          :class="{ active: displayComponent === 'monthly-activities' }"
        >
          Monthly
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import profileImage from "../assets/images/image-jeremy.png";
export default {
  emits: {
    "show-daily-cmp": function (cmp) {
      if (cmp) {
        return true;
      } else {
        return false;
      }
    },
    "show-monthly-cmp": function (cmp) {
      if (cmp) {
        return true;
      } else {
        return false;
      }
    },
  },
  props: {
    displayComponent: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      image: profileImage,
    };
  },
};
</script>

<style scoped>
header {
  background-color: hsl(235, 46%, 20%);
  width: 200px;
  height: 350px;
  border-radius: 10px;
}
.profile-details {
  height: 230px;
  background-color: hsl(246, 80%, 60%);
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.profile-image {
  height: 60px;
  width: 60px;
  margin: 10px 10px 20px;
}
.profile-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border: 2px solid #fff;
  border-radius: 100%;
}
.profile-details p {
  color: #fff;
  margin-left: 10px;
  font-size: 13px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  color: hsl(236, 100%, 87%);
}
.profile-details p span {
  font-size: 26px;
  color: #fff;
}
nav {
  margin-left: 20px;
}
nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
}
nav ul li {
  color: hsl(235, 45%, 61%);
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 400;
  display: inline-block;
}
nav ul li:hover,
nav ul li:active {
  color: #fff;
}
.active {
  color: #fff;
}
</style>