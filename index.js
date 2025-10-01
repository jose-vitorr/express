const express = require('express');

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Retornar content-type: application/json
app.get('/', (request, response)=>{
    response.json({ "message": 'Hello World!' });
});

app.post('/', (request, response) => {
    return response.json({ "message": 'ola jose' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});