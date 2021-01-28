import WilayahListItem from '../components/ListWilayah';
import React, { useState } from 'react';
import { Wilayah, getWilayahCilacap, filterWilayah } from '../data/wilayah';
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
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const ViewWilayah: React.FC = () => {
    const [wilayah, setWilayah] = useState<Wilayah[]>([]);
    const [searchText, setSearchText] = useState('');
  
    useIonViewWillEnter(() => {
      const wlyh = getWilayahCilacap();
      setWilayah(wlyh);
    });
  
    const refresh = (e: CustomEvent) => {
      setTimeout(() => {
        e.detail.complete();
      }, 3000);
    };


    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Pilih Daerah</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Pilih Wilayah</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonSearchbar value={searchText} onIonChange={e => {setSearchText(e.detail.value!); setWilayah(filterWilayah(e.detail.value!))}}></IonSearchbar>
                <IonList>
                    {wilayah ? wilayah.map(w => <WilayahListItem key={w.id} wilayah={w} />) : <p>Tidak ditemukan</p>}
                </IonList>
            </IonContent>
        </IonPage>
    )
}


export default ViewWilayah;
