<script>
import Selector from "./components/Selector.vue";
import WeaponComparer from "./components/WeaponComparer.vue";
import {penetrationChart, falloffChart} from "./charts";
import AccuracySelector from "./components/AccuracySelector.vue";
import DistanceSelector from "./components/DistanceSelector.vue";

import {doneLoading} from "../../all";

export default {
    components: {
        Selector,
        WeaponComparer,
        AccuracySelector,
        DistanceSelector,
    },
    mounted() {
        // clear out the url bar
        window.history.pushState({}, document.title, location.pathname.replace(".html", ""));
        penetrationChart();
        falloffChart();
        //done loading
        doneLoading();
    },
};
</script>

<template>
    <section>
        <section>
            <div class="header">
                <h1>Weapon Calculator</h1>
            </div>
            <div class="main-container">
                <Selector />
                <WeaponComparer />
            </div>
        </section>
        <section>
            <div class="header">
                <header><h1>Charts</h1></header>
                <p>The following charts show the detailed stats above in a visual way. More charts will be added in the future.</p>
            </div>
            <div class="outer-chart-container">
                <div class="chart-container">
                    <h2>Penetration Chart</h2>
                    <div class="inner-chart-container">
                        <div id="penChart">CHART HERE!</div>
                    </div>
                </div>

                <div class="chart-container">
                    <h2>Falloff Chart</h2>
                    <div class="inner-chart-container">
                        <div id="falloffChart">Chart HERE!</div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 2rem 0rem;
}

@media screen and (max-width: 900px) {
    section {
        margin-left: 0;
    }
}

h1 {
    font-size: 3rem;
    padding-left: 0;
}

.outer-chart-container {
    display: flex;
    flex-direction: row;
    gap: var(--space-md);
    flex-wrap: wrap;
}

.chart-container {
    position: relative;
    width: 30rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding-left: var(--space-md);
}

.header {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding-left: var(--space-md);
}

.selectors {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    flex-wrap: wrap;
}

.inner-selector-container {
    display: flex;
    flex-direction: row;
    gap: md;
    flex-wrap: wrap;
    padding-left: var(--space-xl);
}

.main-container {
    display: flex;
    max-width: 100vw;
}

@media screen and (max-width: 900px) {
    .main-container {
        flex-direction: column;
    }
}
</style>
