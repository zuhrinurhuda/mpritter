<template>
  <div class="ui centered grid container">
    <div class="ten wide column">
      <div class="ui form">
        <div class="field">
          <textarea rows="5" v-model="tweet"></textarea>
        </div>
        <button class="ui green button" @click="submitTweet">Tweet</button>
      </div>
      {{mapState}}
      <div class="ui segment">
        <div class="ui comments">  
          <div class="comment">
            <a class="avatar">
              <img src="">
            </a>
            <div class="content">
              <a class="author"></a>
              <div class="metadata">
                <div class="date"></div>
              </div>
              <div class="text">
              </div>
              <div class="actions">
                <a class="reply">
                  <i class="comment outline icon"></i>
                </a>
                <a class="save">
                  <i class="retweet icon"></i>
                </a>
                <a class="hide">
                  <i class="empty heart icon"></i>
                </a>
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
    ...mapState(['mapState'])
  },
  methods: {
    ...mapActions(['addNewTweet']),
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
    }
  }
}
</script>

<style>
</style>
