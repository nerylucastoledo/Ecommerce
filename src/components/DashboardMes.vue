<template>
    <div>
        <slot></slot>
        <div id="chart">
            <apexchart type="bar" height="200" :options="chartOptions" :series="seriesMes"></apexchart>
        </div>

    </div>
</template>

<script>
export default {
    
    props: [
        'seriesMes'
    ],

    data() {
        return {
            chartOptions: {
                chart: {
                type: 'bar',
                stacked: true,
                stackType: '100%'
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: ['Mês'],
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "x"
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
            },
        }
    }
}
</script>