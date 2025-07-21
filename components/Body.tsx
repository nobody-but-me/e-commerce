

function Card() {
    return (
	<div className="h-45">
	    <div className="bg-gray-300 transition duration-300 flex flex-col h-full w-full hover:scale-125">
	        <div className="h-full p-2">
	            aa
	        </div>
	        <div className="bg-gray-400 min-w-full p-2">
	            ab
	        </div>
	    </div>
	</div>
    )
}

function Body() {
    return (
	<div className="p-5">
	    <div className="grid grid-cols-5 gap-x-5 gap-y-5 p-5">
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

export default Body;
