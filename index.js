const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock Database
let items = [
  {
    id: 1,
    name: 'Laptop',
    price: 1200,
    description: 'Powerful gaming laptop',
    image: 'https://picsum.photos/seed/1/200',
  },
  {
    id: 2,
    name: 'Phone',
    price: 800,
    description: 'Latest smartphone',
    image: 'https://picsum.photos/seed/2/200',
  },
];

// Routes
app.get('/api/items', (req, res) => res.json(items));

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
