<template>
  <div>
    <body>
      <div class="menu">
        <main>
          <div class="logo-container">
            <img src="/5Logo.png" alt="Logo" class="logo" />
          </div>
          <div class="info">
            <h1>CAMPER CAFE</h1>
            <p>Est. 2020</p>
            <section>
              <h2>Coffee</h2>
            </section>
          </div>
        </main>
      </div>
    </body>
    <p>Welcome to our website!</p>
  </div>
</template>

<style>
 .menu {
  text-align: center;
  border-radius: 25px;
  height: 20em;
  width: 90%;
  background-color: #ffaa2b;
  margin: auto;
  margin-top: 30px;
}

.logo-container {
  margin-bottom: 20px; /* Adjust the margin as needed */
}

.logo {
  width: 100px; /* Set the width of your logo */
  height: auto; /* Maintain aspect ratio */
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  text-align: center;
}
</style>
