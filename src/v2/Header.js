import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Popup } from 'semantic-ui-react';

function Header(){
  
  return (
    <div id="contact">
      <div id="contact-img">
        <img id="headshot" src="headshot.jpg" />
      </div>
      <div>
        <h1 id="name">David Dunkovich</h1>
        <div id="contact-info">
          <Popup
              trigger={
                <div style={{cursor: "pointer"}}>
                  <CopyToClipboard text="dunkovichd@gmail.com">
                    <span>dunkovichd@gmail.com</span>
                  </CopyToClipboard>
                </div>
              }
              content='Email copied'
              on='click'
          />
          <a href="https://www.linkedin.com/in/daviddunkovich/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </div>
  )
};

export default Header;