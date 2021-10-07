import React from "react";
import "./index.css";
import food from "../../assets/senai.png"; // Tell webpack this JS file uses this image
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-date">{props.date}</div>
        </div>
      </div>
      <img className="card-image" src={food} alt="Logo" />
      <div className="card-text">{props.description}</div>
      <div className="card-like-bar">
        {props.liked ? (<img className="card-like-icon" src={heartFill} alt="Logo" />) : (<img className="card-like-icon" src={heartOutline} alt="Logo" />)}
        <div className="like-text">
          <b>{props.likeCount}</b> pessoas curtiram esse curso
        </div>
      </div>
    </div>
  );
}
