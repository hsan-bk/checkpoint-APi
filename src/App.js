
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import UserList from './components/UserList';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [text, settext] = useState("");
  const [users, setusers] = useState([]);

  useEffect(() => {
      try {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setusers(res.data));
      } catch (error) {
        console.log(error)
      }
    }, [])
        console.log(users)

  return (
    <div className="App">
      <Navigation settext={settext}/>
      <UserList users={users} text={text}/>
    </div>
  );
}

export default App;
