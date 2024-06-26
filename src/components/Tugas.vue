<template>
    <q-page class="q-pa-md">
      <q-list bordered class="q-gutter-md">
        <div class="q-items-row">
          <q-item>
            <q-item-section>
              <q-card class="my-card">
                <img src="../assets/1.png" alt="Tugas 1">
                <div class="absolute-bottom text-h6">
                  <a href="https://tugas1-pbk-223510092.vercel.app/?authuser=0" target="_blank" class="task-link">Tugas 1</a>
                </div>
              </q-card>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-card class="my-card">
                <img src="../assets/2.png" alt="Tugas 2">
                <div class="absolute-bottom text-h6">
                  <a href="https://tugas2-prakpbk-223510092.vercel.app/?authuser=0" target="_blank" class="task-link">Tugas 2</a>
                </div>
              </q-card>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-card class="my-card">
                <img src="../assets/3.png" alt="Tugas 3">
                <div class="absolute-bottom text-h6">
                  <a href="https://tugas3-prakpbk-223510092.vercel.app/?authuser=0" target="_blank" class="task-link">Tugas 3</a>
                </div>
              </q-card>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-card class="my-card">
                <img src="../assets/4.png" alt="Tugas 4">
                <div class="absolute-bottom text-h6">
                  <a href="https://tugas4-prakpbk-223510092.vercel.app/?authuser=0" target="_blank" class="task-link">Tugas 4</a>
                </div>
              </q-card>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-card class="my-card">
                <img src="../assets/5.png" alt="Tugas 5">
                <div class="absolute-bottom text-h6">
                  <a href="https://tugas5-prakpbk-223510092.vercel.app/?authuser=0" target="_blank" class="task-link">Tugas 5</a>
                </div>
              </q-card>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-card class="my-card">
                <img src="../assets/6.png" alt="Tugas 6">
                <div class="absolute-bottom text-h6">
                  <a href="https://tugas6-prakpbk-223510092.vercel.app/?authuser=0" target="_blank" class="task-link">Tugas 6</a>
                </div>
              </q-card>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-card class="my-card">
                <img src="../assets/7.png" alt="Tugas 7">
                <div class="absolute-bottom text-h6">
                  <a href="https://tugas7-prakpbk-223510092.vercel.app/?authuser=0" target="_blank" class="task-link">Tugas 7</a>
                </div>
              </q-card>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'Tugas'
  };
  </script>
  
  <style scoped>
  .my-card {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .my-card img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .task-link {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px;
    text-align: center;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .task-link:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .q-items-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px; 
  }
  
  .q-item {
    flex: 0 1 calc(33.33% - 20px); 
  }
  </style>
  