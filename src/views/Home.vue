<template>
    <div>
        <NavBar />
    </div>
    <video id="fond" autoplay loop muted>
    <source src="../assets/forêt.mp4" type="video/mp4" />
    </video>
    <!-- <img src="../assets/Fond.jpeg" id="fond"> -->
    <div id="block1">
        <p id="Main_title">Explorez le monde</p>
        <p id="sub">Votre voyage sur-mesure en</p>
        <p id="sub">quelques minutes</p>
    </div>
    <div>
        <div class="filtre">
            <h2>Votre voyage :</h2>
            <input id="search" type="search" placeholder="Pays de départ...">
            <input id="search" type="search" placeholder="Pays d'arrivée...">
            <input id="search" type="search" placeholder="Nombre de voyageurs">
            <input id="search" type="search" placeholder="Votre budget €">
            <img src="../assets/loupe.png" id="search2">
        </div>   
    </div>
    <div id="corps">
        <Voyage />
        <Voyage />
        <Voyage />
    </div>
    <div>
        <Footer />
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Voyage from '../components/Voyage.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "Home",
    components: {
        NavBar,
        Voyage,
        Footer
    }
}
</script>
<style scoped>

#fond {
    width: 100%;
    height: auto;
    z-index: -5;
    position: absolute;
    margin-left: -8px;
    margin-top: -65px;
}
#Main_title {
    padding-top: 200px;
    text-align: center;
    color: white;
    font-size: 75px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont,'Open Sans', light;
    margin: 0%;
    
}
#sub {
    margin: 0px;
    text-align: center;
    color: white;
    font-size: 28px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont,'Open Sans', light;
}
#block1 {
    margin-left: -8px;
    width: 1440px;
    height: 650px;
    background-color: rgb(255, 255, 255, 0.1);
    text-shadow: rgb(22, 21, 21) 1px 0 10px;
}
.filtre{
    margin-top: -70px;
    margin-left: -8px;
    padding-left: 170px;
    display: flex;
    box-shadow: 0 -5px 15px 0 rgba(0, 0, 0, 0.25);
    width: 1270px;
    background-color: white;
}

#search{
    margin-top: 40px;
    margin-bottom: 30px;
    margin-left: 10px;
    font-size: 14px;
    border: 0ch;
    border-left: 1px solid grey;
    outline: none;
    padding: 10px;
    width: 200px;
    text-align: center;
    font-family:system-ui, -apple-system, BlinkMacSystemFont,'Open Sans', light;
}
h2{
    margin-right: 60px;
    margin-top: 40px;
    text-align: center;
    color: #FBA571;
    font-size: 25px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont,'Open Sans', light;
}
#corps{
    margin-left: 370px;
    padding-left: 20px;
    padding-right: 20px;
    /* background-color: #f6ae81; */
    /* position: absolute; */
}
#search2{
    height: 23px;
    width: auto;
    margin-top: 42px;
    margin-bottom: 30px;
    border: 1px solid grey;
    padding: 10px;
    border-radius: 45%;
    cursor: pointer;
}
</style>