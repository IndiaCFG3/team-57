import * as React from 'react';
import { DrawerActions } from '@react-navigation/native';
export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function pop(){
  navigationRef.current?.pop();
}

export function openDrawer() {
  // navigationRef.current?.openDrawer();
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}