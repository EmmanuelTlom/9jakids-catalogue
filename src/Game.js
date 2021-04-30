import React from "react";

//const IMG_API = 'https://image.tmdb.org/t/p/w500';

const game = ({
  GameTitle,
  GameDescription,
  GameImage,
  Group,
  Level,
  Topic,
}) => {
  return (
    <div className="games">
      <img src={GameImage} alt={GameTitle} />

      <div className="info">
        <h3>{GameTitle}</h3>
        <h4>Group: {Group}</h4>

        <h4>Level: {Level}</h4>
        <h4>Topic: {Topic}</h4>
      </div>

      <div className="desc">
        <h3>Description</h3>
        <p>{GameDescription}</p>
      </div>
    </div>
  );
};

export default game;
/*<div className="info">
                <h3>{title}</h3>
                <p className={`tag ${setVote(vote_average)}`}>{vote_average}</p>
            </div>

            <div className="over">
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>*/
