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
  apiUrl: "http://localhost:5003",
  useMockData: false
};

// src/app/core/data/mock-db.ts
var TEMPLE_IDS = {
  VAISHNO_DEVI: "1",
  KEDARNATH: "2",
  TIRUPATI_BALAJI: "3",
  GOLDEN_TEMPLE: "4",
  SOMNATH: "5",
  MEENAKSHI: "6",
  JAGANNATH: "7",
  BADRINATH: "8"
};
var MOCK_DB = {
  temples: [
    {
      "id": TEMPLE_IDS.VAISHNO_DEVI,
      "name": "DEMO Vaishno Devi",
      "defaultDuration": 2,
      "deity": "Mata Vaishno Devi (Goddess Durga)",
      "region": "Jammu & Kashmir",
      "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
      "rating": 4.9,
      "description": "One of the holiest Hindu temples dedicated to Goddess Vaishno Devi, located in the Trikuta Mountains.",
      "distance": "13 km trek from Katra",
      "bestTimeToVisit": "March to October",
      "facilities": [
        "accommodation",
        "transport",
        "prasad",
        "medical"
      ],
      "timings": "Open 24 hours",
      "entryFee": "Free"
    },
    {
      "id": TEMPLE_IDS.KEDARNATH,
      "name": "DEMO Kedarnath",
      "deity": "Lord Shiva",
      "region": "Uttarakhand",
      "imageUrl": "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
      "rating": 4.8,
      "description": "One of the twelve Jyotirlingas dedicated to Lord Shiva, located in the Himalayas.",
      "distance": "16 km trek from Gaurikund",
      "bestTimeToVisit": "May to June, September to October",
      "facilities": [
        "accommodation",
        "medical",
        "prasad"
      ],
      "timings": "6:00 AM - 7:00 PM",
      "entryFee": "Free"
    },
    {
      "id": TEMPLE_IDS.TIRUPATI_BALAJI,
      "name": "DEMO Tirupati Balaji",
      "deity": "Lord Venkateswara (Vishnu)",
      "region": "Andhra Pradesh",
      "imageUrl": "https://images.unsplash.com/photo-1582552938357-32b906d3c8c0?w=800&q=80",
      "rating": 4.7,
      "description": "Famous temple of Lord Venkateswara located on Tirumala hills, one of the richest temples in the world.",
      "distance": "20 km from Tirupati city",
      "bestTimeToVisit": "September to February",
      "facilities": [
        "accommodation",
        "transport",
        "prasad",
        "medical",
        "free-meals"
      ],
      "timings": "2:30 AM - 1:00 AM (Next day)",
      "entryFee": "Free (Special Darshan tickets available)"
    },
    {
      "id": TEMPLE_IDS.GOLDEN_TEMPLE,
      "name": "DEMO Golden Temple (Harmandir Sahib)",
      "deity": "Guru Granth Sahib",
      "region": "Punjab",
      "imageUrl": "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
      "rating": 4.9,
      "description": "The holiest Gurdwara of Sikhism, known for its golden dome and serene sarovar.",
      "distance": "In Amritsar city center",
      "bestTimeToVisit": "October to March",
      "facilities": [
        "accommodation",
        "free-meals",
        "medical",
        "prasad"
      ],
      "timings": "Open 24 hours",
      "entryFee": "Free"
    },
    {
      "id": TEMPLE_IDS.SOMNATH,
      "name": "Somnath Temple",
      "deity": "Lord Shiva",
      "region": "Gujarat",
      "imageUrl": "https://images.unsplash.com/photo-1582474958593-c2b1f1d8a4e0?w=800&q=80",
      "rating": 4.6,
      "description": "First among the twelve Jyotirlinga shrines of Shiva, located on the western coast of Gujarat.",
      "distance": "Near Veraval, Gujarat",
      "bestTimeToVisit": "October to March",
      "facilities": [
        "accommodation",
        "prasad",
        "medical"
      ],
      "timings": "6:00 AM - 9:30 PM",
      "entryFee": "Free"
    },
    {
      "id": TEMPLE_IDS.MEENAKSHI,
      "name": "DEMO Meenakshi Temple",
      "deity": "Goddess Meenakshi (Parvati) and Lord Sundareshwara (Shiva)",
      "region": "Tamil Nadu",
      "imageUrl": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
      "rating": 4.7,
      "description": "Historic Hindu temple located in Madurai, dedicated to Meenakshi and her consort Sundareshwara.",
      "distance": "In Madurai city center",
      "bestTimeToVisit": "October to March",
      "facilities": [
        "prasad",
        "transport"
      ],
      "timings": "5:00 AM - 12:30 PM, 4:00 PM - 9:30 PM",
      "entryFee": "Free (Camera fee extra)"
    },
    {
      "id": TEMPLE_IDS.JAGANNATH,
      "name": "DEMO Jagannath Temple",
      "deity": "Lord Jagannath (Krishna)",
      "region": "Odisha",
      "imageUrl": "https://images.unsplash.com/photo-1584464491033-06b41e95b4f6?w=800&q=80",
      "rating": 4.5,
      "description": "Famous for Rath Yatra festival, one of the Char Dham pilgrimage sites.",
      "distance": "In Puri city",
      "bestTimeToVisit": "October to February",
      "facilities": [
        "accommodation",
        "prasad",
        "transport"
      ],
      "timings": "5:00 AM - 12:00 AM",
      "entryFee": "Free (Non-Hindus not allowed inside)"
    },
    {
      "id": TEMPLE_IDS.BADRINATH,
      "name": "DEMO Badrinath",
      "deity": "Lord Vishnu",
      "region": "Uttarakhand",
      "imageUrl": "https://images.unsplash.com/photo-1605649194088-f758d3b5c4f1?w=800&q=80",
      "rating": 4.8,
      "description": "One of the Char Dham pilgrimage sites, dedicated to Lord Vishnu in the Himalayas.",
      "distance": "301 km from Rishikesh",
      "bestTimeToVisit": "May to June, September to October",
      "facilities": [
        "accommodation",
        "medical",
        "prasad",
        "transport"
      ],
      "timings": "4:30 AM - 9:00 PM (Summer), 4:00 AM - 6:00 PM (Winter)",
      "entryFee": "Free"
    }
  ],
  bookings: []
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
//# sourceMappingURL=chunk-LSUPXJTK.js.map
