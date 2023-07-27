import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CartSkeleton = () => {
  return (
    <div
      className="rounded-lg cursor-pointer p-[10px]
              bg-while10Color overflow-hidden relative"
    >
      <div className="grid">
        <Skeleton className="grid-flow-col h-[150px]" />
      </div>
      <div className="grid grid-cols-1">
        <Skeleton count={4} />
      </div>
    </div>
  );
};

export default CartSkeleton;
