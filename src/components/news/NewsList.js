import React, { useState } from 'react';
import NewsItem from './NewsItem';
import './news.css';


export function NewsList({result, changeIndex})  {

    const [newsItem, changeNews] = useState(null);
    
    const showFullInfo = index => {
        changeNews(result.articles[index]);
        changeIndex(index)
    }

    const [itemsToShow, setItemsToShow] = useState(6);
    const showMore = () => {
        setItemsToShow(result.articles.length)
    }
    const showLess = () => {
        setItemsToShow(6)
    }

    return ( 
        <div>
            <h2 className='freshNewsTitle'>Always <br/> fresh <span className='blue'>news</span></h2>
            <ul className='newsList'>
                {
                    result.articles.slice(0,itemsToShow).map((item,index)=> {
                        return (
                            <NewsItem
                                key = {index}
                                title = {item.title} 
                                imgSrc = {item.urlToImage}
                                date = {item.publishedAt}
                                prepareData={()=>showFullInfo(index)}
                            />
                        )
                    })
                }
            </ul>
            {(itemsToShow === 6 ) ? <button className='btn moreLessBtn' onClick={showMore}>More news</button> : <button className='btn moreLessBtn' onClick={showLess}>Less news</button>}    
        </div>
    );
}
 
export default NewsList;