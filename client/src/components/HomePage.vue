<template>
  <div class="ui centered grid container">
    <div class="ten wide column">
      <div class="ui form">
        <div class="field">
          <textarea rows="5" v-model="tweet"></textarea>
        </div>
        <button class="ui green button" v-if="tweet.length > 139" @click="submitTweet">Tweet</button>
        <button class="ui button" v-else>Tweet</button>
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
                <div class="date">
                  <span>Post on {{ new Date(tweet.createdAt).toDateString() }}</span>
                </div>
              </div>
              <div class="text">
                <p>{{ tweet.content }}</p>
              </div>
              <div class="hashtags">
                <p>{{ tweet.hashtags }}</p>
              </div>
              <div class="actions">
                <a class="reply" v-if="user._id == tweet.user" @click="submitDelete(tweet._id)">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      tweet: ''
    }
  },
  computed: {
    ...mapState(['tweets', 'user']),
    hashtag () {
    }
  },
  methods: {
    ...mapActions(['getTweets', 'addNewTweet', 'deleteTweet']),
    ...mapMutations(['setDeletedTweet']),
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
      this.setDeletedTweet(id)
      this.deleteTweet(id)
    }
  },
  mounted () {
    this.getTweets()
  }
}
</script>

<style>
</style>
