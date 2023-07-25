import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import friends from '../FriendList/friends.json';
import transactions from '../TransactionHistory/transactions.json';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';

const TaskList = () => {
    return (
        <ul>
            <li>
                <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
                />
            </li>
            <li>
                <Statistics title="Upload stats" stats={data} />
            </li>
            <li>
                <FriendList friends={friends} />
            </li>
            <li>
                <TransactionHistory items={transactions} />;
            </li>
        </ul>
    );
};
export default TaskList;