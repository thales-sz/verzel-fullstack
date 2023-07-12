import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface FilterProps {
  selectedFilter: string | undefined,
  setFilter: React.Dispatch<React.SetStateAction<string | undefined>>,
  handleButtonClick: () => void
}

function Filter({selectedFilter, setFilter, handleButtonClick}: FilterProps) {
  return (
    <aside className='w-4/5 self-stretch text-center'>
          <div className="flex flex-col gap-4">
            <h1 className='font-bold text-2xl'>Ordernar por:</h1>
            <div className="relative w-full lg:max-w-sm gap-2">
                <select
                  className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm focus:border-indigo-600"
                  value={selectedFilter}
                  onChange={(e) => setFilter(e.target.value)}
                  >
                    <option className="hidden" value="filtro">
                      Filtro
                      <div>
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                    </option>
                    <option value="expensive">Maior preço</option>
                    <option value="cheaper">Menor preço</option>
                </select>
            </div>
            <button onClick={handleButtonClick} className='bg-indigo-200 p-1 rounded-md w-1/2 mx-auto hover:bg-indigo-300 transition-colors'>Aplicar</button>
          </div>
        </aside>
  )
}

export default Filter