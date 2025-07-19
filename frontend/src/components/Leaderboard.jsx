import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const res = await axios.get('https://leaderboard-1-4wi4.onrender.com/api/leaderboard');
      setLeaders(res.data);
    };
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
      <h2 className="text-lg font-semibold mb-4">📊 Leaderboard</h2>
      <ol className="space-y-2">
        {leaders.map((user, index) => (
          <li
            key={user._id}
            className="flex justify-between items-center border-b last:border-b-0 py-2 text-sm"
          >
            <span className="truncate">{index + 1}. {user.name}</span>
            <span className="font-semibold">{user.totalPoints} pts</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
