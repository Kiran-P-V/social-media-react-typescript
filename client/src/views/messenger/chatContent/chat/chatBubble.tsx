import UserProfilePlaceholder from "../../../../components/userProfilePlaceholder/userProfilePlaceholder";

type chatBubbleType = {
  description: string;
  profileImage?: string;
  position: "start" | "end";
};
const ChatBubble = ({
  description,
  profileImage,
  position,
}: chatBubbleType) => {
  const chatStart = (
    <div className="flex flex-col items-end p-1">
      <a className="bg-[#0084FF] rounded-2xl max-w-[50%] py-2 px-2 text-white text-sm">
        {description}
      </a>
    </div>
  );

  const chatEnd = (
    <div className="flex flex-col p-1">
      <div className="flex items-end gap-1">
        <UserProfilePlaceholder
          image={profileImage}
          h="2rem"
          w="2rem"
          iconHeight="2rem"
        />
        <a className="bg-[#F0F0F0] rounded-2xl max-w-[50%] py-2 px-2 text-black text-sm">
          {description}
        </a>
      </div>
    </div>
  );

  return <>{position === "end" ? chatEnd : chatStart}</>;
};

export default ChatBubble;
