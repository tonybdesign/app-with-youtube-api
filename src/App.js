import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import Routes from './Routes';
import locales from './translations/translation.json';
import Container from './components/Container';

import { selectLanguage } from './selectors/localization';

const App = ({ lang }) => (
  <IntlProvider locale={lang} key={lang} messages={locales[lang]}>
    <div className="App">
      <Container fullHeight>
        <Routes />
      </Container>
    </div>
  </IntlProvider>
);

App.propTypes = {
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  lang: selectLanguage(state),
});

export default connect(mapStateToProps)(App);
