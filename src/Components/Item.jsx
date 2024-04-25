import React from 'react'

function Item(props) {
    const {items} = props;
  return (
    <div className='item-container'>
        <p>Expense type&emsp;&emsp;&emsp;amount</p>
        {items.map((item,i) => {
            return (
            <div>
                {item.type}&emsp;&emsp;&emsp;{item.amount}
            </div>
            )
        })}

    </div>
  )
}

export default Item