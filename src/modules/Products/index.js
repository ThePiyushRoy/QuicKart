import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Categories from "../../components/Categories/index.js";
import Pagination from "../../components/Pagination/Pagination.js";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // mein ek page, pe 8 products dikana chahta hu
  // i.e. 2 rows
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          ALL PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <div>
          <ProductCard products={currentPosts} />
          <Pagination totalPosts={products.length} postsPerPage = {postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Products;
