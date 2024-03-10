import style from "@/app/shop/page.module.css";
import axios from "axios";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    absolute: " may About",
  },
};

interface ProductBody {
  map: any;
  //map(arg0: (ell: PostsBody) => import("react").JSX.Element): import("react").ReactNode;
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  width: number;
  height: number;
}

interface ProductProps {
  products: ProductBody;
}

const ResAxios = async () => {
  const productAxios = await axios.get<ProductProps>(
    "https://dummyjson.com/products?limit=5"
  );
  const { products } = productAxios.data;
  return products;
};

const About = async () => {
  const res: any = await ResAxios();

  return (
    <div className={style.container_blog}>
      <p className={style.context_about}>Shop</p>

      <br />
      <div className={style.container_all_product}>
        {res.map((ell: ProductBody) => (
          <div key={ell.id} className={style.container_product}>
            <h3 className={style.h3_product}>{ell.title}</h3>
            <Image
              className={style.image_product}
              src={ell.thumbnail}
              alt={ell.description}
              width={200}
              height={100}
            />
            <span className={style.drand_product}>{ell.brand}</span>

            <div className={style.container_price}>
              <span className={style.text_price_product}> цена:</span>
              <span className={style.number_price_product}>{ell.price}</span>
              <span className={style.rub_price_product}>руб</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
