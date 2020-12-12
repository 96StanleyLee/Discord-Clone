import React from "react";
import { useDispatch } from "react-redux";
import { setChannel } from "./features/appSlice";
import "./SidebarChannel.css";

function SidebarChannel({ channel }) {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannel({
            channelId: channel.id,
            channelName: channel.channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
