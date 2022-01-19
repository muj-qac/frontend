import { useNavigate } from 'react-router-dom';

function TopBar() {
  let navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between min-w-[60rem] ml-32 mt-5">
        <div className=" w-64 flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm text-gray-500">Signed in as</div>
            <div className="text-lg font-medium text-gray-900">UserName</div>
          </div>
        </div>
        <button
          className=" bg-red-200 hover:bg-red-100 hover:border hover:border-red-800 text-red-800 font-semibold py-2 px-4 rounded shadow "
          type="button p-4"
          onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('isAdmin');
            navigate('/');
          }}
        >
          SignOut
        </button>
      </div>
    </>
  );
}

export default TopBar;
