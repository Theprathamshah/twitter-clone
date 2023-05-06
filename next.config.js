/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"help.twitter.com",
			"img.freepik.com",
			"images.cnbctv18.com",
			"encrypted-tbn0.gstatic.com",
		],
	},
};

module.exports = nextConfig;
