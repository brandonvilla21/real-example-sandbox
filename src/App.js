import React, { useEffect, useState } from "react";
import UsersTable from "./UsersTable";
import { callAPI } from "./data";
import "./styles.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const data = callAPI("/users");
    setUsers(data);
  }, []);
  return (
    <div className="App">
      <UsersTable users={users} />
    </div>
  );
}

export default App;
