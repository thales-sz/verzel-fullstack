import Loading from '../components/Loading';
import '../styles/main.css'
import { Car, getData } from '../../../crawler/src/appCrawler';
import { useQuery } from 'react-query';

function Home() {

  const { isLoading, data } = useQuery({
    queryFn: getData,
    refetchOnWindowFocus: false
  })

  return (
    <section>
      {isLoading ? <Loading /> : data?.map((item: Car, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <p>{item.name.split(' ')[0]}</p>
          <p>{item.price}</p>
          <img src={item.image} alt={item.name} />
        </div>
      )
      )}
    </section>
  )
}

export default Home
