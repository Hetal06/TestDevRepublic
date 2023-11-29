import { Col, Row } from "react-bootstrap";

import Loader from "../component/Loader";
import Message from "../component/Message";
import Product from "../component/Product";
import { useGetProductsQuery } from "../slices/productSlice";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

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
            {products.map((item) => (
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
