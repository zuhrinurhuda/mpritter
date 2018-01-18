<template>
  <div class="ui attached stackable menu">
    <div class="ui container">
      <a class="item">
        <i class="home icon"></i> Home
      </a>
      <a class="item">
        <i class="grid layout icon"></i> Browse
      </a>
      <a class="item">
        <i class="mail icon"></i> Messages
      </a>
      <div class="ui simple dropdown item">
        More
        <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item"><i class="edit icon"></i> Edit Profile</a>
          <a class="item"><i class="globe icon"></i> Choose Language</a>
          <a class="item"><i class="settings icon"></i> Account Settings</a>
        </div>
      </div>
      <div class="right item">
        <button class="ui basic button" v-if="!isLogin" @click="login"><i class="facebook icon"></i>Continue with Facebook</button>
        <button class="ui basic button" v-else @click="logout"><i class="sign out icon"></i>Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase'
import { mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    ...mapActions(['userLogin', 'userProfile']),
    ...mapMutations(['setUserProfile']),
    login () {
      let provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(result => {
          // console.log('ini result', result.user)
          let user = {
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL
          }
          // console.log('ini user', user)
          this.userLogin(user)
            .then(accesstoken => {
              if (accesstoken) {
                localStorage.setItem('accesstoken', accesstoken)
                this.isLogin = true
              } else {
                alert('Login failed. Please try again!')
                firebase.auth().signOut()
              }
            })
        })
        .catch(error => alert(error))
    },
    logout () {
      firebase.auth().signOut()
        .then(() => {
          this.setUserProfile(null)
          localStorage.removeItem('accesstoken')
          this.isLogin = false
        })
        .catch(error => alert(error))
    },
    checkLoginStatus () {
      localStorage.getItem('accesstoken') ? this.isLogin = true : this.isLogin = false
    }
  },
  mounted () {
    if (localStorage.getItem('accesstoken')) this.userProfile()
    this.checkLoginStatus()
  }
}
</script>

<style>

</style>
