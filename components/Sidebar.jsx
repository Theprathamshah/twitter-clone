import React from "react";
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/24/solid";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import { InboxIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
	return (
		<div className=" hidden sm:flex flex-col  p-2 xl:items-start fixed h-full xl:ml-24 ">
			{/** Twitter Logo */}

			<div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1 justify-center flex  items-center">
				<Image
					src={
						"https://img.freepik.com/free-icon/twitter_318-674515.jpg"
					}
					width={"40"}
					height={"40"}
					alt="Twitter logo"
				></Image>
			</div>

			{/** Menu */}
			<div className=" mt-4 mb-2.5 flex gap-3 flex-col">
				<SidebarMenuItem text={"Home"} Icon={HomeIcon} active={true} />

				<SidebarMenuItem text={"Explore"} Icon={HashtagIcon} />

				<SidebarMenuItem text={"Notification"} Icon={BellIcon} />

				<SidebarMenuItem text={"Messages"} Icon={InboxIcon} />

				<SidebarMenuItem text={"Bookmark"} Icon={BookmarkIcon} />

				<SidebarMenuItem text={"Lists"} Icon={ClipboardIcon} />

				<SidebarMenuItem text={"Profile"} Icon={UserIcon} />

				<SidebarMenuItem
					text={"More"}
					Icon={EllipsisHorizontalCircleIcon}
				/>
			</div>

			{/**Buttons */}

			<button className=" bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
				Tweet
			</button>

			{/**Profile */}
			<div className=" mt-4 hoverEffect text-gray-700 flex items-center  justify-center xl:justify-start">
				<img
					src="data:image/jpeg;base64,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"
					alt="user-profile-picture"
					className=" rounded-full h-10 w-10 xl:mr-2"
				/>
				<div className=" leading-5 hidden xl:inline">
					<h4 className="font-bold">Pratham Shah</h4>
					<p className="text-gray-500">@prathamshah1</p>
				</div>
				<EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
			</div>
		</div>
	);
}
