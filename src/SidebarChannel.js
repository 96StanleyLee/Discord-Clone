import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChannel, setChannel } from "./features/appSlice";
import "./SidebarChannel.css";

function SidebarChannel({ channel }) {
  const dispatch = useDispatch();
  let channelInfo = useSelector(selectChannel);
  let [active, setActive] = useState("");

  useEffect(() => {
    if (channelInfo.channelId === channel.id) {
      setActive("active");
    } else {
      setActive("");
    }
  }, [channelInfo]);

  return (
    <div
      className={`sidebarChannel ${active}`}
      onClick={() =>
        dispatch(
          setChannel({
            channelId: channel.id,
            channelName: channel.channel.channelName,
          })
        )
      }
    >
      <h4 className={`sidebarChannel ${active}`}>
        <span className="sidebarChannel__hash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
