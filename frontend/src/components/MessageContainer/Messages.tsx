import wp14199750bw from "../../assets/wp14199750bw.webp";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${wp14199750bw})`,
          opacity: "0.2",
        }}
      />
      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full p-4">
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
      </div>
    </div>
  );
};

export default Messages;