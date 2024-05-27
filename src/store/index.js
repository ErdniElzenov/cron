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

const loadingStore = createStore(false).on(
  fetchCasesFx.pending,
  (_, pending) => pending
);

const errorStore = createStore(null)
  .on(fetchCasesFx.failData, (_, error) => error)
  .reset(fetchCasesFx);

export { fetchCasesFx, casesStore, loadingStore, errorStore };
