import { useLocation, useNavigate, useParams } from "react-router";
import { PluginFrame, type PluginAPI } from "../components/PluginFrame";
import { useEffect, useMemo, useRef } from "react";
import { Button } from "../components/Button";

const Plugin = () => {
  const { "*": restParams } = useParams();
  const location = useLocation();
  const pluginFrame = useRef<PluginAPI | null>(null)
  const initialRoute = useRef(restParams);
  const navigate = useNavigate();

  const basepath = useMemo(() => {
    let basepath = location.pathname;
    if( restParams ) {
      basepath = basepath.slice(0, location.pathname.length - restParams.length);
    }

    if( basepath.endsWith('/') ) {
      basepath = basepath.slice(0, basepath.length - 1);
    }

    return basepath;
  }, [location, restParams]);

  const onEvent = (evt: any) => {
    if( evt.type === "child_navigate" ) {
      console.log("navigating to", evt.path, evt.method, "basepath:", basepath, "restParams:", restParams);
      navigate(`${basepath}${evt.path}`, {
        replace: evt.method === "replace"
      });
    }
    // console.log("Got event from frame:", evt);
  };

  useEffect(() => {
    pluginFrame.current?.sendEvent({type:"navigate", path: restParams});
  }, [restParams])

  return <div>
    <span>greg page: {restParams}</span>
    <div>

      <Button onClick={() => pluginFrame.current?.sendEvent({message: "Hello world from root!"})}>Top level goob!</Button>
      <PluginFrame ref={pluginFrame} src={`/iframe.html?initialRoute=${initialRoute.current}`} onEvent={onEvent}></PluginFrame>
    </div>
  </div>
};

export default Plugin;
