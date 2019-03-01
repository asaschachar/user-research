const express = require('express');
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

// Constants
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8080;

const app = express();
app.use(morgan('tiny'))
app.use(cookieParser())

app.get('/', (req, res) => {

  let items = [
    { name: 'Shirt', price: '$14' },
    { name: 'Towel', price: '$10' },
    { name: 'Sandals', price: '$30' },
    { name: 'Bucket', price: '$20' },
    { name: 'Ticket to Hawaii', price: '$5000' },
  ]

  let content = items.map((item) => (`<li>${item.name}: ${item.price}</li>`)).join('\n')

  res.send(`
    <html>
      <h3>Welcome to the Store</h3>
      <h4>Items for Sale:</h4>
      <ol>
        ${content}
      </ol>
    </html>`
  );
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
