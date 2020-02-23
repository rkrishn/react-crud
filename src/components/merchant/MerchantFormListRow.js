import React from 'react';
import { Link } from 'react-router-dom';

const MerchantFormListRow = ({merchant, onDelete}) => {
  return (
    <tr>
      <td><img className="avatar-image" alt="NA" src={merchant.avatarUrl}/></td>
      <td><span>{merchant.firstName}</span></td>
      <td>{merchant.lastName}</td>
      <td>{merchant.email}</td>
      <td>{merchant.phone}</td>
      <td>{merchant.premium ? "yes": "No"}</td>
      <td><Link to={`/reactcrud/merchant/${merchant.index}`} className="glyphicon glyphicon-pencil"></Link></td>
      <td><a className='auto-delete-icon' onClick={onDelete}>
          <span className="glyphicon glyphicon-trash"></span>
        </a></td>
    </tr>
  );
};


export default MerchantFormListRow;
