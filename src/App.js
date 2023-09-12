import { useState } from "react";

function App() {


let produtos = [
  {id: 0, nome: "Coca", preco: 5, foto: "https://static.paodeacucar.com/img/uploads/1/768/12059768.jpeg"},
  {id: 1, nome: "Fanta", preco: 3, foto: "https://andinacocacola.vtexassets.com/arquivos/ids/155678/7894900050011_02.jpg?v=637722481125170000"},
  {id: 2, nome: "Jaca", preco: 9, foto: "https://static3.tcdn.com.br/img/img_prod/450860/muda_de_jaca_mole_464_1_20190611093554.jpg"}
]; 
 

const [total, setTotal] = useState(0);
const [carrinho, setCarrinho] = useState([]);

const comprar = (p) =>{
  setTotal(total + p.preco);
  setCarrinho([...carrinho, p]);
  console.log("Carrinho: ", carrinho);
}; 

const renderItemCarrinho = (p) =>{
  return(

    <li>{p.nome} - R$ {p.preco} -
    <button onClick={()=>comprar(p)}>Remover</button></li>
 
 );
};

const renderProduto = (p) =>{
  return(

    <li className="produto">
      <img src={p.foto}/> {p.nome} - R$ {p.preco} - 
      <button onClick={()=>comprar(p)}>Comprar</button>
    </li>
 
 );
};

  return (
    
    <>
    <h3>Lista de produtos:</h3>
    <ul className="listaDeProdutos">
      {produtos.map(renderProduto)}
    </ul>
    <hr/>

    <h3> Produtos no carrinho:</h3>
    <ul>
      {carrinho.map(renderItemCarrinho)}
    </ul>

    <h3>Total: R$ {total}</h3>
    </>
    

  );
};

export default App;
