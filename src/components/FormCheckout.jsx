import { React, useContext } from 'react'
import cashIcon from '../assets/icons/cash-icon.svg'
import './FormCheckout.css'
import { FormsContext } from '../context/forms'

export default function FormCheckout () {
  const { formsInfo, handleChange, wasTried, isValid } = useContext(FormsContext)

  return (
    <section className='checkout-form'>
      <h2>CHECKOUT</h2>
      <div className='billing-details'>
        <h3>BILLING DETAILS</h3>
        <div className='input-div'>
          <label
            htmlFor='Name'
            className={(formsInfo.name.value1 === '' && wasTried) ? 'recquired' : ''}
          >
            Name
            {(formsInfo.name.value1 === '' && wasTried) && <p>The field cannot be empty</p>}
          </label>
          <input
            type='text'
            id='Name'
            placeholder='Leonardo Fernández'
            name='name'
            onChange={handleChange}
            value={formsInfo.name.value1}
            className={(formsInfo.name.value1 === '' && wasTried) ? 'recquired' : ''}
          />
        </div>
        <div className='input-div'>
          <label
            htmlFor='Email'
            className={((formsInfo.email.value1 === '' && wasTried) || (formsInfo.email.value1 !== '' && !isValid())) ? 'recquired' : ''}
          >
            Email
            {(formsInfo.email.value1 === '' && wasTried) && <p>The field cannot be empty</p>}
            {(formsInfo.email.value1 !== '' && !isValid()) && <p>Email isn't valid</p>}
          </label>
          <input
            type='text'
            id='Email'
            placeholder='leonardo99112821385@gmail.com'
            name='email'
            onChange={handleChange}
            value={formsInfo.email.value1}
            className={((formsInfo.email.value1 === '' && wasTried) || (formsInfo.email.value1 !== '' && !isValid())) ? 'recquired' : ''}
          />
        </div>
        <div className='input-div'>
          <label
            htmlFor='Phone'
            className={(formsInfo.phone.value1 === '' && wasTried) ? 'recquired' : ''}
          >
            Phone Number
            {(formsInfo.phone.value1 === '' && wasTried) && <p>The field cannot be empty</p>}
          </label>
          <input
            type='text'
            id='Phone'
            placeholder='+53 52592682'
            name='phone'
            onChange={handleChange}
            value={formsInfo.phone.value1}
            className={(formsInfo.name.value1 === '' && wasTried) ? 'recquired' : ''}
          />
        </div>
      </div>
      <div className='shipping-info'>
        <h3>SHIPPING INFO</h3>
        <div className='input-div address'>
          <label
            htmlFor='Address'
            className={(formsInfo.address.value1 === '' && wasTried) ? 'recquired' : ''}
          >
            Your Address
            {(formsInfo.address.value1 === '' && wasTried) && <p>The field cannot be empty</p>}
          </label>
          <input
            type='text'
            id='Address'
            placeholder='1137 Williams avenue'
            name='address'
            onChange={handleChange}
            value={formsInfo.address.value1}
            className={(formsInfo.address.value1 === '' && wasTried) && 'recquired'}
          />
        </div>
        <div className='input-div'>
          <label
            htmlFor='ZIP-code'
            className={(formsInfo.zip.value1 === '' && wasTried) ? 'recquired' : ''}
          >
            ZIP code
            {(formsInfo.zip.value1 === '' && wasTried) && <p>The field cannot be empty</p>}
          </label>
          <input
            type='text'
            id='ZIP-code'
            placeholder='10001'
            name='zip'
            onChange={handleChange}
            value={formsInfo.zip.value1}
            className={(formsInfo.name.value1 === '' && wasTried) ? 'recquired' : ''}
          />
        </div>
        <div className='input-div'>
          <label
            htmlFor='City'
            className={(formsInfo.city.value1 === '' && wasTried) ? 'recquired' : ''}
          >
            City
            {(formsInfo.city.value1 === '' && wasTried) && <p>The field cannot be empty</p>}
          </label>
          <input
            type='text'
            id='City'
            placeholder='New York'
            name='city'
            onChange={handleChange}
            value={formsInfo.city.value1}
            className={(formsInfo.name.value1 === '' && wasTried) ? 'recquired' : ''}
          />
        </div>
        <div className='input-div'>
          <label
            htmlFor='Country'
            className={(formsInfo.country.value1 === '' && wasTried) ? 'recquired' : ''}
          >
            Country
            {(formsInfo.country.value1 === '' && wasTried) && <p>The field cannot be empty</p>}
          </label>
          <input
            type='text'
            id='Country'
            placeholder='USA'
            name='country'
            onChange={handleChange}
            value={formsInfo.country.value1}
            className={(formsInfo.name.value1 === '' && wasTried) ? 'recquired' : ''}
          />
        </div>
      </div>
      <div className='payment-details'>
        <h3>PAYMENT DETAILS</h3>
        <p>Payment Method</p>
        <div className='payment-inputs'>
          <label
            className={`checkbox ${formsInfo.payment.value1 === 'e-Money' && 'checked'} ${(formsInfo.payment.value1 === '' && wasTried) ? 'recquired' : ''}`}
            htmlFor='e-money'
          >
            <input
              type='radio'
              id='e-money'
              name='payment'
              value='e-Money'
              onChange={handleChange}
              required
            />
            <p>e-Money</p>
          </label>
          <label
            className={`checkbox ${formsInfo.payment.value1 === 'Cash' && 'checked'} ${(formsInfo.payment.value1 === '' && wasTried) ? 'recquired' : ''}`}
            htmlFor='cash'
          >
            <input
              type='radio'
              id='cash'
              name='payment'
              value='Cash'
              onChange={handleChange}
              required
            />
            <p>Cash on delivery</p>
          </label>
        </div>
      </div>
      <div className='info-div'>
        {formsInfo.payment.value1 === 'Cash' && <img src={cashIcon} alt='Cash icon' />}
        {formsInfo.payment.value1 === 'Cash' && <p>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled</p>}
        {formsInfo.payment.value1 === 'e-Money' &&
          <div className='input-div'>
            <label
              htmlFor='E-money-number'
            >
              e-Money Number
            </label>
            <input
              type='text'
              id='E-money-number'
              placeholder='2342552421'
              name='eMoneyNumber'
              onChange={handleChange}
              value={formsInfo.eMoneyNumber.value1}
              required
            />
          </div>}
        {formsInfo.payment.value1 === 'e-Money' &&
          <div className='input-div'>
            <label
              htmlFor='E-Money-pin'
            >
              e-Money PIN
            </label>
            <input
              type='text'
              id='E-Money-pin'
              placeholder='6891'
              name='eMoneyPin'
              onChange={handleChange}
              value={formsInfo.eMoneyPin.value1}
              required
            />
          </div>}
      </div>
    </section>
  )
}
