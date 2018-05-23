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


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ConfirmationPopoverModule.forRoot(),
        ModalGalleryModule,
        FormsModule
    ],
    declarations: [LoginComponent, DashboardComponent, ProductManagementComponent],
    exports: [
        LoginComponent, DashboardComponent, ProductManagementComponent
    ],
    providers: [AuthService, AuthGuard]
})

export class AdminModule {
}
