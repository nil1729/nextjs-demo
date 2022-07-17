const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			reactStrictMode: true,
			env: {
				MONGODB_URI: 'mongodb://localhost:27018',
				SESSION_SECRET: 'session-secret',
			},
		};
	}

	return {
		reactStrictMode: true,
	};
};

module.exports = nextConfig;
