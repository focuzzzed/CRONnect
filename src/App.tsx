import './App.css'
import {useState} from "react";
import cronstrue from 'cronstrue';
import ChangeHandlers from "./components/changeHandlers.tsx";
import ControlPanel from "./components/ControlPanel.tsx";

export type cronDate = {
    minutes: string,
    hours: string,
    dayOfMonth: string,
    months: string,
    dayOfWeek: string,

};

function App() {
    const defaultCron: cronDate = {
        minutes: '*',
        hours: '*',
        dayOfMonth: '*',
        months: '*',
        dayOfWeek: '*',
    };
    const [cron, setCron] = useState(defaultCron);
    const [tmpCron, setTmpCron] = useState(defaultCron)

    const saveCurrentCron = () => {
        setTmpCron(cron);
        setCron(defaultCron);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const intervalChooseForm: HTMLFormElement = document.querySelector('.change-handlers-form')!;
        intervalChooseForm.reset();
    }

    const loadSavedCron = () => {
        setCron(tmpCron);
    }

    return (
        <div className='App'>
            <ChangeHandlers setCron={setCron} cron={cron}/>
            <ControlPanel cron={cron} onLoadClick = {loadSavedCron} onSaveClick={saveCurrentCron}/>
            <textarea className='cron-output-field' value={cronstrue.toString(Object.values(cron).join(' '))} readOnly></textarea>
        </div>
    )
}

export default App;

