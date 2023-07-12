import axios from "axios";
import { load } from "cheerio";

export interface Car {
  image: string | undefined;
  name: string;
  price: string;
}

export const api = axios.create({
  baseURL: 'https://www.kavak.com/br/carros-usados',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export const getData = async () => {
  const carsList: Car[] = [];

  const { data } = await api.get("");

  const page = load(data);
  page(".card-inner").each((_index, item) => {
    const image = page(item).find(".card-header").find("img").attr("src");
    const name = page(item).find(".card-body").find('[class="car-name"]').text().trim();
    const price = page(item).find(".card-body").find('[class="payment-total payment-highlight"]').text().trim();

    carsList.push({ image, name, price });
  });
  
  console.log(carsList.slice(0, 9))
  return carsList.slice(0, 9);
}

getData();