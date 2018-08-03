import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// // Method 01
	// const cardComponent = robots.map((user, i) => {
	// 	return (
	// 		<Card 
	// 			key={i} 
	// 			id={robots[i].id} 
	// 			name={robots[i].name} 
	// 			email={robots[i].email}
	// 		/>
	// 	);
	// })
	// return (
	// 	<div>
	// 		{cardComponent}
	// 	</div>
	// );

	
	// Method 02
	return (
		<div>
			{
				robots.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;