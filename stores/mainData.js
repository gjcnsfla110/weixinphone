import { defineStore } from "pinia";
import { serviceGet,servicePost } from "../utill/request";

export const useMainStores = defineStore('mainData',{
	state:()=>({
		main:[],
		iphone:[],
		samsung:[],
	}),
	getters:{
		
	},
	actions:{
		async lodingMain(){
			const res = await serviceGet('app/index/main');
			//this.main = res.main;
			//this.iphone =res.iphone;
			//this.samsung =res.samsung;
		}
	}
})