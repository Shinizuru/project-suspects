import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonButton,
  useIonViewWillEnter,
  IonList,
  IonSearchbar,
  IonAvatar,
  IonIcon,
  IonFab,
  IonFabButton
} from '@ionic/react';
import './Home.css';
import { Suspect, getSuspects, filterSuspects } from "../data/Suspects";
import ListItemSuspects from "../components/ListSuspects";
import { searchOutline, personAddOutline } from "ionicons/icons";

const FormSuspects: React.FC = () => {

  const [wilayah, setWilayah] = useState<string>();
  const [res, setRes] = useState<string>();
  const [searchText, setSearchText] = useState('');
  const [showLists, setShowLists] = useState(false);
  const [listSuspects, setListSuspects] = useState<Suspect[]>([])
  const [showParam, setShowParam] = useState(true);
  
  const searchOnClick = () => {

    if(showLists){
        setListSuspects([])
        setShowLists(false); 
        setShowParam(true)
    }else{   
        const suspects = getSuspects();
        setListSuspects(suspects)
        setShowLists(true); 
        setShowParam(false)
    }
  }

  useIonViewWillEnter(() => {
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const ListParam = () => (
    <div>
        <IonItem>
        <IonLabel>Wilayah</IonLabel>
            <IonSelect value={wilayah} placeholder="Select One" onIonChange={e => setWilayah(e.detail.value)}>
                <IonSelectOption value="1">Cilacap Utara</IonSelectOption>
                <IonSelectOption value="2">Cilacap Tengah</IonSelectOption>
                <IonSelectOption value="3">Cilacap Selatan</IonSelectOption>

            </IonSelect>
        </IonItem>
        <IonItem>
        <IonLabel>Residivist</IonLabel>
            <IonSelect value={res} placeholder="Select One" onIonChange={e => setRes(e.detail.value)}>
                <IonSelectOption value="1">Residivist Curanmor</IonSelectOption>
                <IonSelectOption value="2">Residivist Curanmar</IonSelectOption>
                <IonSelectOption value="3">Residivist Curanmur</IonSelectOption>
            </IonSelect>
        </IonItem>
    </div>
  )

  const ListSuspects = () => (
    <div>
        
        <IonList>
        {listSuspects ? listSuspects.map(s => <ListItemSuspects key={s.id} suspect={s} />) : <p>Tidak ditemukan</p>}
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={personAddOutline} />
          </IonFabButton>
        </IonFab>
    </div>
    
  )
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pencarian</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding" fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Form
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        {showParam ? <ListParam></ListParam> : null}
        <IonButton expand="block" onClick={searchOnClick}>
            <IonIcon slot="start" icon={searchOutline} />
                {showLists ? 'Ubah Filter' : 'Cari'}
        </IonButton>
        <IonSearchbar value={searchText} onIonChange={e => {setSearchText(e.detail.value!); setListSuspects(filterSuspects(e.detail.value!))}}></IonSearchbar>
        {showLists ? <ListSuspects></ListSuspects> : null}

      </IonContent>
      
    </IonPage>
  );
};

export default FormSuspects;
