import sslChecker from "ssl-checker";

const getSslDetails = async function (hostname: string) {
	const value = await sslChecker(hostname);
	return value
}


async function main() {
	const data = ["maltinerecords.cs8.biz", "chelmico.com", "toka.jp"]

	for (const url of data) {
		const value = await getSslDetails(url);
		console.log(value.valid);
	}
}

main()