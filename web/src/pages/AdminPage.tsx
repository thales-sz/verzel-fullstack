import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { data } from '../api/mockData'
import Header from '../components/Header'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import CarForm from '../components/CarForm'

function AdminPage (): JSX.Element {
  return (
    <article>
      <Header />
      <section className='flex w-3/4 mx-auto mt-32'>
        <div className='w-1/2 text-center space-y-4'>
          <h1 className='font-bold text-xl'>Listagem de carros:</h1>
          <ul className='bg-white gap-6 h-[440px] px-3 pb-3 overflow-y-auto text-sm text-gray-700 rounded-md'>
            {data.map((car) => {
              return (
                <>
                  <li key={car.name} className='flex p-4 justify-between text-left'>
                    <h1 className='min-w-[75%] font-bold text-lg'>
                      {car.name}
                    </h1>
                    <button>
                      <FontAwesomeIcon icon={faPen} size="xl" className='hover:scale-110 hover:text-indigo-400 -mr-10'/>
                    </button>
                    <button>
                      <FontAwesomeIcon icon={faTrash} size="xl" className='hover:scale-110 hover:text-red-400'/>
                    </button>
                  </li>
                  <hr/>
                </>
              )
            })}
          </ul>
        </div>
        <CarForm />
      </section>
    </article>
  )
}

export default AdminPage
