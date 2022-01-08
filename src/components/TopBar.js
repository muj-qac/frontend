function TopBar() {
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
          className=" self-center h-10 rounded-full bg-transparent border-2 border-Light-text_secondary text-Light-text_secondary  hover:border-Light-text_primary hover:text-Light-text_primary font-semibold hover:scale-105 ease-in-out duration-300"
          type="button"
        >
          SignOut
        </button>
      </div>
    </>
  );
}

export default TopBar;
