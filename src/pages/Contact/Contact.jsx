import { Breadcrumb } from "../../components";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <div>
      <Breadcrumb title={"Contact"} namePage={"Contact"} />
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="container mx-auto px-4 md:flex justify-center lg:gap-40 md:gap-12  ">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Gửi Phản Hồi
            </h2>
            <form
              action="#"
              method="POST"
              className=" mt-8 max-w-xl sm:mt-10 shadow-xl p-4"
            >
              <div className="grid grid-cols-1  gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Họ
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Tên
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nội dung
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-secondColor px-3.5 py-2.5 text-center text-sm font-semibold text-while10Color shadow-sm hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
          <div className="md:mt-0 mt-14">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Thông Tin Liên Lạc
            </h2>
            <div className=" mt-8 max-w-xl sm:mt-10 shadow-xl p-4">
              <div className="flex items-center gap-5 mb-4">
                <HiOutlineLocationMarker className="text-2xl" />
                <div>
                  <h5 className="font-semibold">Địa chỉ</h5>
                  <span>"51/20 Lê Trọng Tấn"</span>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-4">
                <AiOutlinePhone className="text-2xl" />
                <div>
                  <h5 className="font-semibold">SĐT</h5>
                  <span>"SĐT: 0774429227"</span>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-4">
                <AiOutlineMail className="text-2xl" />
                <div>
                  <h5 className="font-semibold">Liên Hệ Qua Email</h5>
                  <span>nguyenvu492003@gmail.component</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        {/* Google map area start */}
        <div className="google-map-area w-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62712.548892307255!2d106.62261175853781!3d10.77032870322712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2bb9fdd5c5%3A0x5dffe6586647193b!2sFelix%20luxury!5e0!3m2!1svi!2s!4v1682176756370!5m2!1svi!2s"
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
