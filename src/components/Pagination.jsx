

const Pagination = ({ reposPerPage, length }) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / reposPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className='pagination'>
      {paginationNumbers.map((pageNumber) => (
        <button key={pageNumber}>{pageNumber}</button>
      ))}
    </div>
  );
};

export default Pagination;