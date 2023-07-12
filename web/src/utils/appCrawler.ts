import axios from "axios";
import { load } from "cheerio";

interface Car {
  image: string | undefined;
  name: string;
  price: string;
}

export const getData = async () => {
  const carsList: Car[] = [];
  
  const { data } = await axios.get("https://www.kavak.com/br/carros-usados");

  const page = load(data);
  page(".card-inner").each((_index, item) => {
    const image = page(item).find(".card-header").find("img").attr("src");
    const name = page(item).find(".card-body").find('[class="car-name"]').text().trim();
    const price = page(item).find(".card-body").find('[class="payment-total payment-highlight"]').text().trim();

    carsList.push({ image, name, price });
  });
  
  return carsList.slice(0, 10);
}