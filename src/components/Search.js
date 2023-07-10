import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

export default function Search() {

    const { Search } = Input;
    
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1677ff',
          }}
        />
      );
    const onSearch = (value: string) => console.log(value);

  return (
    <>
    <label>Search</label>
    <Space direction="vertical">
          <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{
                  width: 200,
              }} />
      </Space>
    </>
  )
}
