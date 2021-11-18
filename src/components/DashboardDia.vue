<template>
    <div>
        <slot></slot>
        <div id="chart">
            <apexchart type="bar" height="200" :options="chartOptions" :series="seriesDia"></apexchart>
        </div>

    </div>
</template>

<script>
export default {
    
    props: [
        'seriesDia'
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
                    categories: ['Hoje'],
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