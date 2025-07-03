export default function LogList({ logs }) {
  return (
    <div className="p-4">
      {logs.map((log, idx) => (
        <div key={idx} className="mb-2 p-2 border-l-4" style={{ borderColor: log.level === 'error' ? 'red' : log.level === 'warn' ? 'orange' : 'gray' }}>
          <div><strong>{log.level.toUpperCase()}</strong> <small>{new Date(log.timestamp).toLocaleString()}</small></div>
          <div>{log.message}</div>
          <div className="text-sm text-gray-500">{log.resourceId} | {log.traceId}</div>
        </div>
      ))}
    </div>
  );
}
