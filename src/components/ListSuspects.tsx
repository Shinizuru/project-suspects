import React from 'react';
import {
  IonItem,
  IonLabel,
  } from '@ionic/react';
import { Suspect } from "../data/Suspects";
import './MessageListItem.css';

interface SuspectsListItemProps {
  suspect: Suspect;
}

const ListItemSuspects: React.FC<SuspectsListItemProps> = ({ suspect }) => {
  return (
    <IonItem routerLink={`/suspect/${suspect.id}`} detail={false}>
      <IonLabel className="ion-text-wrap">
          {suspect.name}
      </IonLabel>
    </IonItem>
  );
};

export default ListItemSuspects;
