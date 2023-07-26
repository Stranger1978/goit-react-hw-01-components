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
        <>
                <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
                />
                <Statistics title="Upload stats" stats={data} />
                <FriendList friends={friends} />
                <TransactionHistory items={transactions} />
        </>
    );
};
export default TaskList;