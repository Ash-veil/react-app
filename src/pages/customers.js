import { useEffect, useState } from "react";
import BreadCrumb from "../components/partials/breadCrumb";
import { getCustomers } from "../api.js/customers";
const Customers = () => {

const [customers, setCustomers] = useState([])
const list = async ()=>{
  const data =  await getCustomers()
  setCustomers(data)
}
useEffect(()=>{
  list()
}, [])
  return (
    <div className="container-fluid px-4">
      <BreadCrumb currentPage="Customers" />
      <div class="row">
        {customers.map((item) => (
          <div class="col-xl-3 col-md-6 border-primary">
            <div class="card bg-secondary text-white mb-4">
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">
                  {item.description}
                </p>
                <ul class="">
                  <li class="list-group-item">Email: {item.email}</li>
                  <li class="list-group-item">Phone: {item.phone}</li>
                  <li class="list-group-item">Address: {item.address}</li>
                </ul>
              </div>
              <div class="card-footer d-flex align-items-center justify-content-between">
                <a class="small text-white stretched-link" href="#">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
