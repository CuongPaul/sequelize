const dotenv = require('dotenv');
const express = require('express');
const route = require('./routes/route');
const route_view = require('./routes/route_view');

dotenv.config();
const PORT = process.env.APP_PORT || 5000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', route_view(express));
app.use('/api_v1', route(express));
app.use('/public', express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
