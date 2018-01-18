const mutations = {
  setUserProfile: (state, payload) => {
    state.userProfile = payload
  },
  setNewTweet: (state, payload) => {
    state.tweets.unshift(payload)
  }
}

export default mutations
