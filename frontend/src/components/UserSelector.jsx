import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserSelector() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  const handleClaim = async () => {
    if (!selected) return;
    const res = await axios.post('http://localhost:5000/api/claim', { userId: selected });
    alert(`${res.data.user.name} received ${res.data.points} points!`);
    fetchUsers();
  };

  const handleAddUser = async () => {
    if (!name) return;
    await axios.post('http://localhost:5000/api/users', { name });
    setName('');
    fetchUsers();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
      <h2 className="text-lg font-semibold mb-4">🎯 Select or Add User</h2>

      <div className="space-y-4">
        <select
          className="w-full p-2 border border-gray-300 rounded"
          onChange={e => setSelected(e.target.value)}
          value={selected}
        >
          <option value="">-- Select User --</option>
          {users.map(user => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleClaim}
          disabled={!selected}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Claim Points
        </button>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            className="flex-1 p-2 border border-gray-300 rounded"
            placeholder="New user name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            onClick={handleAddUser}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
