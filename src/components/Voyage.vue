<template>
  <div id="display">
    <div id="fond2">
        <img src="../assets/Fond.jpeg" id="nevada">
        <p class="pays">ETATS-UNIS</p>
        <div class="display2">
            <p class="one">10 - 20 Juillet</p>
            <p class="two">2 pers.</p>
        </div>    
        <p id="prix">5 000 €</p>
    </div>
    <div id="fond2">
        <img src="../assets/Fond.png" id="nevada">
        <p class="pays">ITALIE</p>
        <div class="display2">
            <p class="one">14 - 18 octobre</p>
            <p class="two">4 pers.</p>
        </div>    
        <p id="prix"> 2 500 €</p>
    </div>
    <div id="fond2">
        <img src="../assets/Fond2.png" id="nevada">
        <p class="pays">THAÏLANDE</p>
        <div class="display2">
            <p class="one">01 - 15 Août</p>
            <p class="two">2 pers.</p>
        </div>    
        <p id="prix">6 200 €</p>
    </div>
  </div>
</template>
<script>
export default {
    name: "Voyage"
}
</script>
<style scoped>
#fond2{
    margin: 20px;
    height: 350px;
    width: 300px;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.25);
    background-color: white;
    border-radius: 20px;
    border: 1px rgb(163, 163, 163) solid;
}
#nevada {
    height: 185px;
    width: auto;
    margin-left: 12px;
    margin-top: 10px;
    border-radius: 10px;
}
p{
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont,'Open Sans', light;
    font-size: 20px;
}
#display{
    display: flex;
}
.pays{
    text-transform: uppercase;
    font-weight: bolder;
    margin-top: 2px;
}
.display2{
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    margin-top: -25px;
    margin-bottom: -15px;
}
.one {
  grid-column: 1 / 2;
  grid-row: 1/1;
  margin-left: 2px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-right: 1px solid grey;
}
.two {
  grid-column: 2 / 2;
  grid-row: 1/1;
  padding-top: 10px;
  padding-bottom: 10px;
}
#prix{
    background-color: #FBA571;
    margin-top: 9px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 0px 0px 19px 19px;
    font-weight: bolder;
    color: white;
}
</style>