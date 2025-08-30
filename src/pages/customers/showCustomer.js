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
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                class="rounded-circle img-fluid"
                style={{width: 150+'px'}}
              />
              <h5 class="my-3">{customer.name}</h5>
              <p class="text-muted mb-1">{customer.job}</p>
              <p class="text-muted mb-4">{customer.address}</p>
              <div class="d-flex justify-content-center mb-2">
               
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  class="btn btn-outline-primary ms-1"
                >
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Full Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{customer.name}</p>
                </div>
              </div>
              <hr />
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{customer.email}</p>
                </div>
              </div>
              <hr />
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Phone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{customer.phone}</p>
                </div>
              </div>
              <hr />
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Address</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{customer.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCustomer;
