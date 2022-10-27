import React from 'react';



const Radio = ({pergunta, options, onChange, value, id, active}) => {  
    
    if (active===false) return null;
    
    return ( 
        <fieldset 
            style={{
                padding: '1rem',
                marginBottom:'1.5rem',
                border: '2px solid #eee'
            }}>

            <legend style={{fontWeight: 'bold'}}>
                {pergunta}
            </legend>

            {options.map (option => 
                <label key={option} 
                    style={{marginBottom: '1rem', fontFamily:'monospace'}}
                > 
                        <input value={option} checked={value === option} type="radio" id={id} onChange={onChange}/>  
                        {option}
                </label> )}
        </fieldset>
    );
};

export default Radio;