const statusConvert = (status) => {
	let convertedStatus = "";
	if (status === "Active") convertedStatus = 1;
	else if (status === "Inactive") convertedStatus = 0;
	return convertedStatus;
};
