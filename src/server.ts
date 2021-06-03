import express from 'express';


const app = express();

app.get('/', (request, response) => {
  return response.json({
    message: 'Hospedagem no Heroku 😎',
  })
})

app.listen(process.env.PORT || 3333, () => {
  console.log('Server iniciado 😄');
})

