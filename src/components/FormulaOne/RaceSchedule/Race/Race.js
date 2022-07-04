import format from 'date-fns/format'


function Race({ data }) {
	// const date = data.date.split('T')[0];
	// const newFormat = format(date, 'eeee-MMMM-yyyy');

	// console.log(newFormat);
	return (
		<>
			<h1>
				Race day: {data.race_no}
			</h1>

			<h1>
				{data.track}
			</h1>

			<h1>
				{/* {format(date)} */}
				{/* {formatedDate} */}
				{data.date}
			</h1>
		</>
	)
};

export default Race;