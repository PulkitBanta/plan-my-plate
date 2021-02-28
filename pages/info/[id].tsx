import React, { useState } from "react";
import nutridigmServerInstance from "../../config/api/nutridigmServerInstance";
import { useRouter } from "next/router";

export default function DiseaseInfo() {
	const [avoidItems, setAvoidItems] = useState<string>("");
	const [consumeItems, setConsumeItems] = useState<string>("");

	async function fetchItems(id: any) {
		setConsumeItems(
			await nutridigmServerInstance.get(
				`topitemstoconsume?&problemId=${id}`
			)
		);
		setAvoidItems(
			await nutridigmServerInstance.get(
				`topitemstoavoid?&problemId=${id}`
			)
		);
	}

	const route = useRouter();
	const { id, title } = route.query;
	console.log(title);
	fetchItems(id);

	return (
		<div>
			<h3>{title}</h3>
			<p>Items you can consume: {avoidItems}</p>
			<p>Items you should avoid: {consumeItems}</p>
		</div>
	);
}
