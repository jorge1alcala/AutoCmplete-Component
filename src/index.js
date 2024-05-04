import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { AutoComplete } from "antd";
const { Option } = AutoComplete;

const Complete = () => {
  const [result, setResult] = useState([]);

  const handleSearch = (value) => {
    let res = [];

    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "msn.com", "icloud.com"].map(
        (domain) => `${value}@${domain}`
      );
    }

    setResult(res);
  };

  return (
    <AutoComplete
      style={{
        width: 200
      }}
      onSearch={handleSearch}
      placeholder="input here"
    >
      {result.map((email) => (
        <Option key={email} value={email}>
          {email}
        </Option>
      ))}
    </AutoComplete>
  );
};

ReactDOM.render(<Complete />, document.getElementById("container"));
