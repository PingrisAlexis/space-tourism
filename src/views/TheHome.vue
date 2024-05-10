<template>
  <div class="background"></div>
  <main class="home-container">
      <div class="presentation">
        <p class="title">SO, YOU WANT TO TRAVEL TO</p>
        <h1>SPACE</h1>  
        <p class="details">Let's face it; if you want to go space, you might as well
        genuinely go to outer space and not hover kind of on the  
        edge of it. Well sit back, and relax because we'll give you a
        truly out of this world experience!
        </p>
      </div>
      <div class="circles-container">
        <router-link to="/destination">
        <div class="circle">
            <p>EXPLORE</p>
        </div>
      </router-link>
        <div class="circle-behind"></div>
      </div>
  </main>
</template>

<style scoped lang="scss">
 @import url('@/assets/main.css');
    .background {
      background-image:url('../assets/home/background-home-desktop.jpg') !important;
      @media  (max-width: 1050px) {
        background-image:url('../assets/home/background-home-tablet.jpg') !important;
      }
      @media  (max-width: 550px) {
        background-image:url('../assets/home/background-home-mobile.jpg') !important;
      }
    }
     .home-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      height: 100vh;
      @media  (max-width: 1050px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
     }
        .presentation {
        text-wrap: wrap;
        z-index: 1;
        text-align: center;
        position: relative;
        top: 15rem;
        @media  (max-width: 1050px) {
          top: 6rem;
          padding: 0.5rem;
        }
        @media  (max-width: 550px) {
          top: 6rem;
        }
      .title {
        font-size: 3rem;
        font-weight: 500 !important;
        @media  (max-width: 550px) {
            font-size:2.5rem;
      }
      }
      h1 {
        margin: 2.5rem 0rem;
        font-size: 15rem;
        @media  (max-width: 550px) {
        font-size: 10rem; 
    } 
      }
      .details {
        text-wrap: wrap;
        font-size: 2.6rem;
        font-weight: 100 !important;
        max-width: 47rem;
      }
    }
    .circles-container {
      position: relative;
      top: 15rem;
      width: 240px;
      height: 240px;
      text-align: center;
      cursor: pointer;
      @media  (max-width: 1050px) {
        top: 0rem;
      }
      @media  (max-width: 550px) {
        width: 200px;
        height: 200px;
      }
    }
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 240px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    transition: transform 0.3s ease-in-out;
    @media  (max-width: 550px) {
      width: 200px;
      height: 200px;
     }
    p {
      font-size: 3.5rem;
      color: #0B0D17;
    }
  }
  .circle-behind {
    width: 375px;
    height: 375px;
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
    @media  (max-width: 550px) {
      width: 300px;
      height: 300px;
     }
  }
  .circles-container:hover .circle-behind {
    opacity: 1;
  }
}
</style>