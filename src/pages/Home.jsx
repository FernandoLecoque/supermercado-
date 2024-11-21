import React from 'react'
import CardProduto from '../components/CardProduto'
import Container from "react-bootstrap/Container";



const Home = () => {
const produtos = [
  {id: 1, nome:"Shampo cr7" , descricao:"Melhor shampoo do mundo", preco:"7,77", categoria:"Saúde e beleza", imagemUrl:"https://drogal.vtexassets.com/arquivos/ids/240123-800-auto?v=638660355861330000&width=800&height=auto&aspect=true"},

  {id: 2, nome:"Perfume prada" , descricao:"Melhor aroma que sentira", preco:"56,90", categoria:"beleza", imagemUrl:"https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw8a8ca7c6/images/hi-res-BR/3614273760638.1_1500px.jpg?sw=556&sh=680&sm=fit"},

  {id: 3, nome:"Soju" , descricao:"Bebida destilada transparente", preco:"20,10", categoria:"Bebida", imagemUrl:"https://m.media-amazon.com/images/I/616z873iTzL.jpg"}
]

  return (
    <div>
      <h1>Lista de produtos</h1>
      <container>
      <div className="lista-produtos d-flex col-12 gap-3 mt-3 justify-content-center flex-wrap">
        {/* Cards informações fixas */}
        {/* <CardProduto id="1" nome="Shampo cr7" descricao="Melhor shampoo do mundo" preco="7,77" categoria="Saúde e beleza" imagemUrl="https://drogal.vtexassets.com/arquivos/ids/240123-800-auto?v=638660355861330000&width=800&height=auto&aspect=true"/> */}
        {produtos.map((prod) =>
              <CardProduto id={prod.id} nome={prod.nome} descricao={prod.descricao} preco={prod.preco} categoria={prod.categoria} imagemUrl={prod.imagemUrl}/>
        )}
      </div>
      </container>
    </div>
  )
}

export default Home
