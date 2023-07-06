import {HistoryItem} from "../App.tsx";

const HistoryList = ({history}: {history: []}) => {
    return (
        <div>
            {history.map((historyItem: HistoryItem , index) =>
                <div key={index}>
                    <div>{historyItem.value}</div>
                    <div>{historyItem.description}</div>
                </div>
            )}
        </div>
    );
};

export default HistoryList;
