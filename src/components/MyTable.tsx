import { Popconfirm, Table } from "antd";
import React, { useEffect, useState } from "react";
import { DataType } from "../model/Model";

type TableProps = Parameters<typeof Table>[0];

interface TableNewDataProps {
  data: DataType | undefined;
}

type ColumnTypes = Exclude<TableProps["columns"], undefined>;

const MyTable: React.FC<TableNewDataProps> = ({ data }) => {
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      id: "1",
      title: "Start of the year",
      type: "generic",
      startDate: "2022-01-01",
      endDate: "2022-12-01",
      description: "This is an event about the start of this year",
    },
    {
      id: "2",
      title: "Mediagenix ",
      type: "holiday",
      startDate: "2022-04-04",
      endDate: "2022-04-05",
      description: "Celebrating Mediagenix",
    },
  ]);

  const [count, setCount] = useState(3);

  useEffect(() => {
    handleAdd(data);
  }, [data]);

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.id !== key);
    setDataSource(newData);
  };

  const defaultColumns: (ColumnTypes[number] & {
    dataIndex: string;
  })[] = [
      {
        title: "id",
        dataIndex: "id",
        key: "id",
      },
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
          dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(Object.values(record)[0])}
            >
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
  ];

  const handleAdd = (data: DataType | undefined) => {
    if (data !== undefined) {
      console.log();
      const newData: DataType = {
        id: count,
        title: data.title,
        type: data.type,
        startDate: Object.values(data)[2][0]._d.toISOString().substring(0, 10),
        endDate: Object.values(data)[2][1]._d.toISOString().substring(0, 10),
        description: data.description,
      };
      setDataSource([...dataSource, newData]);
      setCount(count + 1);
    }
  };

  return (
    <Table
      bordered
      dataSource={dataSource}
      columns={defaultColumns as ColumnTypes}
    />
  );
};

export default MyTable;
