app.component('photo-view', {
    props: {
        modals: Object
    },
    template:
        /*html*/
        `
        <div v-if="modals.modalState" class="flex items-center animated fadeIn fixed z-50  overflow-auto inset-0 bg-white bg-opacity-30">
             <div class="animated fixed  max-w-md md:relative  m-auto justify-end w-full  flex flex-col ">
                <button @click="switchModal" class="focus:outline-none"><span class="close ">&times;</span></button>
                <img class="my-auto" :src="modals.imageModal"  alt="">
            </div>
        </div>
    `,
   
    methods: {
        switchModal() {
            this.$emit("when-click");
        },
    }
});