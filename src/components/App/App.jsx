import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import friends from "../../friends.json";
import FriendList from "../Friends/FriendList";
import transactions from "../../transactions.json";
import TransactionHistory from "../Transactions/TransactionHistory";
import "./App.module.css";



export default function App() {

  return (
     <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
              
          />
          <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </>
  )
}
