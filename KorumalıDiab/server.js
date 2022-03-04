import express, { static } from 'express';
import { join } from 'path';

const port = process.env.PORT
const app = express();

app.use(static(join(__dirname, 'static')));

app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('views/index');
});

app.all('*', (req, res) => {
    res.render('views/404');
});

app.lister(port => {
    console.log('Server is listening at port ' + port);
});
