// const data = require("./data.json"); node js

let play_current = document.querySelector("#play-current");
let work_current = document.querySelector("#work-current");
let study_current = document.querySelector("#study-current");
let social_current = document.querySelector("#social-current");
let self_care_current = document.querySelector("#self-care-current");
let exercise_current = document.querySelector("#exercise-current");

let daily_state = true;
let weekly_state = false;
let month_state = false;
let data_arr = [];
const current_arr = document.querySelectorAll(".time");
const previous_arr = document.querySelectorAll(".prev");

const btn_arr = document.querySelectorAll(".time-btn");

const daily_btn = document.querySelector("#daily-btn");
const weekly_btn = document.querySelector("#weekly-btn");
const monthly_btn = document.querySelector("#monthly-btn");

// function clicked(element) {
//   element.style.color = "white";
// }

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data_arr = data;
    daily_btn.style.color = "white";
    current_arr[i].innerText = data[i].timeframes.daily.current + "hrs";

    // work_current.innerText = data[0].timeframes.daily.current + "hrs";
    // play_current.innerText = data[1].timeframes.daily.current + "hrs";
    // study_current.innerText = data[2].timeframes.daily.current + "hrs";
    // exercise_current.innerText = data[3].timeframes.daily.current + "hrs";
    // social_current.innerText = data[4].timeframes.daily.current + "hrs";
    // self_care_current.innerText = data[5].timeframes.daily.current + "hrs";
    for (let i = 0; i < 6; i++) {
      previous_arr[i].innerText =
        "Previous " + data[i].timeframes.daily.previous + "hrs";
    }
  });

// const arr = JSON.parse(data);

daily_btn.addEventListener("click", (e) => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      daily_btn.style.color = "white";
      weekly_btn.style.color = "#6668ae";
      monthly_btn.style.color = "#6668ae";
      daily_state = true;
      weekly_state = false;
      month_state = false;
      for (let i = 0; i < 6; i++) {
        current_arr[i].innerText = data[i].timeframes.daily.current + "hrs";
        previous_arr[i].innerText =
          "Previous " + data[i].timeframes.daily.previous + "hrs";
      }
    });
});

weekly_btn.addEventListener("click", (e) => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      daily_btn.style.color = "#6668ae";
      weekly_btn.style.color = "white";
      monthly_btn.style.color = "#6668ae";
      daily_state = false;
      weekly_state = true;
      month_state = false;
      for (let i = 0; i < 6; i++) {
        current_arr[i].innerText = data[i].timeframes.weekly.current + "hrs";
        previous_arr[i].innerText =
          "Previous " + data[i].timeframes.weekly.previous + "hrs";
      }
    });
});

monthly_btn.addEventListener("click", (e) => {
  daily_btn.style.color = "#6668ae";
  weekly_btn.style.color = "#6668ae";
  monthly_btn.style.color = "white";
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      daily_state = false;
      weekly_state = false;
      month_state = true;
      for (let i = 0; i < 6; i++) {
        current_arr[i].innerText = data[i].timeframes.monthly.current + "hrs";
        previous_arr[i].innerText =
          "Previous " + data[i].timeframes.monthly.previous + "hrs";
      }
    });
});

daily_btn.addEventListener("mouseover", (e) => {
  daily_btn.style.color = "white";
});

daily_btn.addEventListener("mouseout", (e) => {
  if (!daily_state) {
    daily_btn.style.color = "#6668ae";
  }
});

weekly_btn.addEventListener("mouseover", (e) => {
  weekly_btn.style.color = "white";
});

weekly_btn.addEventListener("mouseout", (e) => {
  if (!weekly_state) weekly_btn.style.color = "#6668ae";
});

monthly_btn.addEventListener("mouseover", (e) => {
  monthly_btn.style.color = "white";
});

monthly_btn.addEventListener("mouseout", (e) => {
  if (!month_state) monthly_btn.style.color = "#6668ae";
});
