import PropTypes from 'prop-types';
import React from 'react';
import css from './TransactionHistory.module.css';
import clsx from "clsx";

export const TransactionHistory = ({  items }) => {
    return <table className={clsx(css.table)}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>

        {items.map(({ id, type, amount, currency }) => {
            return <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
        
            }
        
            )}
        </tbody>
  </table>
}

TransactionHistory.propTypes = {
    items: PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
    })
    
}