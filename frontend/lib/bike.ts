
export async function getBikesData() {
	const url = "http://backend:3000/bikes";
	const res = await fetch(url);
	const json = await res.json();
	console.log(json);

	return { 
		params: {
			json
		}
	}
}

// export async funnction getAllBikeIds() {
// 	const const url = "http://backend:3000/bikes";
// 	const res = await fetch(url);
// }