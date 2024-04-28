import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
        <div className={clsx(css.friend)}>
            <img src={avatar} alt="Avatar" width="65" />
            <p className={clsx(css.name)}>{name}</p>
            <p className={clsx(
                isOnline ? css.online : css.offline
            )}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
}