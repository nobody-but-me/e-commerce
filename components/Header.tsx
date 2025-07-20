
import Image from '@next/image';

function Header() {
    return (
	<div className="border-2 border-solid border-black">
	    <div className="h-full border-2 border-solid border-black">
	        Upper header.
	    </div>
	    <div className="h-full">
	        <div className="p-5 w-full flex flex-row justify-center items-center">
	            <div className="bg-gray-500 h-10 w-1/2"></div> {/* Search bar */}
	        </div>
	    </div>
	</div>
    );
}

export default Header;
