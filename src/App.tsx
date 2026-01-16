import './App.css';
import { NavLink, Outlet } from 'react-router';

const App = () => {
  // const pluginFrame = useRef<PluginAPI | null>(null)

  // console.log("hello world!", new URL("./index.html", "http://localhost:3000/greg"));
  
  return (
    <div className="font-[Inter,Avenir,Helvetica,Arial,sans-serif] text-white bg-bao-primary flex min-h-screen leading-[1.1] flex-col justify-center items-center text-center">
      <h1 className="text-[3.6rem] font-bold">Rsbuild with React</h1>
      <p className="text-[1.2rem] font-semibold opacity-50">Start building amazing things with Rsbuild.</p>
      <ul>
        <li><NavLink to="/greg">Go to greg</NavLink></li>
        <li><NavLink to="/greg/sub">Go to greg subpage</NavLink></li>
        <li><NavLink to="/">Go to home</NavLink></li>
      </ul>
      <Outlet />
    </div>
  );
};

export default App;
