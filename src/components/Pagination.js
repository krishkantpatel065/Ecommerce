import "../styleFolder/Pagination.css";
function Pagination({ numberOfPages, page, setPage }) {
  const pageButtons = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pageButtons.push(
      <button
        key={i}
        className="page-btn"
        onClick={() => setPage(i)}
        style={{ backgroundColor: page === i ? "brown" : "#eee" }}
      >
        {i}
      </button>
    );
  }
  return (
    <div style={{position:"relative"}}>
      <div className="buttonDiv">
        <button
          className="previous"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          ◀
        </button>

        {pageButtons}

        <button
          className="next"
          onClick={() => setPage(page + 1)}
          disabled={page === numberOfPages}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Pagination;
