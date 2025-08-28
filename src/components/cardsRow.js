import React from "react";

const CardsRow = () => {
  return (
    <div className="row">
      <div className="col-xl-3 col-md-6">
        <div className="card bg-primary text-white mb-4">
          <div className="card-body">Primary Card</div>
          <div className="card-footer d-flex align-items-center justify-content-between">
            <button className="small text-white stretched-link" >
              View Details
            </button>
            <div className="small text-white">
              <i className="fas fa-angle-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsRow;
