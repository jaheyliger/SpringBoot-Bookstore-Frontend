import React from 'react';
import BookImage from '../../../Images/BooksImages/book-luv2code-1000.png';

const ReturnBook = () => {
	return (
		<div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
			<div className='text-center'>
				<img src={BookImage} width='151' height='233' alt='book' />
				<h6 className='mt-2'>Book</h6>
				<p>Luv2Code</p>
				<a className='btn main-color text-white' href='/'>
					Reserve
				</a>
			</div>
		</div>
	);
};

export default ReturnBook;
