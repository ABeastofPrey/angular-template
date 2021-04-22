import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error/error.interceptor';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoggingInterceptor } from './logging/logging.interceptor';
import { UploadInterceptor } from './upload/upload.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: UploadInterceptor, multi: true },
];
