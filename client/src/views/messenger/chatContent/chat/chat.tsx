import UserProfilePlaceholder from "../../../../components/userProfilePlaceholder/userProfilePlaceholder";
import ChatBubble from "./chatBubble";

const Chat = () => {
  console.log(<UserProfilePlaceholder h="2rem" w="2rem" iconHeight="2rem" />);
  return (
    <>
      <ChatBubble position="start" description="That's awesome." />
      <ChatBubble
        position="end"
        description=" That's awesome. I think our users will really appreciate the
          improvements. That's awesome. I think our users will really appreciate
          the improvements."
      />
      <ChatBubble
        position="start"
        description=" That's awesome. I think our users will really appreciate the
          improvements. That's awesome. I think our users will really appreciate
          the improvements."
      />
      <ChatBubble position="end" description="  That's awesome. " />
      <ChatBubble
        position="start"
        description=" That's awesome. I think our users will really appreciate the
          improvements. That's awesome. I think our users will really appreciate
          the improvements."
      />
      <ChatBubble
        position="end"
        description="  That's awesome. I think our users will really appreciate the
          improvements. That's awesome. I think our users will really appreciate
          the improvements."
      />
      <ChatBubble
        position="start"
        description=" That's awesome. I think our users will really appreciate the
          improvements. That's awesome. I think our users will really appreciate
          the improvements."
      />
      <ChatBubble
        position="end"
        description="  That's awesome. I think our users will really appreciate the
          improvements. That's awesome. I think our users will really appreciate
          the improvements."
      />
      <ChatBubble
        position="start"
        description=" That's awesome. I think our users will really appreciate the
          improvements. That's awesome. I think our users will really appreciate
          the improvements."
      />
      <ChatBubble
        position="end"
        description="  That's awesome. I think our users will really appreciate the
          improvements. That's awesome. I think our users will really appreciate
          the improvements. That's awesome. I think our users will really appreciate the
          improvements. That's awesome. I think our users will really appreciate
          the improvements."
      />
    </>
  );
};

export default Chat;
