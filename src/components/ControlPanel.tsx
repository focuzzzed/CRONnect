import {cronDate} from "../App.tsx";

const ControlPanel = ({cron, onSaveClick}: {cron: cronDate, onSaveClick: () => void}) => {

    return (
        <div className='controlPanel'>
            <button>LOAD</button>
            <input className='cron-field' value={Object.values(cron).join(' ')} readOnly/>
            <button onClick={() => onSaveClick()}>SAVE</button>
        </div>
    );
};

export default ControlPanel;
