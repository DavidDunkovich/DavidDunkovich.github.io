import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Popup, Button } from 'semantic-ui-react';

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
                <span style={{marginRight: '5px'}}>
                  <CopyToClipboard text="dunkovichd@gmail.com">
                    <Button circular color='google plus' icon='mail' />
                  </CopyToClipboard>
                </span>
              }
              content='Email copied'
              on='click'
              size="tiny"
          />
          <Button circular color='linkedin' icon='linkedin' href="https://www.linkedin.com/in/daviddunkovich/" target="_blank"/>
        </div>
      </div>
    </div>
  )
};

export default Header;