import { HasFormatter } from "../interfaces/hasFormatter.js"

export class ListTemplate{

    constructor(private container: HTMLUListElement){}


    render(item: HasFormatter, heading: string, pos: 'start' | 'end'){

        const li = document.createElement("li")

        const h4 = document.createElement("h4")

        h4.innerText = heading

        li.append(h4)
        
    }

}