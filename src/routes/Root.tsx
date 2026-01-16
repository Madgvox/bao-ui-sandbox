import BaoSingle from '@public/openbao-single.svg?react'
import { NavLink } from 'react-router';

const Root = () => {
  return (
  <div className="p-4 text-bao-border bg-white flex min-h-screen leading-[1.1] flex-col justify-center items-center text-center gap-2">
    <h1 className="text-3xl font-bold font-(family-name:--font-family-title) flex flex-col gap-2 items-center">
      <BaoSingle height="60px" />
      <div>OpenBao Sandboxed Plugin Demo</div>
    </h1>
    <div className='flex flex-row gap-1'>
      <NavLink className='p-3 rounded bg-bao-primary text-white font-(family-name:--font-family-body)' to="/plugin">Go to /plugin</NavLink>
      <NavLink className='p-3 rounded bg-bao-primary text-white font-(family-name:--font-family-body)' to="/plugin/page2">Go to /plugin/page2</NavLink>
    </div>

  </div>
  )
};

export default Root;
