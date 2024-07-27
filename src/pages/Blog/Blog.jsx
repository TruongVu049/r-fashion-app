import { Breadcrumb, Pagination } from "../../components";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 4 gam màu trang phục được ưa chuộng nhất trong mùa hè",
      href: "#",
      description:
        "Mùa hè đến mang theo những làn gió mới, cập nhật những xu hướng mới trong các bộ sưu tập về thời trang dành cho chị...",
      date: "16/3/2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Nguyen Vu",
        role: "Admin",
        href: "#",
      },
    },
    {
      id: 2,
      title: "TOP 3 SET ĐỒ MÀ CÁC CÔ NÀNG CÔNG SỞ KHÔNG THỂ BỎ LỠ",
      href: "#",
      description:
        "Làm việc trong môi trường công sở, các cô nàng luôn muốn thể hiện sự chuyên nghiệp, thanh lịch và tinh tế của mình thông qua...",
      date: "20/3/2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Nguyen Vu",
        role: "Admin",
        href: "#",
      },
    },
    {
      id: 3,
      title: "Phối đồ với áo sơ mi nữ theo xu hướng thịnh hành nhất",
      href: "#",
      description:
        "Áo sơ mi là một trong những item thời trang không thể thiếu trong tủ đồ của các chị em. Tùy vào phong cách, cá tính...",
      date: "23/3/2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Nguyen Vu",
        role: "Admin",
        href: "#",
      },
    },
  ];
  return (
    <div>
      <Breadcrumb title={"blog"} namePage={"blog"} />
      <div className="bg-white pb-24 pt-10 sm:pb-32 sm:pt-10">
        <div className="lg:container mx-auto sm:container px-6 lg:px-8">
          <div className=" lg:mx-0 flex justify-between items-center">
            <h2 className="sm:text-3xl text-2xl font-bold tracking-tight text-gray-900">
              Bài viết nổi bật
            </h2>
            <button>
              <Link
                to="#"
                className="sm:px-6 px-3 sm:text-xl text-base rounded-xl py-3 bg-secondColor text-while10Color duration-200 hover:bg-primaryColor"
              >
                Tạo Bài Viết
              </Link>
            </button>
          </div>
          <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div>
                    <FaRegUserCircle className="h-10 w-10 text-gray-500" />
                  </div>
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:container mx-auto sm:container px-6 lg:px-8 mb-12">
        <Pagination currentPage={1} params={() => {}} data={{ totalPage: 1 }} />
      </div>
    </div>
  );
};

export default Blog;
