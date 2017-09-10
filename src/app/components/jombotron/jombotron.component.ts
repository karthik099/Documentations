import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jombotron.component.html'
})

export class JumbotronComponent{

    public jbtHeading: string;
    public jbtText: string;
    public jbtBtnText: string;
    public jbtBtnUrl: string;

    constructor (){
        this.jbtHeading = "Jumbotron heading";
        this.jbtText = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.";
        this.jbtBtnText = "Read More";
        this.jbtBtnUrl = "http://getbootstrap.com/docs/4.0/examples/narrow-jumbotron/";
    }
}