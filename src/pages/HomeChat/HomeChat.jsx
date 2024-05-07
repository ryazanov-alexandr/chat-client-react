import { Chat } from '../../components/Chat/Chat';
import {Container } from '../../components/Container/Container';
import { Online } from '../../components/Online/Online';
import { Kebab } from '../../components/Kebab/Kebab';
import { useState } from 'react';
import styles from './HomeChat.module.scss';

export const HomeChat = () => {
  const [showOnline, setShowOnline] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setShowOnline(!showOnline)
  }

  return (
      <Container>
        <div className={ styles.wrapper}>
          <Chat/>
          <Online isShow={showOnline} close={handleClick}/>
          <Kebab onClick={() => setShowOnline(state => !state)}/>
        </div>
      </Container>
  )
}
