import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
export default function signin({ providers }) {
	return (
		<div className="flex h-full w-full mt-32 justify-center gap-4">
			<img
				src={
					"https://o.remove.bg/downloads/22865aba-91b8-4e0f-88c7-51cc6c97ca0c/undraw_Authentication_re_svpt__1_-removebg-preview.png"
				}
				height={500}
				width={500}
				className="hidden  object-cover md:inline-flex object-cover md:w-44 md:h-80"
			/>
			<div className="  ">
				{Object.values(providers).map((provider) => (
					<div
						className="h-full flex flex-col items-center mt-8"
						key={provider.id}
					>
						<Image
							src={
								"https://img.freepik.com/free-icon/twitter_318-674515.jpg"
							}
							height={100}
							width={100}
							className=" "
							alt="Twitter logo"
						/>
						<p className=" text-center text-sm italic my-10 text-red-700">
							Made for learning Next.JS 13
						</p>
						<button
							className=" bg-red-400 rounded-lg hover:bg-red-500 p-4 text-white"
							onClick={() =>
								signIn(provider.id, { callbackUrl: "/" })
							}
						>
							Sign in with {provider.name}
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}
