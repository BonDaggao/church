<template>
    <div id="app">
      <h2>Upcoming BEC Days</h2>
  
      <!-- Show the events grid if no event is selected -->
      <div v-if="!selectedEvent" class="events-grid">
        <div 
          v-for="event in events" 
          :key="event.title"
          class="event-card"
          @click="selectEvent(event)"
        >
          <img :src="event.image" :alt="event.title">
          <h4>{{ event.title }}</h4>
          <p>{{ event.date }}</p>
        </div>
      </div>
      
      <!-- Detailed View -->
      <div v-if="selectedEvent" class="detailed-view">
        <!-- Back button with the icon and text "GO BACK" -->
        <button @click="selectedEvent = null" class="back-button">
          <q-icon name="arrow_back" color="#ffaa2b"></q-icon> GO BACK
        </button>
        
        <!-- Displaying the selected event's details -->
        <div class="detailed-content">
          <h3>{{ selectedEvent.title }}</h3>
          <div class="content-wrapper">
            <img :src="selectedEvent.image" :alt="selectedEvent.title" class="event-image">
            <p class="description">{{ selectedEvent.description }}</p> <!-- Added class "description" here -->
          </div>
        </div>
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
            image: "/img/logo.png",
            description: "This is the description for Sama Samang Kasalan sa Simbahan."
          },
          {
            title: "Flores De Maria",
            date: "May 27, 2023",
            image: "/img/floresdemaria.png",
            description: "This is the description for Flores De Maria."
          },
          {
            title: "THE VOICE 2023",
            date: "April 21, 2023",
            image: "https://via.placeholder.com/150",
            description: "This is the description for THE VOICE 2023."
          },
          {
            title: "GINANG NG DAMBANA",
            date: "April 23, 2023",
            image: "https://via.placeholder.com/150",
            description: "This is the description for GINANG NG DAMBANA."
          },
          {
            title: "Libre Tuli",
            date: "April 17, 2023",
            image: "https://via.placeholder.com/150",
            description: "This is the description for Libre Tuli."
          },
          {
            title: "BEC DAY",
            date: "June 4, 2023",
            image: "https://via.placeholder.com/150",
            description: "This is the description for BEC DAY."
          }
        ],
        selectedEvent: null
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
    color: #ffaa2b;
    margin-top: 30px;
  }
  
  h2 {
    margin-bottom: 30px;
    color: #ffaa2b;
  }
  
  .events-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    justify-content: center;
    
  }
  
  .event-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    /* margin-top: PX; */
    margin-bottom: 50PX;
  }
  
  .event-card img {
    width: 400px;
    height: 250px;
    object-fit: cover;
  }
  
  .event-card:hover {
    background-color: #760e0e;
  }
  
  .detailed-view {
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    margin-top: 20px;
    border-radius: 4px;
    position: relative;
  }
  
  .back-button {
    color: #ffaa2b;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  .detailed-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .event-image {
    width: 200px;
    height: 150px;
    margin-right: 20px;
  }
  
  @media (max-width: 768px) {
    .content-wrapper {
      flex-direction: column;
    }
  
    .event-image {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
  </style>
  