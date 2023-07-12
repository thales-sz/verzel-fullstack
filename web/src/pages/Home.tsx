import '../styles/main.css'
import { data } from '../api/mockData'
import { ICar } from '../interfaces/ICar'
import CarCard from '../components/CarCard';
import Header from '../components/Header';
import Filter from '../components/Filter';

function Home() {

  return (
    <>
      <Header />
      <div className='w-3/4 flex items-center mx-auto'>
        <Filter />
        <ul className='flex flex-wrap gap-5 justify-center border border-red-500'>
          {data.map((item: ICar, index) => {
            const model = item.name.split(' ')[0];
            return (
              <CarCard {...item} model={model} key={index}/>
            )}
          )}
        </ul>
      </div>
    </>
  )
}

export default Home
