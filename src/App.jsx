import React from "react";
import data from "../data.json";
import fileDownload from "js-file-download";

function App() {
  const dataArray = Object.entries(data);
  dataArray.sort((a, b) => a[1].sortOrder - b[1].sortOrder);
  const modifiedData = JSON.stringify(
    dataArray.map((entry) => {
      return {
        id: entry[0],
        name: entry[1].name,
        sortOrder: entry[1].sortOrder,
        color: entry[1].style.color,
      };
    })
  );
  const saveData = () => {
    fileDownload(modifiedData, "modified-data.json");
  };
  return (
    <div>
      <ol >
        {dataArray.map((item, index) => (
          <li  key={index} style={item[1].style}>
            {item[0]}-{item[1].name}
          </li>
        ))}
      </ol>
      <button  onClick={() => saveData()}>
        Сохранить
      </button>
    </div>
  );
}

export default App;
