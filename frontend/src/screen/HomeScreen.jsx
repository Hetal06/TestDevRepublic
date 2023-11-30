import { Col, NavDropdown, Row } from "react-bootstrap";

import Loader from "../component/Loader";
import Message from "../component/Message";
import Product from "../component/Product";
import { useGetProductsQuery } from "../slices/productSlice";
import { useEffect, useState } from "react";
import PriceFilter from "../component/PriceFilter";

const HomeScreen = () => {
  const { data: allProducts, isLoading, error } = useGetProductsQuery();

  const [categoryFilter, setCategoryFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilterChange = (values) => {
    setPriceFilter(values);
  };

  useEffect(() => {
    // Apply filters when allProducts or filter criteria change
    if (!allProducts) return;

    let filtered = [...allProducts];

    // Apply category filter
    if (categoryFilter) {
      filtered = filtered.filter((item) => item.category === categoryFilter);
    }

    // Apply price filter
    if (priceFilter) {
      filtered = filtered.filter(
        (item) => item.price >= priceFilter[0] && item.price <= priceFilter[1]
      );
    }

    // Update the state with the filtered products
    setFilteredProducts(filtered);
  }, [allProducts, categoryFilter, priceFilter]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>
          {error?.data.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            <Col md={4}>
              <NavDropdown title={"Category"} id="category-filter">
                {Array.from(
                  new Set(allProducts.map((data) => data.category))
                ).map((category, index) => (
                  <NavDropdown.Item
                    key={index}
                    onClick={() => setCategoryFilter(category)}>
                    {category}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Col>
            <Col md={4}>
              <label>Price</label>
              <PriceFilter
                allProducts={allProducts}
                onFilterChange={handleFilterChange}
              />
            </Col>
          </Row>
          <Row>
            {(categoryFilter || priceFilter
              ? filteredProducts
              : allProducts
            ).map((item) => (
              <Col sm={12} md={6} lg={4} xl={3} key={item._id}>
                <Product product={item} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
