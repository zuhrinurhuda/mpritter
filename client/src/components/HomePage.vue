<template>
  <div class="ui centered grid container">
    <div class="ten wide column">
      <div class="ui form">
        <div class="field">
          <textarea rows="5" v-model="tweet"></textarea>
        </div>
        <button class="ui green button" @click="submitTweet">Tweet</button>
      </div>
      <div class="ui segment" v-for="tweet in tweets" :key="tweet._id">
        <div class="ui comments">  
          <div class="comment">
            <a class="avatar">
              <img :src="tweet.user.photo">
            </a>
            <div class="content">
              <a class="author">{{ tweet.user.name }}</a>
              <div class="metadata">
                <div class="date"></div>
              </div>
              <div class="text">
                <p>{{ tweet.content }}</p>
              </div>
              <div class="actions">
                <a class="reply" @click="submitDelete(tweet._d)">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      tweet: ''
    }
  },
  computed: {
    ...mapState(['tweets'])
  },
  methods: {
    ...mapActions(['getTweets', 'addNewTweet']),
    submitTweet () {
      let hashtags = this.tweet.split(' ').filter(word => {
        return word[0] === '#'
      })
      let tags = []
      hashtags.forEach(hashtag => {
        tags.push(hashtag.slice(1))
      })
      let newTweet = {
        content: this.tweet,
        hashtags: tags
      }
      this.addNewTweet(newTweet)
    },
    submitDelete (id) {
      
    }
  },
  mounted () {
    console.log('masuk')
    this.getTweets()
  }
}
</script>

<style>
</style>
