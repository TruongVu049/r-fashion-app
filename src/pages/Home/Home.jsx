import { Banner, Deals } from "../../components";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FAF - Thời trang nam nữ</title>
        <meta name="description" content="FAF - Thời trang nam nữ" />
      </Helmet>
      <Banner />
      <Deals />
    </>
  );
};

export default Home;
