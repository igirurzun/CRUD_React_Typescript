import { Button, Form, Modal } from "antd";
import React, { useState } from "react";
import { DataType } from "../model/Model";
import { formFields } from "./RenderForm";

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: DataType) => void;
  onCancel: () => void;
}
const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  visible,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new entry"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: "public" }}
      >
        {formFields()}
      </Form>
    </Modal>
  );
};

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
      <CollectionCreateForm
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
