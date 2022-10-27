import { Popconfirm, Table } from "antd";
import { DataType } from "../model/Model";

type TableProps = Parameters<typeof Table>[0];

interface TableNewDataProps {
  data: DataType[];
  removeEntry: (selectedEntry: number) => void;
}

type ColumnTypes = Exclude<TableProps["columns"], undefined>;

const MyTable: React.FC<TableNewDataProps> = (props) => {
  // const [count, setCount] = useState(3);

  // const handleAdd = (data: DataType | undefined) => {
  //   if (data !== undefined) {
  //     console.log();
  //     const newData: DataType = {
  //       key: count,
  //       title: data.title,
  //       type: data.type,
  //       startDate: Object.values(data)[2][0]._d.toISOString().substring(0, 10),
  //       endDate: Object.values(data)[2][1]._d.toISOString().substring(0, 10),
  //       description: data.description,
  //     };
  //     setDataSource([...dataSource, newData]);
  //     setCount(count + 1);
  //   }
  // };

  // const handleDelete = (key: React.Key) => {
  //   const newData = props.data.filter((selectedEntry) => selectedEntry.key !== key);
  //   setDataSource(newData);
  // };

  // useEffect(() => {
  //   handleAdd(data);
  // }, [data]);

  const defaultColumns: (ColumnTypes[number] & {
    dataIndex: string;
  })[] = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "StartDate",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "EndDate",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_, record) =>
        props.data.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => props.removeEntry(Object.values(record)[0])}
          >
            <a href=".">Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  return (
    <Table
      bordered
      dataSource={props.data}
      columns={defaultColumns as ColumnTypes}
    />
  );
};

export default MyTable;
