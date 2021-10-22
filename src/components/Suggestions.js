import "../styles/suggestions.scss";
import Profile from './Profile';

function Suggestions() {
    return (
        <div className="suggestions">
            <div className="titleContaner">
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
        caption="Followed by Saphora and + 3more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
        />

        <Profile 
        caption="Followed by Saphora and + 3more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
        />  
    </div>
    );
}

export default Suggestions