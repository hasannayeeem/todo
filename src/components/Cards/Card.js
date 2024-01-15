import React, { useState } from "react";
import {
  CardBody,
  CardBodyParagraphClipboard,
  CardBodyParagraph,
  CardBodyParagraphText,
  CardFoot,
  CardFootAttachments,
  CardFootComments,
  CardFootDate,
  CardHead,
  CardHeadProfile,
  CardHeadProfileImage,
  CardHeadProfileName,
  CardFootOthersViews,
  CardStc,
  CardFootViewsImg,
} from "../../styles/Card.stc";
import { ImAttachment } from "react-icons/im";
import { FaRegComments } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { RiStackFill } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import UploadModal from "../Modal/UploadModal";

export default function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <CardStc>
      <CardHead>
        <CardHeadProfile>
          <CardHeadProfileImage src="https://live.staticflickr.com/6220/6216457030_2cf0aff09d_z.jpg" />
          <CardHeadProfileName>Client Name</CardHeadProfileName>
        </CardHeadProfile>
        <CardHeadProfile>
          <CardHeadProfileImage src="https://media.wired.com/photos/655cf58564de22446963f396/master/pass/Sam-Altman-OpenAI-Return-Business-1258197415.jpg" />
          <CardHeadProfileName>Sadik Istiak</CardHeadProfileName>
        </CardHeadProfile>
      </CardHead>
      <CardBody>
        <CardBodyParagraph>
          <RiStackFill color="#555" />
          <CardBodyParagraphText>
            Lorem ipsum dolor sit amet cu...
          </CardBodyParagraphText>
          <CardBodyParagraphClipboard>
            <FaClipboardList />
            1/2
          </CardBodyParagraphClipboard>
        </CardBodyParagraph>
      </CardBody>
      <CardFoot>
        <CardFootViewsImg src="https://starsunzip.com/wp-content/uploads/2022/09/sundar-pichai.jpg" />
        <CardFootViewsImg src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-83414114.jpg" />
        <CardFootOthersViews>12+</CardFootOthersViews>
        <CardFootComments>
          <FaRegComments fontSize="15px" />
          15
        </CardFootComments>
        <CardFootAttachments>
          <ImAttachment onClick={() => showModal()} />
          {"" || "25"}
        </CardFootAttachments>
        <CardFootDate>
          <FaRegCalendarDays />
          30-12-2022
        </CardFootDate>
      </CardFoot>
      <UploadModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      ></UploadModal>
    </CardStc>
  );
}
