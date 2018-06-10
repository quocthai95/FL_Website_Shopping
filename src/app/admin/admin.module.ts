import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductManagementComponent } from './dashboard/product-management/product-management.component';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import {ModalGalleryModule} from 'angular-modal-gallery';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReversePipe } from '../shared/reverse.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderManagementComponent } from './dashboard/order-management/order-management.component';
import { FilterPipe } from '../shared/filter.pipe';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ConfirmationPopoverModule.forRoot(),
        ModalGalleryModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        NgxPaginationModule
    ],
    declarations: [LoginComponent, DashboardComponent, ProductManagementComponent, ReversePipe, OrderManagementComponent, FilterPipe],
    exports: [
    ],
    providers: [AuthService, AuthGuard]
})

export class AdminModule {
}
