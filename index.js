import express from 'express';
import axios from 'axios';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const bearertoekn = "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";
const API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";
const headers = { Authorization: `Bearer ${bearertoekn}` };

app.get('/', (req, res) => {
    res.render('index', { summary: null, originalText: null, error: null });
});

app.post('/summarize', async (req, res) => {
    const { text } = req.body;
    
    try {
        const response = await axios.post(API_URL, {
            inputs: text,
            parameters: {
                max_length: 130,
                min_length: 30,
            }
        }, { headers });

        const summary = response.data[0].summary_text;
        res.render('index', { summary, originalText: text, error: null });
    } catch (error) {
        console.error('Error:', error);
        res.render('index', { 
            summary: null, 
            originalText: text, 
            error: "Failed to generate summary. Please try again." 
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});