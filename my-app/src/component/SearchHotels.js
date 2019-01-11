import React, { lazy,useState,useEffect,Suspense } from 'react';
import Loader from 'react-loader-spinner';
import {  Row, Card, CardBody, CardHeader, Table,Button,Badge,Input,Label} from 'reactstrap';
import axios from 'axios';

export default function SearchHotels(props){
    const [cityCode, setCityCode] = useState();
    function handleChange(){

    }
    function searchHotel(event){
        event.preventDefault();
    }
    return (
        <Suspense fallback={<div style={{position:'fixed',top:'50%',left:'50%'}}><Loader type="Circles" color="black" height="100" width="100"/></div> }>
            <form onSubmit={searchHotel} noValidate>
            <label>City Code</label><input type='text' onChange={handleChange}  value={cityCode}/>
            <button type="submit">Search</button> 
            </form>     
            
                  
                
            
        </Suspense>
    );

}