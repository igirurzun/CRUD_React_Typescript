import { Form, Input, DatePicker, Select } from "antd";
import jsonData from "../schema/schema.json";

const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

const jsonSchema = Object.values(jsonData);

// get entries from json.
export function formFields() {
  var result = [];
  for (let index = 0; index < Object.values(jsonData).length; index++) {
    result[index] = initFormFields(index);
  }
  return result;
}

// create form items.
function initFormFields(i: number) {
  const schemaObjValues = jsonSchema;
  if (
    schemaObjValues[i].component === "range_picker"
  ) {
    return (
      <Form.Item
        name={schemaObjValues[i].label.toLowerCase()}
        label={schemaObjValues[i].label}
        rules={[
          {
            required: true,
          },
        ]}
      >
        {initComponentType(schemaObjValues[i])}
      </Form.Item>
    );
  } else {
    return (
      <Form.Item
        name={schemaObjValues[i].name}
        label={schemaObjValues[i].label}
        rules={[
          {
            required: true,
          },
        ]}
      >
        {initComponentType(schemaObjValues[i])}
      </Form.Item>
    );
  }
}

//calculate the respective component the item
function initComponentType(component: any) {
  if (component.component === "text") {
    return <Input />;
  } else if (component.component === "select") {
    return (
      <Select placeholder="" allowClear>
        {fetchOptions(component.options)}
      </Select>
    );
  } else if (component.component === "range_picker") {
    return <RangePicker />;
  } else if (component.component === "textarea") {
    return <TextArea />;
  }
}

//create the different options for drop down elements
function fetchOptions(options: any) {
  var result = [];

  for (let index = 0; index < options.length; index++) {
    result[index] = (
      <Option value={options[index].value}>{options[index].label}</Option>
    );
  }
  return result;
}
