// @flow

import { decorate, observable, computed, autorun } from 'mobx'
class Store {
	@observable smth: Array<string> = []

    constructor() {
        autorun(() => console.log(this.getLengthOfSmth))
    }

	@computed get getLengthOfSmth() {
    	return this.smth.length
    }


    //Actions
	addSome(some: string) {
		this.smth.push(some)
	}
}


const store = new Store()