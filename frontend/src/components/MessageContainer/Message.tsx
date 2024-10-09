const Message = () => {
  return (
    <>
      <div>
        <div className={`chat chat-end`}>
          <div className={`chat-bubble text-white pb-2 bg-teal-700`}>
            Hey Jhon! How are you?
          </div>
          <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
            12:03
          </div>
        </div>
      </div>
      <div>
        <div className={`chat chat-start`}>
          <div className={`chat-bubble text-white pb-2`}>
            Hey Jhon! How are you?
          </div>
          <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
            12:03
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
