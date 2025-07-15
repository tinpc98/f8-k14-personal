import { useState } from 'react'
import './App.css'
import {UserItem} from './compunents/index.js'

const initialUsers = [
  { id: 1, name: 'Nguyễn Văn A' },
  { id: 2, name: 'Trần Thị B' },
  { id: 3, name: 'Lê Văn C' },
];

function App() {
  const [users, setUsers] = useState(initialUsers);

  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <button onClick={() => setScore(score + 1)}>Tăng điểm: {score}</button>
      {users.map((user) => (
          <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default App
