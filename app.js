const express = require('express');
const cors = require('cors');
const app = express();
const surveyRoutes = require('./routes/surveyRoutes');
const sequelize = require('./config/database');

app.use(cors());
app.use(express.json()); 

app.use('/api', surveyRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log("Base de datos sincronizada.");
  const PORT = 3003;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
