import { Hero } from "src/components/Hero/Hero";
import { LotsPack } from "src/components/LotsPack";
import { CategoryPack } from "src/components/CategoryPack";
import { FundsPack } from "src/components/FundsPack";

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <LotsPack title="Активні лоти" />
      <LotsPack title="Популярні лоти" />
      <CategoryPack title="Категорії лотів" />
      <LotsPack title="Скоро завершується" />
      <FundsPack title="Допомога благодійним фондам" />
    </>
  );
};
