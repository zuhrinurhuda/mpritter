import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})

const actions = {
  userLogin: ({ commit }, userData) => {
    console.log('ini userData', userData)
    return new Promise((resolve, reject) => {
      http.post('/users', userData)
        .then(({ data }) => {
          console.log(data)
          commit('setUserProfile', data.user)
          resolve(data.accesstoken)
        })
        .catch(err => reject(err))
    })
  }
}

export default actions
