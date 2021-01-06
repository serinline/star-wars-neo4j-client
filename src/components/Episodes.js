import baseurl from '../config/baseurl';
import React, { useState  } from "react";
import "./Entities.css"

const {apiBaseURL} = baseurl

function Episodes() {
    const [episodes, setEpisodes] = useState([])

    function handleSubmit(event){
        event.preventDefault();
        fetch(`${apiBaseURL}/episodes`, {
            method: "GET",
            dataType: "JSON",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        })
            .then(res => {
                return res.json()
            }) //result
            .then(data => {
                setEpisodes(data);
                console.log(episodes)
            });
    }


    return (
        <div className="container">
            <form>
                <button className="btn" name="entities" value="all" onClick={handleSubmit}>
                    See all episodes
                </button>
            </form>
            <ItemListerEpisodes episodes={episodes}/>
        </div>
    );
};

const ItemListerEpisodes = props =>  <div>
    { props.episodes.map(e => (
        <div id="entities-list" key={e.title}>
            <div className="title0"> { e.title } </div>
        </div>
    ))}
</div>

export default Episodes;
