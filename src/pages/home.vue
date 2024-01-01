<template>
  <div class="menu">
    <main>
      <div class="logo-info-container">
        <!-- Logo placed beside the name -->
        <q-img 
          src="/img/logo.png" 
          lazy-src="/img/logo.png"
          height="255px"  
          style="max-width: 290px; margin-right: 20px; border-radius: 50%;"
        />
        <div class="info">
          <h3>SHRINE OF THE FIVE WOUNDS OF OUR LORD JESUS CHRIST</h3>
          <h4>364 Real Street, Talon I, Las Pinas, 1747 Metro Manila</h4>
        </div>
      </div>
    </main>
  </div>
  <div class="p">
    <p>Welcome to our website!</p>
  </div>
</template>

<style>
.menu {
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  border-radius: 25px;
  height: 20em;
  width: 90%;
  background-color: #ffaa2b;
  margin: auto;
  margin-top: 30px;
}

.logo-info-container {
  display: flex;
  align-items: center; /* Align items vertically center */
}

.logo {
  max-width: 150px; /* Set the maximum width of your logo */
  height: auto; /* Maintain aspect ratio */
}

.info {
  display: flex;
  flex-direction: column;
  align-items:  flex-start; /* Align content to the start (left) */
  justify-content: center; /* Center content vertically */
  display: inline;
  color: black;
  
}

.p {
  text-align: center;
  color: black;
}
</style>
