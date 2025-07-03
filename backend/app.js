const express = require('express');
const app = express();
const logsRouter = require('./routes/logs');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/', logsRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
