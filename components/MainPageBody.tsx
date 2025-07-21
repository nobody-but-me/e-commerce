

function Banners() {
    return (
	<div className="p-5 h-80">
	    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5 w-full h-full">
	        <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 bg-gray-400"></div> {/* Main banner */}
	        <div className="grid grid-rows-2 gap-5"> {/* Secondary banners */}
	            <div className="bg-gray-400"></div>
	            <div className="bg-gray-400"></div>
	        </div>
	    </div>
	</div>
    );
}

function Card() {
    return (
	<div className="h-45 rounded-sm overflow-hidden">
	    <div className="bg-gray-300 flex flex-col h-full w-full">
	        <div className="h-full p-2 hover:scale-115 hover:shadow-xl/30 transition duration-300">
	            Product image.
	        </div>
	        <div className="bg-gray-400 min-w-full p-2 z-5">
	            Product name and price
	        </div>
	    </div>
	</div>
    );
}

function MainPageBody() {
    return (
	<div className="p-5">
	    <Banners />
	    <div className="p-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"> {/* Grid of products */}
	        <Card />
	        <Card />
	        <Card />
	        <Card />
	        <Card />
	        <Card />
	        <Card />
	        <Card />
	        <Card />
	        <Card />
	    </div>
	</div>
    );
}

export default MainPageBody;
