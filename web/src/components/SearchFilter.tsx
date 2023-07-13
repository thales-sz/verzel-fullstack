interface SearchFilterProps {
  fixed: boolean
  handleFilterChange: (event: React.FormEvent<HTMLInputElement>) => void
  searchTermFilter: string
}

function SearchFilter ({ fixed, handleFilterChange, searchTermFilter }: SearchFilterProps): JSX.Element {
  return (
    <div className={`flex w-full ${fixed ? 'fixed top-0' : ''} p-3 z-10 `}>
        <input
          type="text"
          onChange={handleFilterChange}
          value={searchTermFilter}
          placeholder='Procure por marca, modelo, nome...'
          className='w-2/3 mx-auto p-2.5 text-gray-500 border-2 border-slate-400 rounded-md shadow-lg mb-5'
        />
      </div>
  )
}

export default SearchFilter
