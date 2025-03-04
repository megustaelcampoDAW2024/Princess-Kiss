const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        currentSection: 'tramites'
    },
    methods: {
        greet() {
            alert(this.message);
        },
        showSection(section) {
            this.currentSection = section;
        }
    }
});