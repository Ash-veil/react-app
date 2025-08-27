import { NavLink } from "react-router-dom";

const BreadCrumb = ({currentPage}) => {
  return (
    <>
      <h1 className="mt-4"> {currentPage} </h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className="breadcrumb-item active">{currentPage}</li>
      </ol>
    </>
  );
};

export default BreadCrumb;
