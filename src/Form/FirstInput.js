import React from 'react';

const FirstInput = (props) =>
<p>
  <label htmlFor="newColorName">Name :</label>
  <input
type="text"
name="newColorName"
style={{ color: props.newColorColor}}
onChange={props.changeNewColor}
value={props.newColorName}
/>
</p>;

export default FirstInput;
