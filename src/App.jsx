import { useState} from "react";
import { ChatInput } from "./components/ChatInput";
import "./App.css";
import ChatMessages from './components/ChatMessages'


function App() {
  // const chatMessages = array[0];
  // in react we use setFunction (updater function) to update data not .push
  // const setChatMessages = array[1];
  // in React, we should not modify the data directly. We should always create a copy and then modify the copy. (this makes react more efficient)
  // order matters
  // const [chatMessages, setChatMessages] = array;
  const [chatMessages, setChatMessages] = useState([]);

  // .map() = goes through each value, runs the function, and converts it into a new value

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
