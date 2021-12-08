const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const app = express();
const pdf = require('html-pdf');

const pdfTemplateChrono = require('./document/Chronological/chronological');
const pdfTemplateFunc = require('./document/Functional/functional');
const pdfTemplateTargeted = require('./document/Targeted/targeted');
const pdfTemplateComb = require('./document/Combinational/combinational');

app.use(cors());

//Chronological
const options2 = {
    height: '30cm',
    width: '29.7cm',
    timeout: '12000',
};
//Functional
const options3 = {
    height: '30cm',
    width: '29.7cm',
    timeout: '12000',
};
//Targeted
const options1 = {
    height: '42cm',
    // height: '30cm',
    width: '29.7cm',
    timeout: '12000',
};
//Combinational
const options4 = {
    height: '42cm',
    width: '29.7cm',
    timeout: '12000',
};
//Connect Database
connectDB();

// Init Middleware
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

// POST route for PDF generation for Chronological ....
app.post('/create-pdf-chrono', (req, res) => {
    pdf.create(pdfTemplateChrono(req.body), options2).toFile(
        'Resume.pdf',
        (err) => {
            if (err) {
                console.log(err);
                res.send(Promise.reject());
            } else res.send(Promise.resolve());
        }
    );
});

// POST route for PDF generation for Functional ....
app.post('/create-pdf-func', (req, res) => {
    pdf.create(pdfTemplateFunc(req.body), options3).toFile(
        'Resume.pdf',
        (err) => {
            if (err) {
                console.log(err);
                res.send(Promise.reject());
            } else res.send(Promise.resolve());
        }
    );
});

// POST route for PDF generation for Combinational ....
app.post('/create-pdf-comb', (req, res) => {
    pdf.create(pdfTemplateComb(req.body), options4).toFile(
        'Resume.pdf',
        (err) => {
            if (err) {
                console.log(err);
                res.send(Promise.reject());
            } else res.send(Promise.resolve());
        }
    );
});

// POST route for PDF generation for Targeted ....
app.post('/create-pdf-targeted', (req, res) => {
    pdf.create(pdfTemplateTargeted(req.body), options1).toFile(
        'Resume.pdf',
        (err) => {
            if (err) {
                console.log(err);
                res.send(Promise.reject());
            } else res.send(Promise.resolve());
        }
    );
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
