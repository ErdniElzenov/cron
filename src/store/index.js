// src/store/index.js
import { createStore, createEffect } from "effector";
import axios from "axios";

const fetchCasesFx = createEffect(async () => {
  const response = await axios.get("https://services.it-cron.ru/api/cases", {
    headers: {
      accept: "text/plain",
      "Accept-language": "ru",
    },
  });
  return response.data;
});

const casesStore = createStore([]).on(
  fetchCasesFx.doneData,
  (_, cases) => cases
);

export { fetchCasesFx, casesStore };
