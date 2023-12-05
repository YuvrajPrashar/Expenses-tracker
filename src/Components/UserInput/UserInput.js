import { useState } from "react";

const IntitialState = {
  "current-savings": 1000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(IntitialState);

  const SubmitBtnHandler = (e) => {
    e.preventDefault();
    props.onClaculate(userInput);
  };

  const ResetBtnHandler = () => {
    setUserInput(IntitialState);
  };
  
const InputChangeHandler = (input, value) => {
    setUserInput((prevInp) => {
      return {
        ...prevInp,
        [input]: +value,
      };
    });
  };

  return (
    <form className="form" onSubmit={SubmitBtnHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            onChange={(e) => {
              InputChangeHandler("current-savings", e.target.value);
            }}
            id="current-savings"
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            onChange={(e) => {
              InputChangeHandler("yearly-contribution", e.target.value);
            }}
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            onChange={(e) => {
              InputChangeHandler("expected-return", e.target.value);
            }}
            id="expected-return"
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            onChange={(e) => {
              InputChangeHandler("duration", e.target.value);
            }}
            id="duration"
            value={userInput["duration"]}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={ResetBtnHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
