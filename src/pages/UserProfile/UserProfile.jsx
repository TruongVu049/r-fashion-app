import { useContext } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Profile, ChangePassword, Address } from "../../components";
const UserProfile = () => {
  const { user, setUser } = useAuth();
  console.log(user);
  return (
    <div className="container mx-auto px-4 mt-40">
      <h2 className="text-2xl font-semibold leading-7 text-gray-900 text-center">
        Thông tin cá nhân
      </h2>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div
              className=" flex
            text-xl font-semibold leading-7 text-gray-900 border-b-[3px] border-solid border-b-secondColor"
            >
              <label className="cursor-pointer">
                <input type="radio" name="profile" className="peer sr-only" />
                <p className="peer-checked:text-primaryColor p-2 duration-200 text-base font-medium hover:text-primaryColor">
                  Hồ sơ
                </p>
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="profile" className="peer sr-only" />
                <p className="peer-checked:text-primaryColor p-2 duration-200 text-base font-medium hover:text-primaryColor">
                  Địa chỉ
                </p>
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="profile" className="peer sr-only" />
                <p className="peer-checked:text-primaryColor p-2 duration-200 text-base font-medium hover:text-primaryColor">
                  Đổi mật khẩu
                </p>
              </label>
            </div>

            {/* <Profile user={user} /> */}
            {/* <ChangePassword /> */}
            <Address />
          </div>
        </div>

        <div className="mt-6 mb-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
