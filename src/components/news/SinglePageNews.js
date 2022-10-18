function SinglePageNews({id,result}) {
    return (
        <div>
            <h2 className="newsTitle"> {result.articles[id].title} </h2>
                <div className='wrap'>
                    <div>
                        <p className="newsContent"> {result.articles[id].content} </p>
                        <div className="dateSource">
                            <p className="newsItemDate">{result.articles[id].publishedAt.slice(0,10)}</p>
                            <p className="newsItemSource">{result.articles[id].source.name}</p>
                        </div>
                        <a className="btn newsSource" target='_blank' href = {result.articles[id].url}> Visit source </a>
                    </div>
                    <img className='newsItemImg' alt='img' src={result.articles[id].urlToImage}></img>
                </div>
        </div>
    )
} 
 
export default SinglePageNews;

