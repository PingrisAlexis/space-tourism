<template>
    <div class="one-member-container"> 
        <div class="image-container">
            <img :src="member.image" :alt="member.name">
            <hr>
        </div>
      <section  class="details-container">
        <p class="description">{{ member.role }}</p>
        <h2 class="description">{{ member.name }}</h2>
        <p class="description">{{ member.bio }}</p>
      </section>
    </div>
</template>

<script setup lang="ts">
  import { Member } from '../types'
  
  const { member } = defineProps<{ member: Member }>()
</script>

<style scoped lang="scss">
    @import url('@/assets/main.css');

    .one-member-container {
        display: flex;
        flex-direction: row-reverse;
        z-index: 0;
        height: 100%;
        width: 100%;
        position: relative;
        top: 3rem;
        justify-content: space-between;
        align-items: center;
        padding: 0rem 20rem;
        @media (max-width: 1150px) {
            width: 100vw;
            left: 0;
            flex-direction: column-reverse;
            padding: 0rem;
            top: 0;
        }
        @media (max-width: 800px) {
            top: 13rem;
            position: absolute;
            flex-direction: column;
            padding: 0;
            height: auto;
        }
        .image-container {
            align-self: flex-end;
            max-height: 65rem;
            position: relative;
            @media (max-width: 1150px) {
                width: auto;
                align-self: center;
                max-height: 40rem;
            }
            @media (max-width: 800px) {
                height: 30rem;
                top: 5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            img {
                width: 100%;
                height: auto;
                @media (max-width: 1150px) {
                    width: auto;
                    height: 100%;
                }
            }
            hr {
                display: none;
                border: 1px solid #464850;
                width: 40rem;
                @media (max-width: 800px) {
                    display: block;
                }
                @media (max-width: 500px) {
                    width: 80vw;
                }
            }
       
        }
        .details-container {
            display: flex;
            flex-direction: column;
            align-self: center;
            width: 45rem;
            @media (max-width: 1150px) {
                position: relative;
                top: 15rem;
                width: 57rem;
            }
            @media (max-width: 800px) {
                width: 90%;
            }
            :first-child {
                text-transform: uppercase;
                color: #929397;
                font-size: 3.3rem;
                @media (max-width: 1150px) {
                    text-align: center;
                }
                @media (max-width: 800px) {
                    font-size: 2.5rem;
                }
            }
            :nth-child(3) {
                height: 14rem;
            }
            h2 {
                font-size: 10rem;
                text-wrap: nowrap;
                padding: 2rem 0rem;
                display: block;
                @media (max-width: 1500px) {
                    font-size: 7rem;
                }
                @media (max-width: 1150px) {
                    font-size: 5rem;
                    text-align: center;
                }
                @media (max-width: 500px) {
                    font-size: 4rem;
                }
            }
            p {
                text-wrap: wrap;
                font-size: 2.3rem;
                font-weight: 100 !important;
                color: var(--color-sec);
                @media (max-width: 1150px) {
                    font-size: 2rem;
                    text-align: center;
                }
            }
        } 
    }
</style>