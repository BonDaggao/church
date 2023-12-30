<template>
    <div>
      <h2>ABOUT</h2>
    </div>
  
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
  
    <!-- Vision and Mission Section -->
    <div class="vision-mission-container">
      <div class="vision-mission-item">
        <h4 style="text-align: left;">Vision:</h4>
        <p style="text-align: justify; color: white;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Fusce id velit ut tortor pretium. Commodo sed egestas egestas fringilla phasellus. Netus et malesuada fames ac turpis egestas maecenas.
             Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Arcu ac tortor dignissim convallis aenean et tortor. 
             Varius sit amet mattis vulputate enim nulla aliquet porttitor. Dictum at tempor commodo ullamcorper a lacus. 
             Libero volutpat sed cras ornare. Netus et malesuada fames ac turpis egestas maecenas. Tincidunt nunc pulvinar sapien et ligula.
              Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Diam maecenas ultricies mi eget mauris. 
              Sed elementum tempus egestas sed sed. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. 
              Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Auctor elit sed vulputate mi sit amet. 
              Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Curabitur gravida arcu ac tortor dignissim convallis aenean.</p>
      </div>
  
      <div class="vision-mission-item">
        <h4 style="text-align: left;">Mission:</h4>
        <p style="text-align: justify; color: white;">Empowering individuals through spiritual guidance and community service.</p>
      </div>
    </div>
    <!-- End of Vision and Mission Section -->
</template>
  
<script>
export default {
  // Add any component options if needed
};
</script>
  
<style scoped>
/* Add your styles here */

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
  align-items: center;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

h2 {
  margin: auto;
  margin-top: 30px;
  text-align: center;
  color: #ffaa2b;
}

.vision-mission-container {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 20px;
  color: #ffaa2b;
}

.vision-mission-item {
  flex: 1;
  border-radius: 5px;
  padding: 15px;
}

.vision-mission-item h4, .vision-mission-item p {
  margin: 0;
}

.vision-mission-item p {
  text-align: justify; /* Justify the text */
}

.vision-mission-item:nth-child(1) {
  text-align: left;
}

.vision-mission-item:nth-child(2) {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.vision-mission-item:nth-child(2) p {
  text-align: justify; /* This ensures the text within the Mission starts from the left */
}
</style>
