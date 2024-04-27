import FriendListItem from "./FriendListItem";
import "./FriendList.module.css"

export default function FriendList({ friends }) {
    return (
        <ul>
           
            {friends.map((friend) =>
                <li key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>)}
	
        </ul>
    );  
}