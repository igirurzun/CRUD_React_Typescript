import { Button } from "antd";
import React, { useState } from "react";
import { DataType } from "../model/Model";
import MyForm from "./Form";

interface MyModalProps {
  updateEnteredData: (values: DataType) => void;
}

const MyModal: React.FC<MyModalProps> = (props) => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values: DataType) => {
    // const newData: DataType = {
      //       key: count,
      //       title: data.title,
      //       type: data.type,
      //       startDate: Object.values(data)[2][0]._d.toISOString().substring(0, 10),
      //       endDate: Object.values(data)[2][1]._d.toISOString().substring(0, 10),
      //       description: data.description,
      //     };
    props.updateEnteredData(values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        New entry
      </Button>
      <MyForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <p />
    </div>
  );
};

export default MyModal;
