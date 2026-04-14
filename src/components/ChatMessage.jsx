import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import './ChatMessage.css';


// function name need to start with a capital letter
export function ChatMessage({ message, sender, isLoading, timestamp }) {
  // const message = props.message; = const {message} = props;
  // const sender = props.sender; = const {sender} = props;
  // const { message, sender } = props;

  // if (sender === "robot") {
  //   return (
  //     <div>
  //       <img src="robot.png" width="50" />
  //       {message}
  //     </div>
  //   );
  // }
  return (
    <div
      //ternary operator (?:)
      // value1 ? value2 : value3
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {isLoading ? (
          <div>
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
          </div>
        ) : (
          <>
            <div>{message}</div>
            <div className="chat-message-time">{timestamp}</div>
          </>
        )}
      </div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}