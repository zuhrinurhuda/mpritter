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
        <!-- <div class="ui input"><input type="text" placeholder="Search..."></div> -->
        <button class="ui basic button" @click="login"><i class="facebook icon"></i>Continue with Facebook</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase'
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['userLogin']),
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
                // jika tidak mendapat token dari server, login dianggap gagal
                alert('Login failed. Please try again!')
                firebase.auth().signOut()
              }
            })
        })
        .catch(error => alert('Oops! ' + error))
    }
  }
}
</script>

<style>

</style>
