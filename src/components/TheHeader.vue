<template>
      <header>
            <hr>
                  <router-link to="/"  class="custom-router-link">
                        <img class="logo"src="../assets/shared/logo.svg"/>

                              </router-link>
            <div class="menu-toggle" @click="toggleMenu">
                  <img  v-if="!isMenuOpen" src="@/assets/shared/icon-hamburger.svg"></img>
                  <img  v-else src="@/assets/shared/icon-close.svg"></img>
            </div>
            <nav>
                  <ul :class="{ 'open': isMenuOpen }">
                        <li>
                              <router-link to="/">
                                    <span>00</span>&nbsp;&nbsp;HOME&nbsp;&nbsp;&nbsp;
                              </router-link>
                        </li>
                        <li>
                              <router-link to="/destination">
                                    <span>01</span>
                                    &nbsp;&nbsp;DESTINATION&nbsp;&nbsp;&nbsp;
                              </router-link>
                        </li>
                        <li>
                              <router-link to="/crew">
                                    <span>02</span>
                                    &nbsp;&nbsp;CREW&nbsp;&nbsp;&nbsp;
                              </router-link>
                        </li>
                        <li>
                              <router-link to="/technologie">
                                    <span>03</span>
                                    &nbsp;&nbsp;TECHNOLOGY&nbsp;&nbsp;&nbsp;
                              </router-link>
                        </li>
                  </ul>
            </nav>         
      </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
}

</script>

<style scoped lang="scss">
      @import url('@/assets/main.css');
      .menu-toggle {
            display: none;
            @media  (max-width: 800px) {
                  display: block;
                  position: absolute;
                  right: 12rem;
                  cursor: pointer;
                  z-index: 2;
            }
            img {
                  width:5rem;
                  position: relative;
                  top: 1.5rem;
                  left: 8rem;
            }
      }
      .open {
            @media  (max-width: 800px) {
                  display: block;
            }
      }
      .router-link-exact-active {
            border-bottom: 0.3rem solid white ;
            padding-bottom: 2.7rem;
            @media  (max-width: 1050px) {
                  padding-bottom: 1.6rem;
            }
      }
      header {
            display: flex;
            background-color: transparent;
            position: relative;
            z-index: 3;
            @media  (min-width: 1301px) {
                  top: 2rem;
            }
            hr {
                  position: absolute;
                  z-index: 1;
                  top: 4.4rem;
                  left: 20rem;
                  right: 54%;
                  @media  (max-width: 1050px) {
                        display: none;
                  }
            }
            .logo {
                  justify-content: flex-start;
                  width: 6rem;
                  position: relative;
                  top: 1.8rem;
                  left: 8rem;
                  @media  (max-width: 1050px) {
                        width: 5rem;
                        top: 1.5rem
                  }
            }
            .custom-router-link.router-link-exact-active {
                  border-bottom: none !important;
                  padding-bottom: none !important;
            }
            ul {
                  justify-content: flex-end;
                  display: flex;
                  backdrop-filter: blur(25px);
                  background-color: rgba(255, 255, 255, 0.08);
                  justify-content: space-around;
                  align-items: center;
                  height: 9rem;
                  width: 55%;
                  position: absolute;
                  right: 0;
                  padding-right: 15rem;
                  @media  (max-width: 1300px) {
                        padding-right: 0rem;

                        }
                  @media  (max-width: 1050px) {
                        padding-right: 0rem;
                        height: 8rem;

                        }
                  @media  (max-width: 800px) {
                        padding-top: 10rem;
                        display: none;
                        flex-direction: column;
                        justify-content: center !important;
                        align-items: space-around !important;
                        width: 37rem;
                        height: 100vh;
                  }
                  li {
                        text-decoration: none;
                        
                        // @media  (max-width: 800px) {
                        //       margin: 2rem 0rem ;
                        //       height: 8rem;
                        // }
                        :hover {
                              border-bottom: 0.3rem solid var(--color-hover);
                              padding-bottom: 2.7rem;
                              @media  (max-width: 1050px) {
                                    padding-bottom: 1.6rem;
                              } 
                        }
                        span {
                              font-weight: 600;
                              @media (min-width:800px) and  (max-width: 1050px) {
                                    display: none;
                              }
                        }
                        a {
                              font-size: 2.5rem;
                              font-weight: 100;
                               height: 6rem;
                               @media  (max-width: 1050px) {
                                    font-size: 2rem;
                        }
                        }
                  }
            }
      }
</style>
