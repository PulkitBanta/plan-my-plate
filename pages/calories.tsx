import React, { useRef, useState } from "react";

export default function calories() {
	const [calorie, setCalorie] = useState<number>(0);

	const heightElem = useRef<HTMLInputElement>(null);
	const weightElem = useRef<HTMLInputElement>(null);
	const ageElem = useRef<HTMLInputElement>(null);

	function calculateCalorie() {
		try {
			const age = (weightElem.current && +weightElem.current.value) || 0;
			const weight =
				(weightElem.current && +weightElem.current.value) || 0;
			const height =
				(weightElem.current && +weightElem.current.value) || 0;

			console.log(weight * 10 + 6.25 * height - 5 * age + 5);
			// male
			setCalorie(weight * 10 + 6.25 * height - 5 * age + 5);
			// female
			// return weight * 10 + 6.25 * height - 5 * age + 161;
		} catch {
			console.log("not valid");
		}
	}

	return (
		<div className="flex flex-col items-center">
			<input
				ref={heightElem}
				className="my-2 w-2/5"
				placeholder={"Enter you height in cm"}
			/>
			<input
				ref={weightElem}
				className="my-2 w-2/5"
				placeholder={"Enter you weight in kg"}
			/>
			<input
				ref={ageElem}
				className="my-2 w-2/5"
				placeholder={"Enter you age"}
			/>
			<button className="text-gray-700" type="submit" onClick={calculateCalorie}>
				Submit
			</button>
            {/* show only if calorie > 0 */}
			<h3 className="text-gray-700">Daily calorie requirement: {calorie}</h3>
		</div>
	);
}
