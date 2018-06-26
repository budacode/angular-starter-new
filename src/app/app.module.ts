import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuillEditorModule } from '../../node_modules/ngx-quill-editor';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatOptionModule,
  MatSelectModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
} from '@angular/material';

import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import 'hammerjs';

import { RoutingModule } from './routes.module';
import { AppComponent } from './app.component';
import { reducers } from './reducers/root.reducer';

import * as Views from './views';
import * as Components from './components';
import * as Services from './services';
import * as Guards from './guards';
import * as Effects from './effects';
import * as Interceptors from './interceptors';
import * as Dialogs from './dialogs';

const GUARDS = [Guards.AuthGuard, Guards.UnAuthGuard];

const SERVICES = [
  Services.ApolloService,
  Services.AuthService,
  Services.TranslationService,
  Services.UsersService,
  Services.CustomWidgetService,
];

const VIEWS = [
  Views.UserViewComponent,
];

const COMPONENTS = [
];

const MATERIAL = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatDialogModule,
  MatOptionModule,
  MatSelectModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
];

const EFFECTS = [Effects.AuthEffects];

const DIALOGS = [Dialogs.EditTranslationDialogComponent];

@NgModule({
  declarations: [...VIEWS, ...COMPONENTS, ...DIALOGS, AppComponent],
  imports: [
    ...MATERIAL,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserModule,
    QuillEditorModule,
    RoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers()),
    StoreDevtoolsModule.instrument({ maxAge: 100 }),
    EffectsModule.forRoot(EFFECTS),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule,
  ],
  entryComponents: [...DIALOGS],
  providers: [
    ...SERVICES,
    ...GUARDS,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptors.AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
