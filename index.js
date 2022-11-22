const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const produtos = require("./src/produtos.json")

app.get("/produtos", (req,res) => {
    return res.json(produtos)//visualizar
});

app.post("/add", (req, res) => {
  const { nome, carne, ingredientes, imagem, preço, quantidade, unidades } = req.body; // nome das rotas
  const hamburguer = { id: uuid(), nome, carne, ingredientes, imagem, preço, quantidade, unidades};
  hamburguer.push(hamburguer);
  return res.status(201).json(hamburguer);
}); //inserir

app.put("/hamburguer/:id", (req, res) => {
  const { id } = req.params;
  const { nome, carne, ingredientes, imagem, preço, quantidade, unidades } = req.body;
  const newhamburguer = { id, nome, carne, ingredientes, imagem, preço, quantidade, unidades };
  const hamburguerindex = hamburguer.findIndex((hamburguer) => hamburguer.id == id);
  hamburguer[hamburguerindex] = newhamburguer;
  return res.json(newhamburguer);
}); //atualizar

app.delete("/hamburguer/:id", (req, res) => {
  const { id } = req.params;
  const hamburguerindex = hamburguer.findIndex((hamburguer) => hamburguer.id == id);
  hamburguer.splice(hamburguerindex, 1);
  return res.status(204).send();
}); //excluir


app.listen(port, () =>{
    console.log("Servidor esta rodando...")
});