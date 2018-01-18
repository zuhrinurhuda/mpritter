<template>
  <div class="ui centered grid container">
    <div class="ten wide column">
      <div class="ui form">
        <div class="field">
          <textarea rows="5" v-model="tweet"></textarea>
        </div>
      </div>
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
export default {
  data () {
    return {
      tweet: ''
    }
  }
}
</script>

<style>
</style>
