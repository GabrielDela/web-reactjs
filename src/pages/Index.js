function Index() {
  return (
    <div className="flex flex-col w-full">

      <ul className="flex flex-col w-full">
        <li className="flex justify-between bg-white p-2 mt-4 rounded-md">
          <div className="flex flex-col w-2/3">
            <span className="font-semibold text-xl my-auto pb-4">minecraft-vanilla-1</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</span>
          </div>
          <div className="flex flex-col w-1/3">
            <span className="bg-green-500 ml-auto text-white rounded px-2 py-1">Online</span>
            <span className="ml-auto my-auto pt-2">0/20 players online</span>
            <span className="ml-auto">1.18.2 FORGE</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Index;