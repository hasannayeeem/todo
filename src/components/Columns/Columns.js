import React from "react";
import { ColumnsStc } from "../../styles/Columns.stc";
import Column from "./Column";
import useColumns from "../../hooks/useColumns";

const Columns = () => {
  const [columns] = useColumns()
  return (
    <ColumnsStc>
      {columns?.map((col) => {
        return <Column col={col} />;
      })}
    </ColumnsStc>
  );
};

export default Columns;
