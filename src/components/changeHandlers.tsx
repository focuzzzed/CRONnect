import {cronDate} from "../App.tsx";

type TypeIntervals = {
    [intervalName: string]: { name: string, value: string }[];
}
type TypeValues = {
    [intervalName: string]: { min: number, max: number };
}

const ChangeHandlers = ({setCron, cron}: {setCron: (cron: cronDate) => void, cron: cronDate}) => {
    const TypesIntervals: TypeIntervals = {
        minutes: [
            {name: 'Every minute', value: '*'},
            {name: 'Even minutes', value: '*/2'},
            {name: 'Odd minutes', value: '1-59/2'},
            {name: 'Every 5 minutes', value: '*/5'},
            {name: 'Every 15 minutes', value: '*/15'},
            {name: 'Every 30 minutes', value: '*/30'},
        ],
        hours: [
            {name: 'Every hour', value: '*'},
            {name: 'Even hours', value: '*/2'},
            {name: 'Odd hours', value: '1-23/2'},
            {name: 'Every 3 hours', value: '*/3'},
            {name: 'Every 6 hours', value: '*/6'},
            {name: 'Every 12 hours', value: '*/12'},
        ],
        dayOfMonth: [
            {name: 'Every day', value: '*'},
            {name: 'Even days', value: '2-31/2'},
            {name: 'Odd days', value: '1-31/2'},
            {name: 'Every 5 days', value: '*/5'},
            {name: 'Every 10 days', value: '*/10'},
            {name: 'Every half month', value: '*/15'},
        ],
        months: [
            {name: 'Every month', value: '*'},
            {name: 'Even months', value: '2-12/2'},
            {name: 'Odd months', value: '1-11/2'},
            {name: 'Every 3 months', value: '*/3'},
            {name: 'Every 6 months', value: '*/6'},
        ],
        dayOfWeek: [
            {name: 'Every Weekday', value: '*'},
            {name: 'Monday - Friday', value: '1-5'},
            {name: 'Weekend Days', value: '0,6'},
        ]
    }

    const TypeValues: TypeValues = {
        minutes: {
            min: 0,
            max: 59
        },
        hours: {
            min: 0,
            max: 23
        },
        dayOfMonth: {
            min: 1,
            max: 31
        },
        months: {
            min: 1,
            max: 12
        },
        dayOfWeek: {
            min: 1,
            max: 7
        },
    }

    const createHandlersTemplate = () => {

        return Object.keys(cron).map((type: string) =>
            <div className='changeHandler' key={`${type}-fieldset`}>
                <label key={`${type}-label`}
                       htmlFor={type}> {type.replace(/([A-Z])/g, ' $1').trim().toUpperCase()} </label>
                <select name={type} key={`${type}-select`} id={type}
                        onChange={evt => setCron({...cron, [type]: evt.target.value})}>
                    {TypesIntervals[type].map((currentInterval: { name: string, value: string }) =>
                        <option
                            value={currentInterval.value}
                            key={currentInterval.value + 1}>
                            {currentInterval.name}
                        </option>
                    )}
                </select>
                <input
                    // @ts-ignore
                    value={cron[type]}
                    onChange={evt => setCron({...cron, [type]: evt.target.value})}
                    type="number"
                    name={type}
                    min={TypeValues[type].min}
                    max={TypeValues[type].max}
                    onKeyDown={(evt) => {evt.preventDefault(); return false;}}
                />
            </div>)
    }
    const handlersTemplate = createHandlersTemplate();

    return (
        <div>
            <form className='change-handlers-form'>
                <fieldset>
                    <legend><span>CRON</span>nect your schedule!</legend>
                    {handlersTemplate}
                </fieldset>
            </form>
        </div>
    );
};

export default ChangeHandlers;
