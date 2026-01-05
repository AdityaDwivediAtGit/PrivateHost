import {
  MatIcon,
  MatIconModule
} from "./chunk-HT3LVWIY.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-2RES5WX4.js";
import "./chunk-ZZ4OR5I3.js";

// src/app/features/user-community/community-page/community-page.ts
var CommunityPageComponent = class _CommunityPageComponent {
  static \u0275fac = function CommunityPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommunityPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommunityPageComponent, selectors: [["app-community-page"]], decls: 12, vars: 0, consts: [[1, "container", "mx-auto", "p-8", "text-center"], [1, "text-4xl", "font-bold", "text-indigo-900", "mb-4"], [1, "text-xl", "text-gray-600", "mb-8"], [1, "bg-indigo-50", "p-12", "rounded-lg", "border", "border-indigo-100"], [1, "text-6xl", "text-indigo-300", "mb-4", "h-16", "w-16"], [1, "text-2xl", "font-semibold", "text-gray-800"], [1, "text-gray-500", "mt-2"]], template: function CommunityPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Pilgrim Community");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Connect with fellow yatris, share your experiences, and find companions for your spiritual journey.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "mat-icon", 4);
      \u0275\u0275text(7, "groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h2", 5);
      \u0275\u0275text(9, "Community Features Coming Soon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 6);
      \u0275\u0275text(11, "We are initializing the platform. Join the waitlist!");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [MatIconModule, MatIcon], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommunityPageComponent, [{
    type: Component,
    args: [{ selector: "app-community-page", standalone: true, imports: [MatIconModule], template: '<div class="container mx-auto p-8 text-center">\n    <h1 class="text-4xl font-bold text-indigo-900 mb-4">Pilgrim Community</h1>\n    <p class="text-xl text-gray-600 mb-8">Connect with fellow yatris, share your experiences, and find companions for\n        your spiritual journey.</p>\n\n    <div class="bg-indigo-50 p-12 rounded-lg border border-indigo-100">\n        <mat-icon class="text-6xl text-indigo-300 mb-4 h-16 w-16">groups</mat-icon>\n        <h2 class="text-2xl font-semibold text-gray-800">Community Features Coming Soon</h2>\n        <p class="text-gray-500 mt-2">We are initializing the platform. Join the waitlist!</p>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommunityPageComponent, { className: "CommunityPageComponent", filePath: "src/app/features/user-community/community-page/community-page.ts", lineNumber: 11 });
})();

// src/app/features/user-community/community.routes.ts
var communityRoutes = [
  {
    path: "",
    component: CommunityPageComponent
  }
];
export {
  communityRoutes
};
//# sourceMappingURL=chunk-5JRUXPPV.js.map
