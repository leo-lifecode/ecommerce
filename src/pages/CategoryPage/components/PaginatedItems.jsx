import { useState } from "react";
import ReactPaginate from "react-paginate";
import CardProduct from "../../../components/CardProduct";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <CardProduct
            id={item.id}
            key={item.id && item.img}
            product={item.img}
            productName={item.name}
            price={item.price}
          />
        ))}
    </>
  );
}

export default function PaginatedItems({ itemsPerPage, lengthitems, items }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(lengthitems / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % lengthitems;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-[14px] gap-y-[24px] sm:justify-normal sm:gap-x-[20px]  sm:gap-y-[36px]">
        <Items currentItems={currentItems} />
      </div>
      <div className="mx-auto">
        <ReactPaginate
          breakLabel="..."
          activeClassName="text-blue-900 font-medium "
          previousClassName="bg-gray-200 px-3"
          nextClassName=" bg-gray-200 px-3"
          className="flex gap-4 text-2xl"
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}
