import "../styles/suggestions.scss";
import Profile from "./Profile";

function Suggestions() {
    return (
        <div className="suggestions">
            <div className="titleContainer">
                <div className="title">Suggestions for you</div>
                <a href="/"> See All</a>
        </div>

        <Profile 
        caption="Followed by Saphora and + 3more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
        />

        <Profile 
        caption="Followed by NYX and + 7more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
        />

        <Profile 
        caption="Followed by Pototato and + 2more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
        />  

        <Profile 
        caption="Followed by Morphe and + 1more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
        /> 

        <Profile 
        caption="Followed by Nintendo and + 3more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
        /> 
        
    </div>
    );
}

export default Suggestions