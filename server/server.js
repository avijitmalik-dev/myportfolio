import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/user.router.js';

dotenv.config();
const app = express();
const port = process.env.PORT_NUMBER || 8000;

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
    console.log("Server is running on port", port);
});
