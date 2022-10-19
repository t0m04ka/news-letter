import React, { useState, useEffect } from 'react';
import NavBar from './header/NavBar';
import Footer from './footer/Footer';
import { Contact } from '../contactPage/Contact';
import SinglePageNews from '../news/SinglePageNews';
import { Route, Routes } from 'react-router-dom';
import { NewsList } from '../news/NewsList';
import axios from 'axios';

const useFetch = () => {
    const [data, updateData] = useState(null);
    const url = 'https://newsapi.org/v2/top-headlines?language=en&pageSize=20&apiKey=fbb1d18a06634666aeb35cad31ceb585'
    useEffect(()=> {
        const fetchData = async () => {
            const response = await axios.get(url);
            updateData(response.data)
        }
        fetchData()
    },[])
    return data;
}

const Layout = () => {
    const result = useFetch();
    const [index, setIndex] = useState(0) 
    return (
        <div>
            {result ? <div>
            <NavBar/>
            <Routes>
                <Route path='*' element={<NewsList result = {result} changeIndex = {index => setIndex(index)}/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path={`/news/${result.articles[index].title
                                                            .replace(/[&\\#,+()$~%.'":*?<>{}]/g, "")
                                                            .replace(/ /g, "-")}`} 
                       element={<SinglePageNews id = {index} result = {result}/>}/>
            </Routes>
            <Footer/>
        </div> : <div/>}
        </div>
     );
}
 
export default Layout;