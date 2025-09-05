import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch exams
export const fetchExams = createAsyncThunk(
  "exams/fetchExams",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:4000/api/sat/exams");
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

const examsSlice = createSlice({
  name: "exams",
  initialState: {
    exams: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExams.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExams.fulfilled, (state, action) => {
        state.loading = false;
        state.exams = action.payload;
      })
      .addCase(fetchExams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch exams";
      });
  },
});

export default examsSlice.reducer;
