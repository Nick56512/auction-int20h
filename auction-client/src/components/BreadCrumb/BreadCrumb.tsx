import { Link } from "react-router-dom";
import "./BreadCrumb.scss";

interface Props {
  name: string;
}

export const BreadCrumb: React.FC<Props> = ({ name }) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ul>
        <li className="main-page">
          <Link to="/">Головна</Link>
        </li>
        <li className="current-page">
          <span aria-current="page">{name}</span>
        </li>
      </ul>
    </nav>
  );
};
