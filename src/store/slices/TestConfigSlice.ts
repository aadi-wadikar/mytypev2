import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum TestMode {
  TIME = "time",
  WORD = "word",
}

export enum TimeDuration {
  THIRTY = 30,
  SIXTY = 60,
  NINTY = 90,
  ONE_TWENTY = 120,
}

export enum WordCount {
  TWENTY_FIVE = 25,
  FIFTY = 50,
  SEVENTY_FIVE = 75,
  HUNDRED = 100,
}

export type TestConfigState = {
  mode: TestMode;
  timeDuration: TimeDuration;
  wordCount: WordCount;
  isPunctActive: boolean;
  isNumActive: boolean;
};

const initialTestConfigState: TestConfigState = {
  mode: TestMode.TIME,
  timeDuration: TimeDuration.THIRTY,
  wordCount: WordCount.TWENTY_FIVE,
  isPunctActive: false,
  isNumActive: false,
};

const testConfigSlice = createSlice({
  name: "testConfig",
  initialState: initialTestConfigState,
  reducers: {
    setMode: (state, action: PayloadAction<TestConfigState["mode"]>) => {
      state.mode = action.payload;
    },
    setTimeDuration: (
      state,
      action: PayloadAction<TestConfigState["timeDuration"]>,
    ) => {
      state.timeDuration = action.payload;
    },
    setWordCount: (
      state,
      action: PayloadAction<TestConfigState["wordCount"]>,
    ) => {
      state.wordCount = action.payload;
    },
    setIsPunctActive: (state, action: PayloadAction<boolean>) => {
      state.isPunctActive = action.payload;
    },
    setIsNumActive: (state, action: PayloadAction<boolean>) => {
      state.isNumActive = action.payload;
    },
  },
});

export const {
  setMode,
  setTimeDuration,
  setWordCount,
  setIsPunctActive,
  setIsNumActive,
} = testConfigSlice.actions;

export const selectTestConfig = (state: RootState) => state.testConfig;

export default testConfigSlice.reducer;
