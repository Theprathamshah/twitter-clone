import React from "react";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
export default function Input() {
	return (
		<div className="flex  border-b border-gray-200 p-3 space-x-3 ">
			<Image
				src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIwATwMBEQACEQEDEQH/xAAbAAEAAgIDAAAAAAAAAAAAAAAABQYCAwEEB//EADUQAAEDAwEGBAQDCQAAAAAAAAEAAgMEBREhBhIxQVFhExRxgSIykdEVgvEjQlJiY6Gx4fD/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQUCAwYEB//EAC4RAAICAQEFBgYDAQAAAAAAAAABAgMEERIhMUFhBSJRodHwMnGBkcHhEyOxQv/aAAwDAQACEQMRAD8A3rgj6IEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBCAhIQBAEAUohmihmNRSRyOGHkYcP5gcH+4W7Iq/jscVwNONa7KlJ8TetBvCAIAgCAIAgCEGEk0UIzLIxg6ucAtka5y+FamE7IQ+J6EZSV9My4CnjqYZG1DQ4BkgJZIBqDrzGo7h3Ve++iydW24vWL+6/R4KL64WqKktJdef7JZVhZhAEAQBAEBiXgSNj/ecCR7Y+6zUG4uXgYOaUlF8zqXi4R2u2T1sgDhE3LW/wATuAH1wt2Lju+1VmjLyFj0ysfL/Tzj8MvNwkNwqKWWpfL8ROQcDsM6ei6iN+NV/UpJaHKSxsq7+2UW9TDylxoonV81uqfLR4bK+RuGje0wtsba5vZjLeapU21ralFpdSyWza+loaaOKtbO5jhmKVh3wR0OTkEcOfsMBVWV2XK2W1XovItsTtWFUNmzV+f7J607QUN1fu0z913Jsj2hx/KCSq6/s26mOr3/AC1LPH7Tpvlot3z09SVVeWIQBAYTP8OJzzwaMlbaobc1E13T2IOXgU+535zI6Oq/aR+E8Ne4DO6Q4Zz2I0XTUYcIOUOTOWysyc1GfNGraGvpazZy20m/IZKh3iPdnRjQDuAnqdNPVKaNm+ViXDzIvv28eNcnx8vmSOzF18nU01BW0c+Q3wyWjI0addcaH15ryX40ZSdyktOJ7KMqcYqlxafoYbQ3Z152eqYPK1kMQ3ZHuc0AMw9uhGfmOdB9lnjY7ouT20+O5dTDLyFfTJKDXV9HwKNbI217ZraPikcS+lONTIB8v5gMeoareb2e8UkFtd37e+p1rVKKeujnfE2SNrviDgcAHTlqD0I1BWUt6aTIg9Jatanq1muJraWN8DJnQkYEkuT9NBn1Oq5fMojCb2mtft+WdZhZEp1rRPTxbb/CJZVZaBCThwDmlpGQRgg81lFtNNESSa0Z57ebXNC2spoqad1K6fInmcGguxgBpOMnO7nGSdc6rraciMoxnJ72uCOOvxnGUq4rcnxbK/chJDF5R794Q4LRwyCB/teuDUu8jx2Jx7j5FttN6kFujkNTEJqaXd3qkZY5vLOo5HrxCq7MVK97tzXItq8tvG495ePPzRjtxfvNWxlFFUulhDG5xjBeTkcCQBgOOO4WeBiuEnOX06GHaOUpwUI/Xr4FFpZHw1DHxuexzXAtczOQc6Ed1ZvgU6ej1R6DHZHXK5/iDXRR0kzd98Xhl5ZLkiRoB0AD2uxkYwRoVW5WXGmGzz+enmW2JiTum2+C6a+T99C3xtDWgDJ0xr9uS5myTk951UIqK3GS1mYQGqqqYaSB09VKyKJnzPecALZVXOySjBas122wqg5TeiKXdNpqSo33W9jmgjHjupy8g9R+vsujx8SytJWPXpqc1kZlVsm61prz0KhLVRQvEkD2zyk5MsjDkdsHRWSTa0a0KuU1F6xer8Tv7NuvklaZLNo978vcWtcxhznJBBxx6a91qyHRGKdvLgbcZZE5NU8+JerbbXST1tFWVJn805rrrN2GrYQeTjpnHytzzKrrcqMEp8FyX598yxqxJWNw4v8A6f4Jaaw7NCqFTR251FUZ0kp5XBvs0k49sLzS7SlOGxyPXDstQnt8/fgRdrqmNvlVQMcHBviP004FnI93H6FRmVt40bH0/JODNRyp1rr/AKvVk6qYuwhAQk1ywRT7vjRtfunLd4Zweo7rZC2dfwvQ1WVQs+JanApafeDnQRyH+o3e/wArZHJti9UzXPFqmtGiGv8AshaLtEZaZj6Gtz80b3Pjf6tcTj2PsrSnteUV30VN3YsZPuMoU9PetlKtxY58G8CwTRjLHj1/4hW0J4+ZDx6c0U868nBm+XXkWLZ7aitqGNpLfZYpNzjuVG6BniSXZ466qvy+z6tf5LbGvoWeH2ja0q6qk/qWuWSrNK3xRHBI4fGWOLt3s0449zw6FVlVdTn3N/l9/T/C1tsuVff0j75evkzr2S2wU89TWNBdNO7G8eAaODWjpw7lbM++clGvkve81YGPCLlauL97iWVYWYQBCQgCAIQcOaHNLXcDx1WUZOL1RjKKktGa4aeKHJjYGk8cLOd058WYwphD4UbCA4YcAR0IWEZSjvTM3FNaM5AAAAGAOShycnqwkktEFBIQkIAgCAIQEAQBAEAQBCQgCAIAhAQBAEAQBAEAQkIAgCEBAEAQBAEAQBCQgCAIQEAQBAEAQBCQgCAIAhAQBAEAQBAEJCAIAgCEBAEAQBAEAQH/2Q=="
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
	);
}