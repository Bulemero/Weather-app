/* VUE OBJECT */

var weatherVueObject = new Vue({
    el: "#app",
    data: {

        url: "https://api.myjson.com/bins/i8run",
        cities: [],
        search: ""
    },
    created() {
        this.getData()
    },

    methods: {
        //------------------------------Fetch data -------------------------------------------------------------->
        getData() {

            fetch('https://api.myjson.com/bins/i8run')
                .then(response => {
                    return response.json();
                }).then(data => {
                    // Work with JSON data here
                    console.log(data);
                    this.cities = data.list;
                    //                this.myVueObject.books = data.books;


                }).catch(err => {
                    // Do something for an error here
                    console.log(error);
                });
        }
    },

    computed: {
        filteredCities: function () {

            return this.cities.filter((item) => item.name.toLowerCase().match(this.search.toLowerCase()));
        }
    },
});
