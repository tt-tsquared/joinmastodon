import React from 'react';
import WizardRow from './WizardRow';
import { Scrollbars } from 'react-custom-scrollbars';
import { FormattedHTMLMessage as FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import ReactResponsiveSelect from 'react-responsive-select';

const messages = defineMessages({
  i_am: { id: 'wizard.filters.i_am', defaultMessage: 'I am ' },
  i_speak: { id: 'wizard.filters.i_speak', defaultMessage: 'I speak ' },
  artist: { id: 'wizard.filters.artist', defaultMessage: 'an artist' },
  musician: { id: 'wizard.filters.musician', defaultMessage: 'a musician' },
  writer: { id: 'wizard.filters.writer', defaultMessage: 'a writer' },
  reader: { id: 'wizard.filters.reader', defaultMessage: 'a book lover' },
  activist: { id: 'wizard.filters.activist', defaultMessage: 'an activist' },
  sports_fan: { id: 'wizard.filters.sports_fan', defaultMessage: 'a sports fan' },
  gamer: { id: 'wizard.filters.gamer', defaultMessage: 'a gamer' },
  dev: { id: 'wizard.filters.dev', defaultMessage: 'a developer' },
  sysadmin: { id: 'wizard.filters.sysadmin', defaultMessage: 'a sysadmin' },
  academia: { id: 'wizard.filters.academia', defaultMessage: 'in academia' },
  journalist: { id: 'wizard.filter.journalist', defaultMessage: 'a journalist' },
  adult_content_creator: { id: 'wizard.filter.adult_content_creator', defaultMessage: 'an adult content creator' },
  lgbt: { id: 'wizard.filter.lgbt', defaultMessage: 'LGBTQ+' },
  poc_aa: { id: 'wizard.filter.poc_aa', defaultMessage: 'Black American' },
  humor: { id: 'wizard.filter.humor', defaultMessage: 'a humorist' },
  furry: { id: 'wizard.filter.furry', defaultMessage: 'a furry' },
});

const caretIcon = (
  <svg className="caret-icon" x="0px" y="0px" width="11.848px" height="6.338px" viewBox="351.584 2118.292 11.848 6.338">
    <g><path d="M363.311,2118.414c-0.164-0.163-0.429-0.163-0.592,0l-5.205,5.216l-5.215-5.216c-0.163-0.163-0.429-0.163-0.592,0s-0.163,0.429,0,0.592l5.501,5.501c0.082,0.082,0.184,0.123,0.296,0.123c0.103,0,0.215-0.041,0.296-0.123l5.501-5.501C363.474,2118.843,363.474,2118.577,363.311,2118.414L363.311,2118.414z"/></g>
  </svg>
);

class Wizard extends React.PureComponent {

  componentDidMount () {
    this.props.onMount();
  }

  handleCategoryChange = ({ value }) => {
    const { category } = this.props;
    if (category === value) return;
    this.props.onChangeCategory(value);
  }

  handleLanguageChange = ({ value }) => {
    const { language } = this.props;
    if (language === value) return;
    this.props.onChangeLanguage(value);
  }

  renderThumb ({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: 'rgba(217, 225, 232, 0.7)',
      borderRadius: '4px',
    };

    return <div style={{ ...style, ...thumbStyle }} />;
  }

  render () {
    const { instances, category, language, intl } = this.props;

    const content = instances.length > 0 ? (
      instances.map(item => <WizardRow key={item.id} instance={item} />)
    ) : (
      <div className='empty'>
        <FormattedMessage id='wizard.empty' defaultMessage='No results… for now!' />
      </div>
    );
    return (
      <div className='wizard-page' id='getting-started'>
        <h1><i className='ion-md-person-add' /> <FormattedMessage id='wizard.sign_up' defaultMessage='Sign up' /></h1>

        <p className='lead'>
          <FormattedMessage id='wizard.hint2' defaultMessage='All you need to do to sign up is choose a server. Just like when signing up for an e-mail address, one server is going to be hosting your account and be part of your identity.' /> <strong><FormattedMessage id='wizard.hint5' defaultMessage='Remember, you can follow and talk to anyone from any server, regardless of your choice!' /></strong>
        </p>

        <form className='wizard-controls'>
          <div className='row'>
            <ReactResponsiveSelect
              name="category"
              options={[
                { value: '', text: '…' },
                { value: 'art', text: intl.formatMessage(messages.artist) },
                { value: 'music', text: intl.formatMessage(messages.musician) },
                { value: 'books-0', text: intl.formatMessage(messages.writer) },
                { value: 'books-1', text: intl.formatMessage(messages.reader) },
                { value: 'journalism', text: intl.formatMessage(messages.journalist) },
                { value: 'activism', text: intl.formatMessage(messages.activist) },
                { value: 'lgbt', text: intl.formatMessage(messages.lgbt) },
                { value: 'poc-0', text: intl.formatMessage(messages.poc_aa) },
                { value: 'sports', text: intl.formatMessage(messages.sports_fan) },
                { value: 'games', text: intl.formatMessage(messages.gamer) },
                { value: 'tech-0', text: intl.formatMessage(messages.dev) },
                { value: 'tech-1', text: intl.formatMessage(messages.sysadmin) },
                { value: 'academia', text: intl.formatMessage(messages.academia) },
                { value: 'adult', text: intl.formatMessage(messages.adult_content_creator) },
                { value: 'humor', text: intl.formatMessage(messages.humor) },
                { value: 'furry', text: intl.formatMessage(messages.furry) },
              ]}
              caretIcon={caretIcon}
              selectedValue={category}
              prefix={intl.formatMessage(messages.i_am)}
              onChange={this.handleCategoryChange}
            />

            <span className='wizard-controls__label'></span>

            <ReactResponsiveSelect
              name="language"
              options={[
                { value: '', text: '…' },
                { value: 'ar', text: 'العربية' },
                { value: 'ca', text: 'Català' },
                { value: 'cs', text: 'Česky' },
                { value: 'de', text: 'Deutsch' },
                { value: 'en', text: 'English' },
                { value: 'es', text: 'Español' },
                { value: 'eu', text: 'Euskara' },
                { value: 'fi', text: 'Suomi' },
                { value: 'fr', text: 'Français' },
                { value: 'ja', text: '日本語' },
                { value: 'ko', text: '한국어' },
                { value: 'nl', text: 'Nederlands' },
                { value: 'pl', text: 'Polski' },
                { value: 'pt', text: 'Português' },
                { value: 'ru', text: 'Русский' },
                { value: 'zh', text: '中文' },
              ]}
              caretIcon={caretIcon}
              selectedValue={language}
              prefix={intl.formatMessage(messages.i_speak)}
              onChange={this.handleLanguageChange}
            />
          </div>
        </form>

        <div className='wizard'>
          <Scrollbars className='wizard-content' style={{ height: 500 }} renderThumbVertical={this.renderThumb}>
            {content}
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default injectIntl(Wizard);
