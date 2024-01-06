import React from "react";
function hadoop_certificate() {
	return {
		date: "Awarded: December 2, 2023",
		title: "Big Data Analytics with Hadoop and Apache Spark by Kumaran Ponnambalam",
		img_source:process.env.PUBLIC_URL + '/Hadoop_Certificate.jpeg',
		style: ``,
		keywords: [
			"Big Data Analytics with Hadoop and Apache Spark",
			"Kumaran",
			"Kumaran P",
			"Kumaran Ponnambalam",
		],
	};
}
function react_certificate() {
	return {
		date: "Awarded: March 16, 2022",
		title: "Learning React.js by Eve Porcello",
		img_source:process.env.PUBLIC_URL + '/React_Certificate.png',
		keywords: [
			"Learning React.js by Eve Porcello",
			"Eve",
			"Eve P",
			"Eve Porcello",
		],
	};
}



const myCertifications = [react_certificate, hadoop_certificate];

export default myCertifications;
