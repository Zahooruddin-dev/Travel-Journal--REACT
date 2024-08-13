import image from './images/drop.png';
import japan from './images/japan.png'
export default function Experience(props) {
	return (
		<div>
			<img src={japan}alt='' className='exp-img' />

				<img src={image} alt='' className='geo-img' />
				<span className='exp-country'>JAPAN</span>
				<a href='#'>
					{' '}
					<span className='exp-maps'>View on Google Maps</span>
				</a>
			<h2 className='exp-title'>Mount Fuji</h2>
      <p className='exp-date'>12 Jan, 2021 - 24 Jan, 2021</p>
			<p className='exp-info'>
				Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
				(12,380 feet). Mount Fuji is the single most popular tourist site in
				Japan, for both Japanese and foreign tourists.
			</p>
      <hr className='end' />
		</div>
	);
}
