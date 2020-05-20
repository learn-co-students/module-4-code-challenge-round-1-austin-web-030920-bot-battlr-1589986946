import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

const BotCard = props => {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.id}
        onClick={() => props.handleBotClick(props.id)}
      >
        <div className="image">
          <img alt="oh no!" src={props.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.name}
            <i className={botTypeClasses[props.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{props.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() =>
                  props.handleDeleteClick(props.id)
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
