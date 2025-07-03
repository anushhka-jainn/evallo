import { useState } from 'react';

export default function FilterBar({ onFilter }) {
  const [filters, setFilters] = useState({ level: '', message: '', resourceId: '', timestamp_start: '', timestamp_end: '' });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    onFilter({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 border-b grid grid-cols-5 gap-2">
      <input name="message" placeholder="Search message..." value={filters.message} onChange={handleChange} className="p-2 border rounded" />
      <select name="level" value={filters.level} onChange={handleChange} className="p-2 border rounded">
        <option value="">All Levels</option>
        <option value="error">Error</option>
        <option value="warn">Warn</option>
        <option value="info">Info</option>
        <option value="debug">Debug</option>
      </select>
      <input name="resourceId" placeholder="Resource ID..." value={filters.resourceId} onChange={handleChange} className="p-2 border rounded" />
      <input type="datetime-local" name="timestamp_start" value={filters.timestamp_start} onChange={handleChange} className="p-2 border rounded" />
      <input type="datetime-local" name="timestamp_end" value={filters.timestamp_end} onChange={handleChange} className="p-2 border rounded" />
    </div>
  );
}