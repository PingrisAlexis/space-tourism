<template>
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

  .home-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding:2rem 2rem 5rem 2rem;
    @media (max-width: 1050px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 550px) {
      padding:2rem;
    }
    .presentation {
      text-wrap: wrap;
      z-index: 1;
      text-align: center;
      position: relative;
      top: 15rem;
      @media (max-width: 1050px) {
        top: 6rem;
        padding: 0.5rem;
      }  
      .title {
        font-size: 3.5rem;
        font-weight: 200 !important;
        text-align: left;
        color: var(--color-sec);
        font-weight: 300;
        letter-spacing: 2px;
        @media (max-width: 1050px) {
          font-size:2.5rem;
          text-align: center;
        }
      }
      h1 {
        margin: 2.5rem 0rem;
        font-size: 15rem;
        @media (max-width: 1050px) {
          font-size: 10rem; 
        } 
      }
      .details {
        text-wrap: wrap;
        font-size: 2.3rem;
        font-weight: 100 !important;
        max-width: 47rem;
        text-align: left;
        color: var(--color-sec);
        @media (max-width: 1050px) {
          text-align: center;
        }
      }
    }
    .circles-container {
      position: relative;
      top: 15rem;
      text-align: center;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      z-index: 0;
      @media (max-width: 1050px) {
        width: 180px;
        height: 180px;
        top: 10rem;
      }
      @media (max-width: 550px) {
        width: 150px;
        height: 150px;
        top: 7rem;
      }
    }
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-first);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    width: 100%;
    height: 100%;
    p {
      font-size: 3.5rem;
      color: #0B0D17;
      @media (max-width: 550px) {
        font-size: 2.5rem;
      }
    }
  }
  .circle-behind {
    display: block;
    width: 400px;
    height: 400px;
    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
    @media (max-width: 1050px) {
      width: 0px;
      height: 0px;
    }
  }
    .circles-container:hover:not(:hover .circle) .circle-behind {
      animation: radar-wave 1.8s ease-out infinite;
      opacity: 1;
    }
    .circles-container:not( .circle) .circle-behind {
      @media (max-width: 1050px) {
        animation: radar-wave 1.8s ease-out infinite;
        opacity: 1;
      }
    }
  }
  @keyframes radar-wave {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.3);
      opacity: 0;
    }
  }
</style>