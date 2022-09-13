
import {
    Link
} from 'react-router-dom';

function Header() {
    return (
        <header style={{ width: "100vw" }} className="fixed top-0 left-0 h-14 bg-neutral-800">
            <ul className="hidden w-full md:flex md:w-2/3 mx-auto h-full">
                <li className="flex px-4">
                    <div className="flex w-8 h-8 my-auto rounded bg-neutral-700 hover:bg-neutral-600 transition cursor-pointer">
                        <span className="m-auto text-white font-semibold">M</span>
                    </div>
                </li>
                <li className="flex px-4">
                    <Link to="/" className="my-auto text-gray-100 hover:underline">Home</Link>
                </li>
                <li className="flex  px-4">
                    <Link to="/servers" className="my-auto text-gray-100 hover:underline">Servers</Link>
                </li>
                <li className="flex ml-auto px-4 text-white">
                    <div className="flex my-auto">
                        <Link to="/login" className="mx-4 hover:underline cursor-pointer">
                            <p className="m-auto">Login</p>
                        </Link>
                        |
                        <Link to="/register" className="mx-4 hover:underline cursor-pointer">
                            <p className="m-auto">Register</p>
                        </Link>
                    </div>
                </li>
            </ul>

            <ul className="flex md:hidden mx-auto h-full">
                <li className="flex px-4">
                    <div className="flex w-8 h-8 my-auto rounded bg-neutral-700 hover:bg-neutral-600 transition cursor-pointer">
                        <span className="m-auto text-white font-semibold">M</span>
                    </div>
                </li>
                <li className="flex ml-auto px-4 text-white">
                    <div className="flex my-auto">
                        <button className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </li>
            </ul>

            {/* <div style={{ width: "100vw", height: "100vh" }} className="fixed md:hidden top-0 left-0 bg-neutral-900 opacity-80">
                <div className="flex w-full h-full">
                    <div className="flex flex-col m-auto text-white">
                        <Link to="/test" className="my-3 text-center text-xl hover:underline cursor-pointer">Home</Link>
                        <Link to="/test" className="my-3 text-center text-xl hover:underline cursor-pointer">Servers</Link>
                        <Link to="/test" className="mt-20 mb-3 text-center text-xl hover:underline cursor-pointer">Login</Link>
                        <Link to="/test" className="my-3 text-center text-xl hover:underline cursor-pointer">Register</Link>
                        <Link to="/test" className="mt-20 mb-3 text-center text-xl hover:underline cursor-pointer">Back</Link>
                    </div>
                </div>
            </div> */}
        </header>
    );
}

export default Header;