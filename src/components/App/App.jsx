import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import friends from "../../friends.json";
import FriendList from "../Friends/FriendList";
import transactions from "../../transactions.json";
import TransactionHistory from "../Transactions/TransactionHistory";
import css from "./App.module.css";
import clsx from "clsx";



export default function App() {

  return (
     <div className={clsx(css.container)} >
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
         className={clsx(css.section)}     
          />
          <FriendList friends={friends} className={clsx(css.section)} />
        <TransactionHistory items={transactions}  className={clsx(css.section)} />
    </div>
  )
}
