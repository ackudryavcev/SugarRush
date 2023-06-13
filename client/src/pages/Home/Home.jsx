import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import Promotion from "../../components/promotion/Promotion";
import Categories from "../../components/category/Categories";

const Home = () => {
  return (
    <div>
      <Header />
      <Promotion />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
