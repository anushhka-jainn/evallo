import './App.css'
import { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar';
import LogList from './components/LogList';
import { fetchLogs } from './services/api';

export default function App() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadLogs = (filters = {}) => {
    setLoading(true);
    fetchLogs(filters)
      .then(data => setLogs(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadLogs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-xl font-bold p-4">Log Ingestion & Querying System</h1>
      <FilterBar onFilter={loadLogs} />
      {loading ? <div className="p-4">Loading...</div> : <LogList logs={logs} />}
    </div>
  );
}