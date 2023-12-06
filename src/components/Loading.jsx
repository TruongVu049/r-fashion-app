import React from "react";

const Loading = () => {
  return (
    <div id="modal-spinner" class={`fixed inset-0 transition z-[200]`}>
      <div class="absolute inset-0"></div>
      <div class="bg-white bg-opacity-50 relative h-full w-full ml-auto z-[201] p-2 flex justify-center items-center">
        <div class="flex gap-2">
          <div class="w-5 h-5 rounded-full animate-pulse bg-rose-500"></div>
          <div class="w-5 h-5 rounded-full animate-pulse bg-rose-500"></div>
          <div class="w-5 h-5 rounded-full animate-pulse bg-rose-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
