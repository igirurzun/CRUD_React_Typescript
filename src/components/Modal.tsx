import { Button } from "antd";
import React, { useState } from "react";
import { DataType } from "../model/Model";
import MyForm from './MyForm'



interface MyModalProps {
  updateEnteredData: (data: DataType) => void;
}

const MyModal: React.FC<MyModalProps> = ({ updateEnteredData }) => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values: any) => {
    updateEnteredData(values);
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
