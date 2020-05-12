import React from 'react';

import VectorSVG from './vector.svg';

import './Checkbox.css'

export default ({ checked, name, children, onChange }) => (
  <label className="checkbox-label">
    <input 
      className="checkbox" 
      type="checkbox" 
      onChange={onChange} 
      name={name}
      checked={checked}
    />
    <span className="checkbox__custom-box">
      <img 
        className="checkbox__custom-box-img" 
        src={VectorSVG} 
        alt="vactor-chekcbox" 
      />
    </span>
    <div className="checkbox-text">
      {children}
    </div>
  </label>
)