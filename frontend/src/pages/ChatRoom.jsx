import React from "react";

export default function ChatRoom() {
  return (
    <div className="border h-screen d-flex p-2">
      <div class="grid grid-cols-3 gap-4 h-full">
        <div class="grid-cols-1 h-full p-2 space-y-3">
          <div className="border border-black">user1</div>
          <div className="border border-black">user2</div>
        </div>
        <div className="col-span-2  h-full border border-black"></div>
      </div>
    </div>
  );
}
