import { useEffect, useState } from "react";

const useDimension = () => {
	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0,
	});

	const updateDimensions = () => {
		const { innerWidth: width, innerHeight: height } = window;

		setDimensions({ width, height });
	};

	useEffect(() => {
		updateDimensions();

		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	return dimensions;
};

export default useDimension;
