import { useEffect, useState } from "react";
import "./cardStyle.css";
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
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="mb-3">
            <h5 class="card-title">
              Contact List <span class="text-muted fw-normal ms-2">({customers.length})</span>
            </h5>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
            <div>
              <a
                href="#"
                class="btn btn-primary"
              >
                <i class="bx bx-plus me-1"></i> Add New
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        {currentCustomers.map((item) => (
          <div class="col-xl-3 col-sm-6">
            <div class="card">
              <div class="card-body">
                <div class="dropdown float-end">
                  <a
                    class="text-muted dropdown-toggle font-size-16"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <i class="bx bx-dots-horizontal-rounded"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">
                      Edit
                    </a>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Remove
                    </a>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="avatar-md">
                    <div class="avatar-title bg-soft-primary text-primary display-6 m-0 rounded-circle">
                      <i class="fas fa-md fa-user"></i>
                    </div>
                  </div>
                  <div class="flex-1 ms-3">
                    <h5 class="font-size-16 mb-1">
                      <a href="#" class="text-dark">
                        {item.name}
                      </a>
                    </h5>
                    <span class="badge badge-soft-success mb-0">
                      {item.description}
                    </span>
                  </div>
                </div>
                <div class="mt-3 pt-1">
                  <p class="text-muted mb-0">
                    <i class="fas fa-lg fa-phone font-size-15 align-middle pe-2 text-primary"></i>{" "}
                    {item.phone}
                  </p>
                  <p class="text-muted mb-0 mt-2">
                    <i class="fas fa-lg fa-envelope font-size-15 align-middle pe-2 text-primary"></i>{" "}
                    {item.email}
                  </p>
                  <p class="text-muted mb-0 mt-2">
                    <i class="fas fa-lg fa-building font-size-15 align-middle pe-2 text-primary"></i>{" "}
                    {item.address}
                  </p>
                </div>
                <div class="d-flex gap-2 pt-4">
                
                  <Link type="button" class="btn btn-secondary btn-sm w-100"  to={`/customers/${item.id}`}>
                    <i class="fas fa-sm fa-user me-1"></i> Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="row g-0 align-items-center pb-4">
        <div class="col-sm-6">
          <div>
            
          </div>
        </div>
        <div class="col-sm-6">
          <div class="float-sm-end">
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
    </div>
  );
};

export default Customers;
