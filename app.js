require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const {userRoutes} = require('./routes/userRoute');
const {logger} = require('./middleware/logger');
const PORT = 3000 || process.env.PORT;

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(logger)

app.use('/', userRoutes);

app.use('/users', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});


app.listen(PORT, () => console.log('Server ready on port:', PORT));