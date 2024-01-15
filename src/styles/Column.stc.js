import { Card } from "antd";
import { styled } from "styled-components";

export const ColumnStc = styled.div`
  background: #eee;
  min-width: 300px;
  padding-top: 0;
`;
export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
export const ColumnHeaderText = styled.h1`
  font-size: 13px;
`;

export const ColumnHeaderIcon = styled.span`
  height: 18px;
  width: 18px;
  background: red;
  border-radius: 50% 0 0 50%;
`;

export const ColumnHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const ColumnHeaderRight = styled.div`
  padding: 5px;
  background: #ccc;
  border-radius: 5px;
  font-size: 12px;
`;
export const ColumnHeaderCount = styled.span`
  font-size: 14;
`;

export const ColumnBody = styled.div`
  overflow-y: auto;
  height: 600px;
  padding: 0 6px;
  padding-top: 0;
  margin-top: 5px;
  /* WebKit scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #ddd;
  }
  &::-webkit-scrollbar-thumb {
    background: blue;
    border-radius: 6px;
  }
`;
