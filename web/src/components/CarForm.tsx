import { useState } from 'react'

function CarForm (): JSX.Element {
  const [form, setForm] = useState({
    brand: '',
    model: '',
    price: '',
    description: '',
    image: ''
  })

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }
  return (
    <form className="space-y-4 w-1/2 text-center">
          <h1 className='font-bold text-xl'>Cadastrar novo carro:</h1>
          <div>
            <label
              htmlFor="brand"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Marca do carro:
            </label>
            <input
              type="text"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              id="brand"
              className="mx-auto focus:ring-primary-600 focus:border-primary-600 block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
              placeholder="Marca"
              required
            />
          </div>
          <div>
            <label
              htmlFor="model"
              className="mb-2 block text-sm font-medium text-gray-900 "
            >
              Modelo do carro:
            </label>
            <input
              type="text"
              name="model"
              value={form.model}
              onChange={handleChange}
              id="model"
              className="focus:ring-primary-600 focus:border-primary-600 block w-1/2 mx-auto rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
              placeholder="Modelo"
              required
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-medium text-gray-900 "
            >
              Imagem:
            </label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              id="image"
              className="focus:ring-primary-600 focus:border-primary-600 block w-1/2 mx-auto rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
              placeholder="Link da imagem"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Descrição:
            </label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              id="description"
              placeholder="Descrição"
              className="focus:ring-primary-600 focus:border-primary-600 block w-1/2 mx-auto rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Preço:
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              id="price"
              placeholder="Preço"
              className="focus:ring-primary-600 focus:border-primary-600 block w-1/2 mx-auto rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="hover:bg-indigo-700 w-1/3 rounded-lg bg-indigo-500 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Cadastrar
          </button>
        </form>
  )
}

export default CarForm
