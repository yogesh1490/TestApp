import {NavigationActions, StackActions} from 'react-navigation';

let _navigator;
function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}
function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}
function replace(routeName, params) {
  _navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    }),
  );
}
function popToTop(routeName, params) {
  _navigator.dispatch(
    StackActions.popToTop({
      routeName,
      params,
    }),
  );
}

function pop(count) {
  _navigator.dispatch(
    StackActions.pop({
      count,
    }),
  );
}

function reset(routeName, params) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName})],
    }),
  );
}

function goBack() {
  _navigator.dispatch(NavigationActions.back());
  // this.props.navigation.dispatch(NavigationActions.back())
}
export default {
  navigate,
  replace,
  popToTop,
  pop,
  reset,
  goBack,
  setTopLevelNavigator,
};
