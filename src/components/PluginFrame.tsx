import { useEffect, useImperativeHandle, useRef, useState, type Ref } from "react";

export interface PluginAPI {
  sendEvent: (message: any) => void;
}

export interface PluginFrameProps extends Omit<React.IframeHTMLAttributes<HTMLIFrameElement>, 'ref' | 'src' | 'onLoad'> {
  ref?: Ref<PluginAPI>;
  src: string;
  onEvent?: (message: any) => void;
}

export function PluginFrame({ src, onEvent, ref, ...iframeProps }: PluginFrameProps) {
  const pluginFrame = useRef<HTMLIFrameElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);

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

  useEffect(() => {
    if(loading) {
      const timer = setTimeout(() => {
          setShowSpinner(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute top-1/2 left-1/2 z-10 -translate-1/2 transition-all" style={{
          opacity: showSpinner ? 1 : 0
        }}>
          <div className="w-12 h-12 border-4 border-[rgba(0,10,10,0.1)] border-t-bao-primary rounded-full animate-spin"/>
        </div>
      )}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <iframe
        ref={pluginFrame}
        sandbox="allow-popups allow-scripts allow-top-navigation-by-user-activation"
        src={src}
        onLoad={() => setLoading(false)}
        className="w-full h-full"
        style={{
          opacity: loading ? 0 : 1,
          // translate: loading ? "0 10px" : "0 0",
          transition: "all 0.2s ease-in-out", // fade-in effect
          // width: '100%',
          // height: '100%',
        }}
        {...iframeProps}
      />
    </div>
  );
}
