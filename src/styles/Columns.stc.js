import { styled } from "styled-components";

export const ColumnsStc = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 5px 0;
  scrollbar-color: blue;
  /* WebKit scrollbar styles */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #ddd;
  }
  &::-webkit-scrollbar-thumb {
    background: blue;
    border-radius: 6px;
    padding: 0 0 8px 8px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;
