import React from "react";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { useSession, signOut } from "next-auth/react";
export default function Input() {
	const { data: session } = useSession();

	return (
		<>
			{session && (
				<div className="flex  border-b border-gray-200 p-3 space-x-3 ">
					<Image
						onClick={signOut}
						src={
							session?.user.image ||
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuu4mbEPepclyG-eHpJHAegNrE7qSWNw9CVxJ1mM4&s"
						}
						alt="user image"
						width={50}
						height={50}
						className=" cursor-pointer  hover:brightness-95 rounded-full h-11 w-11"
					/>
					<div className=" w-full divide-y divide-gray-200 ">
						<div className=" ">
							<textarea
								rows="2"
								className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700  "
								placeholder="What's happening"
							></textarea>
						</div>
						<div className="flex justify-between items-center pt-2.5">
							<div className="flex">
								<PhotoIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
								<FaceSmileIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
							</div>
							<button
								className=" bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
								disabled
							>
								Tweet
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
