import MessageListItem from '../components/MessageListItem';
import React, { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonFooter,
  IonButton,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const DevDB: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const [searchText, setSearchText] = useState('');


  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };


  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>dev</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              DB
            </IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default DevDB;
