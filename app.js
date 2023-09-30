require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const { logger } = require('./middleware/logger');
const PORT = 3000 || process.env.PORT;

const { userRoutes } = require('./routes/userRoute');

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.get("/", (req, res) => {
    res.send("INI MAIN")
});

app.get('/users', userRoutes);
app.get('/user/:userId', userRoutes);
app.post('/user/create', userRoutes);
app.put('/user/update', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => console.log('Server ready on port:', PORT));