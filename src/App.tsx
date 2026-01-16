import './App.css';
import { NavLink, Outlet } from 'react-router';

const App = () => {
  // const pluginFrame = useRef<PluginAPI | null>(null)

  // console.log("hello world!", new URL("./index.html", "http://localhost:3000/greg"));

  return (
    <>
    <aside className='fixed top-0 left-0 z-40 w-64 h-full border-r border-bao-border bg-white'>
      <div className='p-4'>
        <ul className="space-y-2 font-medium">
          <li>
              <NavLink to="/" className="nav flex items-center text-body rounded-base hover:text-fg-brand group">
                <span className="ms-3">Home</span>
              </NavLink>
          </li>
          <li>
              <NavLink to="/plugin" className="nav flex items-center text-body rounded-base hover:text-fg-brand group">
                <span className="ms-3">Sample Plugin</span>
              </NavLink>
          </li>
        </ul>
      </div>
    </aside>
    <main className='ml-64'>
      <Outlet />
    </main>
    </>
  );
};

export default App;
