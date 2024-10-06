import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'empty' ,
    templateUrl: './empty-route.component.html',
    styleUrls: ['./empty-route.component.scss']
})

export class MyEmptyPage implements OnInit {
    constructor() {}

    ngOnInit(): void {
        
    }
}