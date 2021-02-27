

app.component('photo-items', {
    props: {
        pic: Object,
    },
    template:
        /*html*/
        `    
        <div class="bg-white rounded mx-auto max-w-xs rounded overflow-hidden shadow-lg my-3">
            <button id="myBtn"><img v-on:click="toggleModal(pic)" class="rounded-t-lg" :src="pic.images"></button>
                <div class="p-6">
                    <h2 class="my-2 text-2xl font-bold text-black uppercase"> {{pic.title}} &nbsp
                         <i v-show="!pic.heart "
                    class="far fa-x fa-heart text-black hover:text-red-600 transition duration-500 "
                    @click="like(pic)"></i>
                        <i v-show="pic.heart " class="fas fa-x fa-heart text-red-500 transition duration-500 "
                    @click="like(pic)"></i>
                    </h2>
                    <p class="mb-2 text-gray-500"> {{pic.text}}</p>
                </div>
        </div>        
    `,
   
    methods: {
        like(task) {
            this.$emit("when-like", task)
        },
        toggleModal(pic) {
            this.$emit("when-photo", pic);
        },
    }
});