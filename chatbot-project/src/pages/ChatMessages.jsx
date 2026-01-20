import user from "../assets/user.png";
import robot from "../assets/robot.png";
import "./ChatMessages.css";

function ChatMessages({ message, sender }) {
  return (
    <div className={sender === "robot" ? "robotClass" : "userClass"}>
      {sender === "robot" && <img src={robot} alt="" width={50} />}
      <p>{message}</p>
      {sender === "user" && <img src={user} alt="" width={50} />}
    </div>
  );
}

export default ChatMessages;
