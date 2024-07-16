import express from 'express';
import routes from './routes'
import * as dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        msg: "gmail test backend",
    });
});

app.use('/api', routes)

app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});
