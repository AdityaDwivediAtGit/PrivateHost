import {
  MOCK_DB
} from "./chunk-DFHM2URD.js";
import {
  createAction,
  props
} from "./chunk-WBHH357P.js";
import {
  BehaviorSubject,
  HttpClient,
  HttpParams,
  Injectable,
  catchError,
  of,
  retry,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RDNA5G2R.js";
import {
  __spreadValues
} from "./chunk-ZZ4OR5I3.js";

// src/app/store/booking/booking.actions.ts
var createBooking = createAction("[Booking] Create Booking", props());
var createBookingSuccess = createAction("[Booking] Create Booking Success", props());
var createBookingFailure = createAction("[Booking] Create Booking Failure", props());
var updateBookingDraft = createAction("[Booking] Update Draft", props());
var resetBookingDraft = createAction("[Booking] Reset Draft");

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  notifications$ = new BehaviorSubject([]);
  notificationIdCounter = 0;
  constructor() {
  }
  /**
   * Get observable of all notifications
   */
  getNotifications() {
    return this.notifications$.asObservable();
  }
  /**
   * Show a warning notification to the user
   */
  showWarning(message, title, duration) {
    this.addNotification("warning", message, title, duration);
  }
  /**
   * Show an error notification to the user
   */
  showError(message, title, duration) {
    this.addNotification("error", message, title, duration);
  }
  /**
   * Show an info notification to the user
   */
  showInfo(message, title, duration) {
    this.addNotification("info", message, title, duration);
  }
  /**
   * Show a success notification to the user
   */
  showSuccess(message, title, duration) {
    this.addNotification("success", message, title, duration);
  }
  /**
   * Remove a specific notification
   */
  removeNotification(id) {
    const current = this.notifications$.value;
    this.notifications$.next(current.filter((n) => n.id !== id));
  }
  /**
   * Clear all notifications
   */
  clearAll() {
    this.notifications$.next([]);
  }
  addNotification(type, message, title, duration) {
    const id = `notification-${this.notificationIdCounter++}`;
    const notification = {
      id,
      type,
      message,
      title,
      timestamp: /* @__PURE__ */ new Date()
    };
    const current = this.notifications$.value;
    this.notifications$.next([...current, notification]);
    if (duration && duration > 0) {
      setTimeout(() => {
        this.removeNotification(id);
      }, duration);
    }
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "/api",
  useMockData: false
};

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  http;
  notificationService;
  apiUrl = environment.apiUrl;
  constructor(http, notificationService) {
    this.http = http;
    this.notificationService = notificationService;
  }
  get(path, params = new HttpParams()) {
    if (environment.useMockData) {
      console.log("Mock API GET:", path);
      if (path === "temples") {
        return of(MOCK_DB.temples);
      }
    }
    return this.http.get(`${this.apiUrl}/${path}`, { params }).pipe(retry(1), catchError((error) => {
      if (path === "temples") {
        if (!environment.production) {
          this.notificationService.showWarning(
            "API request failed. Displaying test/demo data from mock database.",
            "\u26A0\uFE0F Using Test Data",
            0
            // persistent notification
          );
        }
        return of(MOCK_DB.temples);
      }
      return this.handleError(error);
    }));
  }
  post(path, body) {
    if (environment.useMockData) {
      console.log("Mock API POST:", path, body);
      if (path === "bookings") {
        return of(__spreadValues({ id: "MOCK_" + Date.now(), status: "confirmed" }, body));
      }
    }
    return this.http.post(`${this.apiUrl}/${path}`, body).pipe(catchError(this.handleError));
  }
  put(path, body) {
    return this.http.put(`${this.apiUrl}/${path}`, body).pipe(catchError(this.handleError));
  }
  delete(path) {
    return this.http.delete(`${this.apiUrl}/${path}`).pipe(catchError(this.handleError));
  }
  handleError(error) {
    let errorMessage = "Unknown error!";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}
Message: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(NotificationService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: NotificationService }], null);
})();

export {
  createBooking,
  createBookingSuccess,
  createBookingFailure,
  updateBookingDraft,
  resetBookingDraft,
  NotificationService,
  ApiService
};
//# sourceMappingURL=chunk-D7MWQSU7.js.map
