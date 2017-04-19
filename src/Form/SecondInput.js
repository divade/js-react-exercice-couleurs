import React from 'react';

const SecondInput = (props) =>
<p>
  <label htmlFor="newColorColor">Color (HEX) :</label>
  <input
type="text"
      name="newColorColor"
      style={{ color: props.backgroundColor }}
onChange={props.changeNewColor}
value={props.newColorColor}/>
</p>;

export default SecondInput;
