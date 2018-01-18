const mutations = {
  setUserProfile: (state, payload) => {
    state.user = payload
  },
  setTweets: (state, payload) => {
    state.tweets = payload
  },
  setNewTweet: (state, payload) => {
    state.tweets.unshift(payload)
  },
  setDeletedTweet: (state, payload) => {
    let filteredTweet = state.tweets.filter(tweet => tweet._id !== payload)
    state.tweets = filteredTweet
  },
  setUserTweets: (state, payload) => {
    state.userTweets = payload
  }
}

export default mutations
