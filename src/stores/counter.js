import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 2,
        title: "Counter Store",
        name: "Chetra",
        position: "Frontend Developer",
        postCalltoUse: [
            {
                id: 1,
                title: "Post 1",
                content: "This is the content of post 1"
            },
             {
                id: 2,
                title: "Post 2",
                content: "This is the content of post 2"
            },
            {
                id: 3,
                title: "Post 3",
                content: "This is the content of post 3"
            },
        ],

    }),
    actions: {
        increment() {
            // this.count = this.count + 1
            // this.count = "adfadsfsdafsda" 
            //this.postCalltoUse = []    
            this.postCalltoUse.push({
                id: this.postCalltoUse.length + 1,
                title: `Post ${this.postCalltoUse.length + 1}`,
                content: `This is the content of post ${this.postCalltoUse.length + 1}`
            })
        },
        decrement() {
            this.count--
        },
        changeTitle() {
            this.count = "Updated Title"
        }
    }
})
