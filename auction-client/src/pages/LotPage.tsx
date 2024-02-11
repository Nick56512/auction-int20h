import { useParams } from "react-router-dom";
import { BreadCrumb } from "src/components/BreadCrumb";
import { LotsPack } from "src/components/LotsPack";
import { useEffect, useState } from "react";
import { AboutLot } from "src/components/AboutLot";
import { Lot } from "src/types/Lot";
import { useAppSelector } from "src/app/hooks";
import { users } from "src/utils/mockData";
import { getLotById } from "src/api";

export const LotPage: React.FC = () => {
  const lots = useAppSelector((state) => state.lots);
  const { lotId } = useParams();
  const [loading, setLoading] = useState(false);
  const [lot, setLot] = useState<Lot | null>(null);

  useEffect(() => {
    const currrentLot = lots.find(lot => lot._id === lotId);
    setLot(currrentLot ?? null);

  }, [lots, lotId]);

  const userWithLot = users.find((user) => user.id === lot?.creatorId) ?? null;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <BreadCrumb name={lot?.title ?? ""} />
          <AboutLot lot={lot} user={userWithLot} />
        </>
      )}
      <LotsPack title="Вас можуть зацікавити" />
    </>
  );
};
