import { Switch } from '@headlessui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SideBar() {
  const [enabled, setEnabled] = useState(true);
  const [specific, setSpecific] = useState('/kpi');
  let navigate = useNavigate();
  return (
    <div
      className={`${
        enabled
          ? 'bg-Dark-primary flex flex-no-wrap h-screen w-64'
          : 'bg-Light-primary flex flex-no-wrap h-screen w-64'
      }`}
    >
      <div className=" w-64 absolute sm:relative shadow md:h-full flex-col justify-between hidden sm:flex">
        <div className="px-0">
          <div
            className={`${
              enabled
                ? 'h-16 w-full flex items-center justify-center text-Dark-text_primary'
                : 'h-16 w-full flex items-center justify-center text-Light-text_primary'
            }`}
          >
            KPI PORTAL
          </div>
          <ul className="mt-12">
            <li
              className={`${
                enabled
                  ? 'flex w-full pl-10 text-primary-bg_dark cursor-pointer items-center mb-6 hover:border-l-4 border-Dark-text_secondary'
                  : 'flex w-full pl-10 text-primary-bg_dark cursor-pointer items-center mb-6 hover:border-l-4 border-Light-text_secondary'
              }`}
              onClick={() => {
                navigate('/kpi');
              }}
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-grid"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={`${enabled ? '#e2e8f0' : 'black'}`}
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
                  className={`${
                    enabled
                      ? 'text-lg  ml-2 text-Dark-text_primary'
                      : 'text-lg  ml-2 text-Light-text_primary'
                  }`}
                >
                  KPI
                </span>
              </div>
            </li>
            <li
              className={`${
                enabled
                  ? 'flex w-full pl-10 text-primary-bg_dark cursor-pointer items-center mb-6 hover:border-l-4 border-Dark-text_secondary'
                  : 'flex w-full pl-10 text-primary-bg_dark cursor-pointer items-center mb-6 hover:border-l-4 border-Light-text_secondary'
              }`}
              onClick={() => {
                navigate('/kpi/createKpi');
              }}
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-stack"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={`${enabled ? '#e2e8f0' : 'black'}`}
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
                  className={`${
                    enabled
                      ? 'text-lg  ml-2 text-Dark-text_primary'
                      : 'text-lg  ml-2 text-Light-text_primary'
                  }`}
                >
                  Create KPI
                </span>
              </div>
            </li>
            <li
              className={`${
                enabled
                  ? 'flex w-full pl-10 text-primary-bg_dark cursor-pointer items-center mb-6 hover:border-l-4 border-Dark-text_secondary'
                  : 'flex w-full pl-10 text-primary-bg_dark cursor-pointer items-center mb-6 hover:border-l-4 border-Light-text_secondary'
              }`}
              onClick={() => {
                navigate('/kpi/manageKpi');
              }}
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={`${enabled ? '#e2e8f0' : 'black'}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                <span
                  className={`${
                    enabled
                      ? 'text-lg  ml-2 text-Dark-text_primary'
                      : 'text-lg  ml-2 text-Light-text_primary'
                  }`}
                >
                  Manage KPI
                </span>
              </div>
            </li>
            <li
              className={`${
                enabled
                  ? 'flex w-full pl-10 text-primary-bg_dark cursor-pointer items-center mb-6 hover:border-l-4 border-Dark-text_secondary'
                  : 'flex w-full pl-10 text-primary-bg_dark cursor-pointer items-center mb-6 hover:border-l-4 border-Light-text_secondary'
              }`}
              onClick={() => {
                navigate('/kpi/manageUser');
              }}
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={`${enabled ? '#e2e8f0' : 'black'}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                <span
                  className={`${
                    enabled
                      ? 'text-lg  ml-2 text-Dark-text_primary'
                      : 'text-lg  ml-2 text-Light-text_primary'
                  }`}
                >
                  Manage Users
                </span>
              </div>
            </li>
          </ul>
        </div>
        {/* <div
          className={`${
            enabled
              ? "flex items-center justify-evenly h-20 border-t-2 border-Dark-secondary"
              : "flex items-center justify-evenly h-20 border-t-2 border-Light-secondary"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 m-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#D1D100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
            />
          </Switch>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 m-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#979797"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div> */}
      </div>
    </div>
  );
}

export default SideBar;
