<template>
  <nav class="navigationWrapper">
    <div class="logoWrapper">
        <img src="../assets/logo.png"/>
    </div>
    <ul class="navigation">
        <li class="parent"><a class="link" href="#">Home</a></li>
        <li class="parent"><a class="link" href="#">About</a></li>
        <li class="parent"><a class="link" href="#">Contact</a></li>
        <a class="link" href="/login"><img class="parent" src="../asset/utilisateur.png"/></a>
    </ul>
  </nav>
</template>
<script>
export default {
    name: "NavBar"
}
</script>
<style scoped>

.navigationWrapper {
    margin-left: -8px;
    margin-top: -8px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: white;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    color: black;
    text-transform: uppercase;
    overflow: hidden;
    width: 1420px;
}
.logoWrapper {
    display: flex;
    height: 45px;
    width: auto;
}
.stylish {
    font-weight: bold;
}

.logo {
    padding-left: 4px;
    color: #ea4f4c;
}

.navigation {
    display: flex;
    list-style-type: none;
    margin-right: 40px;
}

li {
    opacity: 1;
    list-style-type: none;
    color: black;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    font-family: system-ui, -apple-system, BlinkMacSystemFont,'Open Sans', light;
    font-size: 16px;
}
 
.parent {
    padding: 0 10px;
    cursor: pointer;
}
.link {
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: black;
}
.link:hover {
    color: #794b00;
}

.invisible {
  opacity: 0 !important;
  transform: translate(50px, 0);
}
img{
    margin-left: 10px;
}
</style>
