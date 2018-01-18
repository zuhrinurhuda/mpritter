const mutations = {
  setUserProfile: (state, payload) => {
    state.userProfile = payload
  },
  setTweets: (state, payload) => {
    state.tweets = payload
  },
  setNewTweet: (state, payload) => {
    state.tweets.unshift(payload)
  }
}

export default mutations
