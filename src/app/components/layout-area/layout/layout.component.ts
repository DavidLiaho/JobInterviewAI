import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-layout',
    standalone: true, // Component does not have to belong to an Angular Module
    imports: [HeaderComponent, RouterOutlet], // Which Modules/Components we need.
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css'
})
export class LayoutComponent {
    public year = new Date().getFullYear();
}
