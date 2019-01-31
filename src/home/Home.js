import React from 'react';
// import { addLocaleData, IntlProvider } from 'react-intl';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Footer from './Footer';
// import cnLocale from '../zh-CN';
import './static/style';

let isMobile = false;

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    const appLocale = 'zh-CN';
    // addLocaleData(appLocale.data);
    this.state = {
      appLocale,
      isMobile,
    };
  }

  render() {
    const { appLocale } = this.state;
    return (
      // <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <div className="page-wrapper home">
          <Header />
          <Banner isMobile={this.state.isMobile} />
          <Page1 isMobile={this.state.isMobile} />
          <Page2 isMobile={this.state.isMobile} />
          <Page3 />
          <Footer />
          <DocumentTitle title="Ant-Design" key="title" />
        </div>
      // </IntlProvider>
    );
  }
}

export default Home;
