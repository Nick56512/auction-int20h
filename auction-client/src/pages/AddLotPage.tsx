import { BreadCrumb } from "src/components/BreadCrumb";
import { useEffect } from "react";
import { AddLot } from "src/components/AddLot";

export const AddLotPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <BreadCrumb name="Додати лот" />
      <AddLot />
    </>
  );
};
