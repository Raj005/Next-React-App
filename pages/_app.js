import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import initStore from '../app/store';

import { MainLayout } from '../app/ui/layouts';
import GlobalStyle from '../app/ui/styles/global';

class CarsApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <GlobalStyle />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    );
  }
}

export default withRedux(initStore)(CarsApp);
