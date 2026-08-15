import { useState } from 'react';

function App() {
  const age = 22;
  const isLoggedIn = true;
  const marks = 75;

  const [isLoggedInn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Ternary Operator */}
      <h1>
        {age > 18
          ? "You are eligible to vote"
          : "You are not eligible to vote"}
      </h1>

      {/* AND Operator */}
      {isLoggedIn && <h1>Welcome to the App!</h1>}

      {/* If Else / Ternary Statement */}
      {/* If Else / Ternary Statement......... */}
      {marks >= 75 ? (
        <h1>You have passed the exam!</h1>
      ) : (
        <h1>You have failed the exam.</h1>
      )}

      {/* Login Condition */}
      {isLoggedInn ? (
        <div>
          <h1>Welcome to the App!</h1>

          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>Please log in to continue.</h1>

          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;