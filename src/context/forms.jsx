import { createContext, useEffect, useState } from 'react'

export const FormsContext = createContext()

export function FormsProvider ({ children }) {
  const [formsInfo, setFormsInfo] = useState({
    name: {
      value1: ''
    },
    email: {
      value1: ''
    },
    phone: {
      value1: ''
    },
    address: {
      value1: ''
    },
    zip: {
      value1: ''
    },
    city: {
      value1: ''
    },
    country: {
      value1: ''
    },
    payment: {
      value1: ''
    },
    eMoneyNumber: {
      value1: ''
    },
    eMoneyPin: {
      value1: ''
    }
  })
  const [wasTried, setWasTried] = useState(false)
  const [allFormsValid, setAllFormsValid] = useState(false)

  const handleAllFormsValid = () => {
    if (formsInfo.name.value1 !== '' && formsInfo.email.value1 !== '' && isValid() === true && formsInfo.phone.value1 !== '' && formsInfo.address.value1 !== '' && formsInfo.zip.value1 !== '' && formsInfo.city.value1 !== '' && formsInfo.country.value1 !== '' && formsInfo.payment.value1 !== '') {
      if (formsInfo.payment.value1 === 'e-Money' && (formsInfo.eMoneyNumber.value1 === '' || formsInfo.eMoneyPin.value1 === '')) {
        setAllFormsValid(false)
      } else {
        setAllFormsValid(true)
      }
    }
  }

  const isValid = () => {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (formsInfo.email.value1 !== '') {
      if (regEx.test(formsInfo.email.value1)) {
        return true
      } else {
        return false
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormsInfo(prevFormsInfo => {
      return {
        ...prevFormsInfo,
        [name]: {
          value1: value
        }
      }
    })
  }

  useEffect(() => {
    handleAllFormsValid()
  }, [formsInfo])

  return (
    <FormsContext.Provider
      value={{
        formsInfo,
        handleChange,
        wasTried,
        setWasTried,
        allFormsValid,
        isValid
      }}
    >
      {children}
    </FormsContext.Provider>
  )
}
