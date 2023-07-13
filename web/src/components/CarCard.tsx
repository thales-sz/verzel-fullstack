interface CarCardProps {
  image: string | undefined,
  name: string,
  model: string,
  price: string
}

function CarCard({ image, name, model, price }: CarCardProps) {

  return (
    <a className='min-w-[346px] border shadow-lg text-left w-[30%] rounded-xl hover:scale-[1.02] transition-all cursor-pointer' href={`car/${name}`}>
        <img src={image} alt={name} className="rounded-t-xl"/>
        <div className='p-2 bg-white rounded-xl'>
          <h1 className='font-extrabold'>{name.substring(model.length + 1)}</h1>
          <p>Marca: {model}</p>
          <p className='font-extrabold text-2xl'>{price}</p>
        </div>
    </a>
  )

}

export default CarCard