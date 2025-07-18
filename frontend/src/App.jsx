import UserSelector from './components/UserSelector';
import Leaderboard from './components/Leaderboard';
import History from './components/History';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          🏆 Point Claim Leaderboard
        </h1>

        {/* Responsive 2-column on desktop, 1-column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UserSelector />
          <Leaderboard />
        </div>

        {/* History section full-width */}
        <div className="mt-6">
          <History />
        </div>
      </div>
    </div>
  );
}
