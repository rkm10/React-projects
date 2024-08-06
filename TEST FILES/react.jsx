<div style={{ display: 'flex', position: 'relative' }}>
    <span>{task.subject}</span> <br />
    <div
        style={{
            display: 'flex',
            gap: '1rem',
            position: 'absolute',
            bottom: '-26px',
            left: '20px',
        }}
    >
        <div
            style={{
                height: '1rem',
                width: '1rem',
                borderRadius: '50%',
                backgroundColor: 'red',
            }}
            onClick={() => {
                handleModal('linear-gradient(90deg, rgba(187,45,45,1) 22%, rgba(6,45,65,1) 53%, rgba(6,84,92,1) 100%)', 'Open', task.name);
            }}
        ></div>
        <div
            style={{
                height: '1rem',
                width: '1rem',
                borderRadius: '50%',
                backgroundColor: '#f2ff00',
            }}
            onClick={() => {
                handleModal('linear-gradient(90deg, rgba(180,187,45,1) 22%, rgba(6,45,65,1) 76%, rgba(6,84,92,1) 100%)', 'Working', task.name);
            }}
        ></div>
        <div
            style={{
                height: '1rem',
                width: '1rem',
                borderRadius: '50%',
                backgroundColor: 'blue',
            }}
            onClick={() => {
                handleModal('linear-gradient(90deg, rgba(14,129,221,1) 22%, rgba(6,45,65,1) 76%, rgba(6,84,92,1) 100%)', 'Pending Review', task.name);
            }}
        ></div>
        <div
            style={{
                height: '1rem',
                width: '1rem',
                borderRadius: '50%',
                backgroundColor: '#00f900',
            }}
            onClick={() => {
                handleModal('linear-gradient(90deg, rgba(53,133,53,1) 22%, rgba(6,59,65,1) 78%, rgba(6,84,92,1) 100%)', 'Completed', task.name);
            }}
        ></div>
    </div>
</div>


//Drop down
const handleSelect = (value) => {
    console.log('Selected:', value);
    switch (value) {
        case Pending:
            return setBackgroundColors('linear-gradient(90deg, rgba(187,45,45,1) 22%, rgba(6,45,65,1) 53%, rgba(6,84,92,1) 100%)');
        case Review:
            return setBackgroundColors('linear-gradient(90deg, rgba(180,187,45,1) 22%, rgba(6,45,65,1) 76%, rgba(6,84,92,1) 100%)');
        case Completed:
            return setBackgroundColors('linear-gradient(90deg, rgba(14,129,221,1) 22%, rgba(6,45,65,1) 76%, rgba(6,84,92,1) 100%)');
        case Cancelled:
            return setBackgroundColors('linear-gradient(90deg, rgba(187,45,45,1) 22%, rgba(6,45,65,1) 53%, rgba(6,84,92,1) 100%)');

        default:
            return setBackgroundColors('#06545c');
    }
};