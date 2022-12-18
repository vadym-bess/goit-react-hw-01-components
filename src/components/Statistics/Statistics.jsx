import PropTypes from 'prop-types';
import React from 'react';
import css from './Statistics.module.css';
import clsx from "clsx";




export const Statistics = ({title, stats}) => {
  return (
    <section className={clsx(css.statistics)}>
      {title && <h2 className={clsx(css.title)}>{title}</h2>}
      
      <ul className={clsx(css.item__wrapper)}>
        {stats.map(({ id, label, percentage }) => {
        return (
          <li className={clsx(css.item)} key={id} style={{ backgroundColor: getRandomColor() }}>
              <span className={clsx(css.label)}>{label}</span>
              <span className={clsx(css.percentage)}>{percentage}%</span>
          </li>
          
     )
        })}
        </ul>
    </section>
  )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,  
  })       
}

function getRandomColor() {

    return `#${Math.floor(Math.random() * 16777215).toString(16)}`

}