import { useEffect, useState } from "react";
import axios from 'axios';

interface User {
  userName: String,
  password: String,
  date: Date,
  logged: Boolean
}

function App() {
  const [items, setItems] = useState<User[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/user/getAll')
      .then(response => {
        setItems(response.data.users);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map(item => {
          return (<li key={Math.floor(Math.random() * 1000000)}>{item.userName} : {item.password}</li>)
})}
      </ul>
    </div>
  );
};

export default App
