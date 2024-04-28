import FriendListItem from "./FriendListItem";
import css from  "./FriendList.module.css"
import clsx from "clsx";

export default function FriendList({ friends }) {
    return (
        <ul className={clsx(css.friendlist)}>
           
            {friends.map((friend) =>
                <li key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>)}
	
        </ul>
    );  
}