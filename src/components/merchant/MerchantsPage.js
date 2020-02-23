import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as merchantActions from '../../actions/merchantActions';
import MerchantFormList from './MerchantFormList';
import toastr from 'toastr';
import * as i18n from '../../constants';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class MerchantsPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.redirectToAddmerchantPage = this.redirectToAddmerchantPage.bind(this);
    this.deletemerchant = this.deletemerchant.bind(this);
  }

  // merchantRow(merchant, index) {
  //   return <div key={index}>{merchant.title}</div>;
  // }

  redirectToAddmerchantPage() {
    this.props.history.push('/reactcrud/merchant')
  }


  deletemerchant(id) {
    this.props.actions.deleteMerchant(id)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
      });
  }

  redirect() {
    toastr.success('merchant deleted');
    this.props.history.push('/reactcrud');
  }

  render() {
    const { merchants } = this.props;
    
    return (
      <div>
        <div className='table-header'>
          <h2>List of Employees</h2>
          <input
            type="submit"
            value={i18n.ADD_EMPLOYEE}
            className="btn btn-primary"
            onClick={this.redirectToAddmerchantPage} />
          </div>        
        <MerchantFormList merchants={merchants} onDelete={this.deletemerchant}/>       
      </div>
    );
  }

}



// Pull in the React Router context so router is available on this.context.router
MerchantsPage.contextTypes = {
  router: PropTypes.object // Left optional to avoid linting warning when testing. Behaviour isn't impacted.
};

function mapStateToProps(state, ownProps) {
  return {
    merchants: state.merchants // See: reducers/index.js
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(merchantActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MerchantsPage));
