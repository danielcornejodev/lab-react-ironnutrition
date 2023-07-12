import React, { useState} from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export default function Search({ food, renderFilteredList }) {

    const [query, setquery] = useState('');
    const [state, setState] = useState({
      query: '',
      list: []
    })
    
    const handleChange = (e) => {
      const results = food.filter(element => {
        if (e.target.value === "") return food
        return element.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setState({
          query: e.target.value,
          list: results
      })

      renderFilteredList(state);

    }


    return (
      <>
        <div id='search-div'>
          <label>Search</label>
                <Input
                    id='search-input'
                    placeholder="input search text"
                    value={state.query}
                    onChange={handleChange}
                   />
          </div>
      </>
  )
}
