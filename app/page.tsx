

import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import Body   from "@/components/Body.tsx";

export default function Home() {
    return (
        <div className="h-dvh w-dvw overflow-x-hidden overflow-y-auto border-2 border-solid border-indigo-500">
	    <Header />
	    <Body />
	    <Footer />
        </div>
    );
}
