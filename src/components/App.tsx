import React, { useState } from "react";
import MyTable from "./MyTable";
import MyModal from "./Modal";
import { DataType } from "../model/Model";

const App: React.FC = () => {
  const [enteredData, setEnteredData] = useState<DataType | undefined>();

  const updateEnteredData = (data: DataType): void => {
    setEnteredData(data);
  };

  return (
    <div>
      <MyModal updateEnteredData={updateEnteredData} />
      <MyTable data={enteredData} />
    </div>
  );
};

export default App;
