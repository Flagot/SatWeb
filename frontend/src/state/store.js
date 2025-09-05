import { configureStore } from "@reduxjs/toolkit";
import examsReducer from "./exam/examSlice";
import sectionsReducer from "./section/sectionSlice";

const store = configureStore({
  reducer: {
    exams: examsReducer,
    sections: sectionsReducer,
  },
});

export default store;
