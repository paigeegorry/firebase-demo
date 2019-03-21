import React from 'react';
import { app, firestore } from '../services/firebase';

export const connectFirestore = mapFirestoreToProps => Component => {
  class ConnectFirestore extends React.PureComponent {
    state = {}

    subscribe = (ref, dataKey) => {
      return ref.onSnapshot(snap => {
        if(snap instanceof app.firestore.DocumentSnapshot) {
        // this is one item in a collection
        this.setState({ [dataKey]: {...snap.data(), id: snap.id} });
        // received a single document from my ref
        }
      else if(snap instanceof app.firestore.QuerySnapshot) {
        //an array of documents
        const data = snap.docs.map(doc => ({...doc.data(), id: doc.id}));
        //get the data for each document coming back
        this.setState({ [dataKey]: data });
      };
  });
}

    componentWillMount() {
      const mapObject = mapFirestoreToProps(firestore);
      this.unsubscribe = Object.keys(mapObject).map(dataKey => {
        console.log(dataKey);
        const ref = mapObject[dataKey];
        return this.subscribe(ref, dataKey);
      })
    }

    componentWillUnmount() {
      this.unsubscribe && this.unsubscribe.map(u => u());
    }

    render() {
      const props = { ...this.props, ...this.state };
      return (
        <Component {...props} />
      )
    }
  }

  return ConnectFirestore;
}
