import { useState } from 'react'

export function useForms () {
  const [formsInfo, setFormsInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    payment: '',
    eMoneyNumber: '',
    eMoneyPin: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormsInfo(prevFormsInfo => {
      return {
        ...prevFormsInfo,
        [name]: value
      }
    })
  }

  const wasTried = () => {
    if (formsInfo.name === '' || formsInfo.email === '' || formsInfo.phone === '' || formsInfo.address === '' || formsInfo.zip === '' || formsInfo.city === '' || formsInfo.country === '' || formsInfo.payment === '') {
      return true
    } else {
      return false
    }
  }

  const isValid = () => {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (formsInfo.email !== '') {
      if (regEx.test(formsInfo.email)) {
        return true
      } else {
        return false
      }
    }
  }

  return { formsInfo, handleChange, wasTried, isValid }
}
