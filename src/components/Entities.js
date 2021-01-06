import baseurl from '../config/baseurl';
import React, { useState  } from "react";
import "./Entities.css"

const {apiBaseURL} = baseurl

function Entities() {
    const [entities, setEntities] = useState([])

    function handleSubmit(event){
        event.preventDefault();
        fetch(`${apiBaseURL}/entities`, {
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
                setEntities(data);
                console.log(entities)
            });
    }


    return (
        <div className="container">
                <form>
                    <button className="btn" name="entities" value="all" onClick={handleSubmit}>
                        See all characters
                    </button>
                </form>
                <ItemListerEntities entities={entities}/>
        </div>
    );
};

const ItemListerEntities = props =>  <div>
    { props.entities.map(e => (
        <div id="entities-list" key={e.name}>
            <div className="title0"> { e.name } -> { e.type.typeName === null ? "no type" : e.type.typeName}</div>
        </div>
    ))}
</div>

export default Entities;
