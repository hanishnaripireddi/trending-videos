import React, { useState } from "react";
import {getList} from "./getList";
import "./something.css"

function TrendingVideosList(){
    const [data,setData] = useState([]);
    
    const [nextPageid,setNextPageId] = useState(null)
    const [prevPageid,setPrevPageId] = useState(null)

    const [showPrev,setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(false)

    const handleClick=()=>{
        const params = {
            nextButtonToken:null,
            prevButtonToken:null
        }
        getList(params).then(res=>{
            setNextPageId(res.nextPageToken)
            setData(res.items);
            setShowNext(true)
            if(showPrev){
                setShowPrev(false)
            }
        })
    }
    const prevButtonHandler=()=>{
        
            const params={
                nextButtonToken:null,
                prevButtonToken:prevPageid
            }

            getList(params).then(res=>{
                setNextPageId(res.nextPageToken)
                setPrevPageId(res.prevPageToken)
                setData(res.items);
                if(res.nextPageToken){
                    setShowNext(true)
                }else{
                    setShowNext(false)
                }
                if(res.prevPageToken){
                    setShowPrev(true)
                }else{
                    setShowPrev(false)
                }
            })
            window.scrollTo(0, 0);  
    }

    const nextButtonHandler=()=>{
            const params={
                nextButtonToken:nextPageid,
                prevButtonToken:null
            }
            getList(params).then(res=>{
                if(res.nextPageToken){
                    setNextPageId(res.nextPageToken)
                }
                setData(res.items);
                setPrevPageId(res.prevPageToken)
                
                if(res.nextPageToken){
                    setShowNext(true)
                }else{
                    setShowNext(false)
                }
                if(res.prevPageToken){
                    setShowPrev(true)
                }else{
                    setShowPrev(false)
                }
                console.log(res)
            })
            window.scrollTo(0, 0);
    }
    return (
        <>
            <div className="container text-center" >
                <button className="btn btn-secondary my-4" onClick={()=>{handleClick()}}> ↻ Refresh!</button>
            </div>
            <div className="container py-5">
                
                <ul className="row">
                {
                    data.map(item=>{
                        const { id, snippet = {}} = item;
                        const {title,thumbnails} = snippet;
                        const {medium} = thumbnails;
                        return (
                            <div className="col-lg-3" key={id}>
                                <div className="container shadow pt-3 pb-1">
                                    <a href={`http://www.youtube.com/watch?v=${id}`}>
                                        <div className="container">
                                            
                                            <img src={medium.url} alt="..." className="img-thumbnail"></img>
                                        </div>
                                        <div className="container-fluid">
                                            <p>{title}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        );
                    })
                }
                </ul>
                <div className='mb-3 px-3'>
                    {showPrev ? <button className="btn btn-primary" type="button" onClick={()=>{prevButtonHandler()}}>Prev</button> :null}
                    {showNext ? <button className="btn btn-primary float-end" type="button" onClick={()=>{nextButtonHandler()}}>Next</button> :null}
                </div>
                <div></div>
            </div>
        </>
    );
}
export default TrendingVideosList;