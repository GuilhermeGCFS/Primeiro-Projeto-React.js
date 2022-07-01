import { useState } from "react";
import { Tweet } from "./components/Tweet"

import './App.css';


function App() {
  const [tweets, setTweets] = useState<string>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ])

  function createTweet() {
    setTweets([...tweets, 'Tweet 5'])
  }

  return (
    <div>
      {tweets.map(tweet => {
        return <Tweet text={tweet} />
      })}

      <button onClick={createTweet}>Adicionar tweet</button>
    </div>
  );
}

export default App