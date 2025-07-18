import { useEffect, useState } from 'react';
import axios from 'axios';

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await axios.get('http://localhost:5000/api/history');
      setHistory(res.data);
    };
    fetchHistory();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
      <h2 className="text-lg font-semibold mb-4">🕘 Claim History</h2>
      <ul className="space-y-2 max-h-64 overflow-y-auto text-sm">
        {history.map((h, i) => (
          <li key={i} className="text-gray-700">
            <strong>{h.userId.name}</strong> claimed <strong>{h.points}</strong> pts at{' '}
            {new Date(h.timestamp).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
