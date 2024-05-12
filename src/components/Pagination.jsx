const Pagination = ({ reposPerPage, length, handlePagination }) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / reposPerPage); i++) {
    paginationNumbers.push(i);
    console.log(i);
  }

  return (
    <div className="pagination">
      {paginationNumbers.map((pageNumber) => (
        <span key={pageNumber}>
          <button className="pagination-btn"
            onClick={(e) => {
              e.preventDefault();
              handlePagination(pageNumber);
            }}
          >
            {pageNumber}
          </button>
        </span>
      ))}
    </div>
  );
};

export default Pagination;
