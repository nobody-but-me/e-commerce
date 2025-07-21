

import MainPageBody from "@/components/MainPageBody.tsx";
import Header       from "@/components/Header.tsx";
import Footer       from "@/components/Footer.tsx";

export default function Home() {
    return (
        <div className="h-dvh w-dvw overflow-x-hidden overflow-y-auto">
	    <Header />
	    <MainPageBody />
	    <Footer />
        </div>
    );
}
