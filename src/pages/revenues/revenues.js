import { useState, useEffect } from "react";
import { getRevenues } from "../../api/revenue";
import { getCustomers } from "../../api/customers";
import BreadCrumb from "../../components/partials/breadCrumb";
import DataTable from "react-data-table-component";

const Revenues = () => {
  const [revenues, setRevenues] = useState([]);
  const [customers, setCustomers] = useState([]);

  const list = async () => {
    const Edata = await getCustomers()
    const Rdata = await getRevenues();
    setCustomers(Edata);
    setRevenues(Rdata);
  };
  const findCustomer = (id) =>{
    const search = customers.find( c => c.id === id)
    return search? search.name : "?"
  }
  const columns = [
    {
      name: "Customer",
      selector: (row) => findCustomer(row.customerId),
    },
    {
      name: "Amount",
      selector: (row) => row.amount + " $",
    },
    {
      name: "Source",
      selector: (row) => row.source ,
    },
    {
      name: "Status",
      selector: (row) => row.status ,
    },
    {
      name: "Payment Method",
      selector: (row) => row.paymentMethod,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    }, {
      name: "Description",
      selector: (row) => row.description,
    },
  ];

  useEffect(() => {
    list();
  }, []);

  return (
    <div className="container-fluid px-4">
      <BreadCrumb currentPage="Revenues" />
      <DataTable
            columns={columns}
            data={revenues}
            highlightOnHover
            pagination
        />
    </div>
  );
};

export default Revenues;
