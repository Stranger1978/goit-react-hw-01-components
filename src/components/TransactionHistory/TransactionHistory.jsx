import React from 'react';
import PropTypes from "prop-types";
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => { 
    return (
        <table class={style.transaction_history}>
        <thead class={style.table_head}>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

            <tbody class={style.table_body}>
                {items.map(({ id, type, amount, currency }) => { 
                    return (
                        < tr id={id} >
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>)
                        }  
                )}
            </tbody>
    </table>
        )
    }

TransactionHistory.propTypes = {
    type: PropTypes.string,
    currency: PropTypes.string,
    amount: PropTypes.number,
    id: PropTypes.number,
};

export default TransactionHistory;