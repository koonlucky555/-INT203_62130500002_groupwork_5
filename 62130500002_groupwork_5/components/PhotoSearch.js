

app.component('use-search', {
    props: {
        formSearch: Object,
        text: String
    },
    emits: ['update:text'],
    template:
        /*html*/
        `
    <div class="flex justify-end -mt-24">
    <span :class="{'hidden' : formSearch.search} "><i class="fas fa-search " @click="search"></i></span>
    <span :class="{'hidden' : !formSearch.search}">
        <input class="px-2 border-2 border-black mx-2 "
            placeholder="Please enter text for searching photos" :value="text" @input="$emit('update:text',$event.target.value)">
        <button class="mx-2 rouned text-white px-4 py-2 bg-red-500" @click="search">Cancel</button>
    </span>
    </div>
    `,

    methods: {
        search() {
           this.$emit("doSearch")
        },
    }
});