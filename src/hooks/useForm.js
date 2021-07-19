// write your custom hook here to control your checkout form
import { useState } from 'react'

const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  }
  
  export const useForm = () => {
    const [state, setState] = useState(initialValue)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const handleChanges = evt => {
      setState({
        ...state,
        [evt.target.name]: evt.target.value
      })
    }
    const handleSubmit = evt => {
      evt.preventDefault()
      setShowSuccessMessage(true)
    }
    return [state, handleChanges, handleSubmit, showSuccessMessage]
  }