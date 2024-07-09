import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { TbGridDots } from "react-icons/tb";
import { RiMessengerFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import UserProfilePlaceholder from "../../../components/userProfilePlaceholder/userProfilePlaceholder";
import ButtonWrapper from "./components/buttonWrapper";
import MessengerPopTemplate from "../../../views/popups/navbarPopupTemplates/messenger/messengerPopTemplate";
import CommonPopupCard from "../../../components/commonPopupCard/commonPopupCard";
import { RootState } from "../../../app/store";
import { closePopup, openPopup } from "../../../app/slices/popupSlice";

const PopupSection = () => {
  const dispatch = useDispatch();
  const { anchorEl, type } = useSelector((state: RootState) => state.popup);

  const handleTemplate = (type: string) => {
    switch (type) {
      case "messenger":
        return <MessengerPopTemplate />;
      case "notification":
        return <>Notification</>;
      default:
        return <>No Content</>;
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    type: string
  ) => {
    dispatch(openPopup({ anchorEl: event.currentTarget, type }));
  };

  const handleClose = () => {
    dispatch(closePopup());
  };

  return (
    <Box className="w-full flex justify-end items-center gap-2 px-3">
      <ButtonWrapper
        height="70%"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e, "")}
      >
        <TbGridDots fontSize="1.5rem" />
      </ButtonWrapper>
      <ButtonWrapper
        height="70%"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleClick(e, "messenger")
        }
      >
        <RiMessengerFill
          className={`${type === "messenger" && "text-blue-600"}`}
          fontSize="1.5rem"
        />
      </ButtonWrapper>
      <ButtonWrapper
        height="70%"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleClick(e, "notification")
        }
      >
        <IoNotifications
          className={`${type === "notification" && "text-blue-600"}`}
          fontSize="1.5rem"
        />
      </ButtonWrapper>
      <UserProfilePlaceholder h="70%" w="2.5rem" iconHeight="2rem" />
      <CommonPopupCard
        id={Boolean(anchorEl) ? "simple-popover" : undefined}
        anchorEl={anchorEl}
        handleClose={handleClose}
      >
        {handleTemplate(type)}
      </CommonPopupCard>
    </Box>
  );
};

export default PopupSection;
