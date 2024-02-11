import { Hero } from "src/components/Hero";
import { LotsPack } from "src/components/LotsPack";
import { CategoryPack } from "src/components/CategoryPack";
import { FundsPack } from "src/components/FundsPack";
import { useEffect } from "react";

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Hero />
      <LotsPack title="Активні лоти" />
      <LotsPack title="Популярні лоти" />
      <CategoryPack title="Категорії лотів" />
      <LotsPack title="Скоро завершується" />
      <FundsPack title="Допомога фондам" />
    </>
  );
};
