import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import ViewWilayah from './pages/ViewWilayah';
import devDB from "./pages/dev_db";
import FormSuspects from "./pages/FormSuspects";
import ViewSuspect from "./pages/ViewSuspect";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={ViewWilayah} exact={true} />
        <Route path="/form" component={FormSuspects} exact={true} />
        <Route path="/dev" component={devDB} exact={true} />
        <Route path="/suspect/:id" component={ViewSuspect} exact={true}></Route>
        {/* <Route path="/wilayah/:id" component={ViewMessage} exact={true} /> */}
        <Route exact path="/" render={() => <Redirect to="/form" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
