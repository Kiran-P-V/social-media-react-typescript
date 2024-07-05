import UserProfilePlaceholder from "../../../../components/userProfilePlaceholder/userProfilePlaceholder";

const Chat = () => {
  return (
    <>
      <div className="flex flex-col p-1">
        <div className="flex items-center gap-1">
          <UserProfilePlaceholder h="2rem" w="2rem" iconHeight="2rem" />
          <a className="bg-[#0084FF] rounded-2xl max-w-[50%] py-1 px-2 text-white text-sm">
            That's awesome.
          </a>
        </div>
      </div>
      <div className="flex flex-col items-end p-1">
        <a className="bg-[#0084FF] rounded-2xl max-w-[50%] py-1 px-2 text-white text-sm">
          That's awesome. I think our users will really appreciate the
          improvements. That's awesome. I think our users will really appreciate
          the improvements.
        </a>
      </div>

      <div className="flex flex-col p-1">
        <div className="flex items-center gap-1">
          <UserProfilePlaceholder h="2rem" w="2rem" iconHeight="2rem" />
          <a className="bg-[#0084FF] rounded-2xl max-w-[50%] py-1 px-2 text-white text-sm">
            That's awesome. I think our users will really appreciate the
            improvements. That's awesome. I think our users will really
            appreciate the improvements.
          </a>
        </div>
      </div>
    </>
  );
};

export default Chat;
