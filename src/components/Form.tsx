import { Form, Modal } from "antd";
import { DataType } from "../model/Model";
import { formFields } from "./RenderForm";

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: DataType) => void;
  onCancel: () => void;
}
const MyForm: React.FC<CollectionCreateFormProps> = (props) => {
  const [form] = Form.useForm();

  const onOkHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
  
    // event.preventDefault();
    form
      .validateFields()
      .then((event) => {
        form.resetFields();
        props.onCreate(event);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      visible={props.visible}
      title="Create a new entry"
      okText="Create"
      cancelText="Cancel"
      onCancel={props.onCancel}
      onOk={onOkHandler}
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
