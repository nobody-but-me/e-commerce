
import Image from '@next/image';

function Header() {
    return (
	<div className="bg-gray-200">
	    <div className="h-full border-2 border-solid border-black">
	        Upper header.
	    </div>
	    <div className="h-full">
	        <div className="p-5 w-full flex flex-row justify-center items-center">
	            <div className="flex overflow-hidden bg-gray-300 h-10 md:w-full lg:w-1/2 rounded-sm"> {/* Search bar */}
	                <input className="w-full p-5" type="text" placeholder="Search for some product..."></input>
	                <button className="flex flex-col justify-center items-center min-w-10 h-full bg-gray-400 hover:bg-gray-500">
	                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
	                </button>
	            </div>
	        </div>
	    </div>
	</div>
    );
}

export default Header;
