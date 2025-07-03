const fs = require("fs");
const path = require("path");

const file_path = path.join(__dirname, "../data/logs.json");

const readLogs=()=>{
    const data = fs.readFileSync(file_path);
    return JSON.parse(data||'[]');
};

const writeLogs = (logs) => {
    fs.writeFileSync(file_path, JSON.stringify(logs,null,2));
};

module.exports={readLogs,writeLogs};