import '../styles/main.css'
import { data } from '../api/mockData'
import { ICar } from '../interfaces/ICar'

function Home() {

  return (
    <section>
      {data.map((item: ICar, index) => {
        const model = item.name.split(' ')[0]
        return (
        <div key={index}>
          <img src={item.image} alt={item.name} />
          <h1>Modelo: {item.name.substring(model.length + 1)}</h1>
          <p>Marca: {model}</p>
          <p>Preço: {item.price}</p>
        </div>
      )}
      )}
    </section>
  )
}

export default Home
