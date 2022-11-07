import {defineStore} from 'pinia'

export const useTascStore = defineStore ('tascStore',{
    state: ()=> ({
        tasks:[
            {id:1,title:"buy some milk",counter:0,isFav:false},
            {id:2,title:"play Gloomhaven",counter:3,isFav:true}
        ],
        
    })
})