import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Popup, Button } from 'semantic-ui-react';
import { Card } from 'antd';

function Header(){
  
  return (
    <Card id="contact">
      <img id="headshot" alt="profile headshot" src="headshot.jpg" />
      <div>
        <h2 id="name">David Dunkovich</h2>
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
    </Card>
  )
};

export default Header;