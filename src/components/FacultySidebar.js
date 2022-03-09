import { NavLink } from 'react-router-dom';

function FacultySideBar() {
  let activeStyle = {
    // textDecoration: "underline 2px solid #e2e8f0",
    fontWeight: '500',
  };
  let activeClassName =
    ' flex items-center border-l-4 h-6 border-Dark-text_secondary';
  return (
    <div className={'bg-Dark-primary flex flex-no-wrap h-screen w-64'}>
      <div className=" w-64 absolute sm:relative shadow md:h-full flex-col justify-between hidden sm:flex">
        <div className="px-0">
          <div
            className={
              'h-16 w-full flex font-monts text-2xl font-medium items-center justify-center text-Dark-text_primary'
            }
          >
            KPI PORTAL
          </div>
          <ul className="mt-12">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <li
                className={
                  'flex w-full pl-10 text-primary-bg_dark cursor-pointer items-center my-6'
                }
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-stack"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={'#e2e8f0'}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                    <polyline points="4 12 12 16 20 12" />
                    <polyline points="4 16 12 20 20 16" />
                  </svg>
                  <span
                    className={
                      'text-lg  ml-2 hover:underline text-Dark-text_primary'
                    }
                  >
                    Allocated KPIs
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="/verified-kpi"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <li
                className={
                  'flex w-full pl-10 text-primary-bg_dark cursor-pointer items-center my-6'
                }
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-grid"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={'#e2e8f0'}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={4} y={4} width={6} height={6} rx={1} />
                    <rect x={14} y={4} width={6} height={6} rx={1} />
                    <rect x={4} y={14} width={6} height={6} rx={1} />
                    <rect x={14} y={14} width={6} height={6} rx={1} />
                  </svg>
                  <span
                    className={
                      'text-lg hover:underline ml-2 text-Dark-text_primary'
                    }
                  >
                    Verified KPIs
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <li
                className={
                  'flex w-full pl-10 text-primary-bg_dark cursor-pointer items-center my-6'
                }
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-settings"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={'#e2e8f0'}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  <span
                    className={
                      'text-lg hover:underline ml-2 text-Dark-text_primary'
                    }
                  >
                    Settings
                  </span>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FacultySideBar;
