import './news.css';
import { Link } from 'react-router-dom';

const NewsItem = (props) => {
    return (
        <li  className='newsCard' onClick={props.prepareData}>
            {props.title.length > 30 ? <span className='newsCardTitle'>{props.title.slice(0,75)}</span> : 
            <span className='newsCardTitle'>{props.title}</span>}
            <div className='newsImgWrap'>
                <img className='newsImg' alt='img' src={props.imgSrc}></img>
            </div>
            <div className='cardBottom'>
                <Link 
                    className='btn newsLink'
                    to={`/news/${props.title
                        .toLowerCase()
                        .replace(/[&\\#,+()$~%.'":*?<>{}]/g, "")
                        .replace(/ /g, "-")}`}>
                        Read more
                </Link>
                <span className='newsDate'>{props.date.slice(0,10)}</span>
            </div>
        </li>
     );
}
 
export default NewsItem;