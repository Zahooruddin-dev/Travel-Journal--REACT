import image from './images/drop.png';

export default function Experience(props) {
	return (
    <div className="card">
    <div className="card--img-box">
    <img src={props.item.imageUrl} alt='' className='card--img' />
    </div>
    <div className="card--infos">

			<img src={image} alt='' className='card--location-icon' />
      <h2 className="card--location">{props.item.location}</h2>
			<a href={props.item.googleMapsUrl} className='card--location-url'>
				View on Google Maps
			</a>

			<h3 className='card--title'>{props.item.title}</h3>
			<p className='card--date'>
				{props.item.startDate} - {props.item.endDate}
			</p>
			<p className='card--description'>{props.item.description}</p>

      </div>
      

		</div>
	);
}
