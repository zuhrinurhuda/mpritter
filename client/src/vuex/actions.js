import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})

const actions = {
  userLogin: ({ commit }, userData) => {
    return new Promise((resolve, reject) => {
      http.post('/users', userData)
        .then(({ data }) => {
          commit('setUserProfile', data.user)
          resolve(data.accesstoken)
        })
        .catch(err => reject(err))
    })
  },
  userProfile: ({ commit }) => {
    http.get('/users/profile', {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
      .then(({ data }) => {
        commit('setUserProfile', data.user)
      })
      .catch(err => console.log(err))
  },
  getTweets: ({ commit }) => {
    http.get('/tweets')
      .then(({ data }) => {
        commit('setTweets', data.tweets)
      })
      .catch(err => console.log(err))
  },
  addNewTweet: ({ commit }, tweet) => {
    http.post('/tweets', tweet, {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
      .then(({ data }) => {
        http.get('/tweets/' + data.newTweet._id, {
          headers: { accesstoken: localStorage.getItem('accesstoken') }
        })
          .then(({ data }) => {
            commit('setNewTweet', data.tweet)
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  },
  deleteTweet: ({ commit }, id) => {
    
  }
}

export default actions
