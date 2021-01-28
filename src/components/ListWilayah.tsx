import React from 'react';
import {
  IonItem,
  IonLabel,

  } from '@ionic/react';
import { Wilayah } from '../data/wilayah';
import './MessageListItem.css';

interface WilayahListItemProps {
  wilayah: Wilayah;
}

const ListWilayah: React.FC<WilayahListItemProps> = ({ wilayah }) => {
  return (
    <IonItem routerLink={`/suspects/${wilayah.id}`} detail={false}>
      <IonLabel className="ion-text-wrap">
        <h2>
          {wilayah.namaWilayah}
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default ListWilayah;
