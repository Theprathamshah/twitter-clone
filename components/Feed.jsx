import { SparklesIcon } from "@heroicons/react/24/solid";
import Input from "./input";
import { useState, useEffect } from "react";
import Post from "./Post";
import { db } from "@/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
export default function Feed() {
	const [posts, setPosts] = useState([]);
	useEffect(
		() =>
			onSnapshot(
				query(collection(db, "posts"), orderBy("timestamp", "desc")),
				(snapshot) => {
					setPosts(snapshot.docs);
				}
			),
		[]
	);
	return (
		<div className=" xl:ml-[370px] border-l border-gray-200 border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl ">
			<div className="flex py-2 px-3 sticky justify-between top-0 z-50 bg-white border-b border-gray-200">
				<h2 className=" text-lg sm:text-xl font-bold cursor-pointer">
					Home
				</h2>
				<div className=" px-0 py-0 ml-auto w-9 h-9  flex hoverEffect items-center justify-center">
					<SparklesIcon className=" h-5" />
				</div>
			</div>
			<Input />
			<div className="">
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</div>
	);
}

/*

ml-20 xl:ml-64 border-l border-r xl:min-w-[576px] min-w-auto

*/
