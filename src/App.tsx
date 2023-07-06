import './App.css'
import {useState} from "react";
import cronstrue from 'cronstrue';
import ChangeHandlers from "./components/changeHandlers.tsx";
import ControlPanel from "./components/ControlPanel.tsx";
import HistoryList from "./components/HistoryList.tsx";

export type cronDate = {
    minutes: string,
    hours: string,
    dayOfMonth: string,
    months: string,
    dayOfWeek: string,

};

export type HistoryItem = {
    value: string,
    description: string,
};

function App() {
    const defaultCron: cronDate = {
        minutes:'*',
        hours:'*',
        dayOfMonth: '*',
        months: '*',
        dayOfWeek: '*',
    };
    const [cron, setCron] = useState(defaultCron);
    const [history, setHistory] = useState([]);

    const updateHistoryList = () => {
        const newHistoryItem = {
            value: Object.values(cron).join(' '),
            description: cronstrue.toString(Object.values(cron).join(' ')),
        }
        setHistory([...history, newHistoryItem]);
        setCron(defaultCron);
        const chooseIntervalForm: HTMLFormElement = document.querySelector('.change-handlers-form');
        chooseIntervalForm.reset();
    };

    return (
        <div className='App'>
            <ChangeHandlers setCron={setCron} cron={cron}/>
            <ControlPanel cron={cron} onSaveClick={updateHistoryList}/>
            <textarea className='cron-output-field' value={cronstrue.toString(Object.values(cron).join(' '))} readOnly></textarea>
            <h1>history</h1>
            <HistoryList history={history}/>
        </div>
    )
}

export default App;

