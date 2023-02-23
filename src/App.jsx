// import "./styles.css";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState({
    fName: "",
    email: ""
  });
  const [data, setData] = useState([]);
  const [key, setKey] = useState(null);
  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {
    setInput((input) => ({
      ...input,
      [e.target.name]: e.target.value,
      id: new Date().getTime().toString()
    }));
  };

  const handleSubmit = (e) => {
    if (edit) {
      const index = data.findIndex((v) => v.id === key);
      const datas = [...data];
      datas.splice(index, 1, input);
      setData(datas);
      setInput({ fName: "", email: "" });
      setKey(null);
      setEdit(false);
    } else {
      setData([...data, input]);
      setInput({ fName: "", email: "" });
    }
  };

  const handleDelete = (id) => {
    const updatedList = data.filter((item) => {
      return item.id !== id;
    });
    setData(updatedList);
  };

  const handleEdit = (id) => {
    const newEdit = data.find((item) => {
      return item.id === id;
    });
    setInput(newEdit);
    setKey(id);
    setEdit(true);
  };

  return (
    <>
      <div className="App">Address</div>
      <label htmlFor="fName">Name</label>
      <input
        type="text"
        name="fName"
        id="fName"
        required
        onChange={handleChange}
        value={input.fName}
      />
      <br />
      <label htmlFor="email">eMail</label>
      <input
        type="text"
        name="email"
        id="email"
        required
        onChange={handleChange}
        value={input.email}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>{edit ? `Edit` : `Add`}</button>

      <h2>Users</h2>

      {data?.map((item) => (
        <div key={item.id}>
          <span
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </span>

          <span
            style={{
              marginLeft: "20px",
              backgroundColor: "grey",
              color: "white"
            }}
            onClick={() => handleEdit(item.id)}
          >
            Edit
          </span>
          <div>
            {item.fName} <br /> {item.email}
          </div>
          <br />
        </div>
      ))}
    </>
  );
}
