import React from "react";

function Buttons({ page, setPage, totalMovies }) {
  const totalPages = Math.ceil(totalMovies / 20);
  return (
    <div>
      <div className="mt-8 text-center">
        <h1 className="text-[#6ac045] text-lg sm:text-xl font-medium tracking-wide">
          2160p 4K YTS YIFY Movies
          <span className="text-zinc-500 font-normal italic">
            (ordered by latest)
          </span>
          <span className="text-[#6ac045]"> - page {page}</span>
        </h1>
      </div>

      <div className="mt-5 flex flex-wrap justify-center items-center gap-1 text-xs font-bold">
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className="border border-zinc-800 bg-[#1d1d1d] hover:bg-[#6ac045] text-white px-3 py-2"
        >
          &laquo; First
        </button>

        <button
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          disabled={page === 1}
          className="border border-zinc-800 bg-[#1d1d1d] hover:bg-[#6ac045] text-white px-3 py-2"
        >
          &laquo; Previous
        </button>

        <button
          onClick={() => setPage(1)}
          className={`border border-zinc-800 px-3 py-2 transition-all duration-200 ${
            page === 1
              ? "bg-[#6ac045] border-[#6ac045] text-white"
              : "bg-[#1d1d1d] text-zinc-400 hover:bg-[#6ac045] hover:text-white"
          }`}
        >
          1
        </button>

        <button
          onClick={() => setPage(2)}
          className={`border border-zinc-800 px-3 py-2 transition-all duration-200 ${
            page === 2
              ? "bg-[#6ac045] border-[#6ac045] text-white"
              : "bg-[#1d1d1d] text-zinc-400 hover:bg-[#6ac045] hover:text-white"
          }`}
        >
          2
        </button>

        <button
          onClick={() => setPage(3)}
          className={`border border-zinc-800 px-3 py-2 transition-all duration-200 ${
            page === 3
              ? "bg-[#6ac045] border-[#6ac045] text-white"
              : "bg-[#1d1d1d] text-zinc-400 hover:bg-[#6ac045] hover:text-white"
          }`}
        >
          3
        </button>

        <button
          onClick={() => setPage(4)}
          className={`border border-zinc-800 px-3 py-2 transition-all duration-200 ${
            page === 4
              ? "bg-[#6ac045] border-[#6ac045] text-white"
              : "bg-[#1d1d1d] text-zinc-400 hover:bg-[#6ac045] hover:text-white"
          }`}
        >
          4
        </button>

        <button
          onClick={() => setPage(5)}
          className={`border border-zinc-800 px-3 py-2 transition-all duration-200 ${
            page === 5
              ? "bg-[#6ac045] border-[#6ac045] text-white"
              : "bg-[#1d1d1d] text-zinc-400 hover:bg-[#6ac045] hover:text-white"
          }`}
        >
          5
        </button>

        <button
          onClick={() => setPage(6)}
          className={`border border-zinc-800 px-3 py-2 transition-all duration-200 ${
            page === 6
              ? "bg-[#6ac045] border-[#6ac045] text-white"
              : "bg-[#1d1d1d] text-zinc-400 hover:bg-[#6ac045] hover:text-white"
          }`}
        >
          6
        </button>

        <button
          onClick={() => setPage(7)}
          className={`border border-zinc-800 px-3 py-2 transition-all duration-200 ${
            page === 7
              ? "bg-[#6ac045] border-[#6ac045] text-white"
              : "bg-[#1d1d1d] text-zinc-400 hover:bg-[#6ac045] hover:text-white"
          }`}
        >
          7
        </button>

        <button
          onClick={() => setPage(8)}
          className={`border border-zinc-800 px-3 py-2 transition-all duration-200 ${
            page === 8
              ? "bg-[#6ac045] border-[#6ac045] text-white"
              : "bg-[#1d1d1d] text-zinc-400 hover:bg-[#6ac045] hover:text-white"
          }`}
        >
          8
        </button>

        <span className="border border-zinc-800 bg-[#1d1d1d] text-zinc-500 px-2 py-2">
          ...
        </span>

        <button
          onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
          disabled={page >= totalPages}
          className="border border-zinc-800 bg-[#1d1d1d] hover:bg-[#6ac045] text-white px-3 py-2"
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
}

export default Buttons;
