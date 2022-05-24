import { useState, useEffect } from 'react';
import axios from 'axios';

// const url = 'http://localhost:4433';
const url = 'https://ejt-howto-test-api.herokuapp.com';

export const PageBooks = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		(async () => {
			setBooks((await axios.get(url)).data);
		})();
	}, []);

	return (
		<>
			<h2>Books</h2>
			<p>There are {books.length} books.</p>

			<ul>
				{books.map((book, index) => {
					return <li key={index}>{book.title}</li>;
				})}
			</ul>
		</>
	);
};
