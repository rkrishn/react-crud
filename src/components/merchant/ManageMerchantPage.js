import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as merchantActions from '../../actions/merchantActions';
import MerchantForm from './MerchantForm';
import toastr from 'toastr';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

export class ManageMerchantPage extends React.Component { // eslint-disable-line import/no-named-as-default
  constructor(props, context) {
    super(props, context);

    this.state = {
      merchant: Object.assign({}, props.merchant), // 'this' keyword ommited since passed on constructor
      errors: {},
      saving: false
    };

    this.updatemerchantState = this.updatemerchantState.bind(this);
    this.savemerchant = this.savemerchant.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.merchant.index !== nextProps.merchant.index) {
      this.setState({merchant: Object.assign({}, nextProps.merchant)});
    }
  }

  updatemerchantState(event) {
    const field = event.target.name;
    let merchant = this.state.merchant;
    if(event.target.type === "checkbox"){
      merchant[field] = event.target.checked;
    }
    else if(event.target.type === "file"){
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      merchant[field] = reader.result;
    }
    reader.readAsDataURL(file);
    }
    else {
      merchant[field] = event.target.value;     
    } 
    if(merchant['avatarUrl'] === ""){
      merchant['avatarUrl'] = "https://picsum.photos/100/50";
    }   
    return this.setState({merchant: merchant});
  }

  merchantFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.merchant.firstName.length < 5) {
      errors.firstName = 'firstName must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  savemerchant(event) {
    event.preventDefault();

    if (!this.merchantFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveMerchant(this.state.merchant)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  

  redirect() {
    this.setState({saving: false});
    toastr.success('merchant saved');
    this.props.history.push('/reactcrud');
  }

  render() {
    return (
      <MerchantForm
        allAuthors={this.props.authors}
        onChange={this.updatemerchantState}
        onSave={this.savemerchant}
        merchant={this.state.merchant}
        errors={this.state.errors}        
        saving={this.state.saving}/>
    );
  }
}


// Pull in the React Router context so router is available on this.context.router
ManageMerchantPage.contextTypes = {
  router: PropTypes.object // Left optional to avoid linting warning when testing. Behaviour isn't impacted.
};

function getmerchantById(merchants, id) {
  const merchant = merchants.filter(merchant => merchant.index === Number(id));
  if (merchant.length) return merchant[0]; // Since filter return an array it has to be the very first element
  return null;
}

function mapStateToProps(state, ownProps) {
  const merchantId = ownProps.match.params.index; // From the path '/merchant/:id'

  let merchant = {index: '',avatarUrl: '', email: '', premium: '',phone: '', firstName: '', lastName:''};

  if (merchantId && state.merchants.length > 0) {
    merchant = getmerchantById(state.merchants, merchantId);
  }

  if(merchant === null){
    window.location = "/";
  }else{
    return {
      merchant: merchant
    }
  }
  
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(merchantActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageMerchantPage));
