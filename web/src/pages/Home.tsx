import '../styles/main.css'
import { data } from '../api/mockData'
import { ICar } from '../interfaces/ICar'
import CarCard from '../components/CarCard';
import Header from '../components/Header';
import { useState } from 'react';
import Filter from '../components/Filter';

function Home() {
  const [selectedFilter, setFilter] = useState<string>()
  const [carsList, setCarsList] = useState<ICar[]>(data)


  const handleButtonClick = () => {
    const orderedCars = [...carsList];

    if (selectedFilter) {
      orderedCars.sort((a: ICar, b: ICar) => {
        const priceA = Number(a.price.replace('R$ ', '').replace('.', ''))
        const priceB = Number(b.price.replace('R$ ', '').replace('.', ''))
        if (selectedFilter === 'expensive') return priceB - priceA
        return priceA - priceB
      })
    }
    setCarsList(orderedCars)
  }

  return (
    <>
      <Header />
      <div className='w-3/4 flex items-center mx-auto'>
        <Filter selectedFilter={selectedFilter} setFilter={setFilter} handleButtonClick={handleButtonClick} />
        <ul className='flex flex-wrap gap-5 justify-center'>
          {carsList.map((item: ICar, index) => {
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
