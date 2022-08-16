const MySelect = ({ options, defaultName, value, onChange}) => {
    return (
        <select 
            value={value} 
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">
                {defaultName}
            </option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>)}
        </select>
    )
}

export default MySelect;