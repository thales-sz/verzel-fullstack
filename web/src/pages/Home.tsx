import '../styles/main.css'
import { data } from '../api/mockData'
import { ICar } from '../interfaces/ICar'
import CarCard from '../components/CarCard';
import Header from '../components/Header';
import { useState } from 'react';
import PriceFilter from '../components/PriceFilter';

function Home() {
  const [selectedPriceFilter, setPriceFilter] = useState<string>()
  const [searchTermFilter, setSearchTermFilter] = useState<string>('')
  const [carsList, setCarsList] = useState<ICar[]>(data)


  const handleButtonClick = () => {
    const orderedCars = [...carsList];

    if (selectedPriceFilter) {
      orderedCars.sort((a: ICar, b: ICar) => {
        const priceA = Number(a.price.replace('R$ ', '').replace('.', ''))
        const priceB = Number(b.price.replace('R$ ', '').replace('.', ''))
        if (selectedPriceFilter === 'expensive') return priceB - priceA
        return priceA - priceB
      })
    }

    setCarsList(orderedCars)
  }

  const handleFilterChange = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>): void => {
    setSearchTermFilter(value)
  }

  const filteredProducts = carsList.filter((car) => {
    return car.name
      .toLowerCase()
      .includes(searchTermFilter.toLocaleLowerCase())
  })

  return (
    <>
      <Header />
      <div className='flex w-full'>
        <input
          type="text"
          onChange={handleFilterChange}
          value={searchTermFilter}
          placeholder='Procure por marca, modelo, nome...'
          className='w-2/3 mx-auto p-2.5 text-gray-500 bg-white border-2 border-slate-400 rounded-md shadow-lg mb-5 -mt-5'
        />
      </div>
      <div className='w-3/4 flex items-center mx-auto'>
        <PriceFilter selectedFilter={selectedPriceFilter} setFilter={setPriceFilter} handleButtonClick={handleButtonClick} />
        <ul className='flex flex-wrap gap-5 justify-center'>
          {filteredProducts.map((item: ICar, index) => {
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
