import React from "react";
import {
  ColumnBody,
  ColumnHeader,
  ColumnHeaderCount,
  ColumnHeaderIcon,
  ColumnHeaderLeft,
  ColumnHeaderRight,
  ColumnHeaderText,
  ColumnStc,
} from "../../styles/Column.stc";
import Card from "../Cards/Card";

const Column = ({col}) => {
  return (
    <ColumnStc>
      <ColumnHeader>
        <ColumnHeaderLeft>
          <ColumnHeaderIcon />
          <ColumnHeaderText>{col.title || "title"}</ColumnHeaderText>
        </ColumnHeaderLeft>
        <ColumnHeaderRight>
          <ColumnHeaderCount>0</ColumnHeaderCount>
        </ColumnHeaderRight>
      </ColumnHeader>
      <ColumnBody>
      {
        Array.from({ length: 10 }).map(() => {
          return <Card />
        })
      }
      </ColumnBody>
    </ColumnStc>
  );
};

export default Column;