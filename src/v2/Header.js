import React, { useState } from 'react';

function Header(){
  
  return (
    <div id="contact">
      <div id="contact-img">
        <img id="headshot" src="headshot.jpg" />
      </div>
      <div>
        <h1 id="name">David Dunkovich</h1>
        <div id="contact-info">
          <div>dunkovichd@gmail.com</div>
          <div>LinkedIn</div>
        </div>
      </div>
    </div>
  )
};

export default Header;