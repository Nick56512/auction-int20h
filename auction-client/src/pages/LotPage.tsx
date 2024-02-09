import { Link, useParams } from "react-router-dom";

export const LotPage: React.FC = () => {
  const { lotId } = useParams();

  return (
    <>
      <h1 className="lot">Lot {lotId} page</h1>
      <Link to="/">to home page</Link>
    </>
  );
};
