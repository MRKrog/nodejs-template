const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.set('port', 3001);

app.get('/', (req, res) => {
  res.json('Server Running!')
});




app.listen(app.get('port'), () => {
  console.log(`App is running on localhost:${app.get('port')}.`);
})
