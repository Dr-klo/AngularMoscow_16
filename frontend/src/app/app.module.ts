import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import {ProductsModule} from "./view/products.module/products.module";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "app/material.module";

function getAPIURL () {
    if (environment.production) {
        return environment.apiUrl;
    } else {
        return `http://${location.hostname}:1337/api`;
    }
}

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ProductsModule,
        MaterialModule,
        RouterModule.forRoot([])
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        {
            provide: 'API',
            useValue: environment.apiUrl,
            // useValue: getAPIURL(), // for test in local network
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
