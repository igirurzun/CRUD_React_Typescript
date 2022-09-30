import { Form, Modal } from "antd";
import React from "react";
import { DataType } from "../model/Model";
import { formFields } from "./RenderForm";

interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: DataType) => void;
    onCancel: () => void;
  }
  const MyForm: React.FC<CollectionCreateFormProps> = ({
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

  export default MyForm;