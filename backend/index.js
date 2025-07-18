require('dotenv').config(); 
console.log('Loaded MONGO_URI:', process.env.MONGO_URI);


const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');


connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
