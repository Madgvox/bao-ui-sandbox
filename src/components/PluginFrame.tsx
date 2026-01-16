import IframeResizer from "@iframe-resizer/react";
import { useEffect, useImperativeHandle, useRef, useState, type Ref } from "react";

export interface PluginAPI {
  sendEvent: (message: any) => void;
}

export function PluginFrame({ src, onEvent, ref }: { ref?: Ref<PluginAPI>, src: string, onEvent?: (message: any) => void }) {
  const pluginFrame = useRef<HTMLIFrameElement | null>(null);
  const [loading, setLoading] = useState(true);

  useImperativeHandle( ref, () => ({
    sendEvent ( message: any ) {
      // console.log("sending event to sub:", message);
      pluginFrame.current?.contentWindow?.postMessage (
        message,
        "*"
      );
    }
  }), [] );

  useEffect(() => {
    const listener = (evt: MessageEvent<any>) => {
      if( evt.data.type === "ready" ) {
        setLoading(false);
      }

      onEvent?.(evt.data);
    };
    window.addEventListener("message", listener);

    return () => window.removeEventListener("message", listener);
  }, [])

  return (
    <div>
      {/* <IframeResizer
        ref={pluginFrame}
        sandbox="allow-popups allow-scripts allow-top-navigation-by-user-activation"
        checkOrigin={false}
        src={src}
        onLoad={() => setLoading(false)}
        license="GPLv3"
        style={{ width: "100%", height: "600px" }}
      /> */}
      <iframe
        ref={pluginFrame}
        sandbox="allow-popups allow-scripts allow-top-navigation-by-user-activation"
        // checkOrigin={false}
        src={src}
        onLoad={() => setLoading(false)}
        // license="GPLv3"
        style={{
          width: "100%",
          height: "600px",
          opacity: loading ? 0 : 1,
          translate: loading ? "0 10px" : "0 0",
          transition: "all 0.2s ease-in-out", // fade-in effect
        }}
      />
    </div>
  );
}
