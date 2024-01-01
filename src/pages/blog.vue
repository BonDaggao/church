<template>
    <div id="app">
       <h2>Upcoming BEC Days</h2>
       <div class="events-grid">
         <div class="event-card" v-for="event in events" :key="event.title">
           <img :src="event.image" :alt="event.title">
           <h3>{{ event.title }}</h3>
           <p>{{ event.date }}</p>
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
         ]
       };
    }
   };
   </script>
   
   <style>

    h2 {
    margin: auto;
    margin-top: 30px;
    text-align: center;
    color: #ffaa2b;
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
    margin-bottom: 50px; /* add this line */
    margin-top: 50px;
   }
   </style>