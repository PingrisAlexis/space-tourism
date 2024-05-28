<template>
      <header>
            <hr>
                  <router-link to="/"  class="custom-router-link">
                        <img class="logo"src="../assets/shared/logo.svg"/>
                  </router-link>
            <nav>
                  <img class="menu-toggle open-menu" @click="toggleMenu" src="@/assets/shared/icon-hamburger.svg" alt="open menu"></img>
                  <ul :class="menuClass">
                  <img  class="menu-toggle close-menu" v-if="isMenuOpen"  @click="toggleMenu" src="@/assets/shared/icon-close.svg" alt="close menu"></img>
                        <li @click="toggleMenu">
                              <router-link to="/" class="hover-border">
                                    <span>&nbsp;00&nbsp;&nbsp;</span>
                                    HOME&nbsp;
                              </router-link>
                        </li>
                        <li @click="toggleMenu">
                              <router-link to="/destination"  class="hover-border">
                                    <span>&nbsp;01&nbsp;&nbsp;</span>
                                    DESTINATION&nbsp;
                              </router-link>
                        </li>
                        <li @click="toggleMenu">
                              <router-link to="/crew" class="hover-border">
                                    <span>&nbsp;02&nbsp;&nbsp;</span>
                                    CREW&nbsp;
                              </router-link>
                        </li>
                        <li @click="toggleMenu">
                              <router-link to="/technology" class="hover-border">
                                    <span>&nbsp;03&nbsp;&nbsp;</span>
                                    TECHNOLOGY&nbsp;
                              </router-link>
                        </li>
                  </ul>
            </nav>         
      </header>
</template>

<script setup lang="ts">
      import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

      const isMenuOpen = ref<boolean>(false)
      const isClosing = ref<boolean>(false)
      const width = ref<number>(window.innerWidth)
      const breakpoint = 800;

      const isMobile = (): boolean => {
            return width.value <= breakpoint
      }

      const handleResize = () => {
            width.value = window.innerWidth
            if (isMobile()) {
            isMenuOpen.value = false
            } else {
            isMenuOpen.value = true
            }
      }

      const menuClass = computed<string>(() => {
            if (isClosing.value) {
            return 'menu-disappear'
            } else if (isMenuOpen.value) {
            return 'menu-appear'
            } else {
            return ''
            }
      })

      const toggleMenu = (): void => {
            if (isMobile()) {
                  if (isMenuOpen.value) {
                        isClosing.value = true
                  setTimeout(() => {
                        isMenuOpen.value = false
                        isClosing.value = false
                  }, 800)
                  } else {
                        isMenuOpen.value = true
                        isClosing.value = false
                  }
            }
      }
      
      onMounted(() => {
            window.addEventListener('resize', handleResize)
            handleResize()
      })

      onUnmounted(() => {
            window.removeEventListener('resize', handleResize)
      })

      watch(width, (newWidth: number) => {
            if (newWidth <= breakpoint) {
            isMenuOpen.value = false
            } else {
            isMenuOpen.value = true
            }
      })
</script>

<style scoped lang="scss">
      @import url('@/assets/main.css');
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
                  @media  (max-width: 1050px) {
                        left: 5rem;
                  }
            }  
            ul {
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
                        height: 8rem;
                  }
                  @media  (max-width: 800px) {
                        padding-top: 10rem;
                        display: none;
                        flex-direction: column;
                        justify-content: center !important;
                        align-items: space-around !important;
                        width: 25rem;
                        height: 100vh;
                  }
                  li {  
                        @media  (max-width: 800px) {
                              padding: 1rem 0rem;
                        }
                        .hover-border::before {
                              bottom: -1.4rem;
                        }
                        a {
                              font-size: 2.5rem;
                              font-weight: 100;
                              height: 6rem;
                                    @media  (max-width: 1050px) {
                                    font-size: 2rem;
                              }
                              span {
                                    font-weight: 600;
                                    @media (min-width:800px) and  (max-width: 1050px) {
                                          display: none;
                                    }
                              }     
                        }   
                  }
            }
      }
      .menu-toggle {
            display: none;
            width:2.5rem;
            @media  (max-width: 800px) {
                  display: block;
                  right: 12rem;
                  cursor: pointer;
                  z-index: 2;
            }
      }
      .open-menu {
            position: absolute;
            z-index: 0;
      }
      .close-menu {
            position: fixed;
      }
      .open-menu,
      .close-menu {
            top: 2.5rem;
            right: 5rem;
            width: 3rem;
      }
      .menu-appear,
      .menu-disappear {
            @media  (max-width: 800px) {  
                  display: block;
                  position: fixed;
                  top: 0;
                  right: 0;
                  width: 25rem;
                  height: 100%;
            }  
      }  
      .menu-appear {
            @media  (max-width: 800px) {
                  animation: menu_appear .8s forwards;
            }
      }
      .menu-disappear {
            @media  (max-width: 800px) {
                  animation: menu_disappear .8s forwards;
            }
      }
      ul:not(.menu-appear):not(.menu-disappear) {
  display: none;
}
      @keyframes menu_appear {
      from {
      transform: translateX(100%);
      } to {
      transform: translateX(0%);
      }}
      @keyframes menu_disappear {
      from {
      transform: translateX(0%);
      }to {
      transform: translateX(100%);
      }}
</style>
