import '../styles/main.css'
import { data } from '../api/mockData'
import { ICar } from '../interfaces/ICar'
import CarCard from '../components/CarCard';
import Header from '../components/Header';

function Home() {

  return (
    <>
    <Header />
    <ul className='flex flex-wrap w-2/3 gap-5 items-center mx-auto justify-center'>
      {data.map((item: ICar, index) => {
        const model = item.name.split(' ')[0];
        return (
          <CarCard {...item} model={model} key={index}/>
        )}
      )}
    </ul>
    </>
  )
}

export default Home
