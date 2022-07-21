
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

export async function getAllBikeIds(){
	const url = "http://backend:3000/bikes";
	const res = await fetch(url);
	const jsons: any[] = await res.json();

	return jsons.map((json) => {
		return {
			params: {
				id: json.id,
			}
		}
	})
}

export async function getBikeData(id: string) {
	const url = "http://backend:3000/bikes/"+id;
	const res = await fetch(url);
	const json = await res.json();	

	return { 
		params: {
			json
		}
	}
}