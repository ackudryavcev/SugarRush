import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import Rating from "../../components/ProductDisplay/Rating";
import Basket from "../../components/ProductDisplay/Basket";
import "./ProductPage.css";
import TitleProductPage from "../../components/ProductPageComponents/TitleProductPage";
import ImageProductPage from "../../components/ProductPageComponents/ImageProductPage";
import PriceProductPage from "../../components/ProductPageComponents/PriceProductPage";
import DescriptionProductPage from "../../components/ProductPageComponents/DescriptionProductPage";
import RecommendationsProductPage from "../../components/ProductPageComponents/Recommendations";
import FavoriteIcon from "../../components/ProductDisplay/FavoriteIcon";
import CreateReview from "../../components/ProductPageComponents/CreateReview";
import ShowReview from "../../components/ProductPageComponents/ShowReview";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { performFetch, cancelFetch } = useFetch(
    `/product/find/${id}`,
    (response) => {
      setProduct(response.result);
    }
  );
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (id) {
      performFetch();
    }
    return cancelFetch;
  }, [id]);

  return (
    <>
      <Header />
      <TitleProductPage title={product?.productName} />
      <div className="product-page-rating">
        {product?.rate && (
          <Rating productRating={product?.rate} product={product} />
        )}
      </div>
      <div className="product-page-center" key={product?._id}>
        <ImageProductPage image={product?.image} />
        <div className="product-page-description-block">
          <PriceProductPage price={product?.price} />
          <DescriptionProductPage description={product?.description} />
          <div className="product-page-basket-favorite">
            <div className="product-page-basket">
              <Basket product={product} />
              <span className="product-page-basket-text"> ADD TO CART</span>
            </div>
            <FavoriteIcon product={product} />
          </div>
        </div>
      </div>
      {product !== undefined && <ShowReview product={product} />}
      {product && <CreateReview product={product} />}
      {product.category && (
        <RecommendationsProductPage category={product.category} />
      )}
      <Footer />
    </>
  );
}

export default ProductPage;
