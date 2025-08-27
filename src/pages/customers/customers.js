import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import BreadCrumb from "../../components/partials/breadCrumb";
import { getCustomers } from "../../api/customers";
import { Link } from "react-router-dom";
const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const list = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const start = currentPage * itemsPerPage;
  const currentCustomers = customers.slice(start, start + itemsPerPage);
  const pageCount = Math.ceil(customers.length / itemsPerPage);
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
  useEffect(() => {
    list();
  }, []);
  return (
    <div className="container-fluid px-4">
      <BreadCrumb currentPage="Customers" />
      <div class="row">
        {currentCustomers.map((item) => (
          <div class="col-xl-3 col-md-6 border-primary" key={item.id}>
            <div class="card bg-secondary text-white mb-4">
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.description}</p>
                <ul class="">
                  <li class="list-group-item">Email: {item.email}</li>
                  <li class="list-group-item">Phone: {item.phone}</li>
                  <li class="list-group-item">Address: {item.address}</li>
                </ul>
              </div>
              <div class="card-footer d-flex align-items-center justify-content-between">
                <Link class="small text-white stretched-link" to={`/customers/${item.id}`}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="fixed-bottom bg-white border-top py-2">
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            activeClassName={"active"}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            disabledClassName={"disabled"}
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
