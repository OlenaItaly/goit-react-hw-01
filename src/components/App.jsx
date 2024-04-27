import Profile from "./Profile/Profile"
import userData from "../userData.json";
import friends from "../friends.json";
import FriendList from "./Friends/FriendList";

export default function App() {

  return (
     <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
            //   stats={userData.stats}
              followers={userData.stats.followers}
              views={userData.stats.views}
              likes={userData.stats.likes}
          />
        <FriendList friends={friends} />
    </>
  )
}
// followers, views, likes