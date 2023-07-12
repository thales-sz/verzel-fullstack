function Filter() {
  return (
    <aside className='w-4/5 self-stretch text-center'>
      <div className="flex flex-col gap-4">
        <h1 className='font-bold text-2xl'>Ordernar por:</h1>
        <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option selected hidden>
                  Filtro
                  <i className="fa-solid fa-user"></i>
                </option>
                <option>Maior preço</option>
                <option>Menor preço</option>
            </select>
        </div>
      </div>
    </aside>
  )
}

export default Filter