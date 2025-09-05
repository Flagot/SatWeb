import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSections = createAsyncThunk(
  "exams/fetchExams",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:4000/api/sat/sections");
      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const sectionsSlice = createSlice({
  name: "sections",
  initialState: {
    sections: [],
  },
  reducers: {},
});

export default sectionsSlice.reducer;
