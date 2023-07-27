import { NavLink } from "react-router-dom";
// import image from "../../assets/images/";
// import images from "../../assets/images/";
import ImgEror from "../../assets/images/error404.JPG";
import { ReactComponent as Logo } from "../../assets/images/404.svg";
const NoPage = () => {
  return (
    <div>
      <div className="xl:container mx-auto lg:container sm:container">
        <img src={ImgEror} />
      </div>
      <div className="">
        <div className="text-center">
          <NavLink to="/">
            <button className="mb-20 mx-auto bg-primaryColor rounded-xl text-while10Color py-4 px-8 font-bold">
              BACK TO HOME
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
