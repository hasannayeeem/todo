import { Typography } from "antd";
import { styled } from "styled-components";
const { Paragraph, Text } = Typography;

export const CardStc = styled.div`
  margin: 15px 0;
  padding: 10px;
  margin-top: 0;
  background: white;
  border-radius: 5px;
`;
export const CardHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CardHeadProfile = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const CardHeadProfileImage = styled.img`
  border-radius: 50%;
  width: 18px;
  height: 18px;
`;
export const CardHeadProfileName = styled.p`
  font-weight: bold;
  font-size: 12px;
  margin: 0;
`;
export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardBodyParagraph = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  position: relative;
`;
// export const CardBodyParagraphText = styled(Paragraph)`
export const CardBodyParagraphText = styled.p`
  font-size: 12px;
  color: #777;
  font-weight: bold;
  width: 195px;
`;
export const CardBodyParagraphClipboard = styled.button`
  background: #eee;
  border-radius: 3px;
  padding: 3px;
  font-size: 12px;
  font-weight: bold;
  color: #666;
  display: flex;
  gap: 2px;
  align-items: center;
  border: none;
  cursor: pointer;
`;
export const CardFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
`;
export const CardFootComments = styled.button`
  display: flex;
  font-size: 11px;
  font-weight: bold;
  align-items: center;
  gap: 2px;
  color: #666;
  cursor: pointer;
  border: none;
  padding: 0;
  background: transparent;
`;
export const CardFootAttachments = styled.button`
  display: flex;
  font-size: 11px;
  font-weight: bold;
  align-items: center;
  gap: 2px;
  color: #666;
  cursor: pointer;
  border: none;
  padding: 0;
  background: transparent;
`;
export const CardFootDate = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: bold;
  align-items: center;
  gap: 2px;
  color: #666;
  font-size: 11px;
`;
export const CardFootViewsImg = styled.img`
  border-radius: 50%;
  width: 22px;
  height: 22px;
  cursor: pointer;
`;
export const CardFootOthersViews = styled.p`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ddd;
  color: #444;
  font-size: 10px;
  display: grid;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 2px;
  cursor: pointer;
`;
