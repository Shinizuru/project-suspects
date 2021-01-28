import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonIcon,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonBackButton,
  IonFab,
  IonFabButton,
  IonAvatar
} from '@ionic/react';
import './Home.css';

import { createOutline } from "ionicons/icons";
import { RouteComponentProps } from 'react-router';
import { getSuspectsById } from "../data/Suspects";

interface SuspectItemProps extends RouteComponentProps<{
    id: string
}>{}

const ViewSuspect: React.FC<SuspectItemProps> = ({match}) => {
  
    useIonViewWillEnter(() => {
    });
  
    const refresh = (e: CustomEvent) => {
      setTimeout(() => {
        e.detail.complete();
      }, 3000);
    };

    const SuspectId: number = Number(match.params.id)
    const SuspectData = getSuspectsById(SuspectId)

    const ListSuspectData = () => {
        return(
            <div>

                <img className="ProfilePhoto" src="assets/photos/destroyer.png" alt=''/>

                <IonRow>
                        <IonCol size="3">Nama</IonCol>
                        <IonCol size="1">:</IonCol>
                        <IonCol size="8">{SuspectData && SuspectData.name ? SuspectData.name : ''}</IonCol>
                </IonRow>
                <IonRow>
                        <IonCol size="3">Jenis Kelamin</IonCol>
                        <IonCol size="1">:</IonCol>
                        <IonCol size="8">{SuspectData && SuspectData.gender ? SuspectData.gender : ''}</IonCol>
                </IonRow>
                <IonRow>
                        <IonCol size="3">Alamat</IonCol>
                        <IonCol size="1">:</IonCol>
                        <IonCol size="8">{SuspectData && SuspectData.address ? SuspectData.address : ''}</IonCol>
                </IonRow>
                <IonRow>
                        <IonCol size="3">NIK</IonCol>
                        <IonCol size="1">:</IonCol>
                        <IonCol size="8">{SuspectData && SuspectData.nik ? SuspectData.nik : ''}</IonCol>
                </IonRow>
                <IonRow>
                        <IonCol size="3">No. KK</IonCol>
                        <IonCol size="1">:</IonCol>
                        <IonCol size="8">{SuspectData && SuspectData.no_kk ? SuspectData.no_kk : ''}</IonCol>
                </IonRow>
                <IonRow>
                        <IonCol size="3">MO</IonCol>
                        <IonCol size="1">:</IonCol>
                        <IonCol size="8">{SuspectData && SuspectData.mo ? SuspectData.mo : ''}</IonCol>
                </IonRow>
                <IonRow>
                        <IonCol size="3">Riwayat</IonCol>
                        <IonCol size="1">:</IonCol>
                        <IonCol size="8">{SuspectData && SuspectData.riwayat ? SuspectData.riwayat : ''}</IonCol>
                </IonRow>
                <IonRow>
                        <IonCol size="3">Residivist</IonCol>
                        <IonCol size="1">:</IonCol>
                        <IonCol size="8">{SuspectData && SuspectData.res_id ? SuspectData.res_id : ''}</IonCol>
                </IonRow>
                <IonRow>
                        <IonCol size="3">Wilayah</IonCol>
                        <IonCol size="1">:</IonCol>
                        <IonCol size="8">{SuspectData && SuspectData.wlyh_id ? SuspectData.wlyh_id : ''}</IonCol>
                </IonRow>
            </div>
        )
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Data </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen class="ion-padding">
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonItem>
                    <IonGrid>
                        {SuspectData ? <ListSuspectData /> : 'loading'}
                    </IonGrid>
                </IonItem>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton>
                        <IonIcon icon={createOutline} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    )
}


export default ViewSuspect;
