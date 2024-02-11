import { Hero } from "src/components/Hero";
import { LotsPack } from "src/components/LotsPack";
import { CategoryPack } from "src/components/CategoryPack";
import { FundsPack } from "src/components/FundsPack";

export const HomePage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
      {/* посилання щоб перейти*/}
      <Link to="/search">Search Results Page</Link>
      <br />
      <Link to="/lots/:lotId">Lot Page</Link>
      <br />
      <Link to="/add-lot">Add Lot</Link>
=======
>>>>>>> main
      <Hero />
      <LotsPack title="Активні лоти" />
      <LotsPack title="Популярні лоти" />
      <CategoryPack title="Категорії лотів" />
      <LotsPack title="Скоро завершується" />
      <FundsPack title="Допомога фондам" />
    </>
  );
};
