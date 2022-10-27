import React, { useState } from "react";
import MyTable from "./Table";
import MyModal from "./Modal";
import { DataType } from "../model/Model";
const DUMMY_DATA: DataType[] = [
  {
    key: 1,
    title: "Start of the year",
    type: "generic",
    startDate: "2022-01-01",
    endDate: "2022-12-01",
    description: "This is an event about the start of this year",
  },
  {
    key: 2,
    title: "Mediagenix ",
    type: "holiday",
    startDate: "2022-04-04",
    endDate: "2022-04-05",
    description: "Celebrating Mediagenix",
  },
];

const App: React.FC = () => {
  const [data, setDataSource] = useState<DataType[]>(DUMMY_DATA);
  const [dataKey, setDataKey] = useState<number>(data.length + 1);
  // const [enteredData, setEnteredData] = useState<DataType | undefined>();

  const addNewEntryHandler = (values: DataType): void => {
    const newEntry: DataType = {
      key: dataKey,
      title: values.title,
      type: values.type,
      startDate: Object.values(values)[2][0]._d.toISOString().substring(0, 10),
      endDate: Object.values(values)[2][1]._d.toISOString().substring(0, 10),
      description: values.description,
    };
    setDataKey(dataKey + 1);

    setDataSource((prevDataSource) => {
      return [newEntry, ...data];
    });
  };

  const removeEntryHandler = (selectedEntry: number): void => {
    setDataSource((prevDataSource) => {
      return data.splice(selectedEntry);
    });
    return;
  };

  return (
    <div>
      <h1>React project</h1>
      <MyModal updateEnteredData={addNewEntryHandler} />
      <MyTable data={data} removeEntry={removeEntryHandler} />
    </div>
  );
};

export default App;
