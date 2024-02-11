import { Hero } from "src/components/Hero";
import { LotsPack } from "src/components/LotsPack";
import { CategoryPack } from "src/components/CategoryPack";
import { FundsPack } from "src/components/FundsPack";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <>
      {/* посилання щоб перейти*/}
      <Link to="/search">Search Results Page</Link>
      <br />
      <Link to="/lots/:lotId">Lot Page</Link>
      <Hero />
      <LotsPack title="Активні лоти" className="" />
      <LotsPack title="Популярні лоти" className="" />
      <CategoryPack title="Категорії лотів" />
      <LotsPack title="Скоро завершується" className="" />
      <FundsPack title="Допомога фондам" />
    </>
  );
};
