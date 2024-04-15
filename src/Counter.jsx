import { useState } from "react";
import "./Counter.scss";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleChange = (event) => {
    setStep(Number(event.target.value));
  };

  const handleCount = (event) => {
    setCount(Number(event.target.value));
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="container">
        <div className="counter-container">
          <div className="slide">
            <input
              type="range"
              min="0"
              max="10"
              value={step}
              onChange={handleChange}
            />
          </div>
          <div>
            {/* <button onClick={() => setStep((c) => c - 1)}>-</button> */}
            <span>Step: {step}</span>
            {/* <button onClick={() => setStep((c) => c + 1)}>+</button> */}
          </div>

          <div>
            <button onClick={() => setCount((c) => c - step)}>-</button>
            <input type="number" value={count} onChange={handleCount} />
            <button onClick={() => setCount((c) => c + step)}>+</button>
          </div>

          <p>
            <span>
              {count === 0
                ? " Today is "
                : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `}
              :
            </span>
            <span>{date.toDateString()}</span>
          </p>

          {count !== 0 || step !== 1 ? (
            <div className="reset">
              <button onClick={handleReset}>Reset</button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
