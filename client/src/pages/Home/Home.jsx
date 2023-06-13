import React from "react";
import Header from "../../components/header/Header";
import Promotion from "../../components/Promotion/Promotion";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/Category/Categories";

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
