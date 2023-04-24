import express from 'express';

const app = express();
const { PORT = 3001 } = process.env;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});

 