<template>
    <div class="one-destination-container">
            <img v-bind:src="destination.image" v-bind:alt="destination.name">
        <section class="details-container">
            <h2>{{ destination.name }}</h2>
            <p class="description">{{ destination.description }}</p>
            <hr>
            <div class="information">
                
               <div>
                    <p class="travel-title">AVG. DISTANCE</p>
                    <p class="travel-value">{{ destination.distance }}</p>
                </div>
                <div>
                    <p class="travel-title">EST. TRAVEL TIME</p>
                    <p class="travel-value">{{ destination.travel }}</p>
                </div>  
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
  import { Destination } from '../types'

  const { destination } = defineProps<{ destination: Destination }>()
</script>

<style scoped lang="scss">
    @import url('@/assets/main.scss');
    .one-destination-container {
        display: flex;
        z-index: 1;
        width: 100vw;
        position: relative;
        top: 15rem;
        justify-content: center;
        @media (max-width: 1150px) {
            flex-direction: column;
            align-items: center;
            top: 7rem;
        }
        img {
            position: relative;
            right: 12rem;
            bottom: 5rem;
            @media (max-width: 1150px) {
                right: 0;
                width: 30rem;
                bottom: 8rem;
            }
            @media (max-width: 800px) {
                width: 25rem;
            }
        }
        .details-container {
            position: relative;
            left: 11rem;
            width: 40rem;
            @media (max-width: 1150px) {
                font-size: 5rem;
                left: 0rem;
            }
            @media (max-width: 800px) {
                width: 35rem;
            }
    
            h2 {
                padding: 1rem 0rem;
                position: relative;
                right: 1rem;
                font-size: 10rem;
                text-transform: uppercase;
                @media (max-width: 1150px) {
                    font-size: 5rem;
                    text-align: center;
                    right: 0;
                }
            } 
            .description {
                font-size: 2.3rem;
                font-weight: 100;
                color: var(--color-sec);
                @media (max-width: 1150px) {
                    font-size: 2rem;
                    text-align: center;
                }
            }
            hr {
                position: relative;
                top: 3rem;
                border: 1px solid #464850;
                width: 100%;                
            }
            .information {
                display: flex;
                justify-content: space-between;
                padding-top: 5rem;
                
                .distance-title,
                .travel-title {
                    font-size: 2rem;
                    font-weight: 100;
                    color: var(--color-sec);
                    @media (max-width: 1150px) {
                        font-size: 1.6rem;
                    }
                }
                .distance-value,
                .travel-value {
                    font-size: 3rem;
                    color: var(--color-first);
                    font-weight: 400;
                    padding: 0 0 2rem 0;
                     @media (max-width: 1150px) {
                        font-size: 2rem;
                    }
                }
                p {
                    text-align: center;
                    text-transform: uppercase;
                }
            }
        }
    }
</style>