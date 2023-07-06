import {cronDate} from "../App.tsx";

const ControlPanel = ({cron, onSaveClick, onLoadClick}: {cron: cronDate, onSaveClick: () => void, onLoadClick: () => void}) => {

    return (
        <div className='controlPanel'>
            <button onClick={() => onLoadClick()}>LOAD</button>
            <input className='cron-field' value={Object.values(cron).join(' ')} readOnly/>
            <button onClick={() => onSaveClick()}>SAVE</button>
        </div>
    );
};

export default ControlPanel;
