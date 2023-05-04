import Image from "next/image";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";

export default function Post({ post }) {
	return (
		<div className="flex items-start p-3 cursor-pointer border-b border-gray-200">
			{/**imgae */}
			<Image
				src={post.userImg}
				alt="user image"
				height={0}
				width={0}
				className="h-11 w-11  top-2 rounded-full"
			/>
			{/**right side */}
			<div className=" ml-2">
				{/**header */}
				<div className="flex justify-between items-center">
					{/** post user info */}
					<div className="flex items-center space-x-2 whitespace-nowrap">
						<h4 className=" font-bold text-[15px] sm:text-[16px] hover:underline">
							{post.name}
						</h4>
						<span className=" text-sm sm:text-[15px] ">
							@{post.username} -{" "}
						</span>
						<span className=" text-sm sm:text-[15px] hover:underline">
							{post.timestamp}
						</span>
					</div>
					{/** dot icon */}
					<EllipsisHorizontalIcon className=" w-10 h-10 p-2 hover:bg-sky-100  hover:text-sky-500 hoverEffect " />
				</div>
				{/** post text */}
				<p className=" text-gray-800 text-[15px]  sm:text-[16px] mb-2">
					{post.text}
				</p>
				{/** post image */}
				<Image
					src={post.img}
					alt="post image"
					height={500}
					width={500}
					className=" rounded-2xl mr-2"
				/>
				{/** icons*/}
				<div className="flex  justify-between p-2 text-gray-500 items-center  ">
					<ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9 hoverEffect p-2 hover:bg-sky-100 hover:text-sky-500" />
					<TrashIcon className="h-9 w-9 hoverEffect p-2  hover:bg-red-100 hover:text-red-600" />
					<HeartIcon className="h-9 w-9 hoverEffect p-2  hover:bg-red-100 hover:text-red-600" />
					<ShareIcon className="h-9 w-9 hoverEffect p-2  hover:bg-sky-100 hover:text-sky-500" />
					<ChartBarIcon className="h-9 w-9 hoverEffect p-2  hover:bg-sky-100 hover:text-sky-500" />
				</div>
			</div>
		</div>
	);
}
