import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			<Head>
				<title>Twitter Clone</title>
			</Head>
			<main className="flex min-h-screen max-w-7xl  mx-auto ">
				{/* Sidebar */}
				<Sidebar />
				{/* Feed */}
				{/* Widgets */}
				{/* Model */}
			</main>
		</div>
	);
}
