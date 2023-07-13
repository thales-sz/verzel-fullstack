import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface FilterProps {
  selectedFilter: string | undefined
  setFilter: React.Dispatch<React.SetStateAction<string | undefined>>
  handleButtonClick: () => void
  fixed: boolean
}

function PriceFilter ({ selectedFilter, setFilter, handleButtonClick }: FilterProps): JSX.Element {
  return (
    <aside className={'flex flex-col w-4/5 max-w-[264px] min-w-[200px] self-stretch text-center transition-all mt-32'}>
          <div className="gap-4 flex flex-col">
            <h1 className='font-bold text-2xl'>Ordernar por:</h1>
            <div className="relative w-full lg:max-w-sm gap-2">
                <select
                  className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm focus:border-indigo-600"
                  value={selectedFilter}
                  onChange={(e) => { setFilter(e.target.value) }}
                  >
                    <option className="hidden" value="filtro">
                      Filtro
                      <FontAwesomeIcon icon={faAngleDown} size="2xs" />
                    </option>
                    <option value="expensive">Maior preço</option>
                    <option value="cheaper">Menor preço</option>
                </select>
            </div>
            <button onClick={handleButtonClick} className='bg-indigo-200 p-1 rounded-md w-1/2 mx-auto hover:bg-indigo-300 shadow-sm transition-colors border'>Aplicar</button>
          </div>
        </aside>
  )
}

export default PriceFilter
