import React from 'react';

const Button = (props)=>
<button
type='submit'
style={{ color: props.backgroundColor }}
    >
{props.text}
</button>;
export default Button;
