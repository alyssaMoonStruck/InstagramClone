import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/bun.jpg";

function Sidebar() {
    return (
        <Sticky topOffset={-80}>
            <div className="sidebar">
                <Profile
                username="_callmejosi_"
                caption="Josi Anne"
                urlText="Switch"
                iconSize="big"
                image={image}
                />
                <Suggestions />
                <Footer />
            </div>
        </Sticky>
    )

}

export default Sidebar;