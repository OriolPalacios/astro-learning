import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);
  return (
    <div>
      <h4>{greeting}! Thank you for visiting!</h4>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting!</button>
    </div>
  );
}