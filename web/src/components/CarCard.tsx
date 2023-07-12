interface CarCardProps {
  image: string | undefined,
  name: string,
  model: string,
  price: string
}
function CarCard({ image, name, model, price }: CarCardProps) {
  return (
    <li className='border shadow-lg text-left w-1/4 rounded-xl'>
        <img src={image} alt={name} className="rounded-t-xl"/>
        <div className='p-2'>
          <h1 className='font-extrabold'>{name.substring(model.length + 1)}</h1>
          <p>Marca: {model}</p>
          <p className='font-extrabold text-2xl'>{price}</p>
        </div>
    </li>
  )
}

export default CarCard