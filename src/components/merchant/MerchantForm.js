import React from 'react';
import TextInput from '../common/TextInput';
import * as i18n from '../../constants';
const MerchantForm = ({merchant, allAuthors, onSave, onChange, saving, errors}) => {

  let numberToString = merchant.phone;
  if(merchant.phone)
  numberToString = numberToString.toString();
  return (
    <form>
      <h3>{i18n.EMPLOYEE_DTS}</h3>
      <TextInput
        name="firstName"
        label="First Name"
        type="text"
        value={merchant.firstName}
        onChange={onChange}
        error={errors.firstName} />
      <TextInput
        name="lastName"
        label="Last Name"
        type="text"
        value={merchant.lastName}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.lastName} />
      <TextInput
        name="avatarUrl"
        label="Select an Avatar Image"
        type="file"
        onChange={onChange}
        error={errors.avatarUrl} />
      <TextInput
        name="email"
        label="Email"
        type="Email"
        value={merchant.email}
        onChange={onChange}
        error={errors.email} />
      <TextInput
        name="phone"
        label="Phone"
        type="tel"
        value={numberToString}
        onChange={onChange}
        error={errors.phone} />
      <TextInput
        name="premium"
        label="Premium"
        type="checkbox"
        checked={merchant.premium}
        value={merchant.premium? "true":"false"}
        onChange={onChange}
        error={errors.premium} />  
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave} />        
    </form>
  );
};


export default MerchantForm;
