import { useState } from "react";
function App() {
  const [npm, setNpm] = useState("npm i");
  const [lib, setLib] = useState([
    {
      name: "bootstrtap",
      text: "boostrtap",
      add: false,
    },
    {
      name: "redux",
      text: "@reduxjs/toolkit  redux  react-redux",
      add: false,
    },
    {
      name: "sass",
      text: "sass",
      add: false,
    },
    {
      name: "hook",
      text: "react-hook-form",
      add: false,
    },
    {
      name: "router",
      text: "react-router-dom@latest",
      add: false,
    },
    {
      name: "mui",
      text: "@mui/material @emotion/react @emotion/styled  @mui/material @mui/styled-engine-sc styled-components",
      add: false,
    },
    {
      name: "fontAwesome",
      text: "--save @fortawesome/free-brands-svg-icons  --save @fortawesome/free-regular-svg-icons npm i --save @fortawesome/fontawesome-svg-core  --save @fortawesome/free-solid-svg-icons  --save @fortawesome/react-fontawesome",
      add: false,
    },
  ]);
  const addFunc = (i) => {
    const t = lib;
    if (!t[i].add) {
      setNpm(`${npm} ${t[i].text}`);
      t[i].add = true;
      setLib(t);
    } else {
      const t1 = npm.replace(t[i].text, "");
      setNpm(t1);
      t[i].add = false;
      setLib(t);
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(npm);
  };
  return (
    <div className="row">
      <div className="col-12">
        <table>
          <thead>
            <tr>
              <th>Library</th>
              <th>Link</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {lib.map((el, index) => (
              <tr>
                <td>{el.name}</td>
                <td>{el.text}</td>
                {el.add && (
                  <td className="bg-danger">
                    <button
                      className="btn text-white"
                      onClick={() => addFunc(index)}
                    >
                      -
                    </button>
                  </td>
                )}
                {!el.add && (
                  <td className="bg-success">
                    <button
                      className="btn  text-white"
                      onClick={() => addFunc(index)}
                    >
                      +
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="m-2 d-flex justify-content-between">
          <button className="btn btn-warning" onClick={copy}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
