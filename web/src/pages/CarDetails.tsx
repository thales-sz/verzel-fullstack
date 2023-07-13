import { data } from '../api/mockData'
import Header from '../components/Header'

function CarDetails (): JSX.Element {
  const car = data[2]
  const model = car.name.split(' ')[0]
  return (
    <article>
      <Header />
      <section className='flex w-2/3 rounded-xl transition-all mx-auto my-10 text-center min-w-[320px]'>
        <figure className="w-[800px] overflow-hidden rounded-xl shadow-lg">
          <img src={car.image} alt={car.name} className="rounded-xl w-[800px] hover:scale-150 transition-all duration-300"/>
        </figure>
        <div className='flex flex-col px-2 py-6 rounded-xl self-center mx-auto gap-4 border bg-white shadow-md'>
          <h1 className='font-extrabold text-2xl'>{car.name.substring(model.length + 1)}</h1>
          <p>Marca: {model}</p>
          <hr/>
          <p className='font-extrabold text-4xl'>{car.price}</p>
          <hr/>
          <p>Descrição...</p>
          <button className="bg-indigo-500 w-2/3 rounded-md p-2 text-indigo-50 shadow-md hover:bg-indigo-700 mx-auto">Tenho interesse!</button>
        </div>
      </section>
    </article>
  )
}

export default CarDetails
