import PropTypes from 'prop-types';
import React from 'react';
import css from './TransactionHistory.module.css';
import clsx from "clsx";

export const TransactionHistory = ({ id, items }) => {
    return <table className={clsx(css.table)}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        {items.map(({ type, amount, currency }) => {
            return <tbody key={id}>
                <tr>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
        
            </tbody>}
        
)}
  </table>
}

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}