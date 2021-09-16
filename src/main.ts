import sslChecker from "ssl-checker";

const getSslDetails = async function (hostname: string) {
	const value = await sslChecker(hostname);
	return value
}

const data = ["maltinerecords.cs8.biz", "chelmico.com", "toka.jp"]

for (const url of data) {
	getSslDetails(url).then(value => { console.log(value) })
}
