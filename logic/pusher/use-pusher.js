import { useEffect } from "react";
import Pusher from "pusher-js";

Pusher.logToConsole = true;

const pusherKey = "2d27090b04de7db4e667";
const pusherCluster = "eu";

const usePusher = (channelName, eventCallback) => {
  useEffect(() => {
    const socket = new Pusher(pusherKey, {
      cluster: pusherCluster,
      forceTLS: true
    });

    const channel = socket.subscribe(channelName);

    channel.bind("update", eventCallback);

    return () => socket.disconnect();
  }, []);
};

export default usePusher;
