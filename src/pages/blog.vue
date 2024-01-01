<template>
    <div id="app">
      <h2>Upcoming BEC Days</h2>
      <div class="events-grid">
        <div 
          v-for="event in events" 
          :key="event.title"
          class="event-card"
          @click="selectEvent(event)"
        >
          <img :src="event.image" :alt="event.title">
          <h3>{{ event.title }}</h3>
          <p>{{ event.date }}</p>
        </div>
      </div>
      
      <!-- Detailed View -->
      <div v-if="selectedEvent" class="detailed-view">
        <img :src="selectedEvent.image" :alt="selectedEvent.title">
        <h3>{{ selectedEvent.title }}</h3>
        <p>Description or any additional details can go here.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        events: [
        {
             title: "Sama Samang Kasalan sa Simbahan",
             date: "April 22, 2023",
             image: "/img/logo.png"
           },
           {
             title: "Flores De Maria",
             date: "May 27, 2023",
             image: "https://via.placeholder.com/150"
           },
           {
             title: "THE VOICE 2023",
             date: "April 21, 2023",
             image: "https://via.placeholder.com/150"
           },
           {
             title: "GINANG NG DAMBANA",
             date: "April 23, 2023",
             image: "https://via.placeholder.com/150"
           },
           {
             title: "Libre Tuli",
             date: "April 17, 2023",
             image: "https://via.placeholder.com/150"
           },
           {
             title: "BEC DAY",
             date: "June 4, 2023",
             image: "https://via.placeholder.com/150"
           }
        ],
        selectedEvent: null // To store the selected event
      };
    },
    methods: {
      selectEvent(event) {
        this.selectedEvent = event;
      }
    }
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  h2 {
    margin-bottom: 20px;
    color: #ffaa2b;
  }
  
  /* Ensure only the event titles have a specific color */
  .event-card h3 {
    color: black;
  }
  
  .events-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    justify-content: center;
  }
  
  .event-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  
  /* Hover effect for event cards */
  .event-card:hover {
    background-color: #f7f7f7;
  }
  
  .detailed-view {
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    margin-top: 20px;
    border-radius: 4px;
  }
  </style>
  