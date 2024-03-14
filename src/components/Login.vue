<template>
    <div id="nav">
        <NavBar />
    </div>
    <div>
    <div class='bold-line'></div>
    <div class='container'>
      <div class='window'>
        <div class='overlay'></div>
        <div class='content'>
        <form>
          <div class='welcome'>Connectez-vous</div>
          <div class='input-fields'>
            <input type='email' placeholder='Email' class='input-line full-width'>
            <input type='password' placeholder='Mot de passe' class='input-line full-width'>
          </div>
          <div class="link"><router-link to="/forgot">Mot de passe oublié</router-link></div>
          <div><button class='ghost-round full-width'>Connexion</button></div>
          <div><router-link class="center" to="/register">Créer un compte</router-link></div>
        </form>
        </div>
      </div>
    </div>
    <ul class="background">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {

  name: 'Login',
  components: {
    NavBar,
  }
}
</script>

<style scoped>

body,
html {
  margin: 0;
  height: 100%;
}
#nav {
    position: absolute;
    z-index: 100;
}
input {
  border: none;
}

button:focus {
  outline: none;
}

::-webkit-input-placeholder {
  color: black;
}

::-webkit-input-placeholder .input-line:focus +::input-placeholder {
  color: black;
}

.highlight {
  color: black;
  font-weight: 400;
  cursor: pointer;
  transition: color .2s ease;
}

.highlight:hover {
  color: black;
  transition: color .2s ease;
}

.spacing {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  height: 120px;
  font-weight: 300;
  text-align: center;
  margin-top: 10px;
  color: black;
}

.input-line:focus {
  outline: none;
  border-color: black;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
}

.ghost-round {
  cursor: pointer;
  background: none;
  border: 1px solid black;
  border-radius: 25px;
  color: black;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  font-size: 19px;
  font-size: 1.2rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont,'Open Sans', light;
  font-weight: 300;
  line-height: 2.5em;
  margin-top: 65px;
  margin-bottom: 25px;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
}

.ghost-round:hover {
  background-color: white;
  color: black;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
}

.input-line {
  background: none;
  margin-bottom: 10px;
  line-height: 2.4em;
  color: black;
  font-family: system-ui, -apple-system, BlinkMacSystemFont,'Open Sans', light;
  font-weight: 300;
  letter-spacing: 0px;
  letter-spacing: 0.02rem;
  font-size: 19px;
  font-size: 1.2rem;
  border-bottom: 1px solid black;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
}

.full-width {
  width: 100%;
}

.input-fields {
  margin-top: 25px;
}

.container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
}

.content {
  padding-left: 25px;
  padding-right: 25px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  flex-flow: column;
  z-index: 5;
}

.welcome {
  font-weight: 200;
  margin-top: 75px;
  text-align: center;
  font-size: 40px;
  font-size: 2.5rem;
  letter-spacing: 0px;
  letter-spacing: 0.05rem;
}

.subtitle {
  text-align: center;
  line-height: 1em;
  font-weight: 100;
  letter-spacing: 0px;
  letter-spacing: 0.02rem;
}

.menu {
  background: #F3CD90;
  width: 100%;
  height: 50px;
}

.window {
  margin-top: 160px;
  z-index: 100;
  color: black;
  font-family: system-ui, -apple-system, BlinkMacSystemFont,'Open Sans', light;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  flex-flow: column;
  box-shadow: 0px 0px 10px 0px rgb(168, 168, 168);
  box-sizing: border-box;
  height: 560px;
  width: 360px;
  background: white;
  border-radius: 30px;
  background: url('https://pexels.imgix.net/photos/27718/pexels-photo-27718.jpg?fit=crop&w=1280&h=823') top left no-repeat;
}

.overlay {
  background-color: white;
  opacity: 0.85;
  filter: alpha(opacity=85);
  height: 560px;
  position: absolute;
  width: 360px;
  z-index: 1;
  border-radius: 20px;
}

.bold-line {
  background: #e7e7e7;
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  width: 100%;
  height: 360px;
  z-index: 1;
  opacity:0.1;
    background: url('https://pexels.imgix.net/photos/27718/pexels-photo-27718.jpg?fit=crop&w=1280&h=823') left no-repeat;
  background-size:cover;
}

@media (max-width: 500px) {
  .window {
    width: 100%;
    height: 100%;
  }
  .overlay {
    width: 100%;
    height: 100%;
  }
}
@keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: #ffb98e;
    overflow: hidden;
}
.background li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 19s linear infinite;
}




.background li:nth-child(0) {
    left: 66%;
    width: 199px;
    height: 199px;
    bottom: -199px;
    animation-delay: 1s;
}
.background li:nth-child(1) {
    left: 4%;
    width: 161px;
    height: 161px;
    bottom: -161px;
    animation-delay: 2s;
}
.background li:nth-child(2) {
    left: 78%;
    width: 157px;
    height: 157px;
    bottom: -157px;
    animation-delay: 8s;
}
.background li:nth-child(3) {
    left: 0%;
    width: 157px;
    height: 157px;
    bottom: -157px;
    animation-delay: 10s;
}
.background li:nth-child(4) {
    left: 72%;
    width: 132px;
    height: 132px;
    bottom: -132px;
    animation-delay: 4s;
}
.background li:nth-child(5) {
    left: 53%;
    width: 128px;
    height: 128px;
    bottom: -128px;
    animation-delay: 22s;
}
.background li:nth-child(6) {
    left: 45%;
    width: 123px;
    height: 123px;
    bottom: -123px;
    animation-delay: 24s;
}
.background li:nth-child(7) {
    left: 82%;
    width: 195px;
    height: 195px;
    bottom: -195px;
    animation-delay: 3s;
}
.background li:nth-child(8) {
    left: 29%;
    width: 105px;
    height: 105px;
    bottom: -105px;
    animation-delay: 19s;
}
.background li:nth-child(9) {
    left: 73%;
    width: 172px;
    height: 172px;
    bottom: -172px;
    animation-delay: 13s;
}
.center {
  margin-left: 93px;
}
</style>