import { useState, useEffect } from "react";
import { getExpenses } from "../../api/expenses";
import BreadCrumb from "../../components/partials/breadCrumb";
import DataTable from "react-data-table-component";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const list = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Amount",
      selector: (row) => row.amount + " $",
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
      <BreadCrumb currentPage="Expenses" />
      <DataTable
			columns={columns}
			data={expenses}
            highlightOnHover
            pagination
		/>
    </div>
  );
};

export default Expenses;
