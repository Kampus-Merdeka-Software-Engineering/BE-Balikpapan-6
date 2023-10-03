require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const { logger } = require('./middleware/logger');
const PORT = process.env.PORT || 3000;

const routes = require('./routes');

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

// app.get("/", (req, res) => {

// });

app.use('/api', routes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => console.log('Server ready on port:', PORT));