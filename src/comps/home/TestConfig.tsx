import styles from "../../styles/home/TestConfig.module.css";
import {
  TestMode,
  TestConfigState,
  selectTestConfig,
  TimeDuration,
  WordCount,
  setMode,
  setTimeDuration,
  setWordCount,
  setIsNumActive,
  setIsPunctActive,
} from "../../store/slices/TestConfigSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

function TestConfig() {
  const testConfigState: TestConfigState = useAppSelector(selectTestConfig);
  const dispatch = useAppDispatch();

  const handleSetMode = (mode: TestMode) => {
    dispatch(setMode(mode));
  };

  const handleSetTimeDuration = (timeDuration: TimeDuration) => {
    dispatch(setTimeDuration(timeDuration));
  };

  const handleSetWordCount = (wordCount: WordCount) => {
    dispatch(setWordCount(wordCount));
  };

  const toggleIsPuntActive = () => {
    dispatch(setIsPunctActive(!testConfigState.isPunctActive));
  };

  const toggleIsNumActive = () => {
    dispatch(setIsNumActive(!testConfigState.isNumActive));
  };

  return (
    <div className={`${styles.container} flexCenter`}>
      <div className={`${styles.testConfig} flexRow cursorPointer`}>
        <section className={styles.card}>
          <span
            className={`${styles.subcard} ${testConfigState.isPunctActive && styles.subcardActive}`}
            onClick={() => toggleIsPuntActive()}
          >
            punctuation
          </span>
          <span
            className={`${styles.subcard} ${testConfigState.isNumActive && styles.subcardActive}`}
            onClick={() => toggleIsNumActive()}
          >
            numbers
          </span>
        </section>

        <section className={styles.card}>
          <span
            className={`${styles.subcard} ${testConfigState.mode === TestMode.TIME && styles.subcardActive}`}
            onClick={() => {
              handleSetMode(TestMode.TIME);
            }}
          >
            {TestMode.TIME}
          </span>
          <span
            className={`${styles.subcard} ${testConfigState.mode === TestMode.WORD && styles.subcardActive}`}
            onClick={() => {
              handleSetMode(TestMode.WORD);
            }}
          >
            {TestMode.WORD}
          </span>
        </section>

        {testConfigState.mode == TestMode.TIME && (
          <section className={styles.card}>
            <span
              className={`${styles.subcard} ${testConfigState.timeDuration === TimeDuration.THIRTY && styles.subcardActive}`}
              onClick={() => {
                handleSetTimeDuration(TimeDuration.THIRTY);
              }}
            >
              {TimeDuration.THIRTY}
            </span>
            <span
              className={`${styles.subcard} ${testConfigState.timeDuration === TimeDuration.SIXTY && styles.subcardActive}`}
              onClick={() => {
                handleSetTimeDuration(TimeDuration.SIXTY);
              }}
            >
              {TimeDuration.SIXTY}
            </span>
            <span
              className={`${styles.subcard} ${testConfigState.timeDuration === TimeDuration.NINTY && styles.subcardActive}`}
              onClick={() => {
                handleSetTimeDuration(TimeDuration.NINTY);
              }}
            >
              {TimeDuration.NINTY}
            </span>
            <span
              className={`${styles.subcard} ${testConfigState.timeDuration === TimeDuration.ONE_TWENTY && styles.subcardActive}`}
              onClick={() => {
                handleSetTimeDuration(TimeDuration.ONE_TWENTY);
              }}
            >
              {TimeDuration.ONE_TWENTY}
            </span>
          </section>
        )}

        {testConfigState.mode == TestMode.WORD && (
          <section className={styles.card}>
            <span
              className={`${styles.subcard} ${testConfigState.wordCount === WordCount.TWENTY_FIVE && styles.subcardActive}`}
              onClick={() => {
                handleSetWordCount(WordCount.TWENTY_FIVE);
              }}
            >
              {WordCount.TWENTY_FIVE}
            </span>
            <span
              className={`${styles.subcard} ${testConfigState.wordCount === WordCount.FIFTY && styles.subcardActive}`}
              onClick={() => {
                handleSetWordCount(WordCount.FIFTY);
              }}
            >
              {WordCount.FIFTY}
            </span>
            <span
              className={`${styles.subcard} ${testConfigState.wordCount === WordCount.SEVENTY_FIVE && styles.subcardActive}`}
              onClick={() => {
                handleSetWordCount(WordCount.SEVENTY_FIVE);
              }}
            >
              {WordCount.SEVENTY_FIVE}
            </span>
            <span
              className={`${styles.subcard} ${testConfigState.wordCount === WordCount.HUNDRED && styles.subcardActive}`}
              onClick={() => {
                handleSetWordCount(WordCount.HUNDRED);
              }}
            >
              {WordCount.HUNDRED}
            </span>
          </section>
        )}
      </div>
    </div>
  );
}

export default TestConfig;
