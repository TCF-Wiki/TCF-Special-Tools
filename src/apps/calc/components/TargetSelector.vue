<template>
    <div class="container">
        <button class="" type="button" @click.prevent="isModalOpen = true"> 
            <img :src=" 'calc-images/' + selectedTarget.selected + '.png'  " class="button-image"> 
        </button>
    </div>
    <Teleport to="#modal">
        <Transition name="modal"> 
            <div class="modal__bg" v-if="isModalOpen">
                <section class="modal__content modal__small" ref="modal">  
                    <button @click="isModalOpen = false" class="modal__close-button" aria-label="Close Modal" type="button"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
                    <div class="weapon-container">
                        <div class="target-container">
                            <div 
                            v-for="(target, key) in targetData" 
                            class="target-selector" 
                            :class="{active: (selectedTarget.selected == key)}" 
                            @click="selectedTarget.changeSelected(key)"
                            >
                                <div v-if="Object.keys(creatureNames).includes(key)">
                                    <img :src=" 'calc-images/' + key + '.png' " class="target-image" >  
                                    <span> {{ creatureNames[key] ?? key }} </span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Transition>
    </Teleport>

</template>

<script setup>
import { ref } from 'vue'
/* @ts-ignore */
import { onClickOutside } from '@vueuse/core';

const isModalOpen = ref(false)
const modal = ref(null)
onClickOutside(modal, () => (isModalOpen.value = false))
    
const openModal = () => {
    isModalOpen.value = true

    const body = document.body
    
    body.style.pointerEvents = 'none'

    setTimeout( () => { body.style.pointerEvents = 'all'},600)
}
</script>

<script>
import { targetData } from '../data';
import { selectedTarget } from '../store';
import { creatureNames } from '../utils'
export default {
    name: "WeaponSelector",
    data() {
        return {
            targetData: targetData,
            selectedTarget,
            showTargetModal: false,
            creatureNames: creatureNames
        }
    },
    mounted() {

    },
};
</script>

<style scoped>
.target-image {
    width: 10rem;
    margin: auto;
    transition: all .2s ease-in-out;
}

.target-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr
}


.target-selector {
    margin: .2em;
    text-align: center;
    cursor: pointer;
}

.target-selector:hover .target-image {
    transform: scale(1.05);
}

.container button {
    width: 100%;
    height: 100%;
}

@media screen  and (max-width: 900px){
    .target-image {
        display: none;
    }
    .target-name {
        font-size: .8rem;
    }
    .target-container {
        grid-template-columns: 1fr 1fr
    }
}


</style>