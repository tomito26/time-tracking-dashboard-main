import Exercise from "../assets/images/icon-exercise.svg";
import Play from "../assets/images/icon-play.svg";
import Selfcare from "../assets/images/icon-self-care.svg";
import Social from "../assets/images/icon-social.svg";
import Study from "../assets/images/icon-study.svg";
import Work from "../assets/images/icon-work.svg";

export const activities = [
  {
    id: 1,
    title: "Work",
    topImage: Work,
    backgroundColor: "hsl(15, 100%, 70%)",
    timeframes: {
      daily: { current: 5, previous: 7 },
      weekly: { current: 32, previous: 36 },
      monthly: { current: 103, previous: 128 },
    },
  },
  {
    id: 2,
    title: "Play",
    topImage: Play,
    backgroundColor: "hsl(195, 74%, 62%)",
    timeframes: {
      daily: { current: 1, previous: 2 },
      weekly: { current: 10, previous: 8 },
      monthly: { current: 23, previous: 29 },
    },
  },
  {
    id: 3,
    title: "Study",
    topImage: Study,
    backgroundColor: "hsl(348, 100%, 68%)",
    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 4, previous: 7 },
      monthly: { current: 13, previous: 19 },
    },
  },
  {
    id: 4,
    title: "Exercise",
    topImage: Exercise,
    backgroundColor: "hsl(145, 58%, 55%)",
    timeframes: {
      daily: { current: 1, previous: 1 },
      weekly: { current: 4, previous: 5 },
      monthly: { current: 11, previous: 18 },
    },
  },
  {
    id: 5,
    title: "Social",
    topImage: Social,
    backgroundColor: "hsl(264, 64%, 52%)",
    timeframes: {
      daily: { current: 1, previous: 3 },
      weekly: { current: 5, previous: 10 },
      monthly: { current: 21, previous: 23 },
    },
  },
  {
    id: 6,
    title: "Self Care",
    topImage: Selfcare,
    backgroundColor: "hsl(43, 84%, 65%)",
    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 2, previous: 2 },
      monthly: { current: 7, previous: 11 },
    },
  },
];
