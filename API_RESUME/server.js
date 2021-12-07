const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const app = express();
const pdf = require('html-pdf');

const pdfTemplate = require('./documents/Targeted/Targeted');
app.use(cors());
const options = {
    height: '42cm',
    width: '29.7cm',
    timeout: '6000',
};
//Connect Database
connectDB();

// Init Middleware
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

//Define Routes

// POST route for PDF generation....
app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), options).toFile('Resume.pdf', (err) => {
        if (err) {
            console.log(err);
            res.send(Promise.reject());
        } else res.send(Promise.resolve());
    });
});

// GET route -> send generated PDF to client...
app.get('/fetch-pdf', (req, res) => {
    const file = `${__dirname}/Resume.pdf`;
    res.download(file);
});

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/user', require('./routes/api/user'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
