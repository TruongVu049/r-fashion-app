import React from "react";

const ChangePassword = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-4">
        <label
          htmlFor="cur-pass"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Mật khẩu hiện tại
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type="text"
              name="cur-pass"
              id="cur-pass"
              autoComplete="cur-pass"
              className="border border-solid border-titleMColor
              block flex-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="sm:col-span-4">
        <label
          htmlFor="new-pass"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Mật khẩu mới
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type="text"
              name="new-pass"
              id="new-pass"
              autoComplete="new-pass"
              className="border border-solid border-titleMColor
              block flex-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="sm:col-span-4">
        <label
          htmlFor="cf-new-pass"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Nhập lại mật khẩu mới
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type="text"
              name="cf-new-pass"
              id="cf-new-pass"
              autoComplete="cf-new-pass"
              className="border border-solid border-titleMColor
              block flex-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
