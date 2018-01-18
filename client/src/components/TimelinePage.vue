<template>
  <div class="ui centered grid container">
    <div class="ten wide column">
      <div class="ui segment" v-for="tweet in userTweets" :key="tweet._id">
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
                <a class="reply" @click="submitDelete(tweet._id)">Delete</a>
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
  computed: {
    ...mapState(['userTweets'])
  },
  methods: {
    ...mapActions(['getUserTweet'])
  },
  mounted () {
    this.getUserTweet()
  }
}
</script>

<style>

</style>
