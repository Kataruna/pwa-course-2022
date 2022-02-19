import './css/Newsfeed.css';
import { Userlist } from'./components/Userlist.js';
import { Inputbox } from'./components/Inputbox.js';

function Newsfeed() {
    return(
        <div>
            <div className="tweet post-lemon">Hello World</div>
            <Userlist/>
            <Inputbox/>
            <div className="header post-coral">Goodluck</div>
        </div>
    )
}

export default Newsfeed;