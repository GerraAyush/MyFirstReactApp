import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const quote = await fetch("https://api.adviceslip.com/advice");
    const quoteObject = await quote.json();
    setAdvice(quoteObject.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get a quote!</button>
      <Message count={count} />
    </div>
  );

  function Message(props) {
    return (
      <p>
        You have seen <strong>{props.count}</strong> number of advices.
      </p>
    );
  }
}
