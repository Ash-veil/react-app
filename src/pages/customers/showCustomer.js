import { useParams } from "react-router-dom";
import { getOneCustomer } from "../../api/customers";
import { useState, useEffect } from "react";

import BreadCrumb from "../../components/partials/breadCrumb";

const ShowCustomer = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    setCustomer(getOneCustomer(id));
  }, []);

  return (
    <div className="container-fluid px-4">
      <BreadCrumb currentPage={`Customer`} />
      <div className="">
        <div
          className="container d-flex justify-content-center align-items-center"
        
        >
          <div className="card profile-card shadow  mt-4">
            <div className="card-body text-center">
              <img
                src="/img/avatar.png"
                alt="User Profile"
                className="rounded-circle profile-img mb-3"
              />
              <h3 className="card-title mb-0">{customer.name}</h3>
              <p className="text-muted">{customer.job}</p>
              <p className="card-text">
                Passionate web developer with years of experience in creating
                responsive and user-friendly websites.
              </p>

              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item bg-transparent">
                  <i className="fas fa-lg fa-envelope"></i>{customer.email}
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="fas fa-lg fa-building"></i>{customer.address}
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="fas fa-lg fa-phone"></i>{customer.phone}
                </li>
              </ul>

             

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCustomer;
