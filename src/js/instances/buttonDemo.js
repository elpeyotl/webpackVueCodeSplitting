
if(document.getElementById('demo')) {
    async function getComponent() {
        const { default: Vue } = await import(/* webpackChunkName: "vue" */ 'vue');
        const { default: Button } = await import(/* webpackChunkName: "button" */ '../components/button.vue');
        new Vue({
            el: '#demo',
            render: h => h(Button),
        });
    }
    getComponent();
}
