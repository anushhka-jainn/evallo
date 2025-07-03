const { readLogs, writeLogs } = require('../utils/fileHandler');

const isValidLog = (log) => {
  const requiredFields = [
    'level', 'message', 'resourceId', 'timestamp',
    'traceId', 'spanId', 'commit', 'metadata'
  ];
  return requiredFields.every(field => field in log);
};

exports.ingestLog = (req, res) => {
  const newLog = req.body;

  if (!isValidLog(newLog)) {
    return res.status(400).json({ error: 'Invalid log format.' });
  }

  const logs = readLogs();
  logs.push(newLog);
  writeLogs(logs);

  res.status(201).json(newLog);
};

exports.getLogs = (req, res) => {
  let logs = readLogs();
  const {
    level, message, resourceId, timestamp_start, timestamp_end,
    traceId, spanId, commit
  } = req.query;

  if (level) logs = logs.filter(log => log.level === level);
  if (message) logs = logs.filter(log => log.message.toLowerCase().includes(message.toLowerCase()));
  if (resourceId) logs = logs.filter(log => log.resourceId === resourceId);
  if (timestamp_start) logs = logs.filter(log => new Date(log.timestamp) >= new Date(timestamp_start));
  if (timestamp_end) logs = logs.filter(log => new Date(log.timestamp) <= new Date(timestamp_end));
  if (traceId) logs = logs.filter(log => log.traceId === traceId);
  if (spanId) logs = logs.filter(log => log.spanId === spanId);
  if (commit) logs = logs.filter(log => log.commit === commit);

  logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  res.status(200).json(logs);
};
