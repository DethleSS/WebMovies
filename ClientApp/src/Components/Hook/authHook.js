import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const UseAuth = () => {
  const [usertoken, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userID, setUserId] = useState(null)

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken)
    setUserId(id)

    localStorage.setItem(storageName, JSON.stringify({
        userID: id, usertoken: jwtToken
    }))
  }, [])


  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.usertoken) {
      login(data.usertoken, data.userID)
    }
    setReady(true)
  }, [login])


  return { login, logout, usertoken, userID, ready }
}