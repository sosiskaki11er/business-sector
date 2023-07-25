import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={handlePreviousPage}
      >
        Назад
      </button>
      <div className="pagination-pages">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            style={{color:`${pageNumber === currentPage ? "#7EBC3C" : "#474955"}`}}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        Далее
      </button>
    </div>
  );
};

export default Pagination;