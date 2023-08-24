import { FaRegUser } from "react-icons/fa";
import { useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
const User = () => {
  const { user, logout } = useAuth();
  return (
    <Link to={`${user.id ? "/profile" : "/login"}`}>
      <div className="p-[10px] hover:text-primaryColor duration-300 relative">
        {!user.id ? (
          <FaRegUser className="text-[20px]" />
        ) : (
          <>
            <div className="group duration-200 flex relative">
              <h6 className="pr-1">
                {user.userName.length > 10
                  ? `${user["userName"].slice(0, 10)}...`
                  : user.userName}
              </h6>
              <FaRegUser className="text-[20px] " />
              <div className="absolute bottom-[-130px] right-0">
                <div
                  className="hidden group-hover:block duration-200
                  after:content-[''] after:absolute after:top-[-14px] after:right-6 after:h-0 after:w-0  
                  after:border-l-[10px] after:border-l-[rgba(0,0,0,0)]
                  after:border-b-[15px] after:border-b-[#d1d5db]
                  after:border-r-[10px] after:border-r-[rgba(0,0,0,0)]


                  before:content-[''] before:absolute before:top-[-14px] before:right-0 before:left-0 before:h-4 before:w-ful 


                relative p-3 w-40 bg-[#d1d5db] text-[#030712] shadow-2xl z-50 
                
                "
                >
                  <Link
                    to={"/profile"}
                    className="duration-200 hover:text-primaryColor py-1"
                  >
                    Tài khoản của tôi
                  </Link>
                  <Link
                    to="/order"
                    className="duration-200 hover:text-primaryColor py-1"
                  >
                    Đơn mua
                  </Link>
                  <Link
                    onClick={() => {
                      logout();
                      window.location.href = "/";
                    }}
                    className="duration-200 hover:text-primaryColor py-1"
                  >
                    Đăng xuất
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        {/* <span className="animate-ping absolute inline-flex top-[0] right-[5px]  h-[16px] w-[16px] rounded-full bg-sky-400 opacity-75 bg-primaryColor"></span> */}
      </div>
    </Link>
  );
};

export default User;
