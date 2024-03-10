import axios from "axios";
import CoinList from "../component/coinList/CoinList";

export const getStaticProps = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    // console.log(response);
    return {
      props: {
        data: response?.data,
      },
      revalidate: 120,
    };
  } catch (err) {
    // console.log(err.response.status);
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
};

export default function Home({ data }) {
  return <CoinList coins={data} />;
}