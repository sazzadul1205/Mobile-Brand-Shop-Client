import { useState } from "react";
import TopSection from "../ProductsPage/TopSection/TopSection";
import AdvancedCard from "../../Components/AdvancedCard";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Components/Loader";


const ProductsTablets = () => {
  const ProductPerPage = 9; // Display 9 products per page
  const axiosPublic = useAxiosPublic();

  // States for filters and pagination
  const [filters, setFilters] = useState({
    brand: "",
    condition: "",
    priceRange: [0, 500000],
    operatingSystem: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  // Fetching Tablet Products
  const {
    data: TabletProductsData = [],
    isLoading: TabletProductsIsLoading,
    error: TabletProductsError,
  } = useQuery({
    queryKey: ["TabletProducts"],
    queryFn: () => {
      const productType = "Tablet";
      return axiosPublic
        .get(`/Products?productType=${productType}`)
        .then((res) => res.data);
    },
  });

  // Fetching Tablet Brands
  const {
    data: TabletBrandsData = [],
    isLoading: TabletBrandsIsLoading,
    error: TabletBrandsError,
  } = useQuery({
    queryKey: ["TabletBrands"],
    queryFn: () => {
      const productType = "Tablet";
      return axiosPublic
        .get(`/Product/brands?productType=${productType}`)
        .then((res) => res.data);
    },
  });

  // Fetching Tablet Conditions
  const {
    data: TabletConditionsData = [],
    isLoading: TabletConditionsIsLoading,
    error: TabletConditionsError,
  } = useQuery({
    queryKey: ["TabletConditions"],
    queryFn: () => {
      const productType = "Tablet";
      return axiosPublic
        .get(`/Product/conditions?productType=${productType}`)
        .then((res) => res.data);
    },
  });

  // Extract unique filter options from TabletProductsData
  const uniqueOperatingSystems = [
    ...new Set(TabletProductsData.map((item) => item.operatingSystem)),
  ];

  // Use fetched brands for the dropdown
  const uniqueBrands = TabletBrandsData.map((item) => item.brand);

  // Use fetched conditions for the dropdown
  const uniqueConditions = TabletConditionsData.map((item) => item.condition);

  // Filtered products based on filters
  const filteredProducts = TabletProductsData.filter((product) => {
    const productPrice = parseFloat(product.price);
    return (
      (filters.brand ? product.brand === filters.brand : true) &&
      (filters.condition ? product.condition === filters.condition : true) &&
      (filters.operatingSystem
        ? product.operatingSystem === filters.operatingSystem
        : true) &&
      productPrice >= filters.priceRange[0] &&
      productPrice <= filters.priceRange[1]
    );
  });

  // Calculate total pages
  const totalPages = Math.ceil(TabletProductsData.length / ProductPerPage);

  // Slice the products for the current page
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * ProductPerPage,
    currentPage * ProductPerPage
  );

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
    setCurrentPage(1); // Reset to page 1 when filters change
  };

  const handlePriceRangeChange = (e, index) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = parseFloat(e.target.value) || 0;
    setFilters({
      ...filters,
      priceRange: newPriceRange,
    });
    setCurrentPage(1); // Reset to page 1 when price range changes
  };

  // Create state to track liked items
  const [liked, setLiked] = useState(
    Array(TabletProductsData.length).fill(false)
  );

  // Handle like click
  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index]; // Toggle the like state
    setLiked(updatedLikes);
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Loading state
  if (
    TabletProductsIsLoading ||
    TabletBrandsIsLoading ||
    TabletConditionsIsLoading
  ) {
    return <Loader />;
  }

  // Error state
  if (TabletProductsError || TabletBrandsError || TabletConditionsError) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 to-white">
        <p className="text-center text-red-500 font-bold text-3xl mb-8">
          Something went wrong. Please reload the page.
        </p>
        <button
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition duration-300"
          onClick={() => window.location.reload()} // Inline reload function
        >
          Reload
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-green-500 to-white py-24 text-black mt-14">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tablet Brand Shop || Products Tablet</title>
      </Helmet>
      {/* Search and Categories */}
      <TopSection />
      <div className="text-center mb-8">
        <p className="font-bold text-3xl">View Our Tablets</p>
      </div>
      <div className="flex w-full max-w-[1200px] mx-auto">
        {/* Filter Sidebar */}
        <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-bold mb-4">Filter by:</h3>

          {/* Brand Filter */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Brand</label>
            <select
              name="brand"
              value={filters.brand}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded bg-white"
            >
              <option value="">All</option>
              {uniqueBrands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Condition Filter */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Condition</label>
            <select
              name="condition"
              value={filters.condition}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded bg-white"
            >
              <option value="">All</option>
              {uniqueConditions.map((condition, index) => (
                <option key={index} value={condition}>
                  {condition}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Price Range</label>
            <div className="flex space-x-2">
              <div>
                <label className="block mb-1">From</label>
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceRangeChange(e, 0)}
                  className="w-full p-2 border rounded bg-white"
                />
              </div>
              <div>
                <label className="block mb-1">To</label>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(e, 1)}
                  className="w-full p-2 border rounded bg-white"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {filters.priceRange[0]} - {filters.priceRange[1]} BDT
            </p>
          </div>

          {/* Operating System Filter */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Operating System</label>
            <select
              name="operatingSystem"
              value={filters.operatingSystem}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded bg-white"
            >
              <option value="">All</option>
              {uniqueOperatingSystems.map((os, index) => (
                <option key={index} value={os}>
                  {os}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-3/4 ml-6">
          {/* Pagination */}
          <div className="join py-5 flex justify-end">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1} // Ensure unique key
                onClick={() => handlePageChange(index + 1)}
                className={`join-item btn text-lg text-white hover:text-black ${
                  index + 1 === currentPage
                    ? "btn-active bg-blue-200 hover:bg-neutral-50"
                    : "hover:bg-neutral-50"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-5">
            {displayedProducts.map((item, index) => (
              <AdvancedCard
                key={item._id} // Ensure unique key
                data={item}
                isLiked={liked[index]}
                onLike={() => toggleLike(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsTablets;
