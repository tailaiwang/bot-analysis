import React from "react";

import titleImage from "../assets/RedditBotFarm.webp";
import ImageWithSubText from "./ImageWithSubText";

const TitleSection: React.FC = () => {
    return (
        <div className="jumbotron text-left">
            <div className="container">
                <h1 className="display-4">
                    Navigating the Bot Battlefield: Understanding the Influence of Social Media Bots in the Gen AI Era
                </h1>
                <p className="lead">
                    A research project by Alex Hejmej, Tailai Wang, and Isaiah Witzke
                </p>
                <p className="lead">April 8th, 2024</p>
                <ImageWithSubText
                    imageSrc={titleImage}
                    subText={
                        <>
                            Image taken from reddit user{" "}
                            <a href="https://www.reddit.com/r/MMORPG/comments/v2covs/from_mining_to_bot_farming/">
                                u/DealerOK6837
                            </a>
                        </>
                    }
                    altText="Image showing a bot farm with hundreds of gpus on racks"
                />
            </div>
        </div>
    );
};

export default TitleSection;
