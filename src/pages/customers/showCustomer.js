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
      <div class="">
        <div
          class="container d-flex justify-content-center align-items-center"
        
        >
          <div class="card profile-card shadow  mt-4">
            <div class="card-body text-center">
              <img
                src="/img/avatar.png"
                alt="User Profile"
                class="rounded-circle profile-img mb-3"
              />
              <h3 class="card-title mb-0">{customer.name}</h3>
              <p class="text-muted">{customer.job}</p>
              <p class="card-text">
                Passionate web developer with years of experience in creating
                responsive and user-friendly websites.
              </p>

              <ul class="list-group list-group-flush mb-3">
                <li class="list-group-item bg-transparent">
                  <i class="fas fa-lg fa-envelope"></i>{customer.email}
                </li>
                <li class="list-group-item bg-transparent">
                  <i class="fas fa-lg fa-building"></i>{customer.address}
                </li>
                <li class="list-group-item bg-transparent">
                  <i class="fas fa-lg fa-phone"></i>{customer.phone}
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
