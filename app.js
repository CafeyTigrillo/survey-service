sequelize.sync({ force: false }).then(() => {
  console.log("Base de datos sincronizada.");
  const PORT = 3003;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
