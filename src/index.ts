import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
        origin: '*',
        optionsSuccessStatus: 200
    }
));

app.get('/', (_, res) => {
    // send 404
    res.status(404).send('Not found');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
