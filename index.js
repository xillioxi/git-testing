const app = require("express")();

app.get('/', (req,res) => 
  res.json({message:"Docker is easy"})
);

const port = process.env.PORT || 8080;

app.listen(port, ()=>console.log(`app is listening on http://localhost:${process.env.PORT}`))

