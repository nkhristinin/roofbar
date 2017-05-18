import React from 'react'
import classNames from 'classnames'

import Link from 'components/Link'
import long from '../assets/long.jpg'

import './BarOrdersView.scss'

export const BarOrdersView = ({ orders, getDrinkById, completeOrder, canceledOrder }) => (
  <div className='barmen-container'>
    <div className='container order-view-top'>
      <h2>Order</h2>
      <div className='select'>Bar is Open</div>
    </div>
    <div className='container orders-workplace'>
      <div className='orders-workplace__new'>
        <h3 className='orders-workplace__titile'>New</h3>
        {orders.length > 0 &&
          orders.map(order => {
            const drink = getDrinkById(order.drink_id)
            const isNew = order.status === 'PENDING'
            const isDone = order.status === 'DONE'
            const isCancel = order.status === 'CANCEL'
            return (
              <div className='order-card'>
                <div className='order-card__info'>
                  <img src={long} className='order-card__image' />
                  <div className='ordec-card__description'>
                    <div
                      className={classNames('order-card__status', {
                        'order-card__status--new': isNew,
                        'order-card__status--done': isDone,
                        'order-card__status--cancel': isCancel
                      })}
                    >
                      {order.status}
                    </div>
                    <div className='order-card__name'>{drink.name}</div>
                    <div className='order-card__code'>{order.order_code}</div>
                  </div>
                </div>
                <div className='order-card__actions' onClick={() => completeOrder(order.order_id)}>
                  <div className='IconBtn'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      version='1.0'
                      x='0px'
                      y='0px'
                      viewBox='0 0 50 50'
                      className='icon icons8-Ok'
                    >
                      <path
                        d='M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 34.0625 14.46875 L 23.125 31.46875 L 15.78125 24.84375 L 14.4375 26.34375 L 22.625 33.75 L 23.5 34.53125 L 24.125 33.53125 L 35.75 15.53125 L 34.0625 14.46875 z'
                        color='#000'
                        overflow='visible'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <div className='orders-workplace__done_' />
      <div className='orders-workplace__cacnel' />
    </div>

  </div>
)

export default BarOrdersView