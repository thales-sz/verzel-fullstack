import '../styles/main.css'
import { data } from '../api/mockData'
import { ICar } from '../interfaces/ICar'
import CarCard from '../components/CarCard';
import Header from '../components/Header';
import { useState } from 'react';
import PriceFilter from '../components/PriceFilter';
import SearchFilter from '../components/SearchFilter';

function Home() {
  const [selectedPriceFilter, setPriceFilter] = useState<string>()
  const [fixed, setFixed] = useState(false)
  const [searchTermFilter, setSearchTermFilter] = useState<string>('')
  const [carsList, setCarsList] = useState<ICar[]>(data)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
      setFixed(true)
      return
    }
    setFixed(false)
  })


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
    <main>
      <Header />
      <SearchFilter searchTermFilter={searchTermFilter} fixed={fixed} handleFilterChange={handleFilterChange}/>
      <div className={`w-3/4 flex mx-auto ${fixed ? 'mt-20' : ''}`}>
        <PriceFilter selectedFilter={selectedPriceFilter} setFilter={setPriceFilter} handleButtonClick={handleButtonClick} fixed={fixed}/>
        <ul className={`flex flex-wrap gap-5 justify-center max-w-[1160px]`}>
          {filteredProducts.map((item: ICar, index) => {
            const model = item.name.split(' ')[0];
            return (
              <CarCard {...item} model={model} key={index}/>
            )}
          )}
        </ul>
      </div>
    </main>
  )
}

export default Home
