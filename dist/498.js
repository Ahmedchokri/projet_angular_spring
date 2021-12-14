(self["webpackChunkmaterial_dashboard_angular"] = self["webpackChunkmaterial_dashboard_angular"] || []).push([[498],{

/***/ 13938:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkStep": function() { return /* binding */ CdkStep; },
/* harmony export */   "CdkStepHeader": function() { return /* binding */ CdkStepHeader; },
/* harmony export */   "CdkStepLabel": function() { return /* binding */ CdkStepLabel; },
/* harmony export */   "CdkStepper": function() { return /* binding */ CdkStepper; },
/* harmony export */   "CdkStepperModule": function() { return /* binding */ CdkStepperModule; },
/* harmony export */   "CdkStepperNext": function() { return /* binding */ CdkStepperNext; },
/* harmony export */   "CdkStepperPrevious": function() { return /* binding */ CdkStepperPrevious; },
/* harmony export */   "STEPPER_GLOBAL_OPTIONS": function() { return /* binding */ STEPPER_GLOBAL_OPTIONS; },
/* harmony export */   "STEP_STATE": function() { return /* binding */ STEP_STATE; },
/* harmony export */   "StepperSelectionEvent": function() { return /* binding */ StepperSelectionEvent; }
/* harmony export */ });
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ 97388);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ 94720);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 19861);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ 99235);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/platform */ 93169);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 55959);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 40878);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 56238);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 25416);











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




function CdkStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
  }
}

var _c0 = ["*"];

var CdkStepHeader = /*@__PURE__*/function () {
  var CdkStepHeader = /*#__PURE__*/function () {
    function CdkStepHeader(_elementRef) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, CdkStepHeader);

      this._elementRef = _elementRef;
    }
    /** Focuses the step header. */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(CdkStepHeader, [{
      key: "focus",
      value: function focus() {
        this._elementRef.nativeElement.focus();
      }
    }]);

    return CdkStepHeader;
  }();

  CdkStepHeader.ɵfac = function CdkStepHeader_Factory(t) {
    return new (t || CdkStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
  };

  CdkStepHeader.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: CdkStepHeader,
    selectors: [["", "cdkStepHeader", ""]],
    hostAttrs: ["role", "tab"]
  });
  return CdkStepHeader;
}();

var CdkStepLabel = /*@__PURE__*/function () {
  var CdkStepLabel = function CdkStepLabel(
  /** @docs-private */
  template) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, CdkStepLabel);

    this.template = template;
  };

  CdkStepLabel.ɵfac = function CdkStepLabel_Factory(t) {
    return new (t || CdkStepLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef));
  };

  CdkStepLabel.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: CdkStepLabel,
    selectors: [["", "cdkStepLabel", ""]]
  });
  return CdkStepLabel;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Used to generate unique ID for each stepper component. */


var nextId = 0;
/** Change event emitted on selection changes. */

var StepperSelectionEvent = function StepperSelectionEvent() {
  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, StepperSelectionEvent);
};
/** Enum to represent the different states of the steps. */


var STEP_STATE = {
  NUMBER: 'number',
  EDIT: 'edit',
  DONE: 'done',
  ERROR: 'error'
};
/** InjectionToken that can be used to specify the global stepper options. */

var STEPPER_GLOBAL_OPTIONS = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('STEPPER_GLOBAL_OPTIONS');

var CdkStep = /*@__PURE__*/function () {
  var CdkStep = /*#__PURE__*/function () {
    function CdkStep(_stepper, stepperOptions) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, CdkStep);

      this._stepper = _stepper;
      /** Whether user has attempted to move away from the step. */

      this.interacted = false;
      /** Emits when the user has attempted to move away from the step. */

      this.interactedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
      this._editable = true;
      this._optional = false;
      this._completedOverride = null;
      this._customError = null;
      this._stepperOptions = stepperOptions ? stepperOptions : {};
      this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
    }
    /** Whether the user can return to this step once it has been marked as completed. */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(CdkStep, [{
      key: "editable",
      get: function get() {
        return this._editable;
      },
      set: function set(value) {
        this._editable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
      }
      /** Whether the completion of step is optional. */

    }, {
      key: "optional",
      get: function get() {
        return this._optional;
      },
      set: function set(value) {
        this._optional = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
      }
      /** Whether step is marked as completed. */

    }, {
      key: "completed",
      get: function get() {
        return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
      },
      set: function set(value) {
        this._completedOverride = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
      }
    }, {
      key: "_getDefaultCompleted",
      value: function _getDefaultCompleted() {
        return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
      }
      /** Whether step has an error. */

    }, {
      key: "hasError",
      get: function get() {
        return this._customError == null ? this._getDefaultError() : this._customError;
      },
      set: function set(value) {
        this._customError = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
      }
    }, {
      key: "_getDefaultError",
      value: function _getDefaultError() {
        return this.stepControl && this.stepControl.invalid && this.interacted;
      }
      /** Selects this step component. */

    }, {
      key: "select",
      value: function select() {
        this._stepper.selected = this;
      }
      /** Resets the step to its initial state. Note that this includes resetting form data. */

    }, {
      key: "reset",
      value: function reset() {
        this.interacted = false;

        if (this._completedOverride != null) {
          this._completedOverride = false;
        }

        if (this._customError != null) {
          this._customError = false;
        }

        if (this.stepControl) {
          this.stepControl.reset();
        }
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges() {
        // Since basically all inputs of the MatStep get proxied through the view down to the
        // underlying MatStepHeader, we have to make sure that change detection runs correctly.
        this._stepper._stateChanged();
      }
    }, {
      key: "_markAsInteracted",
      value: function _markAsInteracted() {
        if (!this.interacted) {
          this.interacted = true;
          this.interactedStream.emit(this);
        }
      }
      /** Determines whether the error state can be shown. */

    }, {
      key: "_showError",
      value: function _showError() {
        var _a; // We want to show the error state either if the user opted into/out of it using the
        // global options, or if they've explicitly set it through the `hasError` input.


        return (_a = this._stepperOptions.showError) !== null && _a !== void 0 ? _a : this._customError != null;
      }
    }]);

    return CdkStep;
  }();

  CdkStep.ɵfac = function CdkStep_Factory(t) {
    return new (t || CdkStep)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function () {
      return CdkStepper;
    })), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](STEPPER_GLOBAL_OPTIONS, 8));
  };

  CdkStep.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CdkStep,
    selectors: [["cdk-step"]],
    contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, CdkStepLabel, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
      }
    },
    viewQuery: function CdkStep_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef, 7);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      }
    },
    inputs: {
      editable: "editable",
      optional: "optional",
      completed: "completed",
      hasError: "hasError",
      stepControl: "stepControl",
      label: "label",
      errorMessage: "errorMessage",
      ariaLabel: ["aria-label", "ariaLabel"],
      ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
      state: "state"
    },
    outputs: {
      interactedStream: "interacted"
    },
    exportAs: ["cdkStep"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CdkStep_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return CdkStep;
}();

var CdkStepper = /*@__PURE__*/function () {
  var CdkStepper = /*#__PURE__*/function () {
    function CdkStepper(_dir, _changeDetectorRef, _elementRef,
    /**
     * @deprecated No longer in use, to be removed.
     * @breaking-change 13.0.0
     */
    _document) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, CdkStepper);

      this._dir = _dir;
      this._changeDetectorRef = _changeDetectorRef;
      this._elementRef = _elementRef;
      /** Emits when the component is destroyed. */

      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      /** Steps that belong to the current stepper, excluding ones from nested steppers. */

      this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.QueryList();
      this._linear = false;
      this._selectedIndex = 0;
      /** Event emitted when the selected step has changed. */

      this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
      /**
       * @deprecated To be turned into a private property. Use `orientation` instead.
       * @breaking-change 13.0.0
       */

      this._orientation = 'horizontal';
      this._groupId = nextId++;
    }
    /** Whether the validity of previous steps should be checked or not. */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(CdkStepper, [{
      key: "linear",
      get: function get() {
        return this._linear;
      },
      set: function set(value) {
        this._linear = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
      }
      /** The index of the selected step. */

    }, {
      key: "selectedIndex",
      get: function get() {
        return this._selectedIndex;
      },
      set: function set(index) {
        var _a;

        var newIndex = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(index);

        if (this.steps && this._steps) {
          // Ensure that the index can't be out of bounds.
          if (!this._isValidIndex(index) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
          }

          (_a = this.selected) === null || _a === void 0 ? void 0 : _a._markAsInteracted();

          if (this._selectedIndex !== newIndex && !this._anyControlsInvalidOrPending(newIndex) && (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
            this._updateSelectedItemIndex(index);
          }
        } else {
          this._selectedIndex = newIndex;
        }
      }
      /** The step that is selected. */

    }, {
      key: "selected",
      get: function get() {
        return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
      },
      set: function set(step) {
        this.selectedIndex = step && this.steps ? this.steps.toArray().indexOf(step) : -1;
      }
      /** Orientation of the stepper. */

    }, {
      key: "orientation",
      get: function get() {
        return this._orientation;
      },
      set: function set(value) {
        // This is a protected method so that `MatSteppter` can hook into it.
        this._orientation = value;

        if (this._keyManager) {
          this._keyManager.withVerticalOrientation(value === 'vertical');
        }
      }
    }, {
      key: "ngAfterContentInit",
      value: function ngAfterContentInit() {
        var _this = this;

        this._steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(this._steps), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(function (steps) {
          _this.steps.reset(steps.filter(function (step) {
            return step._stepper === _this;
          }));

          _this.steps.notifyOnChanges();
        });
      }
    }, {
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        var _this2 = this;

        // Note that while the step headers are content children by default, any components that
        // extend this one might have them as view children. We initialize the keyboard handling in
        // AfterViewInit so we're guaranteed for both view and content children to be defined.
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusKeyManager(this._stepHeader).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === 'vertical');
        (this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(this._layoutDirection()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(function (direction) {
          return _this2._keyManager.withHorizontalOrientation(direction);
        });

        this._keyManager.updateActiveItem(this._selectedIndex); // No need to `takeUntil` here, because we're the ones destroying `steps`.


        this.steps.changes.subscribe(function () {
          if (!_this2.selected) {
            _this2._selectedIndex = Math.max(_this2._selectedIndex - 1, 0);
          }
        }); // The logic which asserts that the selected index is within bounds doesn't run before the
        // steps are initialized, because we don't how many steps there are yet so we may have an
        // invalid index on init. If that's the case, auto-correct to the default so we don't throw.

        if (!this._isValidIndex(this._selectedIndex)) {
          this._selectedIndex = 0;
        }
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this.steps.destroy();

        this._destroyed.next();

        this._destroyed.complete();
      }
      /** Selects and focuses the next step in list. */

    }, {
      key: "next",
      value: function next() {
        this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
      }
      /** Selects and focuses the previous step in list. */

    }, {
      key: "previous",
      value: function previous() {
        this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
      }
      /** Resets the stepper to its initial state. Note that this includes clearing form data. */

    }, {
      key: "reset",
      value: function reset() {
        this._updateSelectedItemIndex(0);

        this.steps.forEach(function (step) {
          return step.reset();
        });

        this._stateChanged();
      }
      /** Returns a unique id for each step label element. */

    }, {
      key: "_getStepLabelId",
      value: function _getStepLabelId(i) {
        return "cdk-step-label-".concat(this._groupId, "-").concat(i);
      }
      /** Returns unique id for each step content element. */

    }, {
      key: "_getStepContentId",
      value: function _getStepContentId(i) {
        return "cdk-step-content-".concat(this._groupId, "-").concat(i);
      }
      /** Marks the component to be change detected. */

    }, {
      key: "_stateChanged",
      value: function _stateChanged() {
        this._changeDetectorRef.markForCheck();
      }
      /** Returns position state of the step with the given index. */

    }, {
      key: "_getAnimationDirection",
      value: function _getAnimationDirection(index) {
        var position = index - this._selectedIndex;

        if (position < 0) {
          return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
        } else if (position > 0) {
          return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
        }

        return 'current';
      }
      /** Returns the type of icon to be displayed. */

    }, {
      key: "_getIndicatorType",
      value: function _getIndicatorType(index) {
        var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : STEP_STATE.NUMBER;
        var step = this.steps.toArray()[index];

        var isCurrentStep = this._isCurrentStep(index);

        return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
      }
    }, {
      key: "_getDefaultIndicatorLogic",
      value: function _getDefaultIndicatorLogic(step, isCurrentStep) {
        if (step._showError() && step.hasError && !isCurrentStep) {
          return STEP_STATE.ERROR;
        } else if (!step.completed || isCurrentStep) {
          return STEP_STATE.NUMBER;
        } else {
          return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
        }
      }
    }, {
      key: "_getGuidelineLogic",
      value: function _getGuidelineLogic(step, isCurrentStep) {
        var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STEP_STATE.NUMBER;

        if (step._showError() && step.hasError && !isCurrentStep) {
          return STEP_STATE.ERROR;
        } else if (step.completed && !isCurrentStep) {
          return STEP_STATE.DONE;
        } else if (step.completed && isCurrentStep) {
          return state;
        } else if (step.editable && isCurrentStep) {
          return STEP_STATE.EDIT;
        } else {
          return state;
        }
      }
    }, {
      key: "_isCurrentStep",
      value: function _isCurrentStep(index) {
        return this._selectedIndex === index;
      }
      /** Returns the index of the currently-focused step header. */

    }, {
      key: "_getFocusIndex",
      value: function _getFocusIndex() {
        return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
      }
    }, {
      key: "_updateSelectedItemIndex",
      value: function _updateSelectedItemIndex(newIndex) {
        var stepsArray = this.steps.toArray();
        this.selectionChange.emit({
          selectedIndex: newIndex,
          previouslySelectedIndex: this._selectedIndex,
          selectedStep: stepsArray[newIndex],
          previouslySelectedStep: stepsArray[this._selectedIndex]
        }); // If focus is inside the stepper, move it to the next header, otherwise it may become
        // lost when the active step content is hidden. We can't be more granular with the check
        // (e.g. checking whether focus is inside the active step), because we don't have a
        // reference to the elements that are rendering out the content.

        this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
        this._selectedIndex = newIndex;

        this._stateChanged();
      }
    }, {
      key: "_onKeydown",
      value: function _onKeydown(event) {
        var hasModifier = (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.hasModifierKey)(event);
        var keyCode = event.keyCode;
        var manager = this._keyManager;

        if (manager.activeItemIndex != null && !hasModifier && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.SPACE || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.ENTER)) {
          this.selectedIndex = manager.activeItemIndex;
          event.preventDefault();
        } else {
          manager.onKeydown(event);
        }
      }
    }, {
      key: "_anyControlsInvalidOrPending",
      value: function _anyControlsInvalidOrPending(index) {
        if (this._linear && index >= 0) {
          return this.steps.toArray().slice(0, index).some(function (step) {
            var control = step.stepControl;
            var isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
            return isIncomplete && !step.optional && !step._completedOverride;
          });
        }

        return false;
      }
    }, {
      key: "_layoutDirection",
      value: function _layoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
      }
      /** Checks whether the stepper contains the focused element. */

    }, {
      key: "_containsFocus",
      value: function _containsFocus() {
        var stepperElement = this._elementRef.nativeElement;

        var focusedElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__._getFocusedElementPierceShadowDom)();

        return stepperElement === focusedElement || stepperElement.contains(focusedElement);
      }
      /** Checks whether the passed-in index is a valid step index. */

    }, {
      key: "_isValidIndex",
      value: function _isValidIndex(index) {
        return index > -1 && (!this.steps || index < this.steps.length);
      }
    }]);

    return CdkStepper;
  }();

  CdkStepper.ɵfac = function CdkStepper_Factory(t) {
    return new (t || CdkStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT));
  };

  CdkStepper.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: CdkStepper,
    selectors: [["", "cdkStepper", ""]],
    contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, CdkStep, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, CdkStepHeader, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._steps = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
      }
    },
    inputs: {
      linear: "linear",
      selectedIndex: "selectedIndex",
      selected: "selected",
      orientation: "orientation"
    },
    outputs: {
      selectionChange: "selectionChange"
    },
    exportAs: ["cdkStepper"]
  });
  return CdkStepper;
}();

var CdkStepperNext = /*@__PURE__*/function () {
  var CdkStepperNext = /*#__PURE__*/function () {
    function CdkStepperNext(_stepper) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, CdkStepperNext);

      this._stepper = _stepper;
      /** Type of the next button. Defaults to "submit" if not specified. */

      this.type = 'submit';
    } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(CdkStepperNext, [{
      key: "_handleClick",
      value: function _handleClick() {
        this._stepper.next();
      }
    }]);

    return CdkStepperNext;
  }();

  CdkStepperNext.ɵfac = function CdkStepperNext_Factory(t) {
    return new (t || CdkStepperNext)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CdkStepper));
  };

  CdkStepperNext.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: CdkStepperNext,
    selectors: [["button", "cdkStepperNext", ""]],
    hostVars: 1,
    hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CdkStepperNext_click_HostBindingHandler() {
          return ctx._handleClick();
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("type", ctx.type);
      }
    },
    inputs: {
      type: "type"
    }
  });
  return CdkStepperNext;
}();

var CdkStepperPrevious = /*@__PURE__*/function () {
  var CdkStepperPrevious = /*#__PURE__*/function () {
    function CdkStepperPrevious(_stepper) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, CdkStepperPrevious);

      this._stepper = _stepper;
      /** Type of the previous button. Defaults to "button" if not specified. */

      this.type = 'button';
    } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(CdkStepperPrevious, [{
      key: "_handleClick",
      value: function _handleClick() {
        this._stepper.previous();
      }
    }]);

    return CdkStepperPrevious;
  }();

  CdkStepperPrevious.ɵfac = function CdkStepperPrevious_Factory(t) {
    return new (t || CdkStepperPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CdkStepper));
  };

  CdkStepperPrevious.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: CdkStepperPrevious,
    selectors: [["button", "cdkStepperPrevious", ""]],
    hostVars: 1,
    hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CdkStepperPrevious_click_HostBindingHandler() {
          return ctx._handleClick();
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("type", ctx.type);
      }
    },
    inputs: {
      type: "type"
    }
  });
  return CdkStepperPrevious;
}();

var CdkStepperModule = /*@__PURE__*/function () {
  var CdkStepperModule = function CdkStepperModule() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, CdkStepperModule);
  };

  CdkStepperModule.ɵfac = function CdkStepperModule_Factory(t) {
    return new (t || CdkStepperModule)();
  };

  CdkStepperModule.ɵmod =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: CdkStepperModule
  });
  CdkStepperModule.ɵinj =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule]]
  });
  return CdkStepperModule;
}();
/*@__PURE__*/


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CdkStepperModule, {
    declarations: function declarations() {
      return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious];
    },
    imports: function imports() {
      return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule];
    },
    exports: function exports() {
      return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 25722:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSource": function() { return /* reexport safe */ _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.DataSource; },
/* harmony export */   "BaseCdkCell": function() { return /* binding */ BaseCdkCell; },
/* harmony export */   "BaseRowDef": function() { return /* binding */ BaseRowDef; },
/* harmony export */   "CDK_ROW_TEMPLATE": function() { return /* binding */ CDK_ROW_TEMPLATE; },
/* harmony export */   "CDK_TABLE": function() { return /* binding */ CDK_TABLE; },
/* harmony export */   "CDK_TABLE_TEMPLATE": function() { return /* binding */ CDK_TABLE_TEMPLATE; },
/* harmony export */   "CdkCell": function() { return /* binding */ CdkCell; },
/* harmony export */   "CdkCellDef": function() { return /* binding */ CdkCellDef; },
/* harmony export */   "CdkCellOutlet": function() { return /* binding */ CdkCellOutlet; },
/* harmony export */   "CdkColumnDef": function() { return /* binding */ CdkColumnDef; },
/* harmony export */   "CdkFooterCell": function() { return /* binding */ CdkFooterCell; },
/* harmony export */   "CdkFooterCellDef": function() { return /* binding */ CdkFooterCellDef; },
/* harmony export */   "CdkFooterRow": function() { return /* binding */ CdkFooterRow; },
/* harmony export */   "CdkFooterRowDef": function() { return /* binding */ CdkFooterRowDef; },
/* harmony export */   "CdkHeaderCell": function() { return /* binding */ CdkHeaderCell; },
/* harmony export */   "CdkHeaderCellDef": function() { return /* binding */ CdkHeaderCellDef; },
/* harmony export */   "CdkHeaderRow": function() { return /* binding */ CdkHeaderRow; },
/* harmony export */   "CdkHeaderRowDef": function() { return /* binding */ CdkHeaderRowDef; },
/* harmony export */   "CdkNoDataRow": function() { return /* binding */ CdkNoDataRow; },
/* harmony export */   "CdkRecycleRows": function() { return /* binding */ CdkRecycleRows; },
/* harmony export */   "CdkRow": function() { return /* binding */ CdkRow; },
/* harmony export */   "CdkRowDef": function() { return /* binding */ CdkRowDef; },
/* harmony export */   "CdkTable": function() { return /* binding */ CdkTable; },
/* harmony export */   "CdkTableModule": function() { return /* binding */ CdkTableModule; },
/* harmony export */   "CdkTextColumn": function() { return /* binding */ CdkTextColumn; },
/* harmony export */   "DataRowOutlet": function() { return /* binding */ DataRowOutlet; },
/* harmony export */   "FooterRowOutlet": function() { return /* binding */ FooterRowOutlet; },
/* harmony export */   "HeaderRowOutlet": function() { return /* binding */ HeaderRowOutlet; },
/* harmony export */   "NoDataRowOutlet": function() { return /* binding */ NoDataRowOutlet; },
/* harmony export */   "STICKY_DIRECTIONS": function() { return /* binding */ STICKY_DIRECTIONS; },
/* harmony export */   "STICKY_POSITIONING_LISTENER": function() { return /* binding */ STICKY_POSITIONING_LISTENER; },
/* harmony export */   "StickyStyler": function() { return /* binding */ StickyStyler; },
/* harmony export */   "TEXT_COLUMN_OPTIONS": function() { return /* binding */ TEXT_COLUMN_OPTIONS; },
/* harmony export */   "_COALESCED_STYLE_SCHEDULER": function() { return /* binding */ _COALESCED_STYLE_SCHEDULER; },
/* harmony export */   "_CoalescedStyleScheduler": function() { return /* binding */ _CoalescedStyleScheduler; },
/* harmony export */   "_Schedule": function() { return /* binding */ _Schedule; },
/* harmony export */   "mixinHasStickyInput": function() { return /* binding */ mixinHasStickyInput; }
/* harmony export */ });
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 66581);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ 27078);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ 43620);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ 72454);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/coercion */ 19861);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ 58378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/bidi */ 94720);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/platform */ 93169);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/scrolling */ 10083);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 55959);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 83163);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 78512);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 4710);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 40878);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 25416);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 90611);















var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
var _c1 = ["caption", "colgroup, col"];

function CdkTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
  }
}

function CdkTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var data_r2 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
  }
}








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * @docs-private
 */

function mixinHasStickyInput(base) {
  return /*#__PURE__*/function (_base) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(_class, _base);

    var _super = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__.default)(_class);

    function _class() {
      var _this;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, _class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this._sticky = false;
      /** Whether the sticky input has changed since it was last checked. */

      _this._hasStickyChanged = false;
      return _this;
    }
    /** Whether sticky positioning should be applied. */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(_class, [{
      key: "sticky",
      get: function get() {
        return this._sticky;
      },
      set: function set(v) {
        var prevValue = this._sticky;
        this._sticky = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceBooleanProperty)(v);
        this._hasStickyChanged = prevValue !== this._sticky;
      }
      /** Whether the sticky value has changed since this was last called. */

    }, {
      key: "hasStickyChanged",
      value: function hasStickyChanged() {
        var hasStickyChanged = this._hasStickyChanged;
        this._hasStickyChanged = false;
        return hasStickyChanged;
      }
      /** Resets the dirty check for cases where the sticky state has been used without checking. */

    }, {
      key: "resetStickyChanged",
      value: function resetStickyChanged() {
        this._hasStickyChanged = false;
      }
    }]);

    return _class;
  }(base);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * @docs-private
 */


var CDK_TABLE = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('CDK_TABLE');
/** Injection token that can be used to specify the text column options. */

var TEXT_COLUMN_OPTIONS = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('text-column-options');

var CdkCellDef = /*@__PURE__*/function () {
  var CdkCellDef = function CdkCellDef(
  /** @docs-private */
  template) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkCellDef);

    this.template = template;
  };

  CdkCellDef.ɵfac = function CdkCellDef_Factory(t) {
    return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef));
  };

  CdkCellDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: CdkCellDef,
    selectors: [["", "cdkCellDef", ""]]
  });
  return CdkCellDef;
}();

var CdkHeaderCellDef = /*@__PURE__*/function () {
  var CdkHeaderCellDef = function CdkHeaderCellDef(
  /** @docs-private */
  template) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkHeaderCellDef);

    this.template = template;
  };

  CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) {
    return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef));
  };

  CdkHeaderCellDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: CdkHeaderCellDef,
    selectors: [["", "cdkHeaderCellDef", ""]]
  });
  return CdkHeaderCellDef;
}();

var CdkFooterCellDef = /*@__PURE__*/function () {
  var CdkFooterCellDef = function CdkFooterCellDef(
  /** @docs-private */
  template) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkFooterCellDef);

    this.template = template;
  };

  CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) {
    return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef));
  };

  CdkFooterCellDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: CdkFooterCellDef,
    selectors: [["", "cdkFooterCellDef", ""]]
  });
  return CdkFooterCellDef;
}(); // Boilerplate for applying mixins to CdkColumnDef.

/** @docs-private */


var CdkColumnDefBase = function CdkColumnDefBase() {
  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkColumnDefBase);
};

var _CdkColumnDefBase = /*@__PURE__*/mixinHasStickyInput(CdkColumnDefBase);

var CdkColumnDef = /*@__PURE__*/function () {
  var CdkColumnDef = /*#__PURE__*/function (_CdkColumnDefBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(CdkColumnDef, _CdkColumnDefBase2);

    var _super2 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__.default)(CdkColumnDef);

    function CdkColumnDef(_table) {
      var _this2;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkColumnDef);

      _this2 = _super2.call(this);
      _this2._table = _table;
      _this2._stickyEnd = false;
      return _this2;
    }
    /** Unique name for this column. */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(CdkColumnDef, [{
      key: "name",
      get: function get() {
        return this._name;
      },
      set: function set(name) {
        this._setNameInput(name);
      }
      /**
       * Whether this column should be sticky positioned on the end of the row. Should make sure
       * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
       * has been changed.
       */

    }, {
      key: "stickyEnd",
      get: function get() {
        return this._stickyEnd;
      },
      set: function set(v) {
        var prevValue = this._stickyEnd;
        this._stickyEnd = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceBooleanProperty)(v);
        this._hasStickyChanged = prevValue !== this._stickyEnd;
      }
      /**
       * Overridable method that sets the css classes that will be added to every cell in this
       * column.
       * In the future, columnCssClassName will change from type string[] to string and this
       * will set a single string value.
       * @docs-private
       */

    }, {
      key: "_updateColumnCssClassName",
      value: function _updateColumnCssClassName() {
        this._columnCssClassName = ["cdk-column-".concat(this.cssClassFriendlyName)];
      }
      /**
       * This has been extracted to a util because of TS 4 and VE.
       * View Engine doesn't support property rename inheritance.
       * TS 4.0 doesn't allow properties to override accessors or vice-versa.
       * @docs-private
       */

    }, {
      key: "_setNameInput",
      value: function _setNameInput(value) {
        // If the directive is set without a name (updated programmatically), then this setter will
        // trigger with an empty string and should not overwrite the programmatically set value.
        if (value) {
          this._name = value;
          this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/ig, '-');

          this._updateColumnCssClassName();
        }
      }
    }]);

    return CdkColumnDef;
  }(_CdkColumnDefBase);

  CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) {
    return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](CDK_TABLE, 8));
  };

  CdkColumnDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: CdkColumnDef,
    selectors: [["", "cdkColumnDef", ""]],
    contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, CdkCellDef, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
      }
    },
    inputs: {
      sticky: "sticky",
      name: ["cdkColumnDef", "name"],
      stickyEnd: "stickyEnd"
    },
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
      provide: 'MAT_SORT_HEADER_COLUMN_DEF',
      useExisting: CdkColumnDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
  });
  return CdkColumnDef;
}();
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */


var BaseCdkCell = function BaseCdkCell(columnDef, elementRef) {
  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, BaseCdkCell);

  // If IE 11 is dropped before we switch to setting a single class name, change to multi param
  // with destructuring.
  var classList = elementRef.nativeElement.classList;

  var _iterator = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__.default)(columnDef._columnCssClassName),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var className = _step.value;
      classList.add(className);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var CdkHeaderCell = /*@__PURE__*/function () {
  var CdkHeaderCell = /*#__PURE__*/function (_BaseCdkCell) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(CdkHeaderCell, _BaseCdkCell);

    var _super3 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__.default)(CdkHeaderCell);

    function CdkHeaderCell(columnDef, elementRef) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkHeaderCell);

      return _super3.call(this, columnDef, elementRef);
    }

    return CdkHeaderCell;
  }(BaseCdkCell);

  CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) {
    return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
  };

  CdkHeaderCell.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: CdkHeaderCell,
    selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
    hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
  });
  return CdkHeaderCell;
}();

var CdkFooterCell = /*@__PURE__*/function () {
  var CdkFooterCell = /*#__PURE__*/function (_BaseCdkCell2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(CdkFooterCell, _BaseCdkCell2);

    var _super4 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__.default)(CdkFooterCell);

    function CdkFooterCell(columnDef, elementRef) {
      var _this3;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkFooterCell);

      var _a;

      _this3 = _super4.call(this, columnDef, elementRef);

      if (((_a = columnDef._table) === null || _a === void 0 ? void 0 : _a._elementRef.nativeElement.nodeType) === 1) {
        var tableRole = columnDef._table._elementRef.nativeElement.getAttribute('role');

        var role = tableRole === 'grid' || tableRole === 'treegrid' ? 'gridcell' : 'cell';
        elementRef.nativeElement.setAttribute('role', role);
      }

      return _this3;
    }

    return CdkFooterCell;
  }(BaseCdkCell);

  CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) {
    return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
  };

  CdkFooterCell.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: CdkFooterCell,
    selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
    hostAttrs: [1, "cdk-footer-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
  });
  return CdkFooterCell;
}();

var CdkCell = /*@__PURE__*/function () {
  var CdkCell = /*#__PURE__*/function (_BaseCdkCell3) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(CdkCell, _BaseCdkCell3);

    var _super5 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__.default)(CdkCell);

    function CdkCell(columnDef, elementRef) {
      var _this4;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkCell);

      var _a;

      _this4 = _super5.call(this, columnDef, elementRef);

      if (((_a = columnDef._table) === null || _a === void 0 ? void 0 : _a._elementRef.nativeElement.nodeType) === 1) {
        var tableRole = columnDef._table._elementRef.nativeElement.getAttribute('role');

        var role = tableRole === 'grid' || tableRole === 'treegrid' ? 'gridcell' : 'cell';
        elementRef.nativeElement.setAttribute('role', role);
      }

      return _this4;
    }

    return CdkCell;
  }(BaseCdkCell);

  CdkCell.ɵfac = function CdkCell_Factory(t) {
    return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
  };

  CdkCell.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: CdkCell,
    selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
    hostAttrs: [1, "cdk-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
  });
  return CdkCell;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @docs-private
 */


var _Schedule = function _Schedule() {
  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, _Schedule);

  this.tasks = [];
  this.endTasks = [];
};
/** Injection token used to provide a coalesced style scheduler. */


var _COALESCED_STYLE_SCHEDULER = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('_COALESCED_STYLE_SCHEDULER');

var _CoalescedStyleScheduler = /*@__PURE__*/function () {
  var _CoalescedStyleScheduler = /*#__PURE__*/function () {
    function _CoalescedStyleScheduler(_ngZone) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, _CoalescedStyleScheduler);

      this._ngZone = _ngZone;
      this._currentSchedule = null;
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    }
    /**
     * Schedules the specified task to run at the end of the current VM turn.
     */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(_CoalescedStyleScheduler, [{
      key: "schedule",
      value: function schedule(task) {
        this._createScheduleIfNeeded();

        this._currentSchedule.tasks.push(task);
      }
      /**
       * Schedules the specified task to run after other scheduled tasks at the end of the current
       * VM turn.
       */

    }, {
      key: "scheduleEnd",
      value: function scheduleEnd(task) {
        this._createScheduleIfNeeded();

        this._currentSchedule.endTasks.push(task);
      }
      /** Prevent any further tasks from running. */

    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._destroyed.next();

        this._destroyed.complete();
      }
    }, {
      key: "_createScheduleIfNeeded",
      value: function _createScheduleIfNeeded() {
        var _this5 = this;

        if (this._currentSchedule) {
          return;
        }

        this._currentSchedule = new _Schedule();

        this._getScheduleObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroyed)).subscribe(function () {
          while (_this5._currentSchedule.tasks.length || _this5._currentSchedule.endTasks.length) {
            var schedule = _this5._currentSchedule; // Capture new tasks scheduled by the current set of tasks.

            _this5._currentSchedule = new _Schedule();

            var _iterator2 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__.default)(schedule.tasks),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var task = _step2.value;
                task();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var _iterator3 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__.default)(schedule.endTasks),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _task = _step3.value;

                _task();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          _this5._currentSchedule = null;
        });
      }
    }, {
      key: "_getScheduleObservable",
      value: function _getScheduleObservable() {
        // Use onStable when in the context of an ongoing change detection cycle so that we
        // do not accidentally trigger additional cycles.
        return this._ngZone.isStable ? (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.from)(Promise.resolve(undefined)) : this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1));
      }
    }]);

    return _CoalescedStyleScheduler;
  }();

  _CoalescedStyleScheduler.ɵfac = function _CoalescedStyleScheduler_Factory(t) {
    return new (t || _CoalescedStyleScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone));
  };

  _CoalescedStyleScheduler.ɵprov =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: _CoalescedStyleScheduler,
    factory: _CoalescedStyleScheduler.ɵfac
  });
  return _CoalescedStyleScheduler;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */


var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";

var BaseRowDef = /*@__PURE__*/function () {
  var BaseRowDef = /*#__PURE__*/function () {
    function BaseRowDef(
    /** @docs-private */
    template, _differs) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, BaseRowDef);

      this.template = template;
      this._differs = _differs;
    }

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(BaseRowDef, [{
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        // Create a new columns differ if one does not yet exist. Initialize it based on initial value
        // of the columns property or an empty array if none is provided.
        if (!this._columnsDiffer) {
          var columns = changes['columns'] && changes['columns'].currentValue || [];
          this._columnsDiffer = this._differs.find(columns).create();

          this._columnsDiffer.diff(columns);
        }
      }
      /**
       * Returns the difference between the current columns and the columns from the last diff, or null
       * if there is no difference.
       */

    }, {
      key: "getColumnsDiff",
      value: function getColumnsDiff() {
        return this._columnsDiffer.diff(this.columns);
      }
      /** Gets this row def's relevant cell template from the provided column def. */

    }, {
      key: "extractCellTemplate",
      value: function extractCellTemplate(column) {
        if (this instanceof CdkHeaderRowDef) {
          return column.headerCell.template;
        }

        if (this instanceof CdkFooterRowDef) {
          return column.footerCell.template;
        } else {
          return column.cell.template;
        }
      }
    }]);

    return BaseRowDef;
  }();

  BaseRowDef.ɵfac = function BaseRowDef_Factory(t) {
    return new (t || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.IterableDiffers));
  };

  BaseRowDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: BaseRowDef,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
  });
  return BaseRowDef;
}(); // Boilerplate for applying mixins to CdkHeaderRowDef.

/** @docs-private */


var CdkHeaderRowDefBase = /*#__PURE__*/function (_BaseRowDef) {
  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(CdkHeaderRowDefBase, _BaseRowDef);

  var _super6 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__.default)(CdkHeaderRowDefBase);

  function CdkHeaderRowDefBase() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkHeaderRowDefBase);

    return _super6.apply(this, arguments);
  }

  return CdkHeaderRowDefBase;
}(BaseRowDef);

var _CdkHeaderRowDefBase = /*@__PURE__*/mixinHasStickyInput(CdkHeaderRowDefBase);

var CdkHeaderRowDef = /*@__PURE__*/function () {
  var CdkHeaderRowDef = /*#__PURE__*/function (_CdkHeaderRowDefBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(CdkHeaderRowDef, _CdkHeaderRowDefBase2);

    var _super7 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__.default)(CdkHeaderRowDef);

    function CdkHeaderRowDef(template, _differs, _table) {
      var _this6;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkHeaderRowDef);

      _this6 = _super7.call(this, template, _differs);
      _this6._table = _table;
      return _this6;
    } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(CdkHeaderRowDef, [{
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_1__.default)((0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.default)(CdkHeaderRowDef.prototype), "ngOnChanges", this).call(this, changes);
      }
    }]);

    return CdkHeaderRowDef;
  }(_CdkHeaderRowDefBase);

  CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) {
    return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](CDK_TABLE, 8));
  };

  CdkHeaderRowDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: CdkHeaderRowDef,
    selectors: [["", "cdkHeaderRowDef", ""]],
    inputs: {
      columns: ["cdkHeaderRowDef", "columns"],
      sticky: ["cdkHeaderRowDefSticky", "sticky"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
  });
  return CdkHeaderRowDef;
}(); // Boilerplate for applying mixins to CdkFooterRowDef.

/** @docs-private */


var CdkFooterRowDefBase = /*#__PURE__*/function (_BaseRowDef2) {
  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(CdkFooterRowDefBase, _BaseRowDef2);

  var _super8 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__.default)(CdkFooterRowDefBase);

  function CdkFooterRowDefBase() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkFooterRowDefBase);

    return _super8.apply(this, arguments);
  }

  return CdkFooterRowDefBase;
}(BaseRowDef);

var _CdkFooterRowDefBase = /*@__PURE__*/mixinHasStickyInput(CdkFooterRowDefBase);

var CdkFooterRowDef = /*@__PURE__*/function () {
  var CdkFooterRowDef = /*#__PURE__*/function (_CdkFooterRowDefBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(CdkFooterRowDef, _CdkFooterRowDefBase2);

    var _super9 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__.default)(CdkFooterRowDef);

    function CdkFooterRowDef(template, _differs, _table) {
      var _this7;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkFooterRowDef);

      _this7 = _super9.call(this, template, _differs);
      _this7._table = _table;
      return _this7;
    } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(CdkFooterRowDef, [{
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_1__.default)((0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.default)(CdkFooterRowDef.prototype), "ngOnChanges", this).call(this, changes);
      }
    }]);

    return CdkFooterRowDef;
  }(_CdkFooterRowDefBase);

  CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) {
    return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](CDK_TABLE, 8));
  };

  CdkFooterRowDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: CdkFooterRowDef,
    selectors: [["", "cdkFooterRowDef", ""]],
    inputs: {
      columns: ["cdkFooterRowDef", "columns"],
      sticky: ["cdkFooterRowDefSticky", "sticky"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
  });
  return CdkFooterRowDef;
}();

var CdkRowDef = /*@__PURE__*/function () {
  var CdkRowDef = /*#__PURE__*/function (_BaseRowDef3) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(CdkRowDef, _BaseRowDef3);

    var _super10 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__.default)(CdkRowDef);

    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    function CdkRowDef(template, _differs, _table) {
      var _this8;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkRowDef);

      _this8 = _super10.call(this, template, _differs);
      _this8._table = _table;
      return _this8;
    }

    return CdkRowDef;
  }(BaseRowDef);

  CdkRowDef.ɵfac = function CdkRowDef_Factory(t) {
    return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](CDK_TABLE, 8));
  };

  CdkRowDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: CdkRowDef,
    selectors: [["", "cdkRowDef", ""]],
    inputs: {
      columns: ["cdkRowDefColumns", "columns"],
      when: ["cdkRowDefWhen", "when"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
  });
  return CdkRowDef;
}();

var CdkCellOutlet = /*@__PURE__*/function () {
  var CdkCellOutlet = /*#__PURE__*/function () {
    function CdkCellOutlet(_viewContainer) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkCellOutlet);

      this._viewContainer = _viewContainer;
      CdkCellOutlet.mostRecentCellOutlet = this;
    }

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(CdkCellOutlet, [{
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        // If this was the last outlet being rendered in the view, remove the reference
        // from the static property after it has been destroyed to avoid leaking memory.
        if (CdkCellOutlet.mostRecentCellOutlet === this) {
          CdkCellOutlet.mostRecentCellOutlet = null;
        }
      }
    }]);

    return CdkCellOutlet;
  }();

  CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) {
    return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef));
  };

  CdkCellOutlet.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: CdkCellOutlet,
    selectors: [["", "cdkCellOutlet", ""]]
  });
  /**
   * Static property containing the latest constructed instance of this class.
   * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
   * createEmbeddedView. After one of these components are created, this property will provide
   * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
   * construct the cells with the provided context.
   */

  CdkCellOutlet.mostRecentCellOutlet = null;
  return CdkCellOutlet;
}();

var CdkHeaderRow = /*@__PURE__*/function () {
  var CdkHeaderRow = function CdkHeaderRow() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkHeaderRow);
  };

  CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) {
    return new (t || CdkHeaderRow)();
  };

  CdkHeaderRow.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CdkHeaderRow,
    selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-header-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkHeaderRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0, 0);
      }
    },
    directives: [CdkCellOutlet],
    encapsulation: 2
  });
  return CdkHeaderRow;
}();

var CdkFooterRow = /*@__PURE__*/function () {
  var CdkFooterRow = function CdkFooterRow() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkFooterRow);
  };

  CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) {
    return new (t || CdkFooterRow)();
  };

  CdkFooterRow.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CdkFooterRow,
    selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-footer-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkFooterRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0, 0);
      }
    },
    directives: [CdkCellOutlet],
    encapsulation: 2
  });
  return CdkFooterRow;
}();

var CdkRow = /*@__PURE__*/function () {
  var CdkRow = function CdkRow() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkRow);
  };

  CdkRow.ɵfac = function CdkRow_Factory(t) {
    return new (t || CdkRow)();
  };

  CdkRow.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CdkRow,
    selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0, 0);
      }
    },
    directives: [CdkCellOutlet],
    encapsulation: 2
  });
  return CdkRow;
}();

var CdkNoDataRow = /*@__PURE__*/function () {
  var CdkNoDataRow = function CdkNoDataRow(templateRef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkNoDataRow);

    this.templateRef = templateRef;
  };

  CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) {
    return new (t || CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef));
  };

  CdkNoDataRow.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: CdkNoDataRow,
    selectors: [["ng-template", "cdkNoDataRow", ""]]
  });
  return CdkNoDataRow;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * List of all possible directions that can be used for sticky positioning.
 * @docs-private
 */


var STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * @docs-private
 */

var StickyStyler = /*#__PURE__*/function () {
  /**
   * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
   *     that uses the native `<table>` element.
   * @param _stickCellCss The CSS class that will be applied to every row/cell that has
   *     sticky positioning applied.
   * @param direction The directionality context of the table (ltr/rtl); affects column positioning
   *     by reversing left/right positions.
   * @param _isBrowser Whether the table is currently being rendered on the server or the client.
   * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
   *     using inline styles. If false, it is assumed that position: sticky is included in
   *     the component stylesheet for _stickCellCss.
   * @param _positionListener A listener that is notified of changes to sticky rows/columns
   *     and their dimensions.
   */
  function StickyStyler(_isNativeHtmlTable, _stickCellCss, direction, _coalescedStyleScheduler) {
    var _isBrowser = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    var _needsPositionStickyOnElement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

    var _positionListener = arguments.length > 6 ? arguments[6] : undefined;

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, StickyStyler);

    this._isNativeHtmlTable = _isNativeHtmlTable;
    this._stickCellCss = _stickCellCss;
    this.direction = direction;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._isBrowser = _isBrowser;
    this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    this._positionListener = _positionListener;
    this._cachedCellWidths = [];
    this._borderCellCss = {
      'top': "".concat(_stickCellCss, "-border-elem-top"),
      'bottom': "".concat(_stickCellCss, "-border-elem-bottom"),
      'left': "".concat(_stickCellCss, "-border-elem-left"),
      'right': "".concat(_stickCellCss, "-border-elem-right")
    };
  }
  /**
   * Clears the sticky positioning styles from the row and its cells by resetting the `position`
   * style, setting the zIndex to 0, and unsetting each provided sticky direction.
   * @param rows The list of rows that should be cleared from sticking in the provided directions
   * @param stickyDirections The directions that should no longer be set as sticky on the rows.
   */


  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(StickyStyler, [{
    key: "clearStickyPositioning",
    value: function clearStickyPositioning(rows, stickyDirections) {
      var _this9 = this;

      var elementsToClear = [];

      var _iterator4 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__.default)(rows),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var row = _step4.value;

          // If the row isn't an element (e.g. if it's an `ng-container`),
          // it won't have inline styles or `children` so we skip it.
          if (row.nodeType !== row.ELEMENT_NODE) {
            continue;
          }

          elementsToClear.push(row);

          for (var i = 0; i < row.children.length; i++) {
            elementsToClear.push(row.children[i]);
          }
        } // Coalesce with sticky row/column updates (and potentially other changes like column resize).

      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      this._coalescedStyleScheduler.schedule(function () {
        var _iterator5 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__.default)(elementsToClear),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var element = _step5.value;

            _this9._removeStickyStyle(element, stickyDirections);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      });
    }
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param rows The rows that should have its set of cells stuck according to the sticky states.
     * @param stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
     *     column cell. If `false` cached widths will be used instead.
     */

  }, {
    key: "updateStickyColumns",
    value: function updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
      var _this10 = this;

      var recalculateCellWidths = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (!rows.length || !this._isBrowser || !(stickyStartStates.some(function (state) {
        return state;
      }) || stickyEndStates.some(function (state) {
        return state;
      }))) {
        if (this._positionListener) {
          this._positionListener.stickyColumnsUpdated({
            sizes: []
          });

          this._positionListener.stickyEndColumnsUpdated({
            sizes: []
          });
        }

        return;
      }

      var firstRow = rows[0];
      var numCells = firstRow.children.length;

      var cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);

      var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);

      var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);

      var lastStickyStart = stickyStartStates.lastIndexOf(true);
      var firstStickyEnd = stickyEndStates.indexOf(true); // Coalesce with sticky row updates (and potentially other changes like column resize).

      this._coalescedStyleScheduler.schedule(function () {
        var isRtl = _this10.direction === 'rtl';
        var start = isRtl ? 'right' : 'left';
        var end = isRtl ? 'left' : 'right';

        var _iterator6 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__.default)(rows),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var row = _step6.value;

            for (var i = 0; i < numCells; i++) {
              var cell = row.children[i];

              if (stickyStartStates[i]) {
                _this10._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
              }

              if (stickyEndStates[i]) {
                _this10._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
              }
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        if (_this10._positionListener) {
          _this10._positionListener.stickyColumnsUpdated({
            sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map(function (width, index) {
              return stickyStartStates[index] ? width : null;
            })
          });

          _this10._positionListener.stickyEndColumnsUpdated({
            sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map(function (width, index) {
              return stickyEndStates[index + firstStickyEnd] ? width : null;
            }).reverse()
          });
        }
      });
    }
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     */

  }, {
    key: "stickRows",
    value: function stickRows(rowsToStick, stickyStates, position) {
      var _this11 = this;

      // Since we can't measure the rows on the server, we can't stick the rows properly.
      if (!this._isBrowser) {
        return;
      } // If positioning the rows to the bottom, reverse their order when evaluating the sticky
      // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
      // sticky states need to be reversed as well.


      var rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
      var states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates; // Measure row heights all at once before adding sticky styles to reduce layout thrashing.

      var stickyOffsets = [];
      var stickyCellHeights = [];
      var elementsToStick = [];

      for (var rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
        if (!states[rowIndex]) {
          continue;
        }

        stickyOffsets[rowIndex] = stickyOffset;
        var row = rows[rowIndex];
        elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
        var height = row.getBoundingClientRect().height;
        stickyOffset += height;
        stickyCellHeights[rowIndex] = height;
      }

      var borderedRowIndex = states.lastIndexOf(true); // Coalesce with other sticky row updates (top/bottom), sticky columns updates
      // (and potentially other changes like column resize).

      this._coalescedStyleScheduler.schedule(function () {
        var _a, _b;

        for (var _rowIndex = 0; _rowIndex < rows.length; _rowIndex++) {
          if (!states[_rowIndex]) {
            continue;
          }

          var offset = stickyOffsets[_rowIndex];
          var isBorderedRowIndex = _rowIndex === borderedRowIndex;

          var _iterator7 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__.default)(elementsToStick[_rowIndex]),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var element = _step7.value;

              _this11._addStickyStyle(element, position, offset, isBorderedRowIndex);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }

        if (position === 'top') {
          (_a = _this11._positionListener) === null || _a === void 0 ? void 0 : _a.stickyHeaderRowsUpdated({
            sizes: stickyCellHeights,
            offsets: stickyOffsets,
            elements: elementsToStick
          });
        } else {
          (_b = _this11._positionListener) === null || _b === void 0 ? void 0 : _b.stickyFooterRowsUpdated({
            sizes: stickyCellHeights,
            offsets: stickyOffsets,
            elements: elementsToStick
          });
        }
      });
    }
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     */

  }, {
    key: "updateStickyFooterContainer",
    value: function updateStickyFooterContainer(tableElement, stickyStates) {
      var _this12 = this;

      if (!this._isNativeHtmlTable) {
        return;
      }

      var tfoot = tableElement.querySelector('tfoot'); // Coalesce with other sticky updates (and potentially other changes like column resize).

      this._coalescedStyleScheduler.schedule(function () {
        if (stickyStates.some(function (state) {
          return !state;
        })) {
          _this12._removeStickyStyle(tfoot, ['bottom']);
        } else {
          _this12._addStickyStyle(tfoot, 'bottom', 0, false);
        }
      });
    }
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     */

  }, {
    key: "_removeStickyStyle",
    value: function _removeStickyStyle(element, stickyDirections) {
      var _iterator8 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__.default)(stickyDirections),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var dir = _step8.value;
          element.style[dir] = '';
          element.classList.remove(this._borderCellCss[dir]);
        } // If the element no longer has any more sticky directions, remove sticky positioning and
        // the sticky CSS class.
        // Short-circuit checking element.style[dir] for stickyDirections as they
        // were already removed above.

      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      var hasDirection = STICKY_DIRECTIONS.some(function (dir) {
        return stickyDirections.indexOf(dir) === -1 && element.style[dir];
      });

      if (hasDirection) {
        element.style.zIndex = this._getCalculatedZIndex(element);
      } else {
        // When not hasDirection, _getCalculatedZIndex will always return ''.
        element.style.zIndex = '';

        if (this._needsPositionStickyOnElement) {
          element.style.position = '';
        }

        element.classList.remove(this._stickCellCss);
      }
    }
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     */

  }, {
    key: "_addStickyStyle",
    value: function _addStickyStyle(element, dir, dirValue, isBorderElement) {
      element.classList.add(this._stickCellCss);

      if (isBorderElement) {
        element.classList.add(this._borderCellCss[dir]);
      }

      element.style[dir] = "".concat(dirValue, "px");
      element.style.zIndex = this._getCalculatedZIndex(element);

      if (this._needsPositionStickyOnElement) {
        element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
      }
    }
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     */

  }, {
    key: "_getCalculatedZIndex",
    value: function _getCalculatedZIndex(element) {
      var zIndexIncrements = {
        top: 100,
        bottom: 10,
        left: 1,
        right: 1
      };
      var zIndex = 0; // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
      // loses the array generic type in the `for of`. But we *also* have to use `Array` because
      // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

      var _iterator9 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__.default)(STICKY_DIRECTIONS),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var dir = _step9.value;

          if (element.style[dir]) {
            zIndex += zIndexIncrements[dir];
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return zIndex ? "".concat(zIndex) : '';
    }
    /** Gets the widths for each cell in the provided row. */

  }, {
    key: "_getCellWidths",
    value: function _getCellWidths(row) {
      var recalculateCellWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!recalculateCellWidths && this._cachedCellWidths.length) {
        return this._cachedCellWidths;
      }

      var cellWidths = [];
      var firstRowCells = row.children;

      for (var i = 0; i < firstRowCells.length; i++) {
        var cell = firstRowCells[i];
        cellWidths.push(cell.getBoundingClientRect().width);
      }

      this._cachedCellWidths = cellWidths;
      return cellWidths;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */

  }, {
    key: "_getStickyStartColumnPositions",
    value: function _getStickyStartColumnPositions(widths, stickyStates) {
      var positions = [];
      var nextPosition = 0;

      for (var i = 0; i < widths.length; i++) {
        if (stickyStates[i]) {
          positions[i] = nextPosition;
          nextPosition += widths[i];
        }
      }

      return positions;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */

  }, {
    key: "_getStickyEndColumnPositions",
    value: function _getStickyEndColumnPositions(widths, stickyStates) {
      var positions = [];
      var nextPosition = 0;

      for (var i = widths.length; i > 0; i--) {
        if (stickyStates[i]) {
          positions[i] = nextPosition;
          nextPosition += widths[i];
        }
      }

      return positions;
    }
  }]);

  return StickyStyler;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * @param id Id whose lookup failed.
 * @docs-private
 */


function getTableUnknownColumnError(id) {
  return Error("Could not find column with id \"".concat(id, "\"."));
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * @docs-private
 */


function getTableDuplicateColumnNameError(name) {
  return Error("Duplicate column definition name provided: \"".concat(name, "\"."));
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * @docs-private
 */


function getTableMultipleDefaultRowDefsError() {
  return Error("There can only be one default row without a when predicate function.");
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * @docs-private
 */


function getTableMissingMatchingRowDefError(data) {
  return Error("Could not find a matching row definition for the" + "provided row data: ".concat(JSON.stringify(data)));
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * @docs-private
 */


function getTableMissingRowDefsError() {
  return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * @docs-private
 */


function getTableUnknownDataSourceError() {
  return Error("Provided data source did not match an array, Observable, or DataSource");
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * @docs-private
 */


function getTableTextColumnMissingParentTableError() {
  return Error("Text column could not find a parent table for registration.");
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * @docs-private
 */


function getTableTextColumnMissingNameError() {
  return Error("Table text column must have a name.");
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The injection token used to specify the StickyPositioningListener. */


var STICKY_POSITIONING_LISTENER = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('CDK_SPL');

var CdkRecycleRows = /*@__PURE__*/function () {
  var CdkRecycleRows = function CdkRecycleRows() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkRecycleRows);
  };

  CdkRecycleRows.ɵfac = function CdkRecycleRows_Factory(t) {
    return new (t || CdkRecycleRows)();
  };

  CdkRecycleRows.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: CdkRecycleRows,
    selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__._VIEW_REPEATER_STRATEGY,
      useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__._RecycleViewRepeaterStrategy
    }])]
  });
  return CdkRecycleRows;
}();

var DataRowOutlet = /*@__PURE__*/function () {
  var DataRowOutlet = function DataRowOutlet(viewContainer, elementRef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, DataRowOutlet);

    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
  };

  DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) {
    return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
  };

  DataRowOutlet.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: DataRowOutlet,
    selectors: [["", "rowOutlet", ""]]
  });
  return DataRowOutlet;
}();

var HeaderRowOutlet = /*@__PURE__*/function () {
  var HeaderRowOutlet = function HeaderRowOutlet(viewContainer, elementRef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, HeaderRowOutlet);

    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
  };

  HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) {
    return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
  };

  HeaderRowOutlet.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: HeaderRowOutlet,
    selectors: [["", "headerRowOutlet", ""]]
  });
  return HeaderRowOutlet;
}();

var FooterRowOutlet = /*@__PURE__*/function () {
  var FooterRowOutlet = function FooterRowOutlet(viewContainer, elementRef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, FooterRowOutlet);

    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
  };

  FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) {
    return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
  };

  FooterRowOutlet.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: FooterRowOutlet,
    selectors: [["", "footerRowOutlet", ""]]
  });
  return FooterRowOutlet;
}();

var NoDataRowOutlet = /*@__PURE__*/function () {
  var NoDataRowOutlet = function NoDataRowOutlet(viewContainer, elementRef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, NoDataRowOutlet);

    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
  };

  NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) {
    return new (t || NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
  };

  NoDataRowOutlet.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: NoDataRowOutlet,
    selectors: [["", "noDataRowOutlet", ""]]
  });
  return NoDataRowOutlet;
}();
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @docs-private
 */


var CDK_TABLE_TEMPLATE = // Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
"\n  <ng-content select=\"caption\"></ng-content>\n  <ng-content select=\"colgroup, col\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container noDataRowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * @docs-private
 */

var RowViewRef = /*#__PURE__*/function (_EmbeddedViewRef) {
  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(RowViewRef, _EmbeddedViewRef);

  var _super11 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__.default)(RowViewRef);

  function RowViewRef() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, RowViewRef);

    return _super11.apply(this, arguments);
  }

  return RowViewRef;
}(_angular_core__WEBPACK_IMPORTED_MODULE_8__.EmbeddedViewRef);

var CdkTable = /*@__PURE__*/function () {
  var CdkTable = /*#__PURE__*/function () {
    function CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler,
    /**
     * @deprecated `_stickyPositioningListener` parameter to become required.
     * @breaking-change 13.0.0
     */
    _stickyPositioningListener) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkTable);

      this._differs = _differs;
      this._changeDetectorRef = _changeDetectorRef;
      this._elementRef = _elementRef;
      this._dir = _dir;
      this._platform = _platform;
      this._viewRepeater = _viewRepeater;
      this._coalescedStyleScheduler = _coalescedStyleScheduler;
      this._viewportRuler = _viewportRuler;
      this._stickyPositioningListener = _stickyPositioningListener;
      /** Subject that emits when the component has been destroyed. */

      this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
      /**
       * Map of all the user's defined columns (header, data, and footer cell template) identified by
       * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
       * any custom column definitions added to `_customColumnDefs`.
       */

      this._columnDefsByName = new Map();
      /**
       * Column definitions that were defined outside of the direct content children of the table.
       * These will be defined when, e.g., creating a wrapper around the cdkTable that has
       * column definitions as *its* content child.
       */

      this._customColumnDefs = new Set();
      /**
       * Data row definitions that were defined outside of the direct content children of the table.
       * These will be defined when, e.g., creating a wrapper around the cdkTable that has
       * built-in data rows as *its* content child.
       */

      this._customRowDefs = new Set();
      /**
       * Header row definitions that were defined outside of the direct content children of the table.
       * These will be defined when, e.g., creating a wrapper around the cdkTable that has
       * built-in header rows as *its* content child.
       */

      this._customHeaderRowDefs = new Set();
      /**
       * Footer row definitions that were defined outside of the direct content children of the table.
       * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
       * built-in footer row as *its* content child.
       */

      this._customFooterRowDefs = new Set();
      /**
       * Whether the header row definition has been changed. Triggers an update to the header row after
       * content is checked. Initialized as true so that the table renders the initial set of rows.
       */

      this._headerRowDefChanged = true;
      /**
       * Whether the footer row definition has been changed. Triggers an update to the footer row after
       * content is checked. Initialized as true so that the table renders the initial set of rows.
       */

      this._footerRowDefChanged = true;
      /**
       * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
       * change.
       */

      this._stickyColumnStylesNeedReset = true;
      /**
       * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
       * `false`, cached values will be used instead. This is only applicable to tables with
       * {@link fixedLayout} enabled. For other tables, cell widths will always be recalculated.
       */

      this._forceRecalculateCellWidths = true;
      /**
       * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
       * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
       * the cached `RenderRow` objects when possible, the row identity is preserved when the data
       * and row template matches, which allows the `IterableDiffer` to check rows by reference
       * and understand which rows are added/moved/removed.
       *
       * Implemented as a map of maps where the first key is the `data: T` object and the second is the
       * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
       * contains an array of created pairs. The array is necessary to handle cases where the data
       * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
       * stored.
       */

      this._cachedRenderRowsMap = new Map();
      /**
       * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
       * table subclasses.
       */

      this.stickyCssClass = 'cdk-table-sticky';
      /**
       * Whether to manually add positon: sticky to all sticky cell elements. Not needed if
       * the position is set in a selector associated with the value of stickyCssClass. May be
       * overridden by table subclasses
       */

      this.needsPositionStickyOnElement = true;
      /** Whether the no data row is currently showing anything. */

      this._isShowingNoDataRow = false;
      this._multiTemplateDataRows = false;
      this._fixedLayout = false; // TODO(andrewseguin): Remove max value as the end index
      //   and instead calculate the view on init and scroll.

      /**
       * Stream containing the latest information on what rows are being displayed on screen.
       * Can be used by the data source to as a heuristic of what data should be provided.
       *
       * @docs-private
       */

      this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject({
        start: 0,
        end: Number.MAX_VALUE
      });

      if (!role) {
        this._elementRef.nativeElement.setAttribute('role', 'table');
      }

      this._document = _document;
      this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
     * relative to the function to know if a row should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(CdkTable, [{
      key: "trackBy",
      get: function get() {
        return this._trackByFn;
      },
      set: function set(fn) {
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && fn != null && typeof fn !== 'function') {
          console.warn("trackBy must be a function, but received ".concat(JSON.stringify(fn), "."));
        }

        this._trackByFn = fn;
      }
      /**
       * The table's source of data, which can be provided in three ways (in order of complexity):
       *   - Simple data array (each object represents one table row)
       *   - Stream that emits a data array each time the array changes
       *   - `DataSource` object that implements the connect/disconnect interface.
       *
       * If a data array is provided, the table must be notified when the array's objects are
       * added, removed, or moved. This can be done by calling the `renderRows()` function which will
       * render the diff since the last table render. If the data array reference is changed, the table
       * will automatically trigger an update to the rows.
       *
       * When providing an Observable stream, the table will trigger an update automatically when the
       * stream emits a new array of data.
       *
       * Finally, when providing a `DataSource` object, the table will use the Observable stream
       * provided by the connect function and trigger updates when that stream emits new data array
       * values. During the table's ngOnDestroy or when the data source is removed from the table, the
       * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
       * subscriptions registered during the connect process).
       */

    }, {
      key: "dataSource",
      get: function get() {
        return this._dataSource;
      },
      set: function set(dataSource) {
        if (this._dataSource !== dataSource) {
          this._switchDataSource(dataSource);
        }
      }
      /**
       * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
       * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
       * dataobject will render the first row that evaluates its when predicate to true, in the order
       * defined in the table, or otherwise the default row which does not have a when predicate.
       */

    }, {
      key: "multiTemplateDataRows",
      get: function get() {
        return this._multiTemplateDataRows;
      },
      set: function set(v) {
        this._multiTemplateDataRows = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceBooleanProperty)(v); // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
        // this setter will be invoked before the row outlet has been defined hence the null check.

        if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
          this._forceRenderDataRows();

          this.updateStickyColumnStyles();
        }
      }
      /**
       * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
       * and optimize rendering sticky styles for native tables. No-op for flex tables.
       */

    }, {
      key: "fixedLayout",
      get: function get() {
        return this._fixedLayout;
      },
      set: function set(v) {
        this._fixedLayout = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceBooleanProperty)(v); // Toggling `fixedLayout` may change column widths. Sticky column styles should be recalculated.

        this._forceRecalculateCellWidths = true;
        this._stickyColumnStylesNeedReset = true;
      }
    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        var _this13 = this;

        this._setupStickyStyler();

        if (this._isNativeHtmlTable) {
          this._applyNativeTableSections();
        } // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
        // the user has provided a custom trackBy, return the result of that function as evaluated
        // with the values of the `RenderRow`'s data and index.


        this._dataDiffer = this._differs.find([]).create(function (_i, dataRow) {
          return _this13.trackBy ? _this13.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
        });

        this._viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._onDestroy)).subscribe(function () {
          _this13._forceRecalculateCellWidths = true;
        });
      }
    }, {
      key: "ngAfterContentChecked",
      value: function ngAfterContentChecked() {
        // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
        this._cacheRowDefs();

        this._cacheColumnDefs(); // Make sure that the user has at least added header, footer, or data row def.


        if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableMissingRowDefsError();
        } // Render updates if the list of columns have been changed for the header, row, or footer defs.


        var columnsChanged = this._renderUpdatedColumns();

        var rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged; // Ensure sticky column styles are reset if set to `true` elsewhere.

        this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
        this._forceRecalculateCellWidths = rowDefsChanged; // If the header row definition has been changed, trigger a render to the header row.

        if (this._headerRowDefChanged) {
          this._forceRenderHeaderRows();

          this._headerRowDefChanged = false;
        } // If the footer row definition has been changed, trigger a render to the footer row.


        if (this._footerRowDefChanged) {
          this._forceRenderFooterRows();

          this._footerRowDefChanged = false;
        } // If there is a data source and row definitions, connect to the data source unless a
        // connection has already been made.


        if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
          this._observeRenderChanges();
        } else if (this._stickyColumnStylesNeedReset) {
          // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
          // called when it row data arrives. Otherwise, we need to call it proactively.
          this.updateStickyColumnStyles();
        }

        this._checkStickyStates();
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._rowOutlet.viewContainer.clear();

        this._noDataRowOutlet.viewContainer.clear();

        this._headerRowOutlet.viewContainer.clear();

        this._footerRowOutlet.viewContainer.clear();

        this._cachedRenderRowsMap.clear();

        this._onDestroy.next();

        this._onDestroy.complete();

        if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.isDataSource)(this.dataSource)) {
          this.dataSource.disconnect(this);
        }
      }
      /**
       * Renders rows based on the table's latest set of data, which was either provided directly as an
       * input or retrieved through an Observable stream (directly or from a DataSource).
       * Checks for differences in the data since the last diff to perform only the necessary
       * changes (add/remove/move rows).
       *
       * If the table's data source is a DataSource or Observable, this will be invoked automatically
       * each time the provided Observable stream emits a new data array. Otherwise if your data is
       * an array, this function will need to be called to render any changes.
       */

    }, {
      key: "renderRows",
      value: function renderRows() {
        var _this14 = this;

        this._renderRows = this._getAllRenderRows();

        var changes = this._dataDiffer.diff(this._renderRows);

        if (!changes) {
          this._updateNoDataRow();

          return;
        }

        var viewContainer = this._rowOutlet.viewContainer;

        this._viewRepeater.applyChanges(changes, viewContainer, function (record, _adjustedPreviousIndex, currentIndex) {
          return _this14._getEmbeddedViewArgs(record.item, currentIndex);
        }, function (record) {
          return record.item.data;
        }, function (change) {
          if (change.operation === 1
          /* INSERTED */
          && change.context) {
            _this14._renderCellTemplateForItem(change.record.item.rowDef, change.context);
          }
        }); // Update the meta context of a row's context data (index, count, first, last, ...)


        this._updateRowIndexContext(); // Update rows that did not get added/removed/moved but may have had their identity changed,
        // e.g. if trackBy matched data on some property but the actual data reference changed.


        changes.forEachIdentityChange(function (record) {
          var rowView = viewContainer.get(record.currentIndex);
          rowView.context.$implicit = record.item.data;
        });

        this._updateNoDataRow();

        this.updateStickyColumnStyles();
      }
      /** Adds a column definition that was not included as part of the content children. */

    }, {
      key: "addColumnDef",
      value: function addColumnDef(columnDef) {
        this._customColumnDefs.add(columnDef);
      }
      /** Removes a column definition that was not included as part of the content children. */

    }, {
      key: "removeColumnDef",
      value: function removeColumnDef(columnDef) {
        this._customColumnDefs.delete(columnDef);
      }
      /** Adds a row definition that was not included as part of the content children. */

    }, {
      key: "addRowDef",
      value: function addRowDef(rowDef) {
        this._customRowDefs.add(rowDef);
      }
      /** Removes a row definition that was not included as part of the content children. */

    }, {
      key: "removeRowDef",
      value: function removeRowDef(rowDef) {
        this._customRowDefs.delete(rowDef);
      }
      /** Adds a header row definition that was not included as part of the content children. */

    }, {
      key: "addHeaderRowDef",
      value: function addHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.add(headerRowDef);

        this._headerRowDefChanged = true;
      }
      /** Removes a header row definition that was not included as part of the content children. */

    }, {
      key: "removeHeaderRowDef",
      value: function removeHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.delete(headerRowDef);

        this._headerRowDefChanged = true;
      }
      /** Adds a footer row definition that was not included as part of the content children. */

    }, {
      key: "addFooterRowDef",
      value: function addFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.add(footerRowDef);

        this._footerRowDefChanged = true;
      }
      /** Removes a footer row definition that was not included as part of the content children. */

    }, {
      key: "removeFooterRowDef",
      value: function removeFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.delete(footerRowDef);

        this._footerRowDefChanged = true;
      }
      /** Sets a no data row definition that was not included as a part of the content children. */

    }, {
      key: "setNoDataRow",
      value: function setNoDataRow(noDataRow) {
        this._customNoDataRow = noDataRow;
      }
      /**
       * Updates the header sticky styles. First resets all applied styles with respect to the cells
       * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
       * automatically called when the header row changes its displayed set of columns, or if its
       * sticky input changes. May be called manually for cases where the cell content changes outside
       * of these events.
       */

    }, {
      key: "updateStickyHeaderRowStyles",
      value: function updateStickyHeaderRowStyles() {
        var headerRows = this._getRenderedRows(this._headerRowOutlet);

        var tableElement = this._elementRef.nativeElement; // Hide the thead element if there are no header rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.

        var thead = tableElement.querySelector('thead');

        if (thead) {
          thead.style.display = headerRows.length ? '' : 'none';
        }

        var stickyStates = this._headerRowDefs.map(function (def) {
          return def.sticky;
        });

        this._stickyStyler.clearStickyPositioning(headerRows, ['top']);

        this._stickyStyler.stickRows(headerRows, stickyStates, 'top'); // Reset the dirty state of the sticky input change since it has been used.


        this._headerRowDefs.forEach(function (def) {
          return def.resetStickyChanged();
        });
      }
      /**
       * Updates the footer sticky styles. First resets all applied styles with respect to the cells
       * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
       * automatically called when the footer row changes its displayed set of columns, or if its
       * sticky input changes. May be called manually for cases where the cell content changes outside
       * of these events.
       */

    }, {
      key: "updateStickyFooterRowStyles",
      value: function updateStickyFooterRowStyles() {
        var footerRows = this._getRenderedRows(this._footerRowOutlet);

        var tableElement = this._elementRef.nativeElement; // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.

        var tfoot = tableElement.querySelector('tfoot');

        if (tfoot) {
          tfoot.style.display = footerRows.length ? '' : 'none';
        }

        var stickyStates = this._footerRowDefs.map(function (def) {
          return def.sticky;
        });

        this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);

        this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');

        this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates); // Reset the dirty state of the sticky input change since it has been used.


        this._footerRowDefs.forEach(function (def) {
          return def.resetStickyChanged();
        });
      }
      /**
       * Updates the column sticky styles. First resets all applied styles with respect to the cells
       * sticking to the left and right. Then sticky styles are added for the left and right according
       * to the column definitions for each cell in each row. This is automatically called when
       * the data source provides a new set of data or when a column definition changes its sticky
       * input. May be called manually for cases where the cell content changes outside of these events.
       */

    }, {
      key: "updateStickyColumnStyles",
      value: function updateStickyColumnStyles() {
        var _this15 = this;

        var headerRows = this._getRenderedRows(this._headerRowOutlet);

        var dataRows = this._getRenderedRows(this._rowOutlet);

        var footerRows = this._getRenderedRows(this._footerRowOutlet); // For tables not using a fixed layout, the column widths may change when new rows are rendered.
        // In a table using a fixed layout, row content won't affect column width, so sticky styles
        // don't need to be cleared unless either the sticky column config changes or one of the row
        // defs change.


        if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
          // Clear the left and right positioning from all columns in the table across all rows since
          // sticky columns span across all table sections (header, data, footer)
          this._stickyStyler.clearStickyPositioning([].concat((0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(headerRows), (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(dataRows), (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(footerRows)), ['left', 'right']);

          this._stickyColumnStylesNeedReset = false;
        } // Update the sticky styles for each header row depending on the def's sticky state


        headerRows.forEach(function (headerRow, i) {
          _this15._addStickyColumnStyles([headerRow], _this15._headerRowDefs[i]);
        }); // Update the sticky styles for each data row depending on its def's sticky state

        this._rowDefs.forEach(function (rowDef) {
          // Collect all the rows rendered with this row definition.
          var rows = [];

          for (var i = 0; i < dataRows.length; i++) {
            if (_this15._renderRows[i].rowDef === rowDef) {
              rows.push(dataRows[i]);
            }
          }

          _this15._addStickyColumnStyles(rows, rowDef);
        }); // Update the sticky styles for each footer row depending on the def's sticky state


        footerRows.forEach(function (footerRow, i) {
          _this15._addStickyColumnStyles([footerRow], _this15._footerRowDefs[i]);
        }); // Reset the dirty state of the sticky input change since it has been used.

        Array.from(this._columnDefsByName.values()).forEach(function (def) {
          return def.resetStickyChanged();
        });
      }
      /**
       * Get the list of RenderRow objects to render according to the current list of data and defined
       * row definitions. If the previous list already contained a particular pair, it should be reused
       * so that the differ equates their references.
       */

    }, {
      key: "_getAllRenderRows",
      value: function _getAllRenderRows() {
        var renderRows = []; // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
        // new cache while unused ones can be picked up by garbage collection.

        var prevCachedRenderRows = this._cachedRenderRowsMap;
        this._cachedRenderRowsMap = new Map(); // For each data object, get the list of rows that should be rendered, represented by the
        // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.

        for (var i = 0; i < this._data.length; i++) {
          var data = this._data[i];

          var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));

          if (!this._cachedRenderRowsMap.has(data)) {
            this._cachedRenderRowsMap.set(data, new WeakMap());
          }

          for (var j = 0; j < renderRowsForData.length; j++) {
            var renderRow = renderRowsForData[j];

            var cache = this._cachedRenderRowsMap.get(renderRow.data);

            if (cache.has(renderRow.rowDef)) {
              cache.get(renderRow.rowDef).push(renderRow);
            } else {
              cache.set(renderRow.rowDef, [renderRow]);
            }

            renderRows.push(renderRow);
          }
        }

        return renderRows;
      }
      /**
       * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
       * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
       * `(T, CdkRowDef)` pair.
       */

    }, {
      key: "_getRenderRowsForData",
      value: function _getRenderRowsForData(data, dataIndex, cache) {
        var rowDefs = this._getRowDefs(data, dataIndex);

        return rowDefs.map(function (rowDef) {
          var cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];

          if (cachedRenderRows.length) {
            var dataRow = cachedRenderRows.shift();
            dataRow.dataIndex = dataIndex;
            return dataRow;
          } else {
            return {
              data: data,
              rowDef: rowDef,
              dataIndex: dataIndex
            };
          }
        });
      }
      /** Update the map containing the content's column definitions. */

    }, {
      key: "_cacheColumnDefs",
      value: function _cacheColumnDefs() {
        var _this16 = this;

        this._columnDefsByName.clear();

        var columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
        columnDefs.forEach(function (columnDef) {
          if (_this16._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableDuplicateColumnNameError(columnDef.name);
          }

          _this16._columnDefsByName.set(columnDef.name, columnDef);
        });
      }
      /** Update the list of all available row definitions that can be used. */

    }, {
      key: "_cacheRowDefs",
      value: function _cacheRowDefs() {
        this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
        this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
        this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs); // After all row definitions are determined, find the row definition to be considered default.

        var defaultRowDefs = this._rowDefs.filter(function (def) {
          return !def.when;
        });

        if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableMultipleDefaultRowDefsError();
        }

        this._defaultRowDef = defaultRowDefs[0];
      }
      /**
       * Check if the header, data, or footer rows have changed what columns they want to display or
       * whether the sticky states have changed for the header or footer. If there is a diff, then
       * re-render that section.
       */

    }, {
      key: "_renderUpdatedColumns",
      value: function _renderUpdatedColumns() {
        var columnsDiffReducer = function columnsDiffReducer(acc, def) {
          return acc || !!def.getColumnsDiff();
        }; // Force re-render data rows if the list of column definitions have changed.


        var dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);

        if (dataColumnsChanged) {
          this._forceRenderDataRows();
        } // Force re-render header/footer rows if the list of column definitions have changed.


        var headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);

        if (headerColumnsChanged) {
          this._forceRenderHeaderRows();
        }

        var footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);

        if (footerColumnsChanged) {
          this._forceRenderFooterRows();
        }

        return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
      }
      /**
       * Switch to the provided data source by resetting the data and unsubscribing from the current
       * render change subscription if one exists. If the data source is null, interpret this by
       * clearing the row outlet. Otherwise start listening for new data.
       */

    }, {
      key: "_switchDataSource",
      value: function _switchDataSource(dataSource) {
        this._data = [];

        if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.isDataSource)(this.dataSource)) {
          this.dataSource.disconnect(this);
        } // Stop listening for data from the previous data source.


        if (this._renderChangeSubscription) {
          this._renderChangeSubscription.unsubscribe();

          this._renderChangeSubscription = null;
        }

        if (!dataSource) {
          if (this._dataDiffer) {
            this._dataDiffer.diff([]);
          }

          this._rowOutlet.viewContainer.clear();
        }

        this._dataSource = dataSource;
      }
      /** Set up a subscription for the data provided by the data source. */

    }, {
      key: "_observeRenderChanges",
      value: function _observeRenderChanges() {
        var _this17 = this;

        // If no data source has been set, there is nothing to observe for changes.
        if (!this.dataSource) {
          return;
        }

        var dataStream;

        if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.isDataSource)(this.dataSource)) {
          dataStream = this.dataSource.connect(this);
        } else if ((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.isObservable)(this.dataSource)) {
          dataStream = this.dataSource;
        } else if (Array.isArray(this.dataSource)) {
          dataStream = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(this.dataSource);
        }

        if (dataStream === undefined && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableUnknownDataSourceError();
        }

        this._renderChangeSubscription = dataStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._onDestroy)).subscribe(function (data) {
          _this17._data = data || [];

          _this17.renderRows();
        });
      }
      /**
       * Clears any existing content in the header row outlet and creates a new embedded view
       * in the outlet using the header row definition.
       */

    }, {
      key: "_forceRenderHeaderRows",
      value: function _forceRenderHeaderRows() {
        var _this18 = this;

        // Clear the header row outlet if any content exists.
        if (this._headerRowOutlet.viewContainer.length > 0) {
          this._headerRowOutlet.viewContainer.clear();
        }

        this._headerRowDefs.forEach(function (def, i) {
          return _this18._renderRow(_this18._headerRowOutlet, def, i);
        });

        this.updateStickyHeaderRowStyles();
      }
      /**
       * Clears any existing content in the footer row outlet and creates a new embedded view
       * in the outlet using the footer row definition.
       */

    }, {
      key: "_forceRenderFooterRows",
      value: function _forceRenderFooterRows() {
        var _this19 = this;

        // Clear the footer row outlet if any content exists.
        if (this._footerRowOutlet.viewContainer.length > 0) {
          this._footerRowOutlet.viewContainer.clear();
        }

        this._footerRowDefs.forEach(function (def, i) {
          return _this19._renderRow(_this19._footerRowOutlet, def, i);
        });

        this.updateStickyFooterRowStyles();
      }
      /** Adds the sticky column styles for the rows according to the columns' stick states. */

    }, {
      key: "_addStickyColumnStyles",
      value: function _addStickyColumnStyles(rows, rowDef) {
        var _this20 = this;

        var columnDefs = Array.from(rowDef.columns || []).map(function (columnName) {
          var columnDef = _this20._columnDefsByName.get(columnName);

          if (!columnDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableUnknownColumnError(columnName);
          }

          return columnDef;
        });
        var stickyStartStates = columnDefs.map(function (columnDef) {
          return columnDef.sticky;
        });
        var stickyEndStates = columnDefs.map(function (columnDef) {
          return columnDef.stickyEnd;
        });

        this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
      }
      /** Gets the list of rows that have been rendered in the row outlet. */

    }, {
      key: "_getRenderedRows",
      value: function _getRenderedRows(rowOutlet) {
        var renderedRows = [];

        for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
          var viewRef = rowOutlet.viewContainer.get(i);
          renderedRows.push(viewRef.rootNodes[0]);
        }

        return renderedRows;
      }
      /**
       * Get the matching row definitions that should be used for this row data. If there is only
       * one row definition, it is returned. Otherwise, find the row definitions that has a when
       * predicate that returns true with the data. If none return true, return the default row
       * definition.
       */

    }, {
      key: "_getRowDefs",
      value: function _getRowDefs(data, dataIndex) {
        if (this._rowDefs.length == 1) {
          return [this._rowDefs[0]];
        }

        var rowDefs = [];

        if (this.multiTemplateDataRows) {
          rowDefs = this._rowDefs.filter(function (def) {
            return !def.when || def.when(dataIndex, data);
          });
        } else {
          var rowDef = this._rowDefs.find(function (def) {
            return def.when && def.when(dataIndex, data);
          }) || this._defaultRowDef;

          if (rowDef) {
            rowDefs.push(rowDef);
          }
        }

        if (!rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableMissingMatchingRowDefError(data);
        }

        return rowDefs;
      }
    }, {
      key: "_getEmbeddedViewArgs",
      value: function _getEmbeddedViewArgs(renderRow, index) {
        var rowDef = renderRow.rowDef;
        var context = {
          $implicit: renderRow.data
        };
        return {
          templateRef: rowDef.template,
          context: context,
          index: index
        };
      }
      /**
       * Creates a new row template in the outlet and fills it with the set of cell templates.
       * Optionally takes a context to provide to the row and cells, as well as an optional index
       * of where to place the new row template in the outlet.
       */

    }, {
      key: "_renderRow",
      value: function _renderRow(outlet, rowDef, index) {
        var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
        var view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);

        this._renderCellTemplateForItem(rowDef, context);

        return view;
      }
    }, {
      key: "_renderCellTemplateForItem",
      value: function _renderCellTemplateForItem(rowDef, context) {
        var _iterator10 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__.default)(this._getCellTemplates(rowDef)),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var cellTemplate = _step10.value;

            if (CdkCellOutlet.mostRecentCellOutlet) {
              CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
            }
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }

        this._changeDetectorRef.markForCheck();
      }
      /**
       * Updates the index-related context for each row to reflect any changes in the index of the rows,
       * e.g. first/last/even/odd.
       */

    }, {
      key: "_updateRowIndexContext",
      value: function _updateRowIndexContext() {
        var viewContainer = this._rowOutlet.viewContainer;

        for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
          var viewRef = viewContainer.get(renderIndex);
          var context = viewRef.context;
          context.count = count;
          context.first = renderIndex === 0;
          context.last = renderIndex === count - 1;
          context.even = renderIndex % 2 === 0;
          context.odd = !context.even;

          if (this.multiTemplateDataRows) {
            context.dataIndex = this._renderRows[renderIndex].dataIndex;
            context.renderIndex = renderIndex;
          } else {
            context.index = this._renderRows[renderIndex].dataIndex;
          }
        }
      }
      /** Gets the column definitions for the provided row def. */

    }, {
      key: "_getCellTemplates",
      value: function _getCellTemplates(rowDef) {
        var _this21 = this;

        if (!rowDef || !rowDef.columns) {
          return [];
        }

        return Array.from(rowDef.columns, function (columnId) {
          var column = _this21._columnDefsByName.get(columnId);

          if (!column && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableUnknownColumnError(columnId);
          }

          return rowDef.extractCellTemplate(column);
        });
      }
      /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */

    }, {
      key: "_applyNativeTableSections",
      value: function _applyNativeTableSections() {
        var documentFragment = this._document.createDocumentFragment();

        var sections = [{
          tag: 'thead',
          outlets: [this._headerRowOutlet]
        }, {
          tag: 'tbody',
          outlets: [this._rowOutlet, this._noDataRowOutlet]
        }, {
          tag: 'tfoot',
          outlets: [this._footerRowOutlet]
        }];

        for (var _i2 = 0, _sections = sections; _i2 < _sections.length; _i2++) {
          var section = _sections[_i2];

          var element = this._document.createElement(section.tag);

          element.setAttribute('role', 'rowgroup');

          var _iterator11 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__.default)(section.outlets),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var outlet = _step11.value;
              element.appendChild(outlet.elementRef.nativeElement);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          documentFragment.appendChild(element);
        } // Use a DocumentFragment so we don't hit the DOM on each iteration.


        this._elementRef.nativeElement.appendChild(documentFragment);
      }
      /**
       * Forces a re-render of the data rows. Should be called in cases where there has been an input
       * change that affects the evaluation of which rows should be rendered, e.g. toggling
       * `multiTemplateDataRows` or adding/removing row definitions.
       */

    }, {
      key: "_forceRenderDataRows",
      value: function _forceRenderDataRows() {
        this._dataDiffer.diff([]);

        this._rowOutlet.viewContainer.clear();

        this.renderRows();
      }
      /**
       * Checks if there has been a change in sticky states since last check and applies the correct
       * sticky styles. Since checking resets the "dirty" state, this should only be performed once
       * during a change detection and after the inputs are settled (after content check).
       */

    }, {
      key: "_checkStickyStates",
      value: function _checkStickyStates() {
        var stickyCheckReducer = function stickyCheckReducer(acc, d) {
          return acc || d.hasStickyChanged();
        }; // Note that the check needs to occur for every definition since it notifies the definition
        // that it can reset its dirty state. Using another operator like `some` may short-circuit
        // remaining definitions and leave them in an unchecked state.


        if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
          this.updateStickyHeaderRowStyles();
        }

        if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
          this.updateStickyFooterRowStyles();
        }

        if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
          this._stickyColumnStylesNeedReset = true;
          this.updateStickyColumnStyles();
        }
      }
      /**
       * Creates the sticky styler that will be used for sticky rows and columns. Listens
       * for directionality changes and provides the latest direction to the styler. Re-applies column
       * stickiness when directionality changes.
       */

    }, {
      key: "_setupStickyStyler",
      value: function _setupStickyStyler() {
        var _this22 = this;

        var direction = this._dir ? this._dir.value : 'ltr';
        this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener);
        (this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._onDestroy)).subscribe(function (value) {
          _this22._stickyStyler.direction = value;

          _this22.updateStickyColumnStyles();
        });
      }
      /** Filters definitions that belong to this table from a QueryList. */

    }, {
      key: "_getOwnDefs",
      value: function _getOwnDefs(items) {
        var _this23 = this;

        return items.filter(function (item) {
          return !item._table || item._table === _this23;
        });
      }
      /** Creates or removes the no data row, depending on whether any data is being shown. */

    }, {
      key: "_updateNoDataRow",
      value: function _updateNoDataRow() {
        var noDataRow = this._customNoDataRow || this._noDataRow;

        if (noDataRow) {
          var shouldShow = this._rowOutlet.viewContainer.length === 0;

          if (shouldShow !== this._isShowingNoDataRow) {
            var container = this._noDataRowOutlet.viewContainer;
            shouldShow ? container.createEmbeddedView(noDataRow.templateRef) : container.clear();
            this._isShowingNoDataRow = shouldShow;
          }
        }
      }
    }]);

    return CdkTable;
  }();

  CdkTable.ɵfac = function CdkTable_Factory(t) {
    return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__._VIEW_REPEATER_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_COALESCED_STYLE_SCHEDULER), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](STICKY_POSITIONING_LISTENER, 12));
  };

  CdkTable.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CdkTable,
    selectors: [["cdk-table"], ["table", "cdk-table", ""]],
    contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, CdkNoDataRow, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, CdkRowDef, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
      }
    },
    viewQuery: function CdkTable_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](DataRowOutlet, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](HeaderRowOutlet, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](FooterRowOutlet, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](NoDataRowOutlet, 7);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._noDataRowOutlet = _t.first);
      }
    },
    hostAttrs: [1, "cdk-table"],
    hostVars: 2,
    hostBindings: function CdkTable_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("cdk-table-fixed-layout", ctx.fixedLayout);
      }
    },
    inputs: {
      trackBy: "trackBy",
      dataSource: "dataSource",
      multiTemplateDataRows: "multiTemplateDataRows",
      fixedLayout: "fixedLayout"
    },
    exportAs: ["cdkTable"],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
      provide: CDK_TABLE,
      useExisting: CdkTable
    }, {
      provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__._VIEW_REPEATER_STRATEGY,
      useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__._DisposeViewRepeaterStrategy
    }, {
      provide: _COALESCED_STYLE_SCHEDULER,
      useClass: _CoalescedStyleScheduler
    }, // Prevent nested tables from seeing this table's StickyPositioningListener.
    {
      provide: STICKY_POSITIONING_LISTENER,
      useValue: null
    }])],
    ngContentSelectors: _c1,
    decls: 6,
    vars: 0,
    consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
    template: function CdkTable_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](5, 3);
      }
    },
    directives: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
    styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"],
    encapsulation: 2
  });
  return CdkTable;
}();
/** Utility function that gets a merged list of the entries in an array and values of a Set. */


function mergeArrayAndSet(array, set) {
  return array.concat(Array.from(set));
}

var CdkTextColumn = /*@__PURE__*/function () {
  var CdkTextColumn = /*#__PURE__*/function () {
    function CdkTextColumn( // `CdkTextColumn` is always requiring a table, but we just assert it manually
    // for better error reporting.
    // tslint:disable-next-line: lightweight-tokens
    _table, _options) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkTextColumn);

      this._table = _table;
      this._options = _options;
      /** Alignment of the cell values. */

      this.justify = 'start';
      this._options = _options || {};
    }
    /** Column name that should be used to reference this column. */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(CdkTextColumn, [{
      key: "name",
      get: function get() {
        return this._name;
      },
      set: function set(name) {
        this._name = name; // With Ivy, inputs can be initialized before static query results are
        // available. In that case, we defer the synchronization until "ngOnInit" fires.

        this._syncColumnDefName();
      }
    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        this._syncColumnDefName();

        if (this.headerText === undefined) {
          this.headerText = this._createDefaultHeaderText();
        }

        if (!this.dataAccessor) {
          this.dataAccessor = this._options.defaultDataAccessor || function (data, name) {
            return data[name];
          };
        }

        if (this._table) {
          // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
          // since the columnDef will not pick up its content by the time the table finishes checking
          // its content and initializing the rows.
          this.columnDef.cell = this.cell;
          this.columnDef.headerCell = this.headerCell;

          this._table.addColumnDef(this.columnDef);
        } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
          throw getTableTextColumnMissingParentTableError();
        }
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        if (this._table) {
          this._table.removeColumnDef(this.columnDef);
        }
      }
      /**
       * Creates a default header text. Use the options' header text transformation function if one
       * has been provided. Otherwise simply capitalize the column name.
       */

    }, {
      key: "_createDefaultHeaderText",
      value: function _createDefaultHeaderText() {
        var name = this.name;

        if (!name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableTextColumnMissingNameError();
        }

        if (this._options && this._options.defaultHeaderTextTransform) {
          return this._options.defaultHeaderTextTransform(name);
        }

        return name[0].toUpperCase() + name.slice(1);
      }
      /** Synchronizes the column definition name with the text column name. */

    }, {
      key: "_syncColumnDefName",
      value: function _syncColumnDefName() {
        if (this.columnDef) {
          this.columnDef.name = this.name;
        }
      }
    }]);

    return CdkTextColumn;
  }();

  CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) {
    return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8));
  };

  CdkTextColumn.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CdkTextColumn,
    selectors: [["cdk-text-column"]],
    viewQuery: function CdkTextColumn_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](CdkColumnDef, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](CdkCellDef, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](CdkHeaderCellDef, 7);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
      }
    },
    inputs: {
      justify: "justify",
      name: "name",
      headerText: "headerText",
      dataAccessor: "dataAccessor"
    },
    decls: 3,
    vars: 0,
    consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
    template: function CdkTextColumn_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      }
    },
    directives: [CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderCell, CdkCell],
    encapsulation: 2
  });
  return CdkTextColumn;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];

var CdkTableModule = /*@__PURE__*/function () {
  var CdkTableModule = function CdkTableModule() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CdkTableModule);
  };

  CdkTableModule.ɵfac = function CdkTableModule_Factory(t) {
    return new (t || CdkTableModule)();
  };

  CdkTableModule.ɵmod =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: CdkTableModule
  });
  CdkTableModule.ɵinj =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [[_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__.ScrollingModule]]
  });
  return CdkTableModule;
}();
/*@__PURE__*/


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CdkTableModule, {
    declarations: function declarations() {
      return [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];
    },
    imports: function imports() {
      return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__.ScrollingModule];
    },
    exports: function exports() {
      return [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 60246:
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutofillMonitor": function() { return /* binding */ AutofillMonitor; },
/* harmony export */   "CdkAutofill": function() { return /* binding */ CdkAutofill; },
/* harmony export */   "CdkTextareaAutosize": function() { return /* binding */ CdkTextareaAutosize; },
/* harmony export */   "TextFieldModule": function() { return /* binding */ TextFieldModule; }
/* harmony export */ });
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 93169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 19861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70653);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 55959);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 87254);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 35134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 25416);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61116);










/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Options to pass to the animationstart listener. */



var listenerOptions = /*@__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true
});

var AutofillMonitor = /*@__PURE__*/function () {
  var AutofillMonitor = /*#__PURE__*/function () {
    function AutofillMonitor(_platform, _ngZone) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AutofillMonitor);

      this._platform = _platform;
      this._ngZone = _ngZone;
      this._monitoredElements = new Map();
    }

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AutofillMonitor, [{
      key: "monitor",
      value: function monitor(elementOrRef) {
        var _this = this;

        if (!this._platform.isBrowser) {
          return rxjs__WEBPACK_IMPORTED_MODULE_3__.EMPTY;
        }

        var element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(elementOrRef);

        var info = this._monitoredElements.get(element);

        if (info) {
          return info.subject;
        }

        var result = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        var cssClass = 'cdk-text-field-autofilled';

        var listener = function listener(event) {
          // Animation events fire on initial element render, we check for the presence of the autofill
          // CSS class to make sure this is a real change in state, not just the initial render before
          // we fire off events.
          if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
            element.classList.add(cssClass);

            _this._ngZone.run(function () {
              return result.next({
                target: event.target,
                isAutofilled: true
              });
            });
          } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
            element.classList.remove(cssClass);

            _this._ngZone.run(function () {
              return result.next({
                target: event.target,
                isAutofilled: false
              });
            });
          }
        };

        this._ngZone.runOutsideAngular(function () {
          element.addEventListener('animationstart', listener, listenerOptions);
          element.classList.add('cdk-text-field-autofill-monitored');
        });

        this._monitoredElements.set(element, {
          subject: result,
          unlisten: function unlisten() {
            element.removeEventListener('animationstart', listener, listenerOptions);
          }
        });

        return result;
      }
    }, {
      key: "stopMonitoring",
      value: function stopMonitoring(elementOrRef) {
        var element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(elementOrRef);

        var info = this._monitoredElements.get(element);

        if (info) {
          info.unlisten();
          info.subject.complete();
          element.classList.remove('cdk-text-field-autofill-monitored');
          element.classList.remove('cdk-text-field-autofilled');

          this._monitoredElements.delete(element);
        }
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        var _this2 = this;

        this._monitoredElements.forEach(function (_info, element) {
          return _this2.stopMonitoring(element);
        });
      }
    }]);

    return AutofillMonitor;
  }();

  AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) {
    return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone));
  };

  AutofillMonitor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    factory: function AutofillMonitor_Factory() {
      return new AutofillMonitor(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone));
    },
    token: AutofillMonitor,
    providedIn: "root"
  });
  return AutofillMonitor;
}();

var CdkAutofill = /*@__PURE__*/function () {
  var CdkAutofill = /*#__PURE__*/function () {
    function CdkAutofill(_elementRef, _autofillMonitor) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, CdkAutofill);

      this._elementRef = _elementRef;
      this._autofillMonitor = _autofillMonitor;
      /** Emits when the autofill state of the element changes. */

      this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    }

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(CdkAutofill, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        var _this3 = this;

        this._autofillMonitor.monitor(this._elementRef).subscribe(function (event) {
          return _this3.cdkAutofill.emit(event);
        });
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._autofillMonitor.stopMonitoring(this._elementRef);
      }
    }]);

    return CdkAutofill;
  }();

  CdkAutofill.ɵfac = function CdkAutofill_Factory(t) {
    return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](AutofillMonitor));
  };

  CdkAutofill.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
    type: CdkAutofill,
    selectors: [["", "cdkAutofill", ""]],
    outputs: {
      cdkAutofill: "cdkAutofill"
    }
  });
  return CdkAutofill;
}();

var CdkTextareaAutosize = /*@__PURE__*/function () {
  var CdkTextareaAutosize = /*#__PURE__*/function () {
    function CdkTextareaAutosize(_elementRef, _platform, _ngZone,
    /** @breaking-change 11.0.0 make document required */
    document) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, CdkTextareaAutosize);

      this._elementRef = _elementRef;
      this._platform = _platform;
      this._ngZone = _ngZone;
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
      this._enabled = true;
      /**
       * Value of minRows as of last resize. If the minRows has decreased, the
       * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
       * does not have the same problem because it does not affect the textarea's scrollHeight.
       */

      this._previousMinRows = -1;
      this._isViewInited = false;
      this._document = document;
      this._textareaElement = this._elementRef.nativeElement;
      this._measuringClass = _platform.FIREFOX ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring';
    }
    /** Minimum amount of rows in the textarea. */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(CdkTextareaAutosize, [{
      key: "minRows",
      get: function get() {
        return this._minRows;
      },
      set: function set(value) {
        this._minRows = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceNumberProperty)(value);

        this._setMinHeight();
      }
      /** Maximum amount of rows in the textarea. */

    }, {
      key: "maxRows",
      get: function get() {
        return this._maxRows;
      },
      set: function set(value) {
        this._maxRows = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceNumberProperty)(value);

        this._setMaxHeight();
      }
      /** Whether autosizing is enabled or not */

    }, {
      key: "enabled",
      get: function get() {
        return this._enabled;
      },
      set: function set(value) {
        value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value); // Only act if the actual value changed. This specifically helps to not run
        // resizeToFitContent too early (i.e. before ngAfterViewInit)

        if (this._enabled !== value) {
          (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
        }
      }
    }, {
      key: "placeholder",
      get: function get() {
        return this._textareaElement.placeholder;
      },
      set: function set(value) {
        this._cachedPlaceholderHeight = undefined;
        this._textareaElement.placeholder = value;

        this._cacheTextareaPlaceholderHeight();
      }
      /** Sets the minimum height of the textarea as determined by minRows. */

    }, {
      key: "_setMinHeight",
      value: function _setMinHeight() {
        var minHeight = this.minRows && this._cachedLineHeight ? "".concat(this.minRows * this._cachedLineHeight, "px") : null;

        if (minHeight) {
          this._textareaElement.style.minHeight = minHeight;
        }
      }
      /** Sets the maximum height of the textarea as determined by maxRows. */

    }, {
      key: "_setMaxHeight",
      value: function _setMaxHeight() {
        var maxHeight = this.maxRows && this._cachedLineHeight ? "".concat(this.maxRows * this._cachedLineHeight, "px") : null;

        if (maxHeight) {
          this._textareaElement.style.maxHeight = maxHeight;
        }
      }
    }, {
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        var _this4 = this;

        if (this._platform.isBrowser) {
          // Remember the height which we started with in case autosizing is disabled
          this._initialHeight = this._textareaElement.style.height;
          this.resizeToFitContent();

          this._ngZone.runOutsideAngular(function () {
            var window = _this4._getWindow();

            (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(window, 'resize').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.auditTime)(16), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(_this4._destroyed)).subscribe(function () {
              return _this4.resizeToFitContent(true);
            });
          });

          this._isViewInited = true;
          this.resizeToFitContent(true);
        }
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._destroyed.next();

        this._destroyed.complete();
      }
      /**
       * Cache the height of a single-row textarea if it has not already been cached.
       *
       * We need to know how large a single "row" of a textarea is in order to apply minRows and
       * maxRows. For the initial version, we will assume that the height of a single line in the
       * textarea does not ever change.
       */

    }, {
      key: "_cacheTextareaLineHeight",
      value: function _cacheTextareaLineHeight() {
        if (this._cachedLineHeight) {
          return;
        } // Use a clone element because we have to override some styles.


        var textareaClone = this._textareaElement.cloneNode(false);

        textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.

        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

        textareaClone.style.overflow = 'hidden';

        this._textareaElement.parentNode.appendChild(textareaClone);

        this._cachedLineHeight = textareaClone.clientHeight;

        this._textareaElement.parentNode.removeChild(textareaClone); // Min and max heights have to be re-calculated if the cached line height changes


        this._setMinHeight();

        this._setMaxHeight();
      }
    }, {
      key: "_measureScrollHeight",
      value: function _measureScrollHeight() {
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        this._textareaElement.classList.add(this._measuringClass); // The measuring class includes a 2px padding to workaround an issue with Chrome,
        // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).


        var scrollHeight = this._textareaElement.scrollHeight - 4;

        this._textareaElement.classList.remove(this._measuringClass);

        return scrollHeight;
      }
    }, {
      key: "_cacheTextareaPlaceholderHeight",
      value: function _cacheTextareaPlaceholderHeight() {
        if (!this._isViewInited || this._cachedPlaceholderHeight != undefined) {
          return;
        }

        if (!this.placeholder) {
          this._cachedPlaceholderHeight = 0;
          return;
        }

        var value = this._textareaElement.value;
        this._textareaElement.value = this._textareaElement.placeholder;
        this._cachedPlaceholderHeight = this._measureScrollHeight();
        this._textareaElement.value = value;
      }
    }, {
      key: "ngDoCheck",
      value: function ngDoCheck() {
        if (this._platform.isBrowser) {
          this.resizeToFitContent();
        }
      }
      /**
       * Resize the textarea to fit its content.
       * @param force Whether to force a height recalculation. By default the height will be
       *    recalculated only if the value changed since the last call.
       */

    }, {
      key: "resizeToFitContent",
      value: function resizeToFitContent() {
        var _this5 = this;

        var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        // If autosizing is disabled, just skip everything else
        if (!this._enabled) {
          return;
        }

        this._cacheTextareaLineHeight();

        this._cacheTextareaPlaceholderHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.


        if (!this._cachedLineHeight) {
          return;
        }

        var textarea = this._elementRef.nativeElement;
        var value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

        if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
          return;
        }

        var scrollHeight = this._measureScrollHeight();

        var height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0); // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

        textarea.style.height = "".concat(height, "px");

        this._ngZone.runOutsideAngular(function () {
          if (typeof requestAnimationFrame !== 'undefined') {
            requestAnimationFrame(function () {
              return _this5._scrollToCaretPosition(textarea);
            });
          } else {
            setTimeout(function () {
              return _this5._scrollToCaretPosition(textarea);
            });
          }
        });

        this._previousValue = value;
        this._previousMinRows = this._minRows;
      }
      /**
       * Resets the textarea to its original size
       */

    }, {
      key: "reset",
      value: function reset() {
        // Do not try to change the textarea, if the initialHeight has not been determined yet
        // This might potentially remove styles when reset() is called before ngAfterViewInit
        if (this._initialHeight !== undefined) {
          this._textareaElement.style.height = this._initialHeight;
        }
      } // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
      // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
      // can move this back into `host`.
      // tslint:disable:no-host-decorator-in-concrete

    }, {
      key: "_noopInputHandler",
      value: function _noopInputHandler() {// no-op handler that ensures we're running change detection on input events.
      }
      /** Access injected document if available or fallback to global document reference */

    }, {
      key: "_getDocument",
      value: function _getDocument() {
        return this._document || document;
      }
      /** Use defaultView of injected document if available or fallback to global window reference */

    }, {
      key: "_getWindow",
      value: function _getWindow() {
        var doc = this._getDocument();

        return doc.defaultView || window;
      }
      /**
       * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
       * prevent it from scrolling to the caret position. We need to re-set the selection
       * in order for it to scroll to the proper position.
       */

    }, {
      key: "_scrollToCaretPosition",
      value: function _scrollToCaretPosition(textarea) {
        var selectionStart = textarea.selectionStart,
            selectionEnd = textarea.selectionEnd;

        var document = this._getDocument(); // IE will throw an "Unspecified error" if we try to set the selection range after the
        // element has been removed from the DOM. Assert that the directive hasn't been destroyed
        // between the time we requested the animation frame and when it was executed.
        // Also note that we have to assert that the textarea is focused before we set the
        // selection range. Setting the selection range on a non-focused textarea will cause
        // it to receive focus on IE and Edge.


        if (!this._destroyed.isStopped && document.activeElement === textarea) {
          textarea.setSelectionRange(selectionStart, selectionEnd);
        }
      }
    }]);

    return CdkTextareaAutosize;
  }();

  CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) {
    return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT, 8));
  };

  CdkTextareaAutosize.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
    type: CdkTextareaAutosize,
    selectors: [["textarea", "cdkTextareaAutosize", ""]],
    hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
    hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
          return ctx._noopInputHandler();
        });
      }
    },
    inputs: {
      minRows: ["cdkAutosizeMinRows", "minRows"],
      maxRows: ["cdkAutosizeMaxRows", "maxRows"],
      enabled: ["cdkTextareaAutosize", "enabled"],
      placeholder: "placeholder"
    },
    exportAs: ["cdkTextareaAutosize"]
  });
  return CdkTextareaAutosize;
}();

var TextFieldModule = /*@__PURE__*/function () {
  var TextFieldModule = function TextFieldModule() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, TextFieldModule);
  };

  TextFieldModule.ɵfac = function TextFieldModule_Factory(t) {
    return new (t || TextFieldModule)();
  };

  TextFieldModule.ɵmod =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: TextFieldModule
  });
  TextFieldModule.ɵinj =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.PlatformModule]]
  });
  return TextFieldModule;
}();
/*@__PURE__*/


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TextFieldModule, {
    declarations: function declarations() {
      return [CdkAutofill, CdkTextareaAutosize];
    },
    imports: function imports() {
      return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.PlatformModule];
    },
    exports: function exports() {
      return [CdkAutofill, CdkTextareaAutosize];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 84369:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatAnchor": function() { return /* binding */ MatAnchor; },
/* harmony export */   "MatButton": function() { return /* binding */ MatButton; },
/* harmony export */   "MatButtonModule": function() { return /* binding */ MatButtonModule; }
/* harmony export */ });
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ 72454);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 56602);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 8340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ 97388);









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Default color palette for round buttons (mat-fab and mat-mini-fab) */




var _c0 = ["mat-button", ""];
var _c1 = ["*"];
var _c2 = ".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n";
var DEFAULT_ROUND_BUTTON_COLOR = 'accent';
/**
 * List of classes to add to MatButton instances based on host attributes to
 * style as different variants.
 */

var BUTTON_HOST_ATTRIBUTES = ['mat-button', 'mat-flat-button', 'mat-icon-button', 'mat-raised-button', 'mat-stroked-button', 'mat-mini-fab', 'mat-fab']; // Boilerplate for applying mixins to MatButton.

var _MatButtonBase = /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinColor)( /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinDisabled)( /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinDisableRipple)( /*#__PURE__*/function () {
  function _class(_elementRef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, _class);

    this._elementRef = _elementRef;
  }

  return _class;
}())));

var MatButton = /*@__PURE__*/function () {
  var MatButton = /*#__PURE__*/function (_MatButtonBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(MatButton, _MatButtonBase2);

    var _super = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(MatButton);

    function MatButton(elementRef, _focusMonitor, _animationMode) {
      var _this;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, MatButton);

      _this = _super.call(this, elementRef);
      _this._focusMonitor = _focusMonitor;
      _this._animationMode = _animationMode;
      /** Whether the button is round. */

      _this.isRoundButton = _this._hasHostAttributes('mat-fab', 'mat-mini-fab');
      /** Whether the button is icon button. */

      _this.isIconButton = _this._hasHostAttributes('mat-icon-button'); // For each of the variant selectors that is present in the button's host
      // attributes, add the correct corresponding class.

      var _iterator = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.default)(BUTTON_HOST_ATTRIBUTES),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var attr = _step.value;

          if (_this._hasHostAttributes(attr)) {
            _this._getHostElement().classList.add(attr);
          }
        } // Add a class that applies to all buttons. This makes it easier to target if somebody
        // wants to target all Material buttons. We do it here rather than `host` to ensure that
        // the class is applied to derived classes.

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      elementRef.nativeElement.classList.add('mat-button-base');

      if (_this.isRoundButton) {
        _this.color = DEFAULT_ROUND_BUTTON_COLOR;
      }

      return _this;
    }

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(MatButton, [{
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true);
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
      }
      /** Focuses the button. */

    }, {
      key: "focus",
      value: function focus(origin, options) {
        if (origin) {
          this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        } else {
          this._getHostElement().focus(options);
        }
      }
    }, {
      key: "_getHostElement",
      value: function _getHostElement() {
        return this._elementRef.nativeElement;
      }
    }, {
      key: "_isRippleDisabled",
      value: function _isRippleDisabled() {
        return this.disableRipple || this.disabled;
      }
      /** Gets whether the button has one of the given attributes. */

    }, {
      key: "_hasHostAttributes",
      value: function _hasHostAttributes() {
        var _this2 = this;

        for (var _len = arguments.length, attributes = new Array(_len), _key = 0; _key < _len; _key++) {
          attributes[_key] = arguments[_key];
        }

        return attributes.some(function (attribute) {
          return _this2._getHostElement().hasAttribute(attribute);
        });
      }
    }]);

    return MatButton;
  }(_MatButtonBase);

  MatButton.ɵfac = function MatButton_Factory(t) {
    return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.ANIMATION_MODULE_TYPE, 8));
  };

  MatButton.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: MatButton,
    selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]],
    viewQuery: function MatButton_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
      }
    },
    hostAttrs: [1, "mat-focus-indicator"],
    hostVars: 5,
    hostBindings: function MatButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
      }
    },
    inputs: {
      disabled: "disabled",
      disableRipple: "disableRipple",
      color: "color"
    },
    exportAs: ["matButton"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 4,
    vars: 5,
    consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
    template: function MatButton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "span", 2);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
      }
    },
    directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple],
    styles: [_c2],
    encapsulation: 2,
    changeDetection: 0
  });
  return MatButton;
}();

var MatAnchor = /*@__PURE__*/function () {
  var MatAnchor = /*#__PURE__*/function (_MatButton) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(MatAnchor, _MatButton);

    var _super2 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(MatAnchor);

    function MatAnchor(focusMonitor, elementRef, animationMode) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, MatAnchor);

      return _super2.call(this, elementRef, focusMonitor, animationMode);
    }

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(MatAnchor, [{
      key: "_haltDisabledEvents",
      value: function _haltDisabledEvents(event) {
        // A disabled button shouldn't apply any actions
        if (this.disabled) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      }
    }]);

    return MatAnchor;
  }(MatButton);

  MatAnchor.ɵfac = function MatAnchor_Factory(t) {
    return new (t || MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.ANIMATION_MODULE_TYPE, 8));
  };

  MatAnchor.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: MatAnchor,
    selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]],
    hostAttrs: [1, "mat-focus-indicator"],
    hostVars: 7,
    hostBindings: function MatAnchor_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MatAnchor_click_HostBindingHandler($event) {
          return ctx._haltDisabledEvents($event);
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("tabindex", ctx.disabled ? -1 : ctx.tabIndex || 0)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
      }
    },
    inputs: {
      disabled: "disabled",
      disableRipple: "disableRipple",
      color: "color",
      tabIndex: "tabIndex"
    },
    exportAs: ["matButton", "matAnchor"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 4,
    vars: 5,
    consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
    template: function MatAnchor_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "span", 2);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
      }
    },
    directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple],
    styles: [_c2],
    encapsulation: 2,
    changeDetection: 0
  });
  return MatAnchor;
}();

var MatButtonModule = /*@__PURE__*/function () {
  var MatButtonModule = function MatButtonModule() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, MatButtonModule);
  };

  MatButtonModule.ɵfac = function MatButtonModule_Factory(t) {
    return new (t || MatButtonModule)();
  };

  MatButtonModule.ɵmod =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: MatButtonModule
  });
  MatButtonModule.ɵinj =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule]
  });
  return MatButtonModule;
}();
/*@__PURE__*/


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MatButtonModule, {
    declarations: function declarations() {
      return [MatButton, MatAnchor];
    },
    imports: function imports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule];
    },
    exports: function exports() {
      return [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 92935:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_DIALOG_DATA": function() { return /* binding */ MAT_DIALOG_DATA; },
/* harmony export */   "MAT_DIALOG_DEFAULT_OPTIONS": function() { return /* binding */ MAT_DIALOG_DEFAULT_OPTIONS; },
/* harmony export */   "MAT_DIALOG_SCROLL_STRATEGY": function() { return /* binding */ MAT_DIALOG_SCROLL_STRATEGY; },
/* harmony export */   "MAT_DIALOG_SCROLL_STRATEGY_FACTORY": function() { return /* binding */ MAT_DIALOG_SCROLL_STRATEGY_FACTORY; },
/* harmony export */   "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER": function() { return /* binding */ MAT_DIALOG_SCROLL_STRATEGY_PROVIDER; },
/* harmony export */   "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY": function() { return /* binding */ MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY; },
/* harmony export */   "MatDialog": function() { return /* binding */ MatDialog; },
/* harmony export */   "MatDialogActions": function() { return /* binding */ MatDialogActions; },
/* harmony export */   "MatDialogClose": function() { return /* binding */ MatDialogClose; },
/* harmony export */   "MatDialogConfig": function() { return /* binding */ MatDialogConfig; },
/* harmony export */   "MatDialogContainer": function() { return /* binding */ MatDialogContainer; },
/* harmony export */   "MatDialogContent": function() { return /* binding */ MatDialogContent; },
/* harmony export */   "MatDialogModule": function() { return /* binding */ MatDialogModule; },
/* harmony export */   "MatDialogRef": function() { return /* binding */ MatDialogRef; },
/* harmony export */   "MatDialogTitle": function() { return /* binding */ MatDialogTitle; },
/* harmony export */   "_MatDialogBase": function() { return /* binding */ _MatDialogBase; },
/* harmony export */   "_MatDialogContainerBase": function() { return /* binding */ _MatDialogContainerBase; },
/* harmony export */   "_closeDialogVia": function() { return /* binding */ _closeDialogVia; },
/* harmony export */   "matDialogAnimations": function() { return /* binding */ matDialogAnimations; },
/* harmony export */   "throwMatDialogContentAlreadyAttachedError": function() { return /* binding */ throwMatDialogContentAlreadyAttachedError; }
/* harmony export */ });
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ 77923);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ 82151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 56602);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ 94720);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 55959);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 31450);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 40878);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 43835);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 90611);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 56238);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 93169);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 99713);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/keycodes */ 99235);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ 97388);
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Configuration for opening a modal dialog with the MatDialog service.
 */







function MatDialogContainer_ng_template_0_Template(rf, ctx) {}

var MatDialogConfig = function MatDialogConfig() {
  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatDialogConfig);

  /** The ARIA role of the dialog element. */
  this.role = 'dialog';
  /** Custom class for the overlay pane. */

  this.panelClass = '';
  /** Whether the dialog has a backdrop. */

  this.hasBackdrop = true;
  /** Custom class for the backdrop. */

  this.backdropClass = '';
  /** Whether the user can use escape or clicking on the backdrop to close the modal. */

  this.disableClose = false;
  /** Width of the dialog. */

  this.width = '';
  /** Height of the dialog. */

  this.height = '';
  /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */

  this.maxWidth = '80vw';
  /** Data being injected into the child component. */

  this.data = null;
  /** ID of the element that describes the dialog. */

  this.ariaDescribedBy = null;
  /** ID of the element that labels the dialog. */

  this.ariaLabelledBy = null;
  /** Aria label to assign to the dialog element. */

  this.ariaLabel = null;
  /** Whether the dialog should focus the first focusable element on open. */

  this.autoFocus = true;
  /**
   * Whether the dialog should restore focus to the
   * previously-focused element, after it's closed.
   */

  this.restoreFocus = true;
  /**
   * Whether the dialog should close when the user goes backwards/forwards in history.
   * Note that this usually doesn't include clicking on links (unless the user is using
   * the `HashLocationStrategy`).
   */

  this.closeOnNavigation = true; // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by MatDialog.
 * @docs-private
 */


var matDialogAnimations = {
  /** Animation that is applied on the dialog container by default. */
  dialogContainer: /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('dialogContainer', [// Note: The `enter` animation transitions to `transform: none`, because for some reason
  // specifying the transform explicitly, causes IE both to blur the dialog content and
  // decimate the animation performance. Leaving it as `none` solves both issues.

  /*@__PURE__*/
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('void, exit', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 0,
    transform: 'scale(0.7)'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('enter', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'none'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => enter', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'none',
    opacity: 1
  }))), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => void, * => exit', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 0
  })))])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Throws an exception for the case when a ComponentPortal is
 * attached to a DomPortalOutlet without an origin.
 * @docs-private
 */

function throwMatDialogContentAlreadyAttachedError() {
  throw Error('Attempting to attach dialog content after content is already attached');
}

var _MatDialogContainerBase = /*@__PURE__*/function () {
  var _MatDialogContainerBase = /*#__PURE__*/function (_BasePortalOutlet) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(_MatDialogContainerBase, _BasePortalOutlet);

    var _super = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(_MatDialogContainerBase);

    function _MatDialogContainerBase(_elementRef, _focusTrapFactory, _changeDetectorRef, _document,
    /** The dialog configuration. */
    _config, _focusMonitor) {
      var _this;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, _MatDialogContainerBase);

      _this = _super.call(this);
      _this._elementRef = _elementRef;
      _this._focusTrapFactory = _focusTrapFactory;
      _this._changeDetectorRef = _changeDetectorRef;
      _this._config = _config;
      _this._focusMonitor = _focusMonitor;
      /** Emits when an animation state changes. */

      _this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
      /** Element that was focused before the dialog was opened. Save this to restore upon close. */

      _this._elementFocusedBeforeDialogWasOpened = null;
      /**
       * Type of interaction that led to the dialog being closed. This is used to determine
       * whether the focus style will be applied when returning focus to its original location
       * after the dialog is closed.
       */

      _this._closeInteractionType = null;
      /**
       * Attaches a DOM portal to the dialog container.
       * @param portal Portal to be attached.
       * @deprecated To be turned into a method.
       * @breaking-change 10.0.0
       */

      _this.attachDomPortal = function (portal) {
        if (_this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throwMatDialogContentAlreadyAttachedError();
        }

        return _this._portalOutlet.attachDomPortal(portal);
      };

      _this._ariaLabelledBy = _config.ariaLabelledBy || null;
      _this._document = _document;
      return _this;
    }
    /** Initializes the dialog container with the attached content. */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(_MatDialogContainerBase, [{
      key: "_initializeWithAttachedContent",
      value: function _initializeWithAttachedContent() {
        this._setupFocusTrap(); // Save the previously focused element. This element will be re-focused
        // when the dialog closes.


        this._capturePreviouslyFocusedElement(); // Move focus onto the dialog immediately in order to prevent the user
        // from accidentally opening multiple dialogs at the same time.


        this._focusDialogContainer();
      }
      /**
       * Attach a ComponentPortal as content to this dialog container.
       * @param portal Portal to be attached as the dialog content.
       */

    }, {
      key: "attachComponentPortal",
      value: function attachComponentPortal(portal) {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throwMatDialogContentAlreadyAttachedError();
        }

        return this._portalOutlet.attachComponentPortal(portal);
      }
      /**
       * Attach a TemplatePortal as content to this dialog container.
       * @param portal Portal to be attached as the dialog content.
       */

    }, {
      key: "attachTemplatePortal",
      value: function attachTemplatePortal(portal) {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throwMatDialogContentAlreadyAttachedError();
        }

        return this._portalOutlet.attachTemplatePortal(portal);
      }
      /** Moves focus back into the dialog if it was moved out. */

    }, {
      key: "_recaptureFocus",
      value: function _recaptureFocus() {
        if (!this._containsFocus()) {
          var focusContainer = !this._config.autoFocus || !this._focusTrap.focusInitialElement();

          if (focusContainer) {
            this._elementRef.nativeElement.focus();
          }
        }
      }
      /** Moves the focus inside the focus trap. */

    }, {
      key: "_trapFocus",
      value: function _trapFocus() {
        // If we were to attempt to focus immediately, then the content of the dialog would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        if (this._config.autoFocus) {
          this._focusTrap.focusInitialElementWhenReady();
        } else if (!this._containsFocus()) {
          // Otherwise ensure that focus is on the dialog container. It's possible that a different
          // component tried to move focus while the open animation was running. See:
          // https://github.com/angular/components/issues/16215. Note that we only want to do this
          // if the focus isn't inside the dialog already, because it's possible that the consumer
          // turned off `autoFocus` in order to move focus themselves.
          this._elementRef.nativeElement.focus();
        }
      }
      /** Restores focus to the element that was focused before the dialog opened. */

    }, {
      key: "_restoreFocus",
      value: function _restoreFocus() {
        var previousElement = this._elementFocusedBeforeDialogWasOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

        if (this._config.restoreFocus && previousElement && typeof previousElement.focus === 'function') {
          var activeElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__._getFocusedElementPierceShadowDom)();

          var element = this._elementRef.nativeElement; // Make sure that focus is still inside the dialog or is on the body (usually because a
          // non-focusable element like the backdrop was clicked) before moving it. It's possible that
          // the consumer moved it themselves before the animation was done, in which case we shouldn't
          // do anything.

          if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
            if (this._focusMonitor) {
              this._focusMonitor.focusVia(previousElement, this._closeInteractionType);

              this._closeInteractionType = null;
            } else {
              previousElement.focus();
            }
          }
        }

        if (this._focusTrap) {
          this._focusTrap.destroy();
        }
      }
      /** Sets up the focus trap. */

    }, {
      key: "_setupFocusTrap",
      value: function _setupFocusTrap() {
        this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      }
      /** Captures the element that was focused before the dialog was opened. */

    }, {
      key: "_capturePreviouslyFocusedElement",
      value: function _capturePreviouslyFocusedElement() {
        if (this._document) {
          this._elementFocusedBeforeDialogWasOpened = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__._getFocusedElementPierceShadowDom)();
        }
      }
      /** Focuses the dialog container. */

    }, {
      key: "_focusDialogContainer",
      value: function _focusDialogContainer() {
        // Note that there is no focus method when rendering on the server.
        if (this._elementRef.nativeElement.focus) {
          this._elementRef.nativeElement.focus();
        }
      }
      /** Returns whether focus is inside the dialog. */

    }, {
      key: "_containsFocus",
      value: function _containsFocus() {
        var element = this._elementRef.nativeElement;

        var activeElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__._getFocusedElementPierceShadowDom)();

        return element === activeElement || element.contains(activeElement);
      }
    }]);

    return _MatDialogContainerBase;
  }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.BasePortalOutlet);

  _MatDialogContainerBase.ɵfac = function _MatDialogContainerBase_Factory(t) {
    return new (t || _MatDialogContainerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MatDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.FocusMonitor));
  };

  _MatDialogContainerBase.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: _MatDialogContainerBase,
    viewQuery: function _MatDialogContainerBase_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.CdkPortalOutlet, 7);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]]
  });
  return _MatDialogContainerBase;
}();

var MatDialogContainer = /*@__PURE__*/function () {
  var MatDialogContainer = /*#__PURE__*/function (_MatDialogContainerBa) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(MatDialogContainer, _MatDialogContainerBa);

    var _super2 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(MatDialogContainer);

    function MatDialogContainer() {
      var _this2;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatDialogContainer);

      _this2 = _super2.apply(this, arguments);
      /** State of the dialog animation. */

      _this2._state = 'enter';
      return _this2;
    }
    /** Callback, invoked whenever an animation on the host completes. */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(MatDialogContainer, [{
      key: "_onAnimationDone",
      value: function _onAnimationDone(_ref) {
        var toState = _ref.toState,
            totalTime = _ref.totalTime;

        if (toState === 'enter') {
          this._trapFocus();

          this._animationStateChanged.next({
            state: 'opened',
            totalTime: totalTime
          });
        } else if (toState === 'exit') {
          this._restoreFocus();

          this._animationStateChanged.next({
            state: 'closed',
            totalTime: totalTime
          });
        }
      }
      /** Callback, invoked when an animation on the host starts. */

    }, {
      key: "_onAnimationStart",
      value: function _onAnimationStart(_ref2) {
        var toState = _ref2.toState,
            totalTime = _ref2.totalTime;

        if (toState === 'enter') {
          this._animationStateChanged.next({
            state: 'opening',
            totalTime: totalTime
          });
        } else if (toState === 'exit' || toState === 'void') {
          this._animationStateChanged.next({
            state: 'closing',
            totalTime: totalTime
          });
        }
      }
      /** Starts the dialog exit animation. */

    }, {
      key: "_startExitAnimation",
      value: function _startExitAnimation() {
        this._state = 'exit'; // Mark the container for check so it can react if the
        // view container is using OnPush change detection.

        this._changeDetectorRef.markForCheck();
      }
    }]);

    return MatDialogContainer;
  }(_MatDialogContainerBase);

  MatDialogContainer.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatDialogContainer_BaseFactory;
    return function MatDialogContainer_Factory(t) {
      return (ɵMatDialogContainer_BaseFactory || (ɵMatDialogContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](MatDialogContainer)))(t || MatDialogContainer);
    };
  }();

  MatDialogContainer.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: MatDialogContainer,
    selectors: [["mat-dialog-container"]],
    hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"],
    hostVars: 6,
    hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsyntheticHostListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) {
          return ctx._onAnimationStart($event);
        })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) {
          return ctx._onAnimationDone($event);
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("id", ctx._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsyntheticHostProperty"]("@dialogContainer", ctx._state);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [["cdkPortalOutlet", ""]],
    template: function MatDialogContainer_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
      }
    },
    directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.CdkPortalOutlet],
    styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
    encapsulation: 2,
    data: {
      animation: [matDialogAnimations.dialogContainer]
    }
  });
  return MatDialogContainer;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jelbourn): resizing
// Counter for unique dialog ids.


var uniqueId = 0;
/**
 * Reference to a dialog opened via the MatDialog service.
 */

var MatDialogRef = /*#__PURE__*/function () {
  function MatDialogRef(_overlayRef, _containerInstance) {
    var _this3 = this;

    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "mat-dialog-".concat(uniqueId++);

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatDialogRef);

    this._overlayRef = _overlayRef;
    this._containerInstance = _containerInstance;
    this.id = id;
    /** Whether the user is allowed to close the dialog. */

    this.disableClose = this._containerInstance._config.disableClose;
    /** Subject for notifying the user that the dialog has finished opening. */

    this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    /** Subject for notifying the user that the dialog has finished closing. */

    this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    /** Subject for notifying the user that the dialog has started closing. */

    this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    /** Current state of the dialog. */

    this._state = 0
    /* OPEN */
    ; // Pass the id along to the container.

    _containerInstance._id = id; // Emit when opening animation completes

    _containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(function (event) {
      return event.state === 'opened';
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function () {
      _this3._afterOpened.next();

      _this3._afterOpened.complete();
    }); // Dispose overlay when closing animation is complete


    _containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(function (event) {
      return event.state === 'closed';
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function () {
      clearTimeout(_this3._closeFallbackTimeout);

      _this3._finishDialogClose();
    });

    _overlayRef.detachments().subscribe(function () {
      _this3._beforeClosed.next(_this3._result);

      _this3._beforeClosed.complete();

      _this3._afterClosed.next(_this3._result);

      _this3._afterClosed.complete();

      _this3.componentInstance = null;

      _this3._overlayRef.dispose();
    });

    _overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(function (event) {
      return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.ESCAPE && !_this3.disableClose && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.hasModifierKey)(event);
    })).subscribe(function (event) {
      event.preventDefault();

      _closeDialogVia(_this3, 'keyboard');
    });

    _overlayRef.backdropClick().subscribe(function () {
      if (_this3.disableClose) {
        _this3._containerInstance._recaptureFocus();
      } else {
        _closeDialogVia(_this3, 'mouse');
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */


  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(MatDialogRef, [{
    key: "close",
    value: function close(dialogResult) {
      var _this4 = this;

      this._result = dialogResult; // Transition the backdrop in parallel to the dialog.

      this._containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(function (event) {
        return event.state === 'closing';
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (event) {
        _this4._beforeClosed.next(dialogResult);

        _this4._beforeClosed.complete();

        _this4._overlayRef.detachBackdrop(); // The logic that disposes of the overlay depends on the exit animation completing, however
        // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
        // timeout which will clean everything up if the animation hasn't fired within the specified
        // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
        // vast majority of cases the timeout will have been cleared before it has the chance to fire.


        _this4._closeFallbackTimeout = setTimeout(function () {
          return _this4._finishDialogClose();
        }, event.totalTime + 100);
      });

      this._state = 1
      /* CLOSING */
      ;

      this._containerInstance._startExitAnimation();
    }
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     */

  }, {
    key: "afterOpened",
    value: function afterOpened() {
      return this._afterOpened;
    }
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     */

  }, {
    key: "afterClosed",
    value: function afterClosed() {
      return this._afterClosed;
    }
    /**
     * Gets an observable that is notified when the dialog has started closing.
     */

  }, {
    key: "beforeClosed",
    value: function beforeClosed() {
      return this._beforeClosed;
    }
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */

  }, {
    key: "backdropClick",
    value: function backdropClick() {
      return this._overlayRef.backdropClick();
    }
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */

  }, {
    key: "keydownEvents",
    value: function keydownEvents() {
      return this._overlayRef.keydownEvents();
    }
    /**
     * Updates the dialog's position.
     * @param position New dialog position.
     */

  }, {
    key: "updatePosition",
    value: function updatePosition(position) {
      var strategy = this._getPositionStrategy();

      if (position && (position.left || position.right)) {
        position.left ? strategy.left(position.left) : strategy.right(position.right);
      } else {
        strategy.centerHorizontally();
      }

      if (position && (position.top || position.bottom)) {
        position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
      } else {
        strategy.centerVertically();
      }

      this._overlayRef.updatePosition();

      return this;
    }
    /**
     * Updates the dialog's width and height.
     * @param width New width of the dialog.
     * @param height New height of the dialog.
     */

  }, {
    key: "updateSize",
    value: function updateSize() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      this._overlayRef.updateSize({
        width: width,
        height: height
      });

      this._overlayRef.updatePosition();

      return this;
    }
    /** Add a CSS class or an array of classes to the overlay pane. */

  }, {
    key: "addPanelClass",
    value: function addPanelClass(classes) {
      this._overlayRef.addPanelClass(classes);

      return this;
    }
    /** Remove a CSS class or an array of classes from the overlay pane. */

  }, {
    key: "removePanelClass",
    value: function removePanelClass(classes) {
      this._overlayRef.removePanelClass(classes);

      return this;
    }
    /** Gets the current state of the dialog's lifecycle. */

  }, {
    key: "getState",
    value: function getState() {
      return this._state;
    }
    /**
     * Finishes the dialog close by updating the state of the dialog
     * and disposing the overlay.
     */

  }, {
    key: "_finishDialogClose",
    value: function _finishDialogClose() {
      this._state = 2
      /* CLOSED */
      ;

      this._overlayRef.dispose();
    }
    /** Fetches the position strategy object from the overlay ref. */

  }, {
    key: "_getPositionStrategy",
    value: function _getPositionStrategy() {
      return this._overlayRef.getConfig().positionStrategy;
    }
  }]);

  return MatDialogRef;
}();
/**
 * Closes the dialog with the specified interaction type. This is currently not part of
 * `MatDialogRef` as that would conflict with custom dialog ref mocks provided in tests.
 * More details. See: https://github.com/angular/components/pull/9257#issuecomment-651342226.
 */
// TODO: TODO: Move this back into `MatDialogRef` when we provide an official mock dialog ref.


function _closeDialogVia(ref, interactionType, result) {
  // Some mock dialog ref instances in tests do not have the `_containerInstance` property.
  // For those, we keep the behavior as is and do not deal with the interaction type.
  if (ref._containerInstance !== undefined) {
    ref._containerInstance._closeInteractionType = interactionType;
  }

  return ref.close(result);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to access the data that was passed in to a dialog. */


var MAT_DIALOG_DATA = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('MatDialogData');
/** Injection token that can be used to specify default dialog options. */

var MAT_DIALOG_DEFAULT_OPTIONS = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('mat-dialog-default-options');
/** Injection token that determines the scroll handling while the dialog is open. */

var MAT_DIALOG_SCROLL_STRATEGY = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('mat-dialog-scroll-strategy');
/** @docs-private */

function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.block();
  };
}
/** @docs-private */


function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.block();
  };
}
/** @docs-private */


var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_DIALOG_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay],
  useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
};

var _MatDialogBase = /*@__PURE__*/function () {
  var _MatDialogBase = /*#__PURE__*/function () {
    function _MatDialogBase(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy, _dialogRefConstructor, _dialogContainerType, _dialogDataToken) {
      var _this5 = this;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, _MatDialogBase);

      this._overlay = _overlay;
      this._injector = _injector;
      this._defaultOptions = _defaultOptions;
      this._parentDialog = _parentDialog;
      this._overlayContainer = _overlayContainer;
      this._dialogRefConstructor = _dialogRefConstructor;
      this._dialogContainerType = _dialogContainerType;
      this._dialogDataToken = _dialogDataToken;
      this._openDialogsAtThisLevel = [];
      this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
      this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
      this._ariaHiddenElements = new Map(); // TODO (jelbourn): tighten the typing right-hand side of this expression.

      /**
       * Stream that emits when all open dialog have finished closing.
       * Will emit on subscribe if there are no open dialogs to begin with.
       */

      this.afterAllClosed = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.defer)(function () {
        return _this5.openDialogs.length ? _this5._getAfterAllClosed() : _this5._getAfterAllClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(undefined));
      });
      this._scrollStrategy = scrollStrategy;
    }
    /** Keeps track of the currently-open dialogs. */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(_MatDialogBase, [{
      key: "openDialogs",
      get: function get() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
      }
      /** Stream that emits when a dialog has been opened. */

    }, {
      key: "afterOpened",
      get: function get() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
      }
    }, {
      key: "_getAfterAllClosed",
      value: function _getAfterAllClosed() {
        var parent = this._parentDialog;
        return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
    }, {
      key: "open",
      value: function open(componentOrTemplateRef, config) {
        var _this6 = this;

        config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());

        if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw Error("Dialog with id \"".concat(config.id, "\" exists already. The dialog id must be unique."));
        }

        var overlayRef = this._createOverlay(config);

        var dialogContainer = this._attachDialogContainer(overlayRef, config);

        var dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config); // If this is the first dialog that we're opening, hide all the non-overlay content.


        if (!this.openDialogs.length) {
          this._hideNonDialogContentFromAssistiveTechnology();
        }

        this.openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe(function () {
          return _this6._removeOpenDialog(dialogRef);
        });
        this.afterOpened.next(dialogRef); // Notify the dialog container that the content has been attached.

        dialogContainer._initializeWithAttachedContent();

        return dialogRef;
      }
      /**
       * Closes all of the currently-open dialogs.
       */

    }, {
      key: "closeAll",
      value: function closeAll() {
        this._closeDialogs(this.openDialogs);
      }
      /**
       * Finds an open dialog by its id.
       * @param id ID to use when looking up the dialog.
       */

    }, {
      key: "getDialogById",
      value: function getDialogById(id) {
        return this.openDialogs.find(function (dialog) {
          return dialog.id === id;
        });
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        // Only close the dialogs at this level on destroy
        // since the parent service may still be active.
        this._closeDialogs(this._openDialogsAtThisLevel);

        this._afterAllClosedAtThisLevel.complete();

        this._afterOpenedAtThisLevel.complete();
      }
      /**
       * Creates the overlay into which the dialog will be loaded.
       * @param config The dialog configuration.
       * @returns A promise resolving to the OverlayRef for the created overlay.
       */

    }, {
      key: "_createOverlay",
      value: function _createOverlay(config) {
        var overlayConfig = this._getOverlayConfig(config);

        return this._overlay.create(overlayConfig);
      }
      /**
       * Creates an overlay config from a dialog config.
       * @param dialogConfig The dialog configuration.
       * @returns The overlay configuration.
       */

    }, {
      key: "_getOverlayConfig",
      value: function _getOverlayConfig(dialogConfig) {
        var state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayConfig({
          positionStrategy: this._overlay.position().global(),
          scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
          panelClass: dialogConfig.panelClass,
          hasBackdrop: dialogConfig.hasBackdrop,
          direction: dialogConfig.direction,
          minWidth: dialogConfig.minWidth,
          minHeight: dialogConfig.minHeight,
          maxWidth: dialogConfig.maxWidth,
          maxHeight: dialogConfig.maxHeight,
          disposeOnNavigation: dialogConfig.closeOnNavigation
        });

        if (dialogConfig.backdropClass) {
          state.backdropClass = dialogConfig.backdropClass;
        }

        return state;
      }
      /**
       * Attaches a dialog container to a dialog's already-created overlay.
       * @param overlay Reference to the dialog's underlying overlay.
       * @param config The dialog configuration.
       * @returns A promise resolving to a ComponentRef for the attached container.
       */

    }, {
      key: "_attachDialogContainer",
      value: function _attachDialogContainer(overlay, config) {
        var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector.create({
          parent: userInjector || this._injector,
          providers: [{
            provide: MatDialogConfig,
            useValue: config
          }]
        });
        var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.ComponentPortal(this._dialogContainerType, config.viewContainerRef, injector, config.componentFactoryResolver);
        var containerRef = overlay.attach(containerPortal);
        return containerRef.instance;
      }
      /**
       * Attaches the user-provided component to the already-created dialog container.
       * @param componentOrTemplateRef The type of component being loaded into the dialog,
       *     or a TemplateRef to instantiate as the content.
       * @param dialogContainer Reference to the wrapping dialog container.
       * @param overlayRef Reference to the overlay in which the dialog resides.
       * @param config The dialog configuration.
       * @returns A promise resolving to the MatDialogRef that should be returned to the user.
       */

    }, {
      key: "_attachDialogContent",
      value: function _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        var dialogRef = new this._dialogRefConstructor(overlayRef, dialogContainer, config.id);

        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_5__.TemplateRef) {
          dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.TemplatePortal(componentOrTemplateRef, null, {
            $implicit: config.data,
            dialogRef: dialogRef
          }));
        } else {
          var injector = this._createInjector(config, dialogRef, dialogContainer);

          var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector));
          dialogRef.componentInstance = contentRef.instance;
        }

        dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
        return dialogRef;
      }
      /**
       * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
       * of a dialog to close itself and, optionally, to return a value.
       * @param config Config object that is used to construct the dialog.
       * @param dialogRef Reference to the dialog.
       * @param dialogContainer Dialog container element that wraps all of the contents.
       * @returns The custom injector that can be used inside the dialog.
       */

    }, {
      key: "_createInjector",
      value: function _createInjector(config, dialogRef, dialogContainer) {
        var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector; // The dialog container should be provided as the dialog container and the dialog's
        // content are created out of the same `ViewContainerRef` and as such, are siblings
        // for injector purposes. To allow the hierarchy that is expected, the dialog
        // container is explicitly provided in the injector.

        var providers = [{
          provide: this._dialogContainerType,
          useValue: dialogContainer
        }, {
          provide: this._dialogDataToken,
          useValue: config.data
        }, {
          provide: this._dialogRefConstructor,
          useValue: dialogRef
        }];

        if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__.Directionality, null, _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectFlags.Optional))) {
          providers.push({
            provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__.Directionality,
            useValue: {
              value: config.direction,
              change: (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)()
            }
          });
        }

        return _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector.create({
          parent: userInjector || this._injector,
          providers: providers
        });
      }
      /**
       * Removes a dialog from the array of open dialogs.
       * @param dialogRef Dialog to be removed.
       */

    }, {
      key: "_removeOpenDialog",
      value: function _removeOpenDialog(dialogRef) {
        var index = this.openDialogs.indexOf(dialogRef);

        if (index > -1) {
          this.openDialogs.splice(index, 1); // If all the dialogs were closed, remove/restore the `aria-hidden`
          // to a the siblings and emit to the `afterAllClosed` stream.

          if (!this.openDialogs.length) {
            this._ariaHiddenElements.forEach(function (previousValue, element) {
              if (previousValue) {
                element.setAttribute('aria-hidden', previousValue);
              } else {
                element.removeAttribute('aria-hidden');
              }
            });

            this._ariaHiddenElements.clear();

            this._getAfterAllClosed().next();
          }
        }
      }
      /**
       * Hides all of the content that isn't an overlay from assistive technology.
       */

    }, {
      key: "_hideNonDialogContentFromAssistiveTechnology",
      value: function _hideNonDialogContentFromAssistiveTechnology() {
        var overlayContainer = this._overlayContainer.getContainerElement(); // Ensure that the overlay container is attached to the DOM.


        if (overlayContainer.parentElement) {
          var siblings = overlayContainer.parentElement.children;

          for (var i = siblings.length - 1; i > -1; i--) {
            var sibling = siblings[i];

            if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
              this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));

              sibling.setAttribute('aria-hidden', 'true');
            }
          }
        }
      }
      /** Closes all of the dialogs in an array. */

    }, {
      key: "_closeDialogs",
      value: function _closeDialogs(dialogs) {
        var i = dialogs.length;

        while (i--) {
          // The `_openDialogs` property isn't updated after close until the rxjs subscription
          // runs on the next microtask, in addition to modifying the array as we're going
          // through it. We loop through all of them and call close without assuming that
          // they'll be removed from the list instantaneously.
          dialogs[i].close();
        }
      }
    }]);

    return _MatDialogBase;
  }();

  _MatDialogBase.ɵfac = function _MatDialogBase_Factory(t) {
    return new (t || _MatDialogBase)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Type), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Type), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken));
  };

  _MatDialogBase.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: _MatDialogBase
  });
  return _MatDialogBase;
}();

var MatDialog = /*@__PURE__*/function () {
  var MatDialog = /*#__PURE__*/function (_MatDialogBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(MatDialog, _MatDialogBase2);

    var _super3 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(MatDialog);

    function MatDialog(overlay, injector,
    /**
     * @deprecated `_location` parameter to be removed.
     * @breaking-change 10.0.0
     */
    location, defaultOptions, scrollStrategy, parentDialog, overlayContainer) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatDialog);

      return _super3.call(this, overlay, injector, defaultOptions, parentDialog, overlayContainer, scrollStrategy, MatDialogRef, MatDialogContainer, MAT_DIALOG_DATA);
    }

    return MatDialog;
  }(_MatDialogBase);

  MatDialog.ɵfac = function MatDialog_Factory(t) {
    return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayContainer));
  };

  MatDialog.ɵprov =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: MatDialog,
    factory: MatDialog.ɵfac
  });
  return MatDialog;
}();
/**
 * Applies default options to the dialog config.
 * @param config Config to be modified.
 * @param defaultOptions Default options provided.
 * @returns The new configuration object.
 */


function _applyConfigDefaults(config, defaultOptions) {
  return Object.assign(Object.assign({}, defaultOptions), config);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Counter used to generate unique IDs for dialog elements. */


var dialogElementUid = 0;

var MatDialogClose = /*@__PURE__*/function () {
  var MatDialogClose = /*#__PURE__*/function () {
    function MatDialogClose(
    /**
     * Reference to the containing dialog.
     * @deprecated `dialogRef` property to become private.
     * @breaking-change 13.0.0
     */
    // The dialog title directive is always used in combination with a `MatDialogRef`.
    // tslint:disable-next-line: lightweight-tokens
    dialogRef, _elementRef, _dialog) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatDialogClose);

      this.dialogRef = dialogRef;
      this._elementRef = _elementRef;
      this._dialog = _dialog;
      /** Default to "button" to prevents accidental form submits. */

      this.type = 'button';
    }

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(MatDialogClose, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        if (!this.dialogRef) {
          // When this directive is included in a dialog via TemplateRef (rather than being
          // in a Component), the DialogRef isn't available via injection because embedded
          // views cannot be given a custom injector. Instead, we look up the DialogRef by
          // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
          // be resolved at constructor time.
          this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        var proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];

        if (proxiedChange) {
          this.dialogResult = proxiedChange.currentValue;
        }
      }
    }, {
      key: "_onButtonClick",
      value: function _onButtonClick(event) {
        // Determinate the focus origin using the click event, because using the FocusMonitor will
        // result in incorrect origins. Most of the time, close buttons will be auto focused in the
        // dialog, and therefore clicking the button won't result in a focus change. This means that
        // the FocusMonitor won't detect any origin change, and will always output `program`.
        _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
      }
    }]);

    return MatDialogClose;
  }();

  MatDialogClose.ɵfac = function MatDialogClose_Factory(t) {
    return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MatDialog));
  };

  MatDialogClose.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: MatDialogClose,
    selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
    hostVars: 2,
    hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler($event) {
          return ctx._onButtonClick($event);
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
      }
    },
    inputs: {
      type: "type",
      dialogResult: ["mat-dialog-close", "dialogResult"],
      ariaLabel: ["aria-label", "ariaLabel"],
      _matDialogClose: ["matDialogClose", "_matDialogClose"]
    },
    exportAs: ["matDialogClose"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]]
  });
  return MatDialogClose;
}();

var MatDialogTitle = /*@__PURE__*/function () {
  var MatDialogTitle = /*#__PURE__*/function () {
    function MatDialogTitle( // The dialog title directive is always used in combination with a `MatDialogRef`.
    // tslint:disable-next-line: lightweight-tokens
    _dialogRef, _elementRef, _dialog) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatDialogTitle);

      this._dialogRef = _dialogRef;
      this._elementRef = _elementRef;
      this._dialog = _dialog;
      /** Unique id for the dialog title. If none is supplied, it will be auto-generated. */

      this.id = "mat-dialog-title-".concat(dialogElementUid++);
    }

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(MatDialogTitle, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        var _this7 = this;

        if (!this._dialogRef) {
          this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }

        if (this._dialogRef) {
          Promise.resolve().then(function () {
            var container = _this7._dialogRef._containerInstance;

            if (container && !container._ariaLabelledBy) {
              container._ariaLabelledBy = _this7.id;
            }
          });
        }
      }
    }]);

    return MatDialogTitle;
  }();

  MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) {
    return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MatDialog));
  };

  MatDialogTitle.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: MatDialogTitle,
    selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
    hostAttrs: [1, "mat-dialog-title"],
    hostVars: 1,
    hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    exportAs: ["matDialogTitle"]
  });
  return MatDialogTitle;
}();

var MatDialogContent = /*@__PURE__*/function () {
  var MatDialogContent = function MatDialogContent() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatDialogContent);
  };

  MatDialogContent.ɵfac = function MatDialogContent_Factory(t) {
    return new (t || MatDialogContent)();
  };

  MatDialogContent.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: MatDialogContent,
    selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
    hostAttrs: [1, "mat-dialog-content"]
  });
  return MatDialogContent;
}();

var MatDialogActions = /*@__PURE__*/function () {
  var MatDialogActions = function MatDialogActions() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatDialogActions);
  };

  MatDialogActions.ɵfac = function MatDialogActions_Factory(t) {
    return new (t || MatDialogActions)();
  };

  MatDialogActions.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: MatDialogActions,
    selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
    hostAttrs: [1, "mat-dialog-actions"]
  });
  return MatDialogActions;
}();
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a dialog.
 * @param openDialogs References to the currently-open dialogs.
 */


function getClosestDialog(element, openDialogs) {
  var parent = element.nativeElement.parentElement;

  while (parent && !parent.classList.contains('mat-dialog-container')) {
    parent = parent.parentElement;
  }

  return parent ? openDialogs.find(function (dialog) {
    return dialog.id === parent.id;
  }) : null;
}

var MatDialogModule = /*@__PURE__*/function () {
  var MatDialogModule = function MatDialogModule() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatDialogModule);
  };

  MatDialogModule.ɵfac = function MatDialogModule_Factory(t) {
    return new (t || MatDialogModule)();
  };

  MatDialogModule.ɵmod =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: MatDialogModule
  });
  MatDialogModule.ɵinj =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
    imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatCommonModule]
  });
  return MatDialogModule;
}();
/*@__PURE__*/


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MatDialogModule, {
    declarations: function declarations() {
      return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
    },
    imports: function imports() {
      return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatCommonModule];
    },
    exports: function exports() {
      return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatCommonModule];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 77307:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICON_REGISTRY_PROVIDER": function() { return /* binding */ ICON_REGISTRY_PROVIDER; },
/* harmony export */   "ICON_REGISTRY_PROVIDER_FACTORY": function() { return /* binding */ ICON_REGISTRY_PROVIDER_FACTORY; },
/* harmony export */   "MAT_ICON_LOCATION": function() { return /* binding */ MAT_ICON_LOCATION; },
/* harmony export */   "MAT_ICON_LOCATION_FACTORY": function() { return /* binding */ MAT_ICON_LOCATION_FACTORY; },
/* harmony export */   "MatIcon": function() { return /* binding */ MatIcon; },
/* harmony export */   "MatIconModule": function() { return /* binding */ MatIconModule; },
/* harmony export */   "MatIconRegistry": function() { return /* binding */ MatIconRegistry; },
/* harmony export */   "getMatIconFailedToSanitizeLiteralError": function() { return /* binding */ getMatIconFailedToSanitizeLiteralError; },
/* harmony export */   "getMatIconFailedToSanitizeUrlError": function() { return /* binding */ getMatIconFailedToSanitizeUrlError; },
/* harmony export */   "getMatIconNameNotFoundError": function() { return /* binding */ getMatIconNameNotFoundError; },
/* harmony export */   "getMatIconNoHttpProviderError": function() { return /* binding */ getMatIconNoHttpProviderError; },
/* harmony export */   "ɵ0": function() { return /* binding */ ɵ0; }
/* harmony export */ });
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ 42578);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 56602);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/coercion */ 19861);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 40878);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 31225);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 3148);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 59258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 44019);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 79996);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 47727);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 11520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 90619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 90611);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 42693);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 99624);

















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * @docs-private
 */




var _c0 = ["*"];

function getMatIconNameNotFoundError(iconName) {
  return Error("Unable to find icon with the name \"".concat(iconName, "\""));
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including @angular/common/http.
 * @docs-private
 */


function getMatIconNoHttpProviderError() {
  return Error('Could not find HttpClient provider for use with Angular Material icons. ' + 'Please include the HttpClientModule from @angular/common/http in your ' + 'app imports.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * @param url URL that was attempted to be sanitized.
 * @docs-private
 */


function getMatIconFailedToSanitizeUrlError(url) {
  return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " + "via Angular's DomSanitizer. Attempted URL was \"".concat(url, "\"."));
}
/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * @param literal HTML that was attempted to be sanitized.
 * @docs-private
 */


function getMatIconFailedToSanitizeLiteralError(literal) {
  return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " + "Angular's DomSanitizer. Attempted literal was \"".concat(literal, "\"."));
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * @docs-private
 */


var SvgIconConfig = function SvgIconConfig(url, svgText, options) {
  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, SvgIconConfig);

  this.url = url;
  this.svgText = svgText;
  this.options = options;
};

var MatIconRegistry = /*@__PURE__*/function () {
  var MatIconRegistry = /*#__PURE__*/function () {
    function MatIconRegistry(_httpClient, _sanitizer, document, _errorHandler) {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, MatIconRegistry);

      this._httpClient = _httpClient;
      this._sanitizer = _sanitizer;
      this._errorHandler = _errorHandler;
      /**
       * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
       */

      this._svgIconConfigs = new Map();
      /**
       * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
       * Multiple icon sets can be registered under the same namespace.
       */

      this._iconSetConfigs = new Map();
      /** Cache for icons loaded by direct URLs. */

      this._cachedIconsByUrl = new Map();
      /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */

      this._inProgressUrlFetches = new Map();
      /** Map from font identifiers to their CSS class names. Used for icon fonts. */

      this._fontCssClassesByAlias = new Map();
      /** Registered icon resolver functions. */

      this._resolvers = [];
      /**
       * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
       * The default 'material-icons' value assumes that the material icon font has been loaded as
       * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
       */

      this._defaultFontSetClass = 'material-icons';
      this._document = document;
    }
    /**
     * Registers an icon by URL in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(MatIconRegistry, [{
      key: "addSvgIcon",
      value: function addSvgIcon(iconName, url, options) {
        return this.addSvgIconInNamespace('', iconName, url, options);
      }
      /**
       * Registers an icon using an HTML string in the default namespace.
       * @param iconName Name under which the icon should be registered.
       * @param literal SVG source of the icon.
       */

    }, {
      key: "addSvgIconLiteral",
      value: function addSvgIconLiteral(iconName, literal, options) {
        return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
      }
      /**
       * Registers an icon by URL in the specified namespace.
       * @param namespace Namespace in which the icon should be registered.
       * @param iconName Name under which the icon should be registered.
       * @param url
       */

    }, {
      key: "addSvgIconInNamespace",
      value: function addSvgIconInNamespace(namespace, iconName, url, options) {
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
      }
      /**
       * Registers an icon resolver function with the registry. The function will be invoked with the
       * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
       * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
       * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
       * will be invoked in the order in which they have been registered.
       * @param resolver Resolver function to be registered.
       */

    }, {
      key: "addSvgIconResolver",
      value: function addSvgIconResolver(resolver) {
        this._resolvers.push(resolver);

        return this;
      }
      /**
       * Registers an icon using an HTML string in the specified namespace.
       * @param namespace Namespace in which the icon should be registered.
       * @param iconName Name under which the icon should be registered.
       * @param literal SVG source of the icon.
       */

    }, {
      key: "addSvgIconLiteralInNamespace",
      value: function addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
        var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__.SecurityContext.HTML, literal); // TODO: add an ngDevMode check


        if (!cleanLiteral) {
          throw getMatIconFailedToSanitizeLiteralError(literal);
        }

        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', cleanLiteral, options));
      }
      /**
       * Registers an icon set by URL in the default namespace.
       * @param url
       */

    }, {
      key: "addSvgIconSet",
      value: function addSvgIconSet(url, options) {
        return this.addSvgIconSetInNamespace('', url, options);
      }
      /**
       * Registers an icon set using an HTML string in the default namespace.
       * @param literal SVG source of the icon set.
       */

    }, {
      key: "addSvgIconSetLiteral",
      value: function addSvgIconSetLiteral(literal, options) {
        return this.addSvgIconSetLiteralInNamespace('', literal, options);
      }
      /**
       * Registers an icon set by URL in the specified namespace.
       * @param namespace Namespace in which to register the icon set.
       * @param url
       */

    }, {
      key: "addSvgIconSetInNamespace",
      value: function addSvgIconSetInNamespace(namespace, url, options) {
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
      }
      /**
       * Registers an icon set using an HTML string in the specified namespace.
       * @param namespace Namespace in which to register the icon set.
       * @param literal SVG source of the icon set.
       */

    }, {
      key: "addSvgIconSetLiteralInNamespace",
      value: function addSvgIconSetLiteralInNamespace(namespace, literal, options) {
        var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__.SecurityContext.HTML, literal);

        if (!cleanLiteral) {
          throw getMatIconFailedToSanitizeLiteralError(literal);
        }

        return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', cleanLiteral, options));
      }
      /**
       * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
       * component with the alias as the fontSet input will cause the class name to be applied
       * to the `<mat-icon>` element.
       *
       * @param alias Alias for the font.
       * @param className Class name override to be used instead of the alias.
       */

    }, {
      key: "registerFontClassAlias",
      value: function registerFontClassAlias(alias) {
        var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : alias;

        this._fontCssClassesByAlias.set(alias, className);

        return this;
      }
      /**
       * Returns the CSS class name associated with the alias by a previous call to
       * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
       */

    }, {
      key: "classNameForFontAlias",
      value: function classNameForFontAlias(alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
      }
      /**
       * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
       * have a fontSet input value, and is not loading an icon by name or URL.
       *
       * @param className
       */

    }, {
      key: "setDefaultFontSetClass",
      value: function setDefaultFontSetClass(className) {
        this._defaultFontSetClass = className;
        return this;
      }
      /**
       * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
       * have a fontSet input value, and is not loading an icon by name or URL.
       */

    }, {
      key: "getDefaultFontSetClass",
      value: function getDefaultFontSetClass() {
        return this._defaultFontSetClass;
      }
      /**
       * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
       * The response from the URL may be cached so this will not always cause an HTTP request, but
       * the produced element will always be a new copy of the originally fetched icon. (That is,
       * it will not contain any modifications made to elements previously returned).
       *
       * @param safeUrl URL from which to fetch the SVG icon.
       */

    }, {
      key: "getSvgIconFromUrl",
      value: function getSvgIconFromUrl(safeUrl) {
        var _this = this;

        var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__.SecurityContext.RESOURCE_URL, safeUrl);

        if (!url) {
          throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }

        var cachedIcon = this._cachedIconsByUrl.get(url);

        if (cachedIcon) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(cloneSvg(cachedIcon));
        }

        return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(function (svg) {
          return _this._cachedIconsByUrl.set(url, svg);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (svg) {
          return cloneSvg(svg);
        }));
      }
      /**
       * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
       * and namespace. The icon must have been previously registered with addIcon or addIconSet;
       * if not, the Observable will throw an error.
       *
       * @param name Name of the icon to be retrieved.
       * @param namespace Namespace in which to look for the icon.
       */

    }, {
      key: "getNamedSvgIcon",
      value: function getNamedSvgIcon(name) {
        var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var key = iconKey(namespace, name);

        var config = this._svgIconConfigs.get(key); // Return (copy of) cached icon if possible.


        if (config) {
          return this._getSvgFromConfig(config);
        } // Otherwise try to resolve the config from one of the resolver functions.


        config = this._getIconConfigFromResolvers(namespace, name);

        if (config) {
          this._svgIconConfigs.set(key, config);

          return this._getSvgFromConfig(config);
        } // See if we have any icon sets registered for the namespace.


        var iconSetConfigs = this._iconSetConfigs.get(namespace);

        if (iconSetConfigs) {
          return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(getMatIconNameNotFoundError(key));
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._resolvers = [];

        this._svgIconConfigs.clear();

        this._iconSetConfigs.clear();

        this._cachedIconsByUrl.clear();
      }
      /**
       * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
       */

    }, {
      key: "_getSvgFromConfig",
      value: function _getSvgFromConfig(config) {
        if (config.svgText) {
          // We already have the SVG element for this icon, return a copy.
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(cloneSvg(this._svgElementFromConfig(config)));
        } else {
          // Fetch the icon from the config's URL, cache it, and return a copy.
          return this._loadSvgIconFromConfig(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (svg) {
            return cloneSvg(svg);
          }));
        }
      }
      /**
       * Attempts to find an icon with the specified name in any of the SVG icon sets.
       * First searches the available cached icons for a nested element with a matching name, and
       * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
       * that have not been cached, and searches again after all fetches are completed.
       * The returned Observable produces the SVG element if possible, and throws
       * an error if no icon with the specified name can be found.
       */

    }, {
      key: "_getSvgFromIconSetConfigs",
      value: function _getSvgFromIconSetConfigs(name, iconSetConfigs) {
        var _this2 = this;

        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
        // requested name.
        var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);

        if (namedIcon) {
          // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
          // time anyway, there's probably not much advantage compared to just always extracting
          // it from the icon set.
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(namedIcon);
        } // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
        // fetched, fetch them now and look for iconName in the results.


        var iconSetFetchRequests = iconSetConfigs.filter(function (iconSetConfig) {
          return !iconSetConfig.svgText;
        }).map(function (iconSetConfig) {
          return _this2._loadSvgIconSetFromConfig(iconSetConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(function (err) {
            var url = _this2._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__.SecurityContext.RESOURCE_URL, iconSetConfig.url); // Swallow errors fetching individual URLs so the
            // combined Observable won't necessarily fail.


            var errorMessage = "Loading icon set URL: ".concat(url, " failed: ").concat(err.message);

            _this2._errorHandler.handleError(new Error(errorMessage));

            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
          }));
        }); // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
        // cached SVG element (unless the request failed), and we can check again for the icon.

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)(iconSetFetchRequests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function () {
          var foundIcon = _this2._extractIconWithNameFromAnySet(name, iconSetConfigs); // TODO: add an ngDevMode check


          if (!foundIcon) {
            throw getMatIconNameNotFoundError(name);
          }

          return foundIcon;
        }));
      }
      /**
       * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
       * tag matches the specified name. If found, copies the nested element to a new SVG element and
       * returns it. Returns null if no matching element is found.
       */

    }, {
      key: "_extractIconWithNameFromAnySet",
      value: function _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
        // Iterate backwards, so icon sets added later have precedence.
        for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
          var config = iconSetConfigs[i]; // Parsing the icon set's text into an SVG element can be expensive. We can avoid some of
          // the parsing by doing a quick check using `indexOf` to see if there's any chance for the
          // icon to be in the set. This won't be 100% accurate, but it should help us avoid at least
          // some of the parsing.

          if (config.svgText && config.svgText.indexOf(iconName) > -1) {
            var svg = this._svgElementFromConfig(config);

            var foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);

            if (foundIcon) {
              return foundIcon;
            }
          }
        }

        return null;
      }
      /**
       * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
       * from it.
       */

    }, {
      key: "_loadSvgIconFromConfig",
      value: function _loadSvgIconFromConfig(config) {
        var _this3 = this;

        return this._fetchIcon(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(function (svgText) {
          return config.svgText = svgText;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function () {
          return _this3._svgElementFromConfig(config);
        }));
      }
      /**
       * Loads the content of the icon set URL specified in the
       * SvgIconConfig and attaches it to the config.
       */

    }, {
      key: "_loadSvgIconSetFromConfig",
      value: function _loadSvgIconSetFromConfig(config) {
        if (config.svgText) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
        }

        return this._fetchIcon(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(function (svgText) {
          return config.svgText = svgText;
        }));
      }
      /**
       * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
       * tag matches the specified name. If found, copies the nested element to a new SVG element and
       * returns it. Returns null if no matching element is found.
       */

    }, {
      key: "_extractSvgIconFromSet",
      value: function _extractSvgIconFromSet(iconSet, iconName, options) {
        // Use the `id="iconName"` syntax in order to escape special
        // characters in the ID (versus using the #iconName syntax).
        var iconSource = iconSet.querySelector("[id=\"".concat(iconName, "\"]"));

        if (!iconSource) {
          return null;
        } // Clone the element and remove the ID to prevent multiple elements from being added
        // to the page with the same ID.


        var iconElement = iconSource.cloneNode(true);
        iconElement.removeAttribute('id'); // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
        // the content of a new <svg> node.

        if (iconElement.nodeName.toLowerCase() === 'svg') {
          return this._setSvgAttributes(iconElement, options);
        } // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
        // that the same could be achieved by referring to it via <use href="#id">, however the <use>
        // tag is problematic on Firefox, because it needs to include the current page path.


        if (iconElement.nodeName.toLowerCase() === 'symbol') {
          return this._setSvgAttributes(this._toSvgElement(iconElement), options);
        } // createElement('SVG') doesn't work as expected; the DOM ends up with
        // the correct nodes, but the SVG content doesn't render. Instead we
        // have to create an empty SVG node using innerHTML and append its content.
        // Elements created using DOMParser.parseFromString have the same problem.
        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display


        var svg = this._svgElementFromString('<svg></svg>'); // Clone the node so we don't remove it from the parent icon set element.


        svg.appendChild(iconElement);
        return this._setSvgAttributes(svg, options);
      }
      /**
       * Creates a DOM element from the given SVG string.
       */

    }, {
      key: "_svgElementFromString",
      value: function _svgElementFromString(str) {
        var div = this._document.createElement('DIV');

        div.innerHTML = str;
        var svg = div.querySelector('svg'); // TODO: add an ngDevMode check

        if (!svg) {
          throw Error('<svg> tag not found');
        }

        return svg;
      }
      /**
       * Converts an element into an SVG node by cloning all of its children.
       */

    }, {
      key: "_toSvgElement",
      value: function _toSvgElement(element) {
        var svg = this._svgElementFromString('<svg></svg>');

        var attributes = element.attributes; // Copy over all the attributes from the `symbol` to the new SVG, except the id.

        for (var i = 0; i < attributes.length; i++) {
          var _attributes$i = attributes[i],
              name = _attributes$i.name,
              value = _attributes$i.value;

          if (name !== 'id') {
            svg.setAttribute(name, value);
          }
        }

        for (var _i = 0; _i < element.childNodes.length; _i++) {
          if (element.childNodes[_i].nodeType === this._document.ELEMENT_NODE) {
            svg.appendChild(element.childNodes[_i].cloneNode(true));
          }
        }

        return svg;
      }
      /**
       * Sets the default attributes for an SVG element to be used as an icon.
       */

    }, {
      key: "_setSvgAttributes",
      value: function _setSvgAttributes(svg, options) {
        svg.setAttribute('fit', '');
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.

        if (options && options.viewBox) {
          svg.setAttribute('viewBox', options.viewBox);
        }

        return svg;
      }
      /**
       * Returns an Observable which produces the string contents of the given icon. Results may be
       * cached, so future calls with the same URL may not cause another HTTP request.
       */

    }, {
      key: "_fetchIcon",
      value: function _fetchIcon(iconConfig) {
        var _this4 = this;

        var _a;

        var safeUrl = iconConfig.url,
            options = iconConfig.options;
        var withCredentials = (_a = options === null || options === void 0 ? void 0 : options.withCredentials) !== null && _a !== void 0 ? _a : false;

        if (!this._httpClient) {
          throw getMatIconNoHttpProviderError();
        } // TODO: add an ngDevMode check


        if (safeUrl == null) {
          throw Error("Cannot fetch icon from URL \"".concat(safeUrl, "\"."));
        }

        var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__.SecurityContext.RESOURCE_URL, safeUrl); // TODO: add an ngDevMode check


        if (!url) {
          throw getMatIconFailedToSanitizeUrlError(safeUrl);
        } // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
        // already a request in progress for that URL. It's necessary to call share() on the
        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.


        var inProgressFetch = this._inProgressUrlFetches.get(url);

        if (inProgressFetch) {
          return inProgressFetch;
        }

        var req = this._httpClient.get(url, {
          responseType: 'text',
          withCredentials: withCredentials
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.finalize)(function () {
          return _this4._inProgressUrlFetches.delete(url);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.share)());

        this._inProgressUrlFetches.set(url, req);

        return req;
      }
      /**
       * Registers an icon config by name in the specified namespace.
       * @param namespace Namespace in which to register the icon config.
       * @param iconName Name under which to register the config.
       * @param config Config to be registered.
       */

    }, {
      key: "_addSvgIconConfig",
      value: function _addSvgIconConfig(namespace, iconName, config) {
        this._svgIconConfigs.set(iconKey(namespace, iconName), config);

        return this;
      }
      /**
       * Registers an icon set config in the specified namespace.
       * @param namespace Namespace in which to register the icon config.
       * @param config Config to be registered.
       */

    }, {
      key: "_addSvgIconSetConfig",
      value: function _addSvgIconSetConfig(namespace, config) {
        var configNamespace = this._iconSetConfigs.get(namespace);

        if (configNamespace) {
          configNamespace.push(config);
        } else {
          this._iconSetConfigs.set(namespace, [config]);
        }

        return this;
      }
      /** Parses a config's text into an SVG element. */

    }, {
      key: "_svgElementFromConfig",
      value: function _svgElementFromConfig(config) {
        if (!config.svgElement) {
          var svg = this._svgElementFromString(config.svgText);

          this._setSvgAttributes(svg, config.options);

          config.svgElement = svg;
        }

        return config.svgElement;
      }
      /** Tries to create an icon config through the registered resolver functions. */

    }, {
      key: "_getIconConfigFromResolvers",
      value: function _getIconConfigFromResolvers(namespace, name) {
        for (var i = 0; i < this._resolvers.length; i++) {
          var result = this._resolvers[i](name, namespace);

          if (result) {
            return isSafeUrlWithOptions(result) ? new SvgIconConfig(result.url, null, result.options) : new SvgIconConfig(result, null);
          }
        }

        return undefined;
      }
    }]);

    return MatIconRegistry;
  }();

  MatIconRegistry.ɵfac = function MatIconRegistry_Factory(t) {
    return new (t || MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ErrorHandler));
  };

  MatIconRegistry.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    factory: function MatIconRegistry_Factory() {
      return new MatIconRegistry(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ErrorHandler));
    },
    token: MatIconRegistry,
    providedIn: "root"
  });
  return MatIconRegistry;
}();
/** @docs-private */


function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
  return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
}
/** @docs-private */


var ICON_REGISTRY_PROVIDER = {
  // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
  provide: MatIconRegistry,
  deps: [[/*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional(), /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.SkipSelf(), MatIconRegistry], [/*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional(), _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer, _angular_core__WEBPACK_IMPORTED_MODULE_5__.ErrorHandler, [/*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional(), _angular_common__WEBPACK_IMPORTED_MODULE_16__.DOCUMENT]],
  useFactory: ICON_REGISTRY_PROVIDER_FACTORY
};
/** Clones an SVGElement while preserving type information. */

function cloneSvg(svg) {
  return svg.cloneNode(true);
}
/** Returns the cache key to use for an icon namespace and name. */


function iconKey(namespace, name) {
  return namespace + ':' + name;
}

function isSafeUrlWithOptions(value) {
  return !!(value.url && value.options);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatIcon.

/** @docs-private */


var _MatIconBase = /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_17__.mixinColor)( /*#__PURE__*/function () {
  function _class(_elementRef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, _class);

    this._elementRef = _elementRef;
  }

  return _class;
}());
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */


var MAT_ICON_LOCATION = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('mat-icon-location', {
  providedIn: 'root',
  factory: MAT_ICON_LOCATION_FACTORY
});
/** @docs-private */

function MAT_ICON_LOCATION_FACTORY() {
  var _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_16__.DOCUMENT);

  var _location = _document ? _document.location : null;

  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: function getPathname() {
      return _location ? _location.pathname + _location.search : '';
    }
  };
}
/** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */


var funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];

var ɵ0 = function ɵ0(attr) {
  return "[".concat(attr, "]");
};
/** Selector that can be used to find all elements that are using a `FuncIRI`. */


var funcIriAttributeSelector =
/*@__PURE__*/

/*@__PURE__*/
funcIriAttributes.map(ɵ0).join(', ');
/** Regex that can be used to extract the id out of a FuncIRI. */

var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;

var MatIcon = /*@__PURE__*/function () {
  var MatIcon = /*#__PURE__*/function (_MatIconBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(MatIcon, _MatIconBase2);

    var _super = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(MatIcon);

    function MatIcon(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
      var _this5;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, MatIcon);

      _this5 = _super.call(this, elementRef);
      _this5._iconRegistry = _iconRegistry;
      _this5._location = _location;
      _this5._errorHandler = _errorHandler;
      _this5._inline = false;
      /** Subscription to the current in-progress SVG icon request. */

      _this5._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_18__.Subscription.EMPTY; // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
      // the right thing to do for the majority of icon use-cases.

      if (!ariaHidden) {
        elementRef.nativeElement.setAttribute('aria-hidden', 'true');
      }

      return _this5;
    }
    /**
     * Whether the icon should be inlined, automatically sizing the icon to match the font size of
     * the element the icon is contained in.
     */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(MatIcon, [{
      key: "inline",
      get: function get() {
        return this._inline;
      },
      set: function set(inline) {
        this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__.coerceBooleanProperty)(inline);
      }
      /** Name of the icon in the SVG icon set. */

    }, {
      key: "svgIcon",
      get: function get() {
        return this._svgIcon;
      },
      set: function set(value) {
        if (value !== this._svgIcon) {
          if (value) {
            this._updateSvgIcon(value);
          } else if (this._svgIcon) {
            this._clearSvgElement();
          }

          this._svgIcon = value;
        }
      }
      /** Font set that the icon is a part of. */

    }, {
      key: "fontSet",
      get: function get() {
        return this._fontSet;
      },
      set: function set(value) {
        var newValue = this._cleanupFontValue(value);

        if (newValue !== this._fontSet) {
          this._fontSet = newValue;

          this._updateFontIconClasses();
        }
      }
      /** Name of an icon within a font set. */

    }, {
      key: "fontIcon",
      get: function get() {
        return this._fontIcon;
      },
      set: function set(value) {
        var newValue = this._cleanupFontValue(value);

        if (newValue !== this._fontIcon) {
          this._fontIcon = newValue;

          this._updateFontIconClasses();
        }
      }
      /**
       * Splits an svgIcon binding value into its icon set and icon name components.
       * Returns a 2-element array of [(icon set), (icon name)].
       * The separator for the two fields is ':'. If there is no separator, an empty
       * string is returned for the icon set and the entire value is returned for
       * the icon name. If the argument is falsy, returns an array of two empty strings.
       * Throws an error if the name contains two or more ':' separators.
       * Examples:
       *   `'social:cake' -> ['social', 'cake']
       *   'penguin' -> ['', 'penguin']
       *   null -> ['', '']
       *   'a:b:c' -> (throws Error)`
       */

    }, {
      key: "_splitIconName",
      value: function _splitIconName(iconName) {
        if (!iconName) {
          return ['', ''];
        }

        var parts = iconName.split(':');

        switch (parts.length) {
          case 1:
            return ['', parts[0]];
          // Use default namespace.

          case 2:
            return parts;

          default:
            throw Error("Invalid icon name: \"".concat(iconName, "\""));
          // TODO: add an ngDevMode check
        }
      }
    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
        // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
        this._updateFontIconClasses();
      }
    }, {
      key: "ngAfterViewChecked",
      value: function ngAfterViewChecked() {
        var cachedElements = this._elementsWithExternalReferences;

        if (cachedElements && cachedElements.size) {
          var newPath = this._location.getPathname(); // We need to check whether the URL has changed on each change detection since
          // the browser doesn't have an API that will let us react on link clicks and
          // we can't depend on the Angular router. The references need to be updated,
          // because while most browsers don't care whether the URL is correct after
          // the first render, Safari will break if the user navigates to a different
          // page and the SVG isn't re-rendered.


          if (newPath !== this._previousPath) {
            this._previousPath = newPath;

            this._prependPathToReferences(newPath);
          }
        }
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._currentIconFetch.unsubscribe();

        if (this._elementsWithExternalReferences) {
          this._elementsWithExternalReferences.clear();
        }
      }
    }, {
      key: "_usingFontIcon",
      value: function _usingFontIcon() {
        return !this.svgIcon;
      }
    }, {
      key: "_setSvgElement",
      value: function _setSvgElement(svg) {
        this._clearSvgElement(); // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
        // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
        // Do this before inserting the element into the DOM, in order to avoid a style recalculation.


        var styleTags = svg.querySelectorAll('style');

        for (var i = 0; i < styleTags.length; i++) {
          styleTags[i].textContent += ' ';
        } // Note: we do this fix here, rather than the icon registry, because the
        // references have to point to the URL at the time that the icon was created.


        var path = this._location.getPathname();

        this._previousPath = path;

        this._cacheChildrenWithExternalReferences(svg);

        this._prependPathToReferences(path);

        this._elementRef.nativeElement.appendChild(svg);
      }
    }, {
      key: "_clearSvgElement",
      value: function _clearSvgElement() {
        var layoutElement = this._elementRef.nativeElement;
        var childCount = layoutElement.childNodes.length;

        if (this._elementsWithExternalReferences) {
          this._elementsWithExternalReferences.clear();
        } // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
        // we can't use innerHTML, because IE will throw if the element has a data binding.


        while (childCount--) {
          var child = layoutElement.childNodes[childCount]; // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
          // of any loose text nodes, as well as any SVG elements in order to remove any old icons.

          if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
            layoutElement.removeChild(child);
          }
        }
      }
    }, {
      key: "_updateFontIconClasses",
      value: function _updateFontIconClasses() {
        if (!this._usingFontIcon()) {
          return;
        }

        var elem = this._elementRef.nativeElement;
        var fontSetClass = this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet) : this._iconRegistry.getDefaultFontSetClass();

        if (fontSetClass != this._previousFontSetClass) {
          if (this._previousFontSetClass) {
            elem.classList.remove(this._previousFontSetClass);
          }

          if (fontSetClass) {
            elem.classList.add(fontSetClass);
          }

          this._previousFontSetClass = fontSetClass;
        }

        if (this.fontIcon != this._previousFontIconClass) {
          if (this._previousFontIconClass) {
            elem.classList.remove(this._previousFontIconClass);
          }

          if (this.fontIcon) {
            elem.classList.add(this.fontIcon);
          }

          this._previousFontIconClass = this.fontIcon;
        }
      }
      /**
       * Cleans up a value to be used as a fontIcon or fontSet.
       * Since the value ends up being assigned as a CSS class, we
       * have to trim the value and omit space-separated values.
       */

    }, {
      key: "_cleanupFontValue",
      value: function _cleanupFontValue(value) {
        return typeof value === 'string' ? value.trim().split(' ')[0] : value;
      }
      /**
       * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
       * reference. This is required because WebKit browsers require references to be prefixed with
       * the current path, if the page has a `base` tag.
       */

    }, {
      key: "_prependPathToReferences",
      value: function _prependPathToReferences(path) {
        var elements = this._elementsWithExternalReferences;

        if (elements) {
          elements.forEach(function (attrs, element) {
            attrs.forEach(function (attr) {
              element.setAttribute(attr.name, "url('".concat(path, "#").concat(attr.value, "')"));
            });
          });
        }
      }
      /**
       * Caches the children of an SVG element that have `url()`
       * references that we need to prefix with the current path.
       */

    }, {
      key: "_cacheChildrenWithExternalReferences",
      value: function _cacheChildrenWithExternalReferences(element) {
        var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
        var elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();

        var _loop = function _loop(i) {
          funcIriAttributes.forEach(function (attr) {
            var elementWithReference = elementsWithFuncIri[i];
            var value = elementWithReference.getAttribute(attr);
            var match = value ? value.match(funcIriPattern) : null;

            if (match) {
              var attributes = elements.get(elementWithReference);

              if (!attributes) {
                attributes = [];
                elements.set(elementWithReference, attributes);
              }

              attributes.push({
                name: attr,
                value: match[1]
              });
            }
          });
        };

        for (var i = 0; i < elementsWithFuncIri.length; i++) {
          _loop(i);
        }
      }
      /** Sets a new SVG icon with a particular name. */

    }, {
      key: "_updateSvgIcon",
      value: function _updateSvgIcon(rawName) {
        var _this6 = this;

        this._svgNamespace = null;
        this._svgName = null;

        this._currentIconFetch.unsubscribe();

        if (rawName) {
          var _this$_splitIconName = this._splitIconName(rawName),
              _this$_splitIconName2 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this$_splitIconName, 2),
              namespace = _this$_splitIconName2[0],
              iconName = _this$_splitIconName2[1];

          if (namespace) {
            this._svgNamespace = namespace;
          }

          if (iconName) {
            this._svgName = iconName;
          }

          this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1)).subscribe(function (svg) {
            return _this6._setSvgElement(svg);
          }, function (err) {
            var errorMessage = "Error retrieving icon ".concat(namespace, ":").concat(iconName, "! ").concat(err.message);

            _this6._errorHandler.handleError(new Error(errorMessage));
          });
        }
      }
    }]);

    return MatIcon;
  }(_MatIconBase);

  MatIcon.ɵfac = function MatIcon_Factory(t) {
    return new (t || MatIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinjectAttribute"]('aria-hidden'), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MAT_ICON_LOCATION), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ErrorHandler));
  };

  MatIcon.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: MatIcon,
    selectors: [["mat-icon"]],
    hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
    hostVars: 7,
    hostBindings: function MatIcon_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
      }
    },
    inputs: {
      color: "color",
      inline: "inline",
      svgIcon: "svgIcon",
      fontSet: "fontSet",
      fontIcon: "fontIcon"
    },
    exportAs: ["matIcon"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
      }
    },
    styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return MatIcon;
}();

var MatIconModule = /*@__PURE__*/function () {
  var MatIconModule = function MatIconModule() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, MatIconModule);
  };

  MatIconModule.ɵfac = function MatIconModule_Factory(t) {
    return new (t || MatIconModule)();
  };

  MatIconModule.ɵmod =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: MatIconModule
  });
  MatIconModule.ɵinj =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatCommonModule]
  });
  return MatIconModule;
}();
/*@__PURE__*/


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MatIconModule, {
    declarations: function declarations() {
      return [MatIcon];
    },
    imports: function imports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatCommonModule];
    },
    exports: function exports() {
      return [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatCommonModule];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 6174:
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_INPUT_VALUE_ACCESSOR": function() { return /* binding */ MAT_INPUT_VALUE_ACCESSOR; },
/* harmony export */   "MatInput": function() { return /* binding */ MatInput; },
/* harmony export */   "MatInputModule": function() { return /* binding */ MatInputModule; },
/* harmony export */   "MatTextareaAutosize": function() { return /* binding */ MatTextareaAutosize; },
/* harmony export */   "getMatInputUnsupportedTypeError": function() { return /* binding */ getMatInputUnsupportedTypeError; }
/* harmony export */ });
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/text-field */ 60246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/coercion */ 19861);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ 93169);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 56602);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 13070);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 55959);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 31041);












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Directive to automatically resize a textarea to fit its content.
 * @deprecated Use `cdkTextareaAutosize` from `@angular/cdk/text-field` instead.
 * @breaking-change 8.0.0
 */








var MatTextareaAutosize = /*@__PURE__*/function () {
  var MatTextareaAutosize = /*#__PURE__*/function (_CdkTextareaAutosize) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(MatTextareaAutosize, _CdkTextareaAutosize);

    var _super = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(MatTextareaAutosize);

    function MatTextareaAutosize() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, MatTextareaAutosize);

      return _super.apply(this, arguments);
    }

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(MatTextareaAutosize, [{
      key: "matAutosizeMinRows",
      get: function get() {
        return this.minRows;
      },
      set: function set(value) {
        this.minRows = value;
      }
    }, {
      key: "matAutosizeMaxRows",
      get: function get() {
        return this.maxRows;
      },
      set: function set(value) {
        this.maxRows = value;
      }
    }, {
      key: "matAutosize",
      get: function get() {
        return this.enabled;
      },
      set: function set(value) {
        this.enabled = value;
      }
    }, {
      key: "matTextareaAutosize",
      get: function get() {
        return this.enabled;
      },
      set: function set(value) {
        this.enabled = value;
      }
    }]);

    return MatTextareaAutosize;
  }(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__.CdkTextareaAutosize);

  MatTextareaAutosize.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatTextareaAutosize_BaseFactory;
    return function MatTextareaAutosize_Factory(t) {
      return (ɵMatTextareaAutosize_BaseFactory || (ɵMatTextareaAutosize_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](MatTextareaAutosize)))(t || MatTextareaAutosize);
    };
  }();

  MatTextareaAutosize.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: MatTextareaAutosize,
    selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]],
    hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"],
    inputs: {
      cdkAutosizeMinRows: "cdkAutosizeMinRows",
      cdkAutosizeMaxRows: "cdkAutosizeMaxRows",
      matAutosizeMinRows: "matAutosizeMinRows",
      matAutosizeMaxRows: "matAutosizeMaxRows",
      matAutosize: ["mat-autosize", "matAutosize"],
      matTextareaAutosize: "matTextareaAutosize"
    },
    exportAs: ["matTextareaAutosize"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]]
  });
  return MatTextareaAutosize;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */


function getMatInputUnsupportedTypeError(type) {
  return Error("Input type \"".concat(type, "\" isn't supported by matInput."));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * This token is used to inject the object whose value should be set into `MatInput`. If none is
 * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
 * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
 * value to them.
 */


var MAT_INPUT_VALUE_ACCESSOR = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('MAT_INPUT_VALUE_ACCESSOR');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

var MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
var nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

/** @docs-private */

var _MatInputBase = /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.mixinErrorState)( /*#__PURE__*/function () {
  function _class(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
  /** @docs-private */
  ngControl) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, _class);

    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this.ngControl = ngControl;
  }

  return _class;
}());

var MatInput = /*@__PURE__*/function () {
  var MatInput = /*#__PURE__*/function (_MatInputBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(MatInput, _MatInputBase2);

    var _super2 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(MatInput);

    function MatInput(_elementRef, _platform, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone, // TODO: Remove this once the legacy appearance has been removed. We only need
    // to inject the form-field for determining whether the placeholder has been promoted.
    _formField) {
      var _this;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, MatInput);

      _this = _super2.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
      _this._elementRef = _elementRef;
      _this._platform = _platform;
      _this._autofillMonitor = _autofillMonitor;
      _this._formField = _formField;
      _this._uid = "mat-input-".concat(nextUniqueId++);
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

      _this.focused = false;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

      _this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

      _this.controlType = 'mat-input';
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

      _this.autofilled = false;
      _this._disabled = false;
      _this._required = false;
      _this._type = 'text';
      _this._readonly = false;
      _this._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(function (t) {
        return (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.getSupportedInputTypes)().has(t);
      });
      var element = _this._elementRef.nativeElement;
      var nodeName = element.nodeName.toLowerCase(); // If no input value accessor was explicitly specified, use the element as the input value
      // accessor.

      _this._inputValueAccessor = inputValueAccessor || element;
      _this._previousNativeValue = _this.value; // Force setter to be called in case id was not specified.

      _this.id = _this.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
      // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
      // exists on iOS, we only bother to install the listener on iOS.

      if (_platform.IOS) {
        ngZone.runOutsideAngular(function () {
          _elementRef.nativeElement.addEventListener('keyup', function (event) {
            var el = event.target; // Note: We specifically check for 0, rather than `!el.selectionStart`, because the two
            // indicate different things. If the value is 0, it means that the caret is at the start
            // of the input, whereas a value of `null` means that the input doesn't support
            // manipulating the selection range. Inputs that don't support setting the selection range
            // will throw an error so we want to avoid calling `setSelectionRange` on them. See:
            // https://html.spec.whatwg.org/multipage/input.html#do-not-apply

            if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
              // Note: Just setting `0, 0` doesn't fix the issue. Setting
              // `1, 1` fixes it for the first time that you type text and
              // then hold delete. Toggling to `1, 1` and then back to
              // `0, 0` seems to completely fix it.
              el.setSelectionRange(1, 1);
              el.setSelectionRange(0, 0);
            }
          });
        });
      }

      _this._isServer = !_this._platform.isBrowser;
      _this._isNativeSelect = nodeName === 'select';
      _this._isTextarea = nodeName === 'textarea';
      _this._isInFormField = !!_formField;

      if (_this._isNativeSelect) {
        _this.controlType = element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
      }

      return _this;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(MatInput, [{
      key: "disabled",
      get: function get() {
        if (this.ngControl && this.ngControl.disabled !== null) {
          return this.ngControl.disabled;
        }

        return this._disabled;
      },
      set: function set(value) {
        this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value); // Browsers may not fire the blur event if the input is disabled too quickly.
        // Reset from here to ensure that the element doesn't become stuck.

        if (this.focused) {
          this.focused = false;
          this.stateChanges.next();
        }
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

    }, {
      key: "id",
      get: function get() {
        return this._id;
      },
      set: function set(value) {
        this._id = value || this._uid;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

    }, {
      key: "required",
      get: function get() {
        return this._required;
      },
      set: function set(value) {
        this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value);
      }
      /** Input type of the element. */

    }, {
      key: "type",
      get: function get() {
        return this._type;
      },
      set: function set(value) {
        this._type = value || 'text';

        this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
        // input element. To ensure that bindings for `type` work, we need to sync the setter
        // with the native property. Textarea elements don't support the type property or attribute.


        if (!this._isTextarea && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.getSupportedInputTypes)().has(this._type)) {
          this._elementRef.nativeElement.type = this._type;
        }
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

    }, {
      key: "value",
      get: function get() {
        return this._inputValueAccessor.value;
      },
      set: function set(value) {
        if (value !== this.value) {
          this._inputValueAccessor.value = value;
          this.stateChanges.next();
        }
      }
      /** Whether the element is readonly. */

    }, {
      key: "readonly",
      get: function get() {
        return this._readonly;
      },
      set: function set(value) {
        this._readonly = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value);
      }
    }, {
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        var _this2 = this;

        if (this._platform.isBrowser) {
          this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (event) {
            _this2.autofilled = event.isAutofilled;

            _this2.stateChanges.next();
          });
        }
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges() {
        this.stateChanges.next();
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this.stateChanges.complete();

        if (this._platform.isBrowser) {
          this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
        }
      }
    }, {
      key: "ngDoCheck",
      value: function ngDoCheck() {
        if (this.ngControl) {
          // We need to re-evaluate this on every change detection cycle, because there are some
          // error triggers that we can't subscribe to (e.g. parent form submissions). This means
          // that whatever logic is in here has to be super lean or we risk destroying the performance.
          this.updateErrorState();
        } // We need to dirty-check the native element's value, because there are some cases where
        // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
        // updating the value using `emitEvent: false`).


        this._dirtyCheckNativeValue(); // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
        // present or not depends on a query which is prone to "changed after checked" errors.


        this._dirtyCheckPlaceholder();
      }
      /** Focuses the input. */

    }, {
      key: "focus",
      value: function focus(options) {
        this._elementRef.nativeElement.focus(options);
      } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
      // In Ivy the `host` bindings will be merged when this class is extended, whereas in
      // ViewEngine they're overwritten.
      // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

      /** Callback for the cases where the focused state of the input changes. */
      // tslint:disable:no-host-decorator-in-concrete
      // tslint:enable:no-host-decorator-in-concrete

    }, {
      key: "_focusChanged",
      value: function _focusChanged(isFocused) {
        if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
          this.focused = isFocused;
          this.stateChanges.next();
        }
      } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
      // In Ivy the `host` bindings will be merged when this class is extended, whereas in
      // ViewEngine they're overwritten.
      // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
      // tslint:disable-next-line:no-host-decorator-in-concrete

    }, {
      key: "_onInput",
      value: function _onInput() {// This is a noop function and is used to let Angular know whenever the value changes.
        // Angular will run a new change detection each time the `input` event has been dispatched.
        // It's necessary that Angular recognizes the value change, because when floatingLabel
        // is set to false and Angular forms aren't used, the placeholder won't recognize the
        // value changes and will not disappear.
        // Listening to the input event wouldn't be necessary when the input is using the
        // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
      }
      /** Does some manual dirty checking on the native input `placeholder` attribute. */

    }, {
      key: "_dirtyCheckPlaceholder",
      value: function _dirtyCheckPlaceholder() {
        var _a, _b; // If we're hiding the native placeholder, it should also be cleared from the DOM, otherwise
        // screen readers will read it out twice: once from the label and once from the attribute.
        // TODO: can be removed once we get rid of the `legacy` style for the form field, because it's
        // the only one that supports promoting the placeholder to a label.


        var placeholder = ((_b = (_a = this._formField) === null || _a === void 0 ? void 0 : _a._hideControlPlaceholder) === null || _b === void 0 ? void 0 : _b.call(_a)) ? null : this.placeholder;

        if (placeholder !== this._previousPlaceholder) {
          var element = this._elementRef.nativeElement;
          this._previousPlaceholder = placeholder;
          placeholder ? element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
        }
      }
      /** Does some manual dirty checking on the native input `value` property. */

    }, {
      key: "_dirtyCheckNativeValue",
      value: function _dirtyCheckNativeValue() {
        var newValue = this._elementRef.nativeElement.value;

        if (this._previousNativeValue !== newValue) {
          this._previousNativeValue = newValue;
          this.stateChanges.next();
        }
      }
      /** Make sure the input is a supported type. */

    }, {
      key: "_validateType",
      value: function _validateType() {
        if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getMatInputUnsupportedTypeError(this._type);
        }
      }
      /** Checks whether the input type is one of the types that are never empty. */

    }, {
      key: "_isNeverEmpty",
      value: function _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
      }
      /** Checks whether the input is invalid based on the native validation. */

    }, {
      key: "_isBadInput",
      value: function _isBadInput() {
        // The `validity` property won't be present on platform-server.
        var validity = this._elementRef.nativeElement.validity;
        return validity && validity.badInput;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

    }, {
      key: "empty",
      get: function get() {
        return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

    }, {
      key: "shouldLabelFloat",
      get: function get() {
        if (this._isNativeSelect) {
          // For a single-selection `<select>`, the label should float when the selected option has
          // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
          // overlapping the label with the options.
          var selectElement = this._elementRef.nativeElement;
          var firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
          // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

          return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
        } else {
          return this.focused || !this.empty;
        }
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

    }, {
      key: "setDescribedByIds",
      value: function setDescribedByIds(ids) {
        if (ids.length) {
          this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
        } else {
          this._elementRef.nativeElement.removeAttribute('aria-describedby');
        }
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

    }, {
      key: "onContainerClick",
      value: function onContainerClick() {
        // Do not re-focus the input element if the element is already focused. Otherwise it can happen
        // that someone clicks on a time input and the cursor resets to the "hours" field while the
        // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
        if (!this.focused) {
          this.focus();
        }
      }
    }]);

    return MatInput;
  }(_MatInputBase);

  MatInput.ɵfac = function MatInput_Factory(t) {
    return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__.AutofillMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MAT_FORM_FIELD, 8));
  };

  MatInput.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: MatInput,
    selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
    hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
    hostVars: 9,
    hostBindings: function MatInput_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() {
          return ctx._focusChanged(true);
        })("blur", function MatInput_blur_HostBindingHandler() {
          return ctx._focusChanged(false);
        })("input", function MatInput_input_HostBindingHandler() {
          return ctx._onInput();
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("id", ctx.id)("data-placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mat-input-server", ctx._isServer);
      }
    },
    inputs: {
      id: "id",
      disabled: "disabled",
      required: "required",
      type: "type",
      value: "value",
      readonly: "readonly",
      placeholder: "placeholder",
      errorStateMatcher: "errorStateMatcher",
      userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"]
    },
    exportAs: ["matInput"],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
      provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldControl,
      useExisting: MatInput
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]]
  });
  return MatInput;
}();

var MatInputModule = /*@__PURE__*/function () {
  var MatInputModule = function MatInputModule() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, MatInputModule);
  };

  MatInputModule.ɵfac = function MatInputModule_Factory(t) {
    return new (t || MatInputModule)();
  };

  MatInputModule.ɵmod =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: MatInputModule
  });
  MatInputModule.ɵinj =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.ErrorStateMatcher],
    imports: [[_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__.TextFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__.TextFieldModule, // We re-export the `MatFormFieldModule` since `MatInput` will almost always
    // be used together with `MatFormField`.
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule]
  });
  return MatInputModule;
}();
/*@__PURE__*/


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MatInputModule, {
    declarations: function declarations() {
      return [MatInput, MatTextareaAutosize];
    },
    imports: function imports() {
      return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__.TextFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule];
    },
    exports: function exports() {
      return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__.TextFieldModule, // We re-export the `MatFormFieldModule` since `MatInput` will almost always
      // be used together with `MatFormField`.
      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, MatInput, MatTextareaAutosize];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 5609:
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_PAGINATOR_DEFAULT_OPTIONS": function() { return /* binding */ MAT_PAGINATOR_DEFAULT_OPTIONS; },
/* harmony export */   "MAT_PAGINATOR_INTL_PROVIDER": function() { return /* binding */ MAT_PAGINATOR_INTL_PROVIDER; },
/* harmony export */   "MAT_PAGINATOR_INTL_PROVIDER_FACTORY": function() { return /* binding */ MAT_PAGINATOR_INTL_PROVIDER_FACTORY; },
/* harmony export */   "MatPaginator": function() { return /* binding */ MatPaginator; },
/* harmony export */   "MatPaginatorIntl": function() { return /* binding */ MatPaginatorIntl; },
/* harmony export */   "MatPaginatorModule": function() { return /* binding */ MatPaginatorModule; },
/* harmony export */   "PageEvent": function() { return /* binding */ PageEvent; },
/* harmony export */   "_MatPaginatorBase": function() { return /* binding */ _MatPaginatorBase; }
/* harmony export */ });
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 56602);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84369);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 13841);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 24311);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ 19861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 55959);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 13070);













/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
 * include it in a custom provider
 */









function MatPaginator_div_2_mat_form_field_3_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var pageSizeOption_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pageSizeOption_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pageSizeOption_r6, " ");
  }
}

function MatPaginator_div_2_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function MatPaginator_div_2_mat_form_field_3_Template_mat_select_selectionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r7._changePageSize($event.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatPaginator_div_2_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appearance", ctx_r3._formFieldAppearance)("color", ctx_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("aria-label", ctx_r3._intl.itemsPerPageLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3._displayedPageSizeOptions);
  }
}

function MatPaginator_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.pageSize);
  }
}

function MatPaginator_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatPaginator_div_2_mat_form_field_3_Template, 3, 6, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MatPaginator_div_2_div_4_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0._intl.itemsPerPageLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length <= 1);
  }
}

function MatPaginator_button_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatPaginator_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r9.firstPage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
  }
}

function MatPaginator_button_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatPaginator_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r11.lastPage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx_r2._intl.lastPageLabel);
  }
}

var MatPaginatorIntl = /*@__PURE__*/function () {
  var MatPaginatorIntl = function MatPaginatorIntl() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatPaginatorIntl);

    /**
     * Stream to emit from when labels are changed. Use this to notify components when the labels have
     * changed after initialization.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /** A label for the page size selector. */

    this.itemsPerPageLabel = 'Items per page:';
    /** A label for the button that increments the current page. */

    this.nextPageLabel = 'Next page';
    /** A label for the button that decrements the current page. */

    this.previousPageLabel = 'Previous page';
    /** A label for the button that moves to the first page. */

    this.firstPageLabel = 'First page';
    /** A label for the button that moves to the last page. */

    this.lastPageLabel = 'Last page';
    /** A label for the range of items within the current page and the length of the whole list. */

    this.getRangeLabel = function (page, pageSize, length) {
      if (length == 0 || pageSize == 0) {
        return "0 of ".concat(length);
      }

      length = Math.max(length, 0);
      var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

      var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return "".concat(startIndex + 1, " \u2013 ").concat(endIndex, " of ").concat(length);
    };
  };

  MatPaginatorIntl.ɵfac = function MatPaginatorIntl_Factory(t) {
    return new (t || MatPaginatorIntl)();
  };

  MatPaginatorIntl.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    factory: function MatPaginatorIntl_Factory() {
      return new MatPaginatorIntl();
    },
    token: MatPaginatorIntl,
    providedIn: "root"
  });
  return MatPaginatorIntl;
}();
/** @docs-private */


function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
/** @docs-private */


var MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[/*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional(), /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_4__.SkipSelf(), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The default page size if there is no page size and there are no provided page size options. */

var DEFAULT_PAGE_SIZE = 50;
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */

var PageEvent = function PageEvent() {
  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, PageEvent);
};
/** Injection token that can be used to provide the default options for the paginator module. */


var MAT_PAGINATOR_DEFAULT_OPTIONS = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('MAT_PAGINATOR_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to _MatPaginatorBase.

/** @docs-private */

var _MatPaginatorMixinBase = /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.mixinDisabled)( /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.mixinInitialized)( /*#__PURE__*/function () {
  function _class() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, _class);
  }

  return _class;
}()));

var _MatPaginatorBase = /*@__PURE__*/function () {
  var _MatPaginatorBase = /*#__PURE__*/function (_MatPaginatorMixinBas) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(_MatPaginatorBase, _MatPaginatorMixinBas);

    var _super = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(_MatPaginatorBase);

    function _MatPaginatorBase(_intl, _changeDetectorRef, defaults) {
      var _this;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, _MatPaginatorBase);

      _this = _super.call(this);
      _this._intl = _intl;
      _this._changeDetectorRef = _changeDetectorRef;
      _this._pageIndex = 0;
      _this._length = 0;
      _this._pageSizeOptions = [];
      _this._hidePageSize = false;
      _this._showFirstLastButtons = false;
      /** Event emitted when the paginator changes the page size or page index. */

      _this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
      _this._intlChanges = _intl.changes.subscribe(function () {
        return _this._changeDetectorRef.markForCheck();
      });

      if (defaults) {
        var pageSize = defaults.pageSize,
            pageSizeOptions = defaults.pageSizeOptions,
            hidePageSize = defaults.hidePageSize,
            showFirstLastButtons = defaults.showFirstLastButtons;

        if (pageSize != null) {
          _this._pageSize = pageSize;
        }

        if (pageSizeOptions != null) {
          _this._pageSizeOptions = pageSizeOptions;
        }

        if (hidePageSize != null) {
          _this._hidePageSize = hidePageSize;
        }

        if (showFirstLastButtons != null) {
          _this._showFirstLastButtons = showFirstLastButtons;
        }
      }

      return _this;
    }
    /** The zero-based page index of the displayed list of items. Defaulted to 0. */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(_MatPaginatorBase, [{
      key: "pageIndex",
      get: function get() {
        return this._pageIndex;
      },
      set: function set(value) {
        this._pageIndex = Math.max((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__.coerceNumberProperty)(value), 0);

        this._changeDetectorRef.markForCheck();
      }
      /** The length of the total number of items that are being paginated. Defaulted to 0. */

    }, {
      key: "length",
      get: function get() {
        return this._length;
      },
      set: function set(value) {
        this._length = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__.coerceNumberProperty)(value);

        this._changeDetectorRef.markForCheck();
      }
      /** Number of items to display on a page. By default set to 50. */

    }, {
      key: "pageSize",
      get: function get() {
        return this._pageSize;
      },
      set: function set(value) {
        this._pageSize = Math.max((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__.coerceNumberProperty)(value), 0);

        this._updateDisplayedPageSizeOptions();
      }
      /** The set of provided page size options to display to the user. */

    }, {
      key: "pageSizeOptions",
      get: function get() {
        return this._pageSizeOptions;
      },
      set: function set(value) {
        this._pageSizeOptions = (value || []).map(function (p) {
          return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__.coerceNumberProperty)(p);
        });

        this._updateDisplayedPageSizeOptions();
      }
      /** Whether to hide the page size selection UI from the user. */

    }, {
      key: "hidePageSize",
      get: function get() {
        return this._hidePageSize;
      },
      set: function set(value) {
        this._hidePageSize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__.coerceBooleanProperty)(value);
      }
      /** Whether to show the first/last buttons UI to the user. */

    }, {
      key: "showFirstLastButtons",
      get: function get() {
        return this._showFirstLastButtons;
      },
      set: function set(value) {
        this._showFirstLastButtons = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__.coerceBooleanProperty)(value);
      }
    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        this._initialized = true;

        this._updateDisplayedPageSizeOptions();

        this._markInitialized();
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._intlChanges.unsubscribe();
      }
      /** Advances to the next page if it exists. */

    }, {
      key: "nextPage",
      value: function nextPage() {
        if (!this.hasNextPage()) {
          return;
        }

        var previousPageIndex = this.pageIndex;
        this.pageIndex++;

        this._emitPageEvent(previousPageIndex);
      }
      /** Move back to the previous page if it exists. */

    }, {
      key: "previousPage",
      value: function previousPage() {
        if (!this.hasPreviousPage()) {
          return;
        }

        var previousPageIndex = this.pageIndex;
        this.pageIndex--;

        this._emitPageEvent(previousPageIndex);
      }
      /** Move to the first page if not already there. */

    }, {
      key: "firstPage",
      value: function firstPage() {
        // hasPreviousPage being false implies at the start
        if (!this.hasPreviousPage()) {
          return;
        }

        var previousPageIndex = this.pageIndex;
        this.pageIndex = 0;

        this._emitPageEvent(previousPageIndex);
      }
      /** Move to the last page if not already there. */

    }, {
      key: "lastPage",
      value: function lastPage() {
        // hasNextPage being false implies at the end
        if (!this.hasNextPage()) {
          return;
        }

        var previousPageIndex = this.pageIndex;
        this.pageIndex = this.getNumberOfPages() - 1;

        this._emitPageEvent(previousPageIndex);
      }
      /** Whether there is a previous page. */

    }, {
      key: "hasPreviousPage",
      value: function hasPreviousPage() {
        return this.pageIndex >= 1 && this.pageSize != 0;
      }
      /** Whether there is a next page. */

    }, {
      key: "hasNextPage",
      value: function hasNextPage() {
        var maxPageIndex = this.getNumberOfPages() - 1;
        return this.pageIndex < maxPageIndex && this.pageSize != 0;
      }
      /** Calculate the number of pages */

    }, {
      key: "getNumberOfPages",
      value: function getNumberOfPages() {
        if (!this.pageSize) {
          return 0;
        }

        return Math.ceil(this.length / this.pageSize);
      }
      /**
       * Changes the page size so that the first item displayed on the page will still be
       * displayed using the new page size.
       *
       * For example, if the page size is 10 and on the second page (items indexed 10-19) then
       * switching so that the page size is 5 will set the third page as the current page so
       * that the 10th item will still be displayed.
       */

    }, {
      key: "_changePageSize",
      value: function _changePageSize(pageSize) {
        // Current page needs to be updated to reflect the new page size. Navigate to the page
        // containing the previous page's first item.
        var startIndex = this.pageIndex * this.pageSize;
        var previousPageIndex = this.pageIndex;
        this.pageIndex = Math.floor(startIndex / pageSize) || 0;
        this.pageSize = pageSize;

        this._emitPageEvent(previousPageIndex);
      }
      /** Checks whether the buttons for going forwards should be disabled. */

    }, {
      key: "_nextButtonsDisabled",
      value: function _nextButtonsDisabled() {
        return this.disabled || !this.hasNextPage();
      }
      /** Checks whether the buttons for going backwards should be disabled. */

    }, {
      key: "_previousButtonsDisabled",
      value: function _previousButtonsDisabled() {
        return this.disabled || !this.hasPreviousPage();
      }
      /**
       * Updates the list of page size options to display to the user. Includes making sure that
       * the page size is an option and that the list is sorted.
       */

    }, {
      key: "_updateDisplayedPageSizeOptions",
      value: function _updateDisplayedPageSizeOptions() {
        if (!this._initialized) {
          return;
        } // If no page size is provided, use the first page size option or the default page size.


        if (!this.pageSize) {
          this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
        }

        this._displayedPageSizeOptions = this.pageSizeOptions.slice();

        if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
          this._displayedPageSizeOptions.push(this.pageSize);
        } // Sort the numbers using a number-specific sort function.


        this._displayedPageSizeOptions.sort(function (a, b) {
          return a - b;
        });

        this._changeDetectorRef.markForCheck();
      }
      /** Emits an event notifying that a change of the paginator's properties has been triggered. */

    }, {
      key: "_emitPageEvent",
      value: function _emitPageEvent(previousPageIndex) {
        this.page.emit({
          previousPageIndex: previousPageIndex,
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
          length: this.length
        });
      }
    }]);

    return _MatPaginatorBase;
  }(_MatPaginatorMixinBase);

  _MatPaginatorBase.ɵfac = function _MatPaginatorBase_Factory(t) {
    return new (t || _MatPaginatorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](undefined));
  };

  _MatPaginatorBase.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: _MatPaginatorBase,
    inputs: {
      pageIndex: "pageIndex",
      length: "length",
      pageSize: "pageSize",
      pageSizeOptions: "pageSizeOptions",
      hidePageSize: "hidePageSize",
      showFirstLastButtons: "showFirstLastButtons",
      color: "color"
    },
    outputs: {
      page: "page"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
  });
  return _MatPaginatorBase;
}();

var MatPaginator = /*@__PURE__*/function () {
  var MatPaginator = /*#__PURE__*/function (_MatPaginatorBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(MatPaginator, _MatPaginatorBase2);

    var _super2 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(MatPaginator);

    function MatPaginator(intl, changeDetectorRef, defaults) {
      var _this2;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatPaginator);

      _this2 = _super2.call(this, intl, changeDetectorRef, defaults);

      if (defaults && defaults.formFieldAppearance != null) {
        _this2._formFieldAppearance = defaults.formFieldAppearance;
      }

      return _this2;
    }

    return MatPaginator;
  }(_MatPaginatorBase);

  MatPaginator.ɵfac = function MatPaginator_Factory(t) {
    return new (t || MatPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
  };

  MatPaginator.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MatPaginator,
    selectors: [["mat-paginator"]],
    hostAttrs: ["role", "group", 1, "mat-paginator"],
    inputs: {
      disabled: "disabled"
    },
    exportAs: ["matPaginator"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 14,
    vars: 14,
    consts: [[1, "mat-paginator-outer-container"], [1, "mat-paginator-container"], ["class", "mat-paginator-page-size", 4, "ngIf"], [1, "mat-paginator-range-actions"], [1, "mat-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], [1, "mat-paginator-page-size"], [1, "mat-paginator-page-size-label"], ["class", "mat-paginator-page-size-select", 3, "appearance", "color", 4, "ngIf"], ["class", "mat-paginator-page-size-value", 4, "ngIf"], [1, "mat-paginator-page-size-select", 3, "appearance", "color"], [3, "value", "disabled", "aria-label", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
    template: function MatPaginator_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatPaginator_div_2_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MatPaginator_button_6_Template, 3, 5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_7_listener() {
          return ctx.previousPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_10_listener() {
          return ctx.nextPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, MatPaginator_button_13_Template, 3, 5, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.hidePageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx._intl.previousPageLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx._intl.nextPageLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption],
    styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-paginator-icon{fill:CanvasText}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return MatPaginator;
}();

var MatPaginatorModule = /*@__PURE__*/function () {
  var MatPaginatorModule = function MatPaginatorModule() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatPaginatorModule);
  };

  MatPaginatorModule.ɵfac = function MatPaginatorModule_Factory(t) {
    return new (t || MatPaginatorModule)();
  };

  MatPaginatorModule.ɵmod =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: MatPaginatorModule
  });
  MatPaginatorModule.ɵinj =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [MAT_PAGINATOR_INTL_PROVIDER],
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule]]
  });
  return MatPaginatorModule;
}();
/*@__PURE__*/


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatPaginatorModule, {
    declarations: function declarations() {
      return [MatPaginator];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule];
    },
    exports: function exports() {
      return [MatPaginator];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 13841:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_SELECT_CONFIG": function() { return /* binding */ MAT_SELECT_CONFIG; },
/* harmony export */   "MAT_SELECT_SCROLL_STRATEGY": function() { return /* binding */ MAT_SELECT_SCROLL_STRATEGY; },
/* harmony export */   "MAT_SELECT_SCROLL_STRATEGY_PROVIDER": function() { return /* binding */ MAT_SELECT_SCROLL_STRATEGY_PROVIDER; },
/* harmony export */   "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY": function() { return /* binding */ MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY; },
/* harmony export */   "MAT_SELECT_TRIGGER": function() { return /* binding */ MAT_SELECT_TRIGGER; },
/* harmony export */   "MatSelect": function() { return /* binding */ MatSelect; },
/* harmony export */   "MatSelectChange": function() { return /* binding */ MatSelectChange; },
/* harmony export */   "MatSelectModule": function() { return /* binding */ MatSelectModule; },
/* harmony export */   "MatSelectTrigger": function() { return /* binding */ MatSelectTrigger; },
/* harmony export */   "_MatSelectBase": function() { return /* binding */ _MatSelectBase; },
/* harmony export */   "matSelectAnimations": function() { return /* binding */ matSelectAnimations; }
/* harmony export */ });
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ 27078);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ 43620);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 66581);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ 71357);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/overlay */ 77923);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 56602);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/form-field */ 13070);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/scrolling */ 10083);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/a11y */ 97388);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/coercion */ 19861);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/collections */ 58378);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/keycodes */ 99235);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 55959);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 31450);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 31906);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 56238);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 44689);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 90611);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 43835);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 79996);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 98720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 25416);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 99713);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/bidi */ 94720);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 31041);























/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * @docs-private
 */










var _c0 = ["trigger"];
var _c1 = ["panel"];

function MatSelect_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.placeholder);
  }
}

function MatSelect_span_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.triggerValue);
  }
}

function MatSelect_span_5_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
  }
}

function MatSelect_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MatSelect_span_5_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MatSelect_span_5_ng_content_2_Template, 1, 0, "ng-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", true);
  }
}

function MatSelect_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r8._panelDoneAnimatingStream.next($event.toState);
    })("keydown", function MatSelect_ng_template_8_Template_div_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r10._handleKeydown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@transformPanelWrap", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("id", ctx_r4.id + "-panel")("aria-multiselectable", ctx_r4.multiple)("aria-label", ctx_r4.ariaLabel || null)("aria-labelledby", ctx_r4._getPanelAriaLabelledby());
  }
}

var _c2 = [[["mat-select-trigger"]], "*"];
var _c3 = ["mat-select-trigger", "*"];
var matSelectAnimations = {
  /**
   * This animation ensures the select's overlay panel animation (transformPanel) is called when
   * closing the select.
   * This is needed due to https://github.com/angular/angular/issues/23302
   */
  transformPanelWrap: /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('transformPanelWrap', [/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('* => void', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.query)('@transformPanel', [/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animateChild)()], {
    optional: true
  }))]),

  /**
   * This animation transforms the select's overlay panel on and off the page.
   *
   * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
   * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
   * side to ensure the option text correctly overlaps the trigger text.
   *
   * When the panel is removed from the DOM, it simply fades out linearly.
   */
  transformPanel: /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('transformPanel', [/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('void', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
    transform: 'scaleY(0.8)',
    minWidth: '100%',
    opacity: 0
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('showing', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
    opacity: 1,
    minWidth: 'calc(100% + 32px)',
    transform: 'scaleY(1)'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('showing-multiple', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
    opacity: 1,
    minWidth: 'calc(100% + 64px)',
    transform: 'scaleY(1)'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('void => *', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)')), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('* => void', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('100ms 25ms linear', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
    opacity: 0
  })))])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * @docs-private
 */

function getMatSelectDynamicMultipleError() {
  return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * @docs-private
 */


function getMatSelectNonArrayValueError() {
  return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 */


function getMatSelectNonFunctionValueError() {
  return Error('`compareWith` must be a function.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var nextUniqueId = 0;
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */

/** The max height of the select's overlay panel. */

var SELECT_PANEL_MAX_HEIGHT = 256;
/** The panel's padding on the x-axis. */

var SELECT_PANEL_PADDING_X = 16;
/** The panel's x axis padding if it is indented (e.g. there is an option group). */

var SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/** The height of the select items in `em` units. */

var SELECT_ITEM_HEIGHT_EM = 3; // TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.

/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
 */

var SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 */

var SELECT_PANEL_VIEWPORT_PADDING = 8;
/** Injection token that determines the scroll handling while a select is open. */

var MAT_SELECT_SCROLL_STRATEGY = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('mat-select-scroll-strategy');
/** @docs-private */

function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.reposition();
  };
}
/** Injection token that can be used to provide the default options the select module. */


var MAT_SELECT_CONFIG = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('MAT_SELECT_CONFIG');
/** @docs-private */

var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_SELECT_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay],
  useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
};
/** Change event object that is emitted when the select value has changed. */

var MatSelectChange = function MatSelectChange(
/** Reference to the select that emitted the change event. */
source,
/** Current value of the select that emitted the event. */
value) {
  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__.default)(this, MatSelectChange);

  this.source = source;
  this.value = value;
}; // Boilerplate for applying mixins to MatSelect.

/** @docs-private */


var _MatSelectMixinBase = /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.mixinDisableRipple)( /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.mixinTabIndex)( /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.mixinDisabled)( /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.mixinErrorState)( /*#__PURE__*/function () {
  function _class(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__.default)(this, _class);

    this._elementRef = _elementRef;
    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this.ngControl = ngControl;
  }

  return _class;
}()))));
/**
 * Injection token that can be used to reference instances of `MatSelectTrigger`. It serves as
 * alternative token to the actual `MatSelectTrigger` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_SELECT_TRIGGER = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('MatSelectTrigger');

var MatSelectTrigger = /*@__PURE__*/function () {
  var MatSelectTrigger = function MatSelectTrigger() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__.default)(this, MatSelectTrigger);
  };

  MatSelectTrigger.ɵfac = function MatSelectTrigger_Factory(t) {
    return new (t || MatSelectTrigger)();
  };

  MatSelectTrigger.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: MatSelectTrigger,
    selectors: [["mat-select-trigger"]],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
      provide: MAT_SELECT_TRIGGER,
      useExisting: MatSelectTrigger
    }])]
  });
  return MatSelectTrigger;
}();

var _MatSelectBase = /*@__PURE__*/function () {
  var _MatSelectBase = /*#__PURE__*/function (_MatSelectMixinBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(_MatSelectBase, _MatSelectMixinBase2);

    var _super = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__.default)(_MatSelectBase);

    function _MatSelectBase(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, _defaultOptions) {
      var _this;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__.default)(this, _MatSelectBase);

      var _a, _b, _c;

      _this = _super.call(this, elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
      _this._viewportRuler = _viewportRuler;
      _this._changeDetectorRef = _changeDetectorRef;
      _this._ngZone = _ngZone;
      _this._dir = _dir;
      _this._parentFormField = _parentFormField;
      _this._liveAnnouncer = _liveAnnouncer;
      _this._defaultOptions = _defaultOptions;
      /** Whether or not the overlay panel is open. */

      _this._panelOpen = false;
      /** Comparison function to specify which option is displayed. Defaults to object equality. */

      _this._compareWith = function (o1, o2) {
        return o1 === o2;
      };
      /** Unique id for this input. */


      _this._uid = "mat-select-".concat(nextUniqueId++);
      /** Current `ariar-labelledby` value for the select trigger. */

      _this._triggerAriaLabelledBy = null;
      /** Emits whenever the component is destroyed. */

      _this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
      /** `View -> model callback called when value changes` */

      _this._onChange = function () {};
      /** `View -> model callback called when select has been touched` */


      _this._onTouched = function () {};
      /** ID for the DOM node containing the select's value. */


      _this._valueId = "mat-select-value-".concat(nextUniqueId++);
      /** Emits when the panel element is finished transforming in. */

      _this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
      _this._overlayPanelClass = ((_a = _this._defaultOptions) === null || _a === void 0 ? void 0 : _a.overlayPanelClass) || '';
      _this._focused = false;
      /** A name for this control that can be used by `mat-form-field`. */

      _this.controlType = 'mat-select';
      _this._required = false;
      _this._multiple = false;
      _this._disableOptionCentering = (_c = (_b = _this._defaultOptions) === null || _b === void 0 ? void 0 : _b.disableOptionCentering) !== null && _c !== void 0 ? _c : false;
      /** Aria label of the select. */

      _this.ariaLabel = '';
      /** Combined stream of all of the child options' change events. */

      _this.optionSelectionChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.defer)(function () {
        var options = _this.options;

        if (options) {
          return options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)(options), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_16__.merge.apply(void 0, (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(options.map(function (option) {
              return option.onSelectionChange;
            })));
          }));
        }

        return _this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(function () {
          return _this.optionSelectionChanges;
        }));
      });
      /** Event emitted when the select panel has been toggled. */

      _this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /** Event emitted when the select has been opened. */

      _this._openedStream = _this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.filter)(function (o) {
        return o;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(function () {}));
      /** Event emitted when the select has been closed. */

      _this._closedStream = _this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.filter)(function (o) {
        return !o;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(function () {}));
      /** Event emitted when the selected value has been changed by the user. */

      _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * Event that emits whenever the raw value of the select changes. This is here primarily
       * to facilitate the two-way binding for the `value` input.
       * @docs-private
       */

      _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();

      if (_this.ngControl) {
        // Note: we provide the value accessor through here, instead of
        // the `providers` to avoid running into a circular import.
        _this.ngControl.valueAccessor = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this);
      } // Note that we only want to set this when the defaults pass it in, otherwise it should
      // stay as `undefined` so that it falls back to the default in the key manager.


      if ((_defaultOptions === null || _defaultOptions === void 0 ? void 0 : _defaultOptions.typeaheadDebounceInterval) != null) {
        _this._typeaheadDebounceInterval = _defaultOptions.typeaheadDebounceInterval;
      }

      _this._scrollStrategyFactory = scrollStrategyFactory;
      _this._scrollStrategy = _this._scrollStrategyFactory();
      _this.tabIndex = parseInt(tabIndex) || 0; // Force setter to be called in case id was not specified.

      _this.id = _this.id;
      return _this;
    }
    /** Whether the select is focused. */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(_MatSelectBase, [{
      key: "focused",
      get: function get() {
        return this._focused || this._panelOpen;
      }
      /** Placeholder to be shown if no value has been selected. */

    }, {
      key: "placeholder",
      get: function get() {
        return this._placeholder;
      },
      set: function set(value) {
        this._placeholder = value;
        this.stateChanges.next();
      }
      /** Whether the component is required. */

    }, {
      key: "required",
      get: function get() {
        return this._required;
      },
      set: function set(value) {
        this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_20__.coerceBooleanProperty)(value);
        this.stateChanges.next();
      }
      /** Whether the user should be allowed to select multiple options. */

    }, {
      key: "multiple",
      get: function get() {
        return this._multiple;
      },
      set: function set(value) {
        if (this._selectionModel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getMatSelectDynamicMultipleError();
        }

        this._multiple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_20__.coerceBooleanProperty)(value);
      }
      /** Whether to center the active option over the trigger. */

    }, {
      key: "disableOptionCentering",
      get: function get() {
        return this._disableOptionCentering;
      },
      set: function set(value) {
        this._disableOptionCentering = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_20__.coerceBooleanProperty)(value);
      }
      /**
       * Function to compare the option values with the selected values. The first argument
       * is a value from an option. The second is a value from the selection. A boolean
       * should be returned.
       */

    }, {
      key: "compareWith",
      get: function get() {
        return this._compareWith;
      },
      set: function set(fn) {
        if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getMatSelectNonFunctionValueError();
        }

        this._compareWith = fn;

        if (this._selectionModel) {
          // A different comparator means the selection could change.
          this._initializeSelection();
        }
      }
      /** Value of the select control. */

    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(newValue) {
        // Always re-assign an array, because it might have been mutated.
        if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
          if (this.options) {
            this._setSelectionByValue(newValue);
          }

          this._value = newValue;
        }
      }
      /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */

    }, {
      key: "typeaheadDebounceInterval",
      get: function get() {
        return this._typeaheadDebounceInterval;
      },
      set: function set(value) {
        this._typeaheadDebounceInterval = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_20__.coerceNumberProperty)(value);
      }
      /** Unique id of the element. */

    }, {
      key: "id",
      get: function get() {
        return this._id;
      },
      set: function set(value) {
        this._id = value || this._uid;
        this.stateChanges.next();
      }
    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        var _this2 = this;

        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_21__.SelectionModel(this.multiple);
        this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
        // fire the animation end event twice for the same animation. See:
        // https://github.com/angular/angular/issues/24084

        this._panelDoneAnimatingStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this._destroy)).subscribe(function () {
          return _this2._panelDoneAnimating(_this2.panelOpen);
        });
      }
    }, {
      key: "ngAfterContentInit",
      value: function ngAfterContentInit() {
        var _this3 = this;

        this._initKeyManager();

        this._selectionModel.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this._destroy)).subscribe(function (event) {
          event.added.forEach(function (option) {
            return option.select();
          });
          event.removed.forEach(function (option) {
            return option.deselect();
          });
        });

        this.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this._destroy)).subscribe(function () {
          _this3._resetOptions();

          _this3._initializeSelection();
        });
      }
    }, {
      key: "ngDoCheck",
      value: function ngDoCheck() {
        var newAriaLabelledby = this._getTriggerAriaLabelledby(); // We have to manage setting the `aria-labelledby` ourselves, because part of its value
        // is computed as a result of a content query which can cause this binding to trigger a
        // "changed after checked" error.


        if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
          var element = this._elementRef.nativeElement;
          this._triggerAriaLabelledBy = newAriaLabelledby;

          if (newAriaLabelledby) {
            element.setAttribute('aria-labelledby', newAriaLabelledby);
          } else {
            element.removeAttribute('aria-labelledby');
          }
        }

        if (this.ngControl) {
          this.updateErrorState();
        }
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
        // the parent form field know to run change detection when the disabled state changes.
        if (changes['disabled']) {
          this.stateChanges.next();
        }

        if (changes['typeaheadDebounceInterval'] && this._keyManager) {
          this._keyManager.withTypeAhead(this._typeaheadDebounceInterval);
        }
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._destroy.next();

        this._destroy.complete();

        this.stateChanges.complete();
      }
      /** Toggles the overlay panel open or closed. */

    }, {
      key: "toggle",
      value: function toggle() {
        this.panelOpen ? this.close() : this.open();
      }
      /** Opens the overlay panel. */

    }, {
      key: "open",
      value: function open() {
        if (this._canOpen()) {
          this._panelOpen = true;

          this._keyManager.withHorizontalOrientation(null);

          this._highlightCorrectOption();

          this._changeDetectorRef.markForCheck();
        }
      }
      /** Closes the overlay panel and focuses the host element. */

    }, {
      key: "close",
      value: function close() {
        if (this._panelOpen) {
          this._panelOpen = false;

          this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');

          this._changeDetectorRef.markForCheck();

          this._onTouched();
        }
      }
      /**
       * Sets the select's value. Part of the ControlValueAccessor interface
       * required to integrate with Angular's core forms API.
       *
       * @param value New value to be written to the model.
       */

    }, {
      key: "writeValue",
      value: function writeValue(value) {
        this.value = value;
      }
      /**
       * Saves a callback function to be invoked when the select's value
       * changes from user input. Part of the ControlValueAccessor interface
       * required to integrate with Angular's core forms API.
       *
       * @param fn Callback to be triggered when the value changes.
       */

    }, {
      key: "registerOnChange",
      value: function registerOnChange(fn) {
        this._onChange = fn;
      }
      /**
       * Saves a callback function to be invoked when the select is blurred
       * by the user. Part of the ControlValueAccessor interface required
       * to integrate with Angular's core forms API.
       *
       * @param fn Callback to be triggered when the component has been touched.
       */

    }, {
      key: "registerOnTouched",
      value: function registerOnTouched(fn) {
        this._onTouched = fn;
      }
      /**
       * Disables the select. Part of the ControlValueAccessor interface required
       * to integrate with Angular's core forms API.
       *
       * @param isDisabled Sets whether the component is disabled.
       */

    }, {
      key: "setDisabledState",
      value: function setDisabledState(isDisabled) {
        this.disabled = isDisabled;

        this._changeDetectorRef.markForCheck();

        this.stateChanges.next();
      }
      /** Whether or not the overlay panel is open. */

    }, {
      key: "panelOpen",
      get: function get() {
        return this._panelOpen;
      }
      /** The currently selected option. */

    }, {
      key: "selected",
      get: function get() {
        return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
      }
      /** The value displayed in the trigger. */

    }, {
      key: "triggerValue",
      get: function get() {
        if (this.empty) {
          return '';
        }

        if (this._multiple) {
          var selectedOptions = this._selectionModel.selected.map(function (option) {
            return option.viewValue;
          });

          if (this._isRtl()) {
            selectedOptions.reverse();
          } // TODO(crisbeto): delimiter should be configurable for proper localization.


          return selectedOptions.join(', ');
        }

        return this._selectionModel.selected[0].viewValue;
      }
      /** Whether the element is in RTL mode. */

    }, {
      key: "_isRtl",
      value: function _isRtl() {
        return this._dir ? this._dir.value === 'rtl' : false;
      }
      /** Handles all keydown events on the select. */

    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(event) {
        if (!this.disabled) {
          this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
        }
      }
      /** Handles keyboard events while the select is closed. */

    }, {
      key: "_handleClosedKeydown",
      value: function _handleClosedKeydown(event) {
        var keyCode = event.keyCode;
        var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__.LEFT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__.RIGHT_ARROW;
        var isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__.SPACE;
        var manager = this._keyManager; // Open the select on ALT + arrow key to match the native <select>

        if (!manager.isTyping() && isOpenKey && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__.hasModifierKey)(event) || (this.multiple || event.altKey) && isArrowKey) {
          event.preventDefault(); // prevents the page from scrolling down when pressing space

          this.open();
        } else if (!this.multiple) {
          var previouslySelectedOption = this.selected;
          manager.onKeydown(event);
          var selectedOption = this.selected; // Since the value has changed, we need to announce it ourselves.

          if (selectedOption && previouslySelectedOption !== selectedOption) {
            // We set a duration on the live announcement, because we want the live element to be
            // cleared after a while so that users can't navigate to it using the arrow keys.
            this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
          }
        }
      }
      /** Handles keyboard events when the selected is open. */

    }, {
      key: "_handleOpenKeydown",
      value: function _handleOpenKeydown(event) {
        var manager = this._keyManager;
        var keyCode = event.keyCode;
        var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__.UP_ARROW;
        var isTyping = manager.isTyping();

        if (isArrowKey && event.altKey) {
          // Close the select on ALT + arrow key to match the native <select>
          event.preventDefault();
          this.close(); // Don't do anything in this case if the user is typing,
          // because the typing sequence can include the space key.
        } else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__.SPACE) && manager.activeItem && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__.hasModifierKey)(event)) {
          event.preventDefault();

          manager.activeItem._selectViaInteraction();
        } else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__.A && event.ctrlKey) {
          event.preventDefault();
          var hasDeselectedOptions = this.options.some(function (opt) {
            return !opt.disabled && !opt.selected;
          });
          this.options.forEach(function (option) {
            if (!option.disabled) {
              hasDeselectedOptions ? option.select() : option.deselect();
            }
          });
        } else {
          var previouslyFocusedIndex = manager.activeItemIndex;
          manager.onKeydown(event);

          if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
            manager.activeItem._selectViaInteraction();
          }
        }
      }
    }, {
      key: "_onFocus",
      value: function _onFocus() {
        if (!this.disabled) {
          this._focused = true;
          this.stateChanges.next();
        }
      }
      /**
       * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
       * "blur" to the panel when it opens, causing a false positive.
       */

    }, {
      key: "_onBlur",
      value: function _onBlur() {
        this._focused = false;

        if (!this.disabled && !this.panelOpen) {
          this._onTouched();

          this._changeDetectorRef.markForCheck();

          this.stateChanges.next();
        }
      }
      /**
       * Callback that is invoked when the overlay panel has been attached.
       */

    }, {
      key: "_onAttached",
      value: function _onAttached() {
        var _this4 = this;

        this._overlayDir.positionChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1)).subscribe(function () {
          _this4._changeDetectorRef.detectChanges();

          _this4._positioningSettled();
        });
      }
      /** Returns the theme to be used on the panel. */

    }, {
      key: "_getPanelTheme",
      value: function _getPanelTheme() {
        return this._parentFormField ? "mat-".concat(this._parentFormField.color) : '';
      }
      /** Whether the select has a value. */

    }, {
      key: "empty",
      get: function get() {
        return !this._selectionModel || this._selectionModel.isEmpty();
      }
    }, {
      key: "_initializeSelection",
      value: function _initializeSelection() {
        var _this5 = this;

        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(function () {
          _this5._setSelectionByValue(_this5.ngControl ? _this5.ngControl.value : _this5._value);

          _this5.stateChanges.next();
        });
      }
      /**
       * Sets the selected option based on a value. If no option can be
       * found with the designated value, the select trigger is cleared.
       */

    }, {
      key: "_setSelectionByValue",
      value: function _setSelectionByValue(value) {
        var _this6 = this;

        this._selectionModel.selected.forEach(function (option) {
          return option.setInactiveStyles();
        });

        this._selectionModel.clear();

        if (this.multiple && value) {
          if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatSelectNonArrayValueError();
          }

          value.forEach(function (currentValue) {
            return _this6._selectValue(currentValue);
          });

          this._sortValues();
        } else {
          var correspondingOption = this._selectValue(value); // Shift focus to the active item. Note that we shouldn't do this in multiple
          // mode, because we don't know what option the user interacted with last.


          if (correspondingOption) {
            this._keyManager.updateActiveItem(correspondingOption);
          } else if (!this.panelOpen) {
            // Otherwise reset the highlighted option. Note that we only want to do this while
            // closed, because doing it while open can shift the user's focus unnecessarily.
            this._keyManager.updateActiveItem(-1);
          }
        }

        this._changeDetectorRef.markForCheck();
      }
      /**
       * Finds and selects and option based on its value.
       * @returns Option that has the corresponding value.
       */

    }, {
      key: "_selectValue",
      value: function _selectValue(value) {
        var _this7 = this;

        var correspondingOption = this.options.find(function (option) {
          // Skip options that are already in the model. This allows us to handle cases
          // where the same primitive value is selected multiple times.
          if (_this7._selectionModel.isSelected(option)) {
            return false;
          }

          try {
            // Treat null as a special reset value.
            return option.value != null && _this7._compareWith(option.value, value);
          } catch (error) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              // Notify developers of errors in their comparator.
              console.warn(error);
            }

            return false;
          }
        });

        if (correspondingOption) {
          this._selectionModel.select(correspondingOption);
        }

        return correspondingOption;
      }
      /** Sets up a key manager to listen to keyboard events on the overlay panel. */

    }, {
      key: "_initKeyManager",
      value: function _initKeyManager() {
        var _this8 = this;

        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__.ActiveDescendantKeyManager(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withHomeAndEnd().withAllowedModifierKeys(['shiftKey']);

        this._keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this._destroy)).subscribe(function () {
          if (_this8.panelOpen) {
            // Select the active item when tabbing away. This is consistent with how the native
            // select behaves. Note that we only want to do this in single selection mode.
            if (!_this8.multiple && _this8._keyManager.activeItem) {
              _this8._keyManager.activeItem._selectViaInteraction();
            } // Restore focus to the trigger before closing. Ensures that the focus
            // position won't be lost if the user got focus into the overlay.


            _this8.focus();

            _this8.close();
          }
        });

        this._keyManager.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this._destroy)).subscribe(function () {
          if (_this8._panelOpen && _this8.panel) {
            _this8._scrollOptionIntoView(_this8._keyManager.activeItemIndex || 0);
          } else if (!_this8._panelOpen && !_this8.multiple && _this8._keyManager.activeItem) {
            _this8._keyManager.activeItem._selectViaInteraction();
          }
        });
      }
      /** Drops current option subscriptions and IDs and resets from scratch. */

    }, {
      key: "_resetOptions",
      value: function _resetOptions() {
        var _this9 = this;

        var changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this.options.changes, this._destroy);
        this.optionSelectionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(changedOrDestroyed)).subscribe(function (event) {
          _this9._onSelect(event.source, event.isUserInput);

          if (event.isUserInput && !_this9.multiple && _this9._panelOpen) {
            _this9.close();

            _this9.focus();
          }
        }); // Listen to changes in the internal state of the options and react accordingly.
        // Handles cases like the labels of the selected options changing.

        rxjs__WEBPACK_IMPORTED_MODULE_16__.merge.apply(void 0, (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(this.options.map(function (option) {
          return option._stateChanges;
        }))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(changedOrDestroyed)).subscribe(function () {
          _this9._changeDetectorRef.markForCheck();

          _this9.stateChanges.next();
        });
      }
      /** Invoked when an option is clicked. */

    }, {
      key: "_onSelect",
      value: function _onSelect(option, isUserInput) {
        var wasSelected = this._selectionModel.isSelected(option);

        if (option.value == null && !this._multiple) {
          option.deselect();

          this._selectionModel.clear();

          if (this.value != null) {
            this._propagateChanges(option.value);
          }
        } else {
          if (wasSelected !== option.selected) {
            option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
          }

          if (isUserInput) {
            this._keyManager.setActiveItem(option);
          }

          if (this.multiple) {
            this._sortValues();

            if (isUserInput) {
              // In case the user selected the option with their mouse, we
              // want to restore focus back to the trigger, in order to
              // prevent the select keyboard controls from clashing with
              // the ones from `mat-option`.
              this.focus();
            }
          }
        }

        if (wasSelected !== this._selectionModel.isSelected(option)) {
          this._propagateChanges();
        }

        this.stateChanges.next();
      }
      /** Sorts the selected values in the selected based on their order in the panel. */

    }, {
      key: "_sortValues",
      value: function _sortValues() {
        var _this10 = this;

        if (this.multiple) {
          var options = this.options.toArray();

          this._selectionModel.sort(function (a, b) {
            return _this10.sortComparator ? _this10.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
          });

          this.stateChanges.next();
        }
      }
      /** Emits change event to set the model value. */

    }, {
      key: "_propagateChanges",
      value: function _propagateChanges(fallbackValue) {
        var valueToEmit = null;

        if (this.multiple) {
          valueToEmit = this.selected.map(function (option) {
            return option.value;
          });
        } else {
          valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }

        this._value = valueToEmit;
        this.valueChange.emit(valueToEmit);

        this._onChange(valueToEmit);

        this.selectionChange.emit(this._getChangeEvent(valueToEmit));

        this._changeDetectorRef.markForCheck();
      }
      /**
       * Highlights the selected item. If no option is selected, it will highlight
       * the first item instead.
       */

    }, {
      key: "_highlightCorrectOption",
      value: function _highlightCorrectOption() {
        if (this._keyManager) {
          if (this.empty) {
            this._keyManager.setFirstItemActive();
          } else {
            this._keyManager.setActiveItem(this._selectionModel.selected[0]);
          }
        }
      }
      /** Whether the panel is allowed to open. */

    }, {
      key: "_canOpen",
      value: function _canOpen() {
        var _a;

        return !this._panelOpen && !this.disabled && ((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) > 0;
      }
      /** Focuses the select element. */

    }, {
      key: "focus",
      value: function focus(options) {
        this._elementRef.nativeElement.focus(options);
      }
      /** Gets the aria-labelledby for the select panel. */

    }, {
      key: "_getPanelAriaLabelledby",
      value: function _getPanelAriaLabelledby() {
        var _a;

        if (this.ariaLabel) {
          return null;
        }

        var labelId = (_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId();
        var labelExpression = labelId ? labelId + ' ' : '';
        return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
      }
      /** Determines the `aria-activedescendant` to be set on the host. */

    }, {
      key: "_getAriaActiveDescendant",
      value: function _getAriaActiveDescendant() {
        if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
          return this._keyManager.activeItem.id;
        }

        return null;
      }
      /** Gets the aria-labelledby of the select component trigger. */

    }, {
      key: "_getTriggerAriaLabelledby",
      value: function _getTriggerAriaLabelledby() {
        var _a;

        if (this.ariaLabel) {
          return null;
        }

        var labelId = (_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId();
        var value = (labelId ? labelId + ' ' : '') + this._valueId;

        if (this.ariaLabelledby) {
          value += ' ' + this.ariaLabelledby;
        }

        return value;
      }
      /** Called when the overlay panel is done animating. */

    }, {
      key: "_panelDoneAnimating",
      value: function _panelDoneAnimating(isOpen) {
        this.openedChange.emit(isOpen);
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

    }, {
      key: "setDescribedByIds",
      value: function setDescribedByIds(ids) {
        this._ariaDescribedby = ids.join(' ');
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

    }, {
      key: "onContainerClick",
      value: function onContainerClick() {
        this.focus();
        this.open();
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

    }, {
      key: "shouldLabelFloat",
      get: function get() {
        return this._panelOpen || !this.empty || this._focused && !!this._placeholder;
      }
    }]);

    return _MatSelectBase;
  }(_MatSelectMixinBase);

  _MatSelectBase.ɵfac = function _MatSelectBase_Factory(t) {
    return new (t || _MatSelectBase)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MAT_FORM_FIELD, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8));
  };

  _MatSelectBase.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: _MatSelectBase,
    viewQuery: function _MatSelectBase_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.CdkConnectedOverlay, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._overlayDir = _t.first);
      }
    },
    inputs: {
      ariaLabel: ["aria-label", "ariaLabel"],
      id: "id",
      placeholder: "placeholder",
      required: "required",
      multiple: "multiple",
      disableOptionCentering: "disableOptionCentering",
      compareWith: "compareWith",
      value: "value",
      typeaheadDebounceInterval: "typeaheadDebounceInterval",
      panelClass: "panelClass",
      ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
      errorStateMatcher: "errorStateMatcher",
      sortComparator: "sortComparator"
    },
    outputs: {
      openedChange: "openedChange",
      _openedStream: "opened",
      _closedStream: "closed",
      selectionChange: "selectionChange",
      valueChange: "valueChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
  });
  return _MatSelectBase;
}();

var MatSelect = /*@__PURE__*/function () {
  var MatSelect = /*#__PURE__*/function (_MatSelectBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(MatSelect, _MatSelectBase2);

    var _super2 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__.default)(MatSelect);

    function MatSelect() {
      var _this11;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__.default)(this, MatSelect);

      _this11 = _super2.apply(this, arguments);
      /** The scroll position of the overlay panel, calculated to center the selected option. */

      _this11._scrollTop = 0;
      /** The cached font-size of the trigger element. */

      _this11._triggerFontSize = 0;
      /** The value of the select panel's transform-origin property. */

      _this11._transformOrigin = 'top';
      /**
       * The y-offset of the overlay panel in relation to the trigger's top start corner.
       * This must be adjusted to align the selected option text over the trigger text.
       * when the panel opens. Will change based on the y-position of the selected option.
       */

      _this11._offsetY = 0;
      _this11._positions = [{
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom'
      }];
      return _this11;
    }
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(MatSelect, [{
      key: "_calculateOverlayScroll",
      value: function _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
        var itemHeight = this._getItemHeight();

        var optionOffsetFromScrollTop = itemHeight * selectedIndex;
        var halfOptionHeight = itemHeight / 2; // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
        // scroll container, then subtracts the scroll buffer to scroll the option down to
        // the center of the overlay panel. Half the option height must be re-added to the
        // scrollTop so the option is centered based on its middle, not its top edge.

        var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
        return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
      }
    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        var _this12 = this;

        (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.default)(MatSelect.prototype), "ngOnInit", this).call(this);

        this._viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this._destroy)).subscribe(function () {
          if (_this12.panelOpen) {
            _this12._triggerRect = _this12.trigger.nativeElement.getBoundingClientRect();

            _this12._changeDetectorRef.markForCheck();
          }
        });
      }
    }, {
      key: "open",
      value: function open() {
        var _this13 = this;

        if ((0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.default)(MatSelect.prototype), "_canOpen", this).call(this)) {
          (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.default)(MatSelect.prototype), "open", this).call(this);

          this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
          // `parseInt` ignores the trailing 'px' and converts this to a number.

          this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');

          this._calculateOverlayPosition(); // Set the font size on the panel element once it exists.


          this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1)).subscribe(function () {
            if (_this13._triggerFontSize && _this13._overlayDir.overlayRef && _this13._overlayDir.overlayRef.overlayElement) {
              _this13._overlayDir.overlayRef.overlayElement.style.fontSize = "".concat(_this13._triggerFontSize, "px");
            }
          });
        }
      }
      /** Scrolls the active option into view. */

    }, {
      key: "_scrollOptionIntoView",
      value: function _scrollOptionIntoView(index) {
        var labelCount = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_11__._countGroupLabelsBeforeOption)(index, this.options, this.optionGroups);

        var itemHeight = this._getItemHeight();

        if (index === 0 && labelCount === 1) {
          // If we've got one group label before the option and we're at the top option,
          // scroll the list to the top. This is better UX than scrolling the list to the
          // top of the option, because it allows the user to read the top group's label.
          this.panel.nativeElement.scrollTop = 0;
        } else {
          this.panel.nativeElement.scrollTop = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_11__._getOptionScrollPosition)((index + labelCount) * itemHeight, itemHeight, this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
        }
      }
    }, {
      key: "_positioningSettled",
      value: function _positioningSettled() {
        this._calculateOverlayOffsetX();

        this.panel.nativeElement.scrollTop = this._scrollTop;
      }
    }, {
      key: "_panelDoneAnimating",
      value: function _panelDoneAnimating(isOpen) {
        if (this.panelOpen) {
          this._scrollTop = 0;
        } else {
          this._overlayDir.offsetX = 0;

          this._changeDetectorRef.markForCheck();
        }

        (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.default)(MatSelect.prototype), "_panelDoneAnimating", this).call(this, isOpen);
      }
    }, {
      key: "_getChangeEvent",
      value: function _getChangeEvent(value) {
        return new MatSelectChange(this, value);
      }
      /**
       * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
       * This must be adjusted to align the selected option text over the trigger text when
       * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
       * can't be calculated until the panel has been attached, because we need to know the
       * content width in order to constrain the panel within the viewport.
       */

    }, {
      key: "_calculateOverlayOffsetX",
      value: function _calculateOverlayOffsetX() {
        var overlayRect = this._overlayDir.overlayRef.overlayElement.getBoundingClientRect();

        var viewportSize = this._viewportRuler.getViewportSize();

        var isRtl = this._isRtl();

        var paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X : SELECT_PANEL_PADDING_X * 2;
        var offsetX; // Adjust the offset, depending on the option padding.

        if (this.multiple) {
          offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
        } else if (this.disableOptionCentering) {
          offsetX = SELECT_PANEL_PADDING_X;
        } else {
          var selected = this._selectionModel.selected[0] || this.options.first;
          offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
        } // Invert the offset in LTR.


        if (!isRtl) {
          offsetX *= -1;
        } // Determine how much the select overflows on each side.


        var leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
        var rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

        if (leftOverflow > 0) {
          offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        } else if (rightOverflow > 0) {
          offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        } // Set the offset directly in order to avoid having to go through change detection and
        // potentially triggering "changed after it was checked" errors. Round the value to avoid
        // blurry content in some browsers.


        this._overlayDir.offsetX = Math.round(offsetX);

        this._overlayDir.overlayRef.updatePosition();
      }
      /**
       * Calculates the y-offset of the select's overlay panel in relation to the
       * top start corner of the trigger. It has to be adjusted in order for the
       * selected option to be aligned over the trigger when the panel opens.
       */

    }, {
      key: "_calculateOverlayOffsetY",
      value: function _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
        var itemHeight = this._getItemHeight();

        var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        var maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
        var optionOffsetFromPanelTop; // Disable offset if requested by user by returning 0 as value to offset

        if (this.disableOptionCentering) {
          return 0;
        }

        if (this._scrollTop === 0) {
          optionOffsetFromPanelTop = selectedIndex * itemHeight;
        } else if (this._scrollTop === maxScroll) {
          var firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
          var selectedDisplayIndex = selectedIndex - firstDisplayedIndex; // The first item is partially out of the viewport. Therefore we need to calculate what
          // portion of it is shown in the viewport and account for it in our offset.

          var partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight; // Because the panel height is longer than the height of the options alone,
          // there is always extra padding at the top or bottom of the panel. When
          // scrolled to the very bottom, this padding is at the top of the panel and
          // must be added to the offset.

          optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
        } else {
          // If the option was scrolled to the middle of the panel using a scroll buffer,
          // its offset will be the scroll buffer minus the half height that was added to
          // center it.
          optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
        } // The final offset is the option's offset from the top, adjusted for the height difference,
        // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
        // The value is rounded to prevent some browsers from blurring the content.


        return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
      }
      /**
       * Checks that the attempted overlay position will fit within the viewport.
       * If it will not fit, tries to adjust the scroll position and the associated
       * y-offset so the panel can open fully on-screen. If it still won't fit,
       * sets the offset back to 0 to allow the fallback position to take over.
       */

    }, {
      key: "_checkOverlayWithinViewport",
      value: function _checkOverlayWithinViewport(maxScroll) {
        var itemHeight = this._getItemHeight();

        var viewportSize = this._viewportRuler.getViewportSize();

        var topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
        var bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
        var panelHeightTop = Math.abs(this._offsetY);
        var totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        var panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;

        if (panelHeightBottom > bottomSpaceAvailable) {
          this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
        } else if (panelHeightTop > topSpaceAvailable) {
          this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
        } else {
          this._transformOrigin = this._getOriginBasedOnOption();
        }
      }
      /** Adjusts the overlay panel up to fit in the viewport. */

    }, {
      key: "_adjustPanelUp",
      value: function _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        var distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable); // Scrolls the panel up by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel up into the viewport.

        this._scrollTop -= distanceBelowViewport;
        this._offsetY -= distanceBelowViewport;
        this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very top, it won't be able to fit the panel
        // by scrolling, so set the offset to 0 to allow the fallback position to take
        // effect.

        if (this._scrollTop <= 0) {
          this._scrollTop = 0;
          this._offsetY = 0;
          this._transformOrigin = "50% bottom 0px";
        }
      }
      /** Adjusts the overlay panel down to fit in the viewport. */

    }, {
      key: "_adjustPanelDown",
      value: function _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        var distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable); // Scrolls the panel down by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel down into the viewport.

        this._scrollTop += distanceAboveViewport;
        this._offsetY += distanceAboveViewport;
        this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very bottom, it won't be able to fit the
        // panel by scrolling, so set the offset to 0 to allow the fallback position
        // to take effect.

        if (this._scrollTop >= maxScroll) {
          this._scrollTop = maxScroll;
          this._offsetY = 0;
          this._transformOrigin = "50% top 0px";
          return;
        }
      }
      /** Calculates the scroll position and x- and y-offsets of the overlay panel. */

    }, {
      key: "_calculateOverlayPosition",
      value: function _calculateOverlayPosition() {
        var itemHeight = this._getItemHeight();

        var items = this._getItemCount();

        var panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        var scrollContainerHeight = items * itemHeight; // The farthest the panel can be scrolled before it hits the bottom

        var maxScroll = scrollContainerHeight - panelHeight; // If no value is selected we open the popup to the first item.

        var selectedOptionOffset;

        if (this.empty) {
          selectedOptionOffset = 0;
        } else {
          selectedOptionOffset = Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]), 0);
        }

        selectedOptionOffset += (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_11__._countGroupLabelsBeforeOption)(selectedOptionOffset, this.options, this.optionGroups); // We must maintain a scroll buffer so the selected option will be scrolled to the
        // center of the overlay panel rather than the top.

        var scrollBuffer = panelHeight / 2;
        this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
        this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);

        this._checkOverlayWithinViewport(maxScroll);
      }
      /** Sets the transform origin point based on the selected option. */

    }, {
      key: "_getOriginBasedOnOption",
      value: function _getOriginBasedOnOption() {
        var itemHeight = this._getItemHeight();

        var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        var originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
        return "50% ".concat(originY, "px 0px");
      }
      /** Calculates the height of the select's options. */

    }, {
      key: "_getItemHeight",
      value: function _getItemHeight() {
        return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
      }
      /** Calculates the amount of items in the select. This includes options and group labels. */

    }, {
      key: "_getItemCount",
      value: function _getItemCount() {
        return this.options.length + this.optionGroups.length;
      }
    }]);

    return MatSelect;
  }(_MatSelectBase);

  MatSelect.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatSelect_BaseFactory;
    return function MatSelect_Factory(t) {
      return (ɵMatSelect_BaseFactory || (ɵMatSelect_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](MatSelect)))(t || MatSelect);
    };
  }();

  MatSelect.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: MatSelect,
    selectors: [["mat-select"]],
    contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, MAT_SELECT_TRIGGER, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_OPTGROUP, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.options = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
      }
    },
    hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "true", 1, "mat-select"],
    hostVars: 20,
    hostBindings: function MatSelect_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("focus", function MatSelect_focus_HostBindingHandler() {
          return ctx._onFocus();
        })("blur", function MatSelect_blur_HostBindingHandler() {
          return ctx._onBlur();
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-describedby", ctx._ariaDescribedby || null)("aria-activedescendant", ctx._getAriaActiveDescendant());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty)("mat-select-multiple", ctx.multiple);
      }
    },
    inputs: {
      disabled: "disabled",
      disableRipple: "disableRipple",
      tabIndex: "tabIndex"
    },
    exportAs: ["matSelect"],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
      provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormFieldControl,
      useExisting: MatSelect
    }, {
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_OPTION_PARENT_COMPONENT,
      useExisting: MatSelect
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 12,
    consts: [["cdk-overlay-origin", "", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder mat-select-min-line", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder", "mat-select-min-line"], [1, "mat-select-value-text", 3, "ngSwitch"], ["class", "mat-select-min-line", 4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-min-line"], [1, "mat-select-panel-wrap"], ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"], ["panel", ""]],
    template: function MatSelect_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, MatSelect_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, MatSelect_span_5_Template, 3, 2, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, MatSelect_ng_template_8_Template, 4, 14, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_8_listener() {
          return ctx.close();
        })("attach", function MatSelect_Template_ng_template_attach_8_listener() {
          return ctx._onAttached();
        })("detach", function MatSelect_Template_ng_template_detach_8_listener() {
          return ctx.close();
        });
      }

      if (rf & 2) {
        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-owns", ctx.panelOpen ? ctx.id + "-panel" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", ctx.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("id", ctx._valueId);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._triggerRect == null ? null : ctx._triggerRect.width)("cdkConnectedOverlayOffsetY", ctx._offsetY);
      }
    },
    directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.CdkOverlayOrigin, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgSwitchCase, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.CdkConnectedOverlay, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgClass],
    styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px}\n"],
    encapsulation: 2,
    data: {
      animation: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel]
    },
    changeDetection: 0
  });
  return MatSelect;
}();

var MatSelectModule = /*@__PURE__*/function () {
  var MatSelectModule = function MatSelectModule() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__.default)(this, MatSelectModule);
  };

  MatSelectModule.ɵfac = function MatSelectModule_Factory(t) {
    return new (t || MatSelectModule)();
  };

  MatSelectModule.ɵmod =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: MatSelectModule
  });
  MatSelectModule.ɵinj =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_30__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__.CdkScrollableModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule]
  });
  return MatSelectModule;
}();
/*@__PURE__*/


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MatSelectModule, {
    declarations: function declarations() {
      return [MatSelect, MatSelectTrigger];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_30__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule];
    },
    exports: function exports() {
      return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__.CdkScrollableModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormFieldModule, MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 59241:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_SORT_DEFAULT_OPTIONS": function() { return /* binding */ MAT_SORT_DEFAULT_OPTIONS; },
/* harmony export */   "MAT_SORT_HEADER_INTL_PROVIDER": function() { return /* binding */ MAT_SORT_HEADER_INTL_PROVIDER; },
/* harmony export */   "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY": function() { return /* binding */ MAT_SORT_HEADER_INTL_PROVIDER_FACTORY; },
/* harmony export */   "MatSort": function() { return /* binding */ MatSort; },
/* harmony export */   "MatSortHeader": function() { return /* binding */ MatSortHeader; },
/* harmony export */   "MatSortHeaderIntl": function() { return /* binding */ MatSortHeaderIntl; },
/* harmony export */   "MatSortModule": function() { return /* binding */ MatSortModule; },
/* harmony export */   "matSortAnimations": function() { return /* binding */ matSortAnimations; }
/* harmony export */ });
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ 19861);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 56602);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ 99235);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 55959);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 31906);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 99713);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ 97388);













/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */




var _c0 = ["mat-sort-header", ""];

function MatSortHeader_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r1._disableViewStateAnimation = true;
    })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r3._disableViewStateAnimation = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@indicator", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@leftPointer", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@rightPointer", ctx_r0._getArrowDirectionState());
  }
}

var _c1 = ["*"];

function getSortDuplicateSortableIdError(id) {
  return Error("Cannot have two MatSortables with the same id (".concat(id, ")."));
}
/** @docs-private */


function getSortHeaderNotContainedWithinSortError() {
  return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
}
/** @docs-private */


function getSortHeaderMissingIdError() {
  return Error("MatSortHeader must be provided with a unique id.");
}
/** @docs-private */


function getSortInvalidDirectionError(direction) {
  return Error("".concat(direction, " is not a valid sort direction ('asc' or 'desc')."));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token to be used to override the default options for `mat-sort`. */


var MAT_SORT_DEFAULT_OPTIONS = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('MAT_SORT_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to MatSort.

/** @docs-private */

var _MatSortBase = /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinInitialized)( /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinDisabled)( /*#__PURE__*/function () {
  function _class() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, _class);
  }

  return _class;
}()));

var MatSort = /*@__PURE__*/function () {
  var MatSort = /*#__PURE__*/function (_MatSortBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(MatSort, _MatSortBase2);

    var _super = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(MatSort);

    function MatSort(_defaultOptions) {
      var _this;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatSort);

      _this = _super.call(this);
      _this._defaultOptions = _defaultOptions;
      /** Collection of all registered sortables that this directive manages. */

      _this.sortables = new Map();
      /** Used to notify any child components listening to state changes. */

      _this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
      /**
       * The direction to set when an MatSortable is initially sorted.
       * May be overriden by the MatSortable's sort start.
       */

      _this.start = 'asc';
      _this._direction = '';
      /** Event emitted when the user changes either the active sort or sort direction. */

      _this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
      return _this;
    }
    /** The sort direction of the currently active MatSortable. */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(MatSort, [{
      key: "direction",
      get: function get() {
        return this._direction;
      },
      set: function set(direction) {
        if (direction && direction !== 'asc' && direction !== 'desc' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getSortInvalidDirectionError(direction);
        }

        this._direction = direction;
      }
      /**
       * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
       * May be overriden by the MatSortable's disable clear input.
       */

    }, {
      key: "disableClear",
      get: function get() {
        return this._disableClear;
      },
      set: function set(v) {
        this._disableClear = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__.coerceBooleanProperty)(v);
      }
      /**
       * Register function to be used by the contained MatSortables. Adds the MatSortable to the
       * collection of MatSortables.
       */

    }, {
      key: "register",
      value: function register(sortable) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          if (!sortable.id) {
            throw getSortHeaderMissingIdError();
          }

          if (this.sortables.has(sortable.id)) {
            throw getSortDuplicateSortableIdError(sortable.id);
          }
        }

        this.sortables.set(sortable.id, sortable);
      }
      /**
       * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
       * collection of contained MatSortables.
       */

    }, {
      key: "deregister",
      value: function deregister(sortable) {
        this.sortables.delete(sortable.id);
      }
      /** Sets the active sort id and determines the new sort direction. */

    }, {
      key: "sort",
      value: function sort(sortable) {
        if (this.active != sortable.id) {
          this.active = sortable.id;
          this.direction = sortable.start ? sortable.start : this.start;
        } else {
          this.direction = this.getNextSortDirection(sortable);
        }

        this.sortChange.emit({
          active: this.active,
          direction: this.direction
        });
      }
      /** Returns the next sort direction of the active sortable, checking for potential overrides. */

    }, {
      key: "getNextSortDirection",
      value: function getNextSortDirection(sortable) {
        var _a, _b, _c;

        if (!sortable) {
          return '';
        } // Get the sort direction cycle with the potential sortable overrides.


        var disableClear = (_b = (_a = sortable === null || sortable === void 0 ? void 0 : sortable.disableClear) !== null && _a !== void 0 ? _a : this.disableClear) !== null && _b !== void 0 ? _b : !!((_c = this._defaultOptions) === null || _c === void 0 ? void 0 : _c.disableClear);
        var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

        var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

        if (nextDirectionIndex >= sortDirectionCycle.length) {
          nextDirectionIndex = 0;
        }

        return sortDirectionCycle[nextDirectionIndex];
      }
    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        this._markInitialized();
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges() {
        this._stateChanges.next();
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._stateChanges.complete();
      }
    }]);

    return MatSort;
  }(_MatSortBase);

  MatSort.ɵfac = function MatSort_Factory(t) {
    return new (t || MatSort)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_SORT_DEFAULT_OPTIONS, 8));
  };

  MatSort.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MatSort,
    selectors: [["", "matSort", ""]],
    hostAttrs: [1, "mat-sort"],
    inputs: {
      disabled: ["matSortDisabled", "disabled"],
      start: ["matSortStart", "start"],
      direction: ["matSortDirection", "direction"],
      disableClear: ["matSortDisableClear", "disableClear"],
      active: ["matSortActive", "active"]
    },
    outputs: {
      sortChange: "matSortChange"
    },
    exportAs: ["matSort"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return MatSort;
}();
/** Returns the sort direction cycle to use given the provided parameters of order and clear. */


function getSortDirectionCycle(start, disableClear) {
  var sortOrder = ['asc', 'desc'];

  if (start == 'desc') {
    sortOrder.reverse();
  }

  if (!disableClear) {
    sortOrder.push('');
  }

  return sortOrder;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.AnimationDurations.ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.AnimationCurves.STANDARD_CURVE;
/**
 * Animations used by MatSort.
 * @docs-private
 */

var matSortAnimations = {
  /** Animation that moves the sort indicator. */
  indicator: /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('indicator', [/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('active-asc, asc', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'translateY(0px)'
  })), // 10px is the height of the sort indicator, minus the width of the pointers

  /*@__PURE__*/
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('active-desc, desc', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'translateY(10px)'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('active-asc <=> active-desc', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(SORT_ANIMATION_TRANSITION))]),

  /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
  leftPointer: /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('leftPointer', [/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('active-asc, asc', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'rotate(-45deg)'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('active-desc, desc', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'rotate(45deg)'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('active-asc <=> active-desc', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(SORT_ANIMATION_TRANSITION))]),

  /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
  rightPointer: /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('rightPointer', [/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('active-asc, asc', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'rotate(45deg)'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('active-desc, desc', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'rotate(-45deg)'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('active-asc <=> active-desc', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(SORT_ANIMATION_TRANSITION))]),

  /** Animation that controls the arrow opacity. */
  arrowOpacity: /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('arrowOpacity', [/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('desc-to-active, asc-to-active, active', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    opacity: 1
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('desc-to-hint, asc-to-hint, hint', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    opacity: .54
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    opacity: 0
  })), // Transition between all states except for immediate transitions

  /*@__PURE__*/
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => asc, * => desc, * => active, * => hint, * => void', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('0ms')), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* <=> *', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(SORT_ANIMATION_TRANSITION))]),

  /**
   * Animation for the translation of the arrow as a whole. States are separated into two
   * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
   * peek, and active. The other states define a specific animation (source-to-destination)
   * and are determined as a function of their prev user-perceived state and what the next state
   * should be.
   */
  arrowPosition: /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('arrowPosition', [// Hidden Above => Hint Center

  /*@__PURE__*/
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => desc-to-hint, * => desc-to-active', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(SORT_ANIMATION_TRANSITION, /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.keyframes)([/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'translateY(-25%)'
  }), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'translateY(0)'
  })]))), // Hint Center => Hidden Below

  /*@__PURE__*/
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => hint-to-desc, * => active-to-desc', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(SORT_ANIMATION_TRANSITION, /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.keyframes)([/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'translateY(0)'
  }), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'translateY(25%)'
  })]))), // Hidden Below => Hint Center

  /*@__PURE__*/
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => asc-to-hint, * => asc-to-active', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(SORT_ANIMATION_TRANSITION, /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.keyframes)([/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'translateY(25%)'
  }), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'translateY(0)'
  })]))), // Hint Center => Hidden Above

  /*@__PURE__*/
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => hint-to-asc, * => active-to-asc', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(SORT_ANIMATION_TRANSITION, /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.keyframes)([/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'translateY(0)'
  }), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'translateY(-25%)'
  })]))), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'translateY(0)'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('hint-to-desc, active-to-desc, desc', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'translateY(-25%)'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('hint-to-asc, active-to-asc, asc', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'translateY(25%)'
  }))]),

  /** Necessary trigger that calls animate on children animations. */
  allowChildren: /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('allowChildren', [/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* <=> *', [/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.query)('@*', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animateChild)(), {
    optional: true
  })])])
};

var MatSortHeaderIntl = /*@__PURE__*/function () {
  var MatSortHeaderIntl = function MatSortHeaderIntl() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatSortHeaderIntl);

    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  };

  MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) {
    return new (t || MatSortHeaderIntl)();
  };

  MatSortHeaderIntl.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    factory: function MatSortHeaderIntl_Factory() {
      return new MatSortHeaderIntl();
    },
    token: MatSortHeaderIntl,
    providedIn: "root"
  });
  return MatSortHeaderIntl;
}();
/** @docs-private */


function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatSortHeaderIntl();
}
/** @docs-private */


var MAT_SORT_HEADER_INTL_PROVIDER = {
  // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[/*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional(), /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_4__.SkipSelf(), MatSortHeaderIntl]],
  useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to the sort header.

/** @docs-private */

var _MatSortHeaderBase = /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinDisabled)( /*#__PURE__*/function () {
  function _class2() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, _class2);
  }

  return _class2;
}());

var MatSortHeader = /*@__PURE__*/function () {
  var MatSortHeader = /*#__PURE__*/function (_MatSortHeaderBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(MatSortHeader, _MatSortHeaderBase2);

    var _super2 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(MatSortHeader);

    function MatSortHeader(
    /**
     * @deprecated `_intl` parameter isn't being used anymore and it'll be removed.
     * @breaking-change 13.0.0
     */
    _intl, _changeDetectorRef, // `MatSort` is not optionally injected, but just asserted manually w/ better error.
    // tslint:disable-next-line: lightweight-tokens
    _sort, _columnDef, _focusMonitor, _elementRef) {
      var _this2;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatSortHeader);

      // Note that we use a string token for the `_columnDef`, because the value is provided both by
      // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
      // and we want to avoid having the sort header depending on the CDK table because
      // of this single reference.
      _this2 = _super2.call(this);
      _this2._intl = _intl;
      _this2._changeDetectorRef = _changeDetectorRef;
      _this2._sort = _sort;
      _this2._columnDef = _columnDef;
      _this2._focusMonitor = _focusMonitor;
      _this2._elementRef = _elementRef;
      /**
       * Flag set to true when the indicator should be displayed while the sort is not active. Used to
       * provide an affordance that the header is sortable by showing on focus and hover.
       */

      _this2._showIndicatorHint = false;
      /**
       * The view transition state of the arrow (translation/ opacity) - indicates its `from` and `to`
       * position through the animation. If animations are currently disabled, the fromState is removed
       * so that there is no animation displayed.
       */

      _this2._viewState = {};
      /** The direction the arrow should be facing according to the current state. */

      _this2._arrowDirection = '';
      /**
       * Whether the view state animation should show the transition between the `from` and `to` states.
       */

      _this2._disableViewStateAnimation = false;
      /** Sets the position of the arrow that displays when sorted. */

      _this2.arrowPosition = 'after';

      if (!_sort && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getSortHeaderNotContainedWithinSortError();
      }

      _this2._handleStateChanges();

      return _this2;
    }
    /** Overrides the disable clear value of the containing MatSort for this MatSortable. */


    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(MatSortHeader, [{
      key: "disableClear",
      get: function get() {
        return this._disableClear;
      },
      set: function set(v) {
        this._disableClear = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__.coerceBooleanProperty)(v);
      }
    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        if (!this.id && this._columnDef) {
          this.id = this._columnDef.name;
        } // Initialize the direction of the arrow and set the view state to be immediately that state.


        this._updateArrowDirection();

        this._setAnimationTransitionState({
          toState: this._isSorted() ? 'active' : this._arrowDirection
        });

        this._sort.register(this);
      }
    }, {
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        var _this3 = this;

        // We use the focus monitor because we also want to style
        // things differently based on the focus origin.
        this._focusMonitor.monitor(this._elementRef, true).subscribe(function (origin) {
          var newState = !!origin;

          if (newState !== _this3._showIndicatorHint) {
            _this3._setIndicatorHintVisible(newState);

            _this3._changeDetectorRef.markForCheck();
          }
        });
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);

        this._sort.deregister(this);

        this._rerenderSubscription.unsubscribe();
      }
      /**
       * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
       * user showing what the active sort will become. If set to false, the arrow will fade away.
       */

    }, {
      key: "_setIndicatorHintVisible",
      value: function _setIndicatorHintVisible(visible) {
        // No-op if the sort header is disabled - should not make the hint visible.
        if (this._isDisabled() && visible) {
          return;
        }

        this._showIndicatorHint = visible;

        if (!this._isSorted()) {
          this._updateArrowDirection();

          if (this._showIndicatorHint) {
            this._setAnimationTransitionState({
              fromState: this._arrowDirection,
              toState: 'hint'
            });
          } else {
            this._setAnimationTransitionState({
              fromState: 'hint',
              toState: this._arrowDirection
            });
          }
        }
      }
      /**
       * Sets the animation transition view state for the arrow's position and opacity. If the
       * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
       * no animation appears.
       */

    }, {
      key: "_setAnimationTransitionState",
      value: function _setAnimationTransitionState(viewState) {
        this._viewState = viewState || {}; // If the animation for arrow position state (opacity/translation) should be disabled,
        // remove the fromState so that it jumps right to the toState.

        if (this._disableViewStateAnimation) {
          this._viewState = {
            toState: viewState.toState
          };
        }
      }
      /** Triggers the sort on this sort header and removes the indicator hint. */

    }, {
      key: "_toggleOnInteraction",
      value: function _toggleOnInteraction() {
        this._sort.sort(this); // Do not show the animation if the header was already shown in the right position.


        if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
          this._disableViewStateAnimation = true;
        }
      }
    }, {
      key: "_handleClick",
      value: function _handleClick() {
        if (!this._isDisabled()) {
          this._sort.sort(this);
        }
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(event) {
        if (!this._isDisabled() && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.ENTER)) {
          event.preventDefault();

          this._toggleOnInteraction();
        }
      }
      /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */

    }, {
      key: "_isSorted",
      value: function _isSorted() {
        return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
      }
      /** Returns the animation state for the arrow direction (indicator and pointers). */

    }, {
      key: "_getArrowDirectionState",
      value: function _getArrowDirectionState() {
        return "".concat(this._isSorted() ? 'active-' : '').concat(this._arrowDirection);
      }
      /** Returns the arrow position state (opacity, translation). */

    }, {
      key: "_getArrowViewState",
      value: function _getArrowViewState() {
        var fromState = this._viewState.fromState;
        return (fromState ? "".concat(fromState, "-to-") : '') + this._viewState.toState;
      }
      /**
       * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
       * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
       * active sorted direction. The reason this is updated through a function is because the direction
       * should only be changed at specific times - when deactivated but the hint is displayed and when
       * the sort is active and the direction changes. Otherwise the arrow's direction should linger
       * in cases such as the sort becoming deactivated but we want to animate the arrow away while
       * preserving its direction, even though the next sort direction is actually different and should
       * only be changed once the arrow displays again (hint or activation).
       */

    }, {
      key: "_updateArrowDirection",
      value: function _updateArrowDirection() {
        this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
      }
    }, {
      key: "_isDisabled",
      value: function _isDisabled() {
        return this._sort.disabled || this.disabled;
      }
      /**
       * Gets the aria-sort attribute that should be applied to this sort header. If this header
       * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
       * says that the aria-sort property should only be present on one header at a time, so removing
       * ensures this is true.
       */

    }, {
      key: "_getAriaSortAttribute",
      value: function _getAriaSortAttribute() {
        if (!this._isSorted()) {
          return 'none';
        }

        return this._sort.direction == 'asc' ? 'ascending' : 'descending';
      }
      /** Whether the arrow inside the sort header should be rendered. */

    }, {
      key: "_renderArrow",
      value: function _renderArrow() {
        return !this._isDisabled() || this._isSorted();
      }
      /** Handles changes in the sorting state. */

    }, {
      key: "_handleStateChanges",
      value: function _handleStateChanges() {
        var _this4 = this;

        this._rerenderSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this._sort.sortChange, this._sort._stateChanges, this._intl.changes).subscribe(function () {
          if (_this4._isSorted()) {
            _this4._updateArrowDirection(); // Do not show the animation if the header was already shown in the right position.


            if (_this4._viewState.toState === 'hint' || _this4._viewState.toState === 'active') {
              _this4._disableViewStateAnimation = true;
            }

            _this4._setAnimationTransitionState({
              fromState: _this4._arrowDirection,
              toState: 'active'
            });

            _this4._showIndicatorHint = false;
          } // If this header was recently active and now no longer sorted, animate away the arrow.


          if (!_this4._isSorted() && _this4._viewState && _this4._viewState.toState === 'active') {
            _this4._disableViewStateAnimation = false;

            _this4._setAnimationTransitionState({
              fromState: 'active',
              toState: _this4._arrowDirection
            });
          }

          _this4._changeDetectorRef.markForCheck();
        });
      }
    }]);

    return MatSortHeader;
  }(_MatSortHeaderBase);

  MatSortHeader.ɵfac = function MatSortHeader_Factory(t) {
    return new (t || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef));
  };

  MatSortHeader.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MatSortHeader,
    selectors: [["", "mat-sort-header", ""]],
    hostAttrs: [1, "mat-sort-header"],
    hostVars: 3,
    hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() {
          return ctx._handleClick();
        })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
          return ctx._setIndicatorHintVisible(true);
        })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
          return ctx._setIndicatorHintVisible(false);
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
      }
    },
    inputs: {
      disabled: "disabled",
      arrowPosition: "arrowPosition",
      disableClear: "disableClear",
      id: ["mat-sort-header", "id"],
      start: "start"
    },
    exportAs: ["matSortHeader"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 4,
    vars: 6,
    consts: [["role", "button", 1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
    template: function MatSortHeader_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatSortHeader_div_3_Template, 6, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition == "before");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabindex", ctx._isDisabled() ? null : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx._renderArrow());
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
    styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"],
    encapsulation: 2,
    data: {
      animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
    },
    changeDetection: 0
  });
  return MatSortHeader;
}();

var MatSortModule = /*@__PURE__*/function () {
  var MatSortModule = function MatSortModule() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatSortModule);
  };

  MatSortModule.ɵfac = function MatSortModule_Factory(t) {
    return new (t || MatSortModule)();
  };

  MatSortModule.ɵmod =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: MatSortModule
  });
  MatSortModule.ɵinj =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [MAT_SORT_HEADER_INTL_PROVIDER],
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule]]
  });
  return MatSortModule;
}();
/*@__PURE__*/


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatSortModule, {
    declarations: function declarations() {
      return [MatSort, MatSortHeader];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule];
    },
    exports: function exports() {
      return [MatSort, MatSortHeader];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 51093:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_STEPPER_INTL_PROVIDER": function() { return /* binding */ MAT_STEPPER_INTL_PROVIDER; },
/* harmony export */   "MAT_STEPPER_INTL_PROVIDER_FACTORY": function() { return /* binding */ MAT_STEPPER_INTL_PROVIDER_FACTORY; },
/* harmony export */   "MatHorizontalStepper": function() { return /* binding */ MatHorizontalStepper; },
/* harmony export */   "MatStep": function() { return /* binding */ MatStep; },
/* harmony export */   "MatStepContent": function() { return /* binding */ MatStepContent; },
/* harmony export */   "MatStepHeader": function() { return /* binding */ MatStepHeader; },
/* harmony export */   "MatStepLabel": function() { return /* binding */ MatStepLabel; },
/* harmony export */   "MatStepper": function() { return /* binding */ MatStepper; },
/* harmony export */   "MatStepperIcon": function() { return /* binding */ MatStepperIcon; },
/* harmony export */   "MatStepperIntl": function() { return /* binding */ MatStepperIntl; },
/* harmony export */   "MatStepperModule": function() { return /* binding */ MatStepperModule; },
/* harmony export */   "MatStepperNext": function() { return /* binding */ MatStepperNext; },
/* harmony export */   "MatStepperPrevious": function() { return /* binding */ MatStepperPrevious; },
/* harmony export */   "MatVerticalStepper": function() { return /* binding */ MatVerticalStepper; },
/* harmony export */   "matStepperAnimations": function() { return /* binding */ matStepperAnimations; }
/* harmony export */ });
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ 27078);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ 43620);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/portal */ 82151);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ 13938);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 84369);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 56602);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 77307);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 55959);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 59258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 44689);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 79996);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 56238);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 25416);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 98720);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ 99713);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ 97388);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/bidi */ 94720);



















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









function MatStepHeader_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0, 8);
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
  }
}

function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6._getDefaultTextForState(ctx_r6.state));
  }
}

function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7._getDefaultTextForState(ctx_r7.state));
  }
}

function MatStepHeader_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "number");
  }
}

function MatStepHeader_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2._templateLabel().template);
  }
}

function MatStepHeader_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.label);
  }
}

function MatStepHeader_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4._intl.optionalLabel);
  }
}

function MatStepHeader_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
  }
}

function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) {}

function MatStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MatStep_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 0);
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cdkPortalOutlet", ctx_r0._portal);
  }
}

var _c0 = ["*"];

function MatStepper_ng_container_1_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 9);
  }
}

var _c1 = function _c1(a0, a1) {
  return {
    step: a0,
    i: a1
  };
};

function MatStepper_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MatStepper_ng_container_1_ng_container_2_div_2_Template, 1, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var step_r6 = ctx.$implicit;
    var i_r7 = ctx.index;
    var isLast_r8 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](3, _c1, step_r6, i_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !isLast_r8);
  }
}

function MatStepper_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("@horizontalStepTransition.done", function MatStepper_ng_container_1_div_4_Template_div_animation_horizontalStepTransition_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r12._animationDone.next($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var step_r10 = ctx.$implicit;
    var i_r11 = ctx.index;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@horizontalStepTransition", ctx_r5._getAnimationDirection(i_r11))("id", ctx_r5._getStepContentId(i_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-labelledby", ctx_r5._getStepLabelId(i_r11))("aria-expanded", ctx_r5.selectedIndex === i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", step_r10.content);
  }
}

function MatStepper_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MatStepper_ng_container_1_ng_container_2_Template, 3, 6, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, MatStepper_ng_container_1_div_4_Template, 2, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.steps);
  }
}

function MatStepper_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("@verticalStepTransition.done", function MatStepper_ng_container_2_div_1_Template_div_animation_verticalStepTransition_done_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r18._animationDone.next($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](5, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var step_r15 = ctx.$implicit;
    var i_r16 = ctx.index;
    var isLast_r17 = ctx.last;
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](9, _c1, step_r15, i_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-stepper-vertical-line", !isLast_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@verticalStepTransition", ctx_r14._getAnimationDirection(i_r16))("id", ctx_r14._getStepContentId(i_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-labelledby", ctx_r14._getStepLabelId(i_r16))("aria-expanded", ctx_r14.selectedIndex === i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", step_r15.content);
  }
}

function MatStepper_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MatStepper_ng_container_2_div_1_Template, 6, 12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.steps);
  }
}

function MatStepper_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-step-header", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      var step_r20 = restoredCtx.step;
      return step_r20.select();
    })("keydown", function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r24._onKeydown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var step_r20 = ctx.step;
    var i_r21 = ctx.i;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-horizontal-stepper-header", ctx_r3.orientation === "horizontal")("mat-vertical-stepper-header", ctx_r3.orientation === "vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tabIndex", ctx_r3._getFocusIndex() === i_r21 ? 0 : -1)("id", ctx_r3._getStepLabelId(i_r21))("index", i_r21)("state", ctx_r3._getIndicatorType(i_r21, step_r20.state))("label", step_r20.stepLabel || step_r20.label)("selected", ctx_r3.selectedIndex === i_r21)("active", ctx_r3._stepIsNavigable(i_r21, step_r20))("optional", step_r20.optional)("errorMessage", step_r20.errorMessage)("iconOverrides", ctx_r3._iconOverrides)("disableRipple", ctx_r3.disableRipple)("color", step_r20.color || ctx_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-posinset", i_r21 + 1)("aria-setsize", ctx_r3.steps.length)("aria-controls", ctx_r3._getStepContentId(i_r21))("aria-selected", ctx_r3.selectedIndex == i_r21)("aria-label", step_r20.ariaLabel || null)("aria-labelledby", !step_r20.ariaLabel && step_r20.ariaLabelledby ? step_r20.ariaLabelledby : null)("aria-disabled", ctx_r3._stepIsNavigable(i_r21, step_r20) ? null : true);
  }
}

var MatStepLabel = /*@__PURE__*/function () {
  var MatStepLabel = /*#__PURE__*/function (_CdkStepLabel) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatStepLabel, _CdkStepLabel);

    var _super = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatStepLabel);

    function MatStepLabel() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatStepLabel);

      return _super.apply(this, arguments);
    }

    return MatStepLabel;
  }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.CdkStepLabel);

  MatStepLabel.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatStepLabel_BaseFactory;
    return function MatStepLabel_Factory(t) {
      return (ɵMatStepLabel_BaseFactory || (ɵMatStepLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](MatStepLabel)))(t || MatStepLabel);
    };
  }();

  MatStepLabel.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
    type: MatStepLabel,
    selectors: [["", "matStepLabel", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
  });
  return MatStepLabel;
}();

var MatStepperIntl = /*@__PURE__*/function () {
  var MatStepperIntl = function MatStepperIntl() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatStepperIntl);

    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    /** Label that is rendered below optional steps. */

    this.optionalLabel = 'Optional';
  };

  MatStepperIntl.ɵfac = function MatStepperIntl_Factory(t) {
    return new (t || MatStepperIntl)();
  };

  MatStepperIntl.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    factory: function MatStepperIntl_Factory() {
      return new MatStepperIntl();
    },
    token: MatStepperIntl,
    providedIn: "root"
  });
  return MatStepperIntl;
}();
/** @docs-private */


function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatStepperIntl();
}
/** @docs-private */


var MAT_STEPPER_INTL_PROVIDER = {
  provide: MatStepperIntl,
  deps: [[/*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional(), /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_6__.SkipSelf(), MatStepperIntl]],
  useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatStepHeader.

/** @docs-private */

var _MatStepHeaderBase = /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_9__.mixinColor)( /*#__PURE__*/function (_CdkStepHeader) {
  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatStepHeaderBase, _CdkStepHeader);

  var _super2 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatStepHeaderBase);

  function MatStepHeaderBase(elementRef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatStepHeaderBase);

    return _super2.call(this, elementRef);
  }

  return MatStepHeaderBase;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.CdkStepHeader), 'primary');

var MatStepHeader = /*@__PURE__*/function () {
  var MatStepHeader = /*#__PURE__*/function (_MatStepHeaderBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatStepHeader, _MatStepHeaderBase2);

    var _super3 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatStepHeader);

    function MatStepHeader(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
      var _this;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatStepHeader);

      _this = _super3.call(this, _elementRef);
      _this._intl = _intl;
      _this._focusMonitor = _focusMonitor;
      _this._intlSubscription = _intl.changes.subscribe(function () {
        return changeDetectorRef.markForCheck();
      });
      return _this;
    }

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(MatStepHeader, [{
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true);
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._intlSubscription.unsubscribe();

        this._focusMonitor.stopMonitoring(this._elementRef);
      }
      /** Focuses the step header. */

    }, {
      key: "focus",
      value: function focus(origin, options) {
        if (origin) {
          this._focusMonitor.focusVia(this._elementRef, origin, options);
        } else {
          this._elementRef.nativeElement.focus(options);
        }
      }
      /** Returns string label of given step if it is a text label. */

    }, {
      key: "_stringLabel",
      value: function _stringLabel() {
        return this.label instanceof MatStepLabel ? null : this.label;
      }
      /** Returns MatStepLabel if the label of given step is a template label. */

    }, {
      key: "_templateLabel",
      value: function _templateLabel() {
        return this.label instanceof MatStepLabel ? this.label : null;
      }
      /** Returns the host HTML element. */

    }, {
      key: "_getHostElement",
      value: function _getHostElement() {
        return this._elementRef.nativeElement;
      }
      /** Template context variables that are exposed to the `matStepperIcon` instances. */

    }, {
      key: "_getIconContext",
      value: function _getIconContext() {
        return {
          index: this.index,
          active: this.active,
          optional: this.optional
        };
      }
    }, {
      key: "_getDefaultTextForState",
      value: function _getDefaultTextForState(state) {
        if (state == 'number') {
          return "".concat(this.index + 1);
        }

        if (state == 'edit') {
          return 'create';
        }

        if (state == 'error') {
          return 'warning';
        }

        return state;
      }
    }]);

    return MatStepHeader;
  }(_MatStepHeaderBase);

  MatStepHeader.ɵfac = function MatStepHeader_Factory(t) {
    return new (t || MatStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MatStepperIntl), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
  };

  MatStepHeader.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: MatStepHeader,
    selectors: [["mat-step-header"]],
    hostAttrs: ["role", "tab", 1, "mat-step-header"],
    inputs: {
      color: "color",
      state: "state",
      label: "label",
      errorMessage: "errorMessage",
      iconOverrides: "iconOverrides",
      index: "index",
      selected: "selected",
      active: "active",
      optional: "optional",
      disableRipple: "disableRipple"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 10,
    vars: 19,
    consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "mat-step-text-label"], [3, "ngTemplateOutlet"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]],
    template: function MatStepHeader_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, MatStepHeader_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, MatStepHeader_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, MatStepHeader_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, MatStepHeader_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("mat-step-icon-state-", ctx.state, " mat-step-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-step-icon-selected", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._templateLabel());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._stringLabel());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.optional && ctx.state != "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.state == "error");
      }
    },
    directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon],
    styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return MatStepHeader;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the Material steppers.
 * @docs-private
 */


var matStepperAnimations = {
  /** Animation that transitions the step along the X axis in a horizontal stepper. */
  horizontalStepTransition: /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('horizontalStepTransition', [/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('previous', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    visibility: 'hidden'
  })), // Transition to `inherit`, rather than `visible`,
  // because visibility on a child element the one from the parent,
  // making this element focusable inside of a `hidden` element.

  /*@__PURE__*/
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('current', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    transform: 'none',
    visibility: 'inherit'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('next', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    transform: 'translate3d(100%, 0, 0)',
    visibility: 'hidden'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('* => *', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('500ms cubic-bezier(0.35, 0, 0.25, 1)'))]),

  /** Animation that transitions the step along the Y axis in a vertical stepper. */
  verticalStepTransition: /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('verticalStepTransition', [/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('previous', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    height: '0px',
    visibility: 'hidden'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('next', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    height: '0px',
    visibility: 'hidden'
  })), // Transition to `inherit`, rather than `visible`,
  // because visibility on a child element the one from the parent,
  // making this element focusable inside of a `hidden` element.

  /*@__PURE__*/
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('current', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    height: '*',
    visibility: 'inherit'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('* <=> current', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])
};

var MatStepperIcon = /*@__PURE__*/function () {
  var MatStepperIcon = function MatStepperIcon(templateRef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatStepperIcon);

    this.templateRef = templateRef;
  };

  MatStepperIcon.ɵfac = function MatStepperIcon_Factory(t) {
    return new (t || MatStepperIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef));
  };

  MatStepperIcon.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
    type: MatStepperIcon,
    selectors: [["ng-template", "matStepperIcon", ""]],
    inputs: {
      name: ["matStepperIcon", "name"]
    }
  });
  return MatStepperIcon;
}();

var MatStepContent = /*@__PURE__*/function () {
  var MatStepContent = function MatStepContent(_template) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatStepContent);

    this._template = _template;
  };

  MatStepContent.ɵfac = function MatStepContent_Factory(t) {
    return new (t || MatStepContent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef));
  };

  MatStepContent.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
    type: MatStepContent,
    selectors: [["ng-template", "matStepContent", ""]]
  });
  return MatStepContent;
}();

var MatStep = /*@__PURE__*/function () {
  var MatStep = /*#__PURE__*/function (_CdkStep) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatStep, _CdkStep);

    var _super4 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatStep);

    function MatStep(stepper, _errorStateMatcher, _viewContainerRef, stepperOptions) {
      var _this2;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatStep);

      _this2 = _super4.call(this, stepper, stepperOptions);
      _this2._errorStateMatcher = _errorStateMatcher;
      _this2._viewContainerRef = _viewContainerRef;
      _this2._isSelected = rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription.EMPTY;
      return _this2;
    }

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(MatStep, [{
      key: "ngAfterContentInit",
      value: function ngAfterContentInit() {
        var _this3 = this;

        this._isSelected = this._stepper.steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(function () {
          return _this3._stepper.selectionChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(function (event) {
            return event.selectedStep === _this3;
          }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)(_this3._stepper.selected === _this3));
        })).subscribe(function (isSelected) {
          if (isSelected && _this3._lazyContent && !_this3._portal) {
            _this3._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__.TemplatePortal(_this3._lazyContent._template, _this3._viewContainerRef);
          }
        });
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._isSelected.unsubscribe();
      }
      /** Custom error state matcher that additionally checks for validity of interacted form. */

    }, {
      key: "isErrorState",
      value: function isErrorState(control, form) {
        var originalErrorState = this._errorStateMatcher.isErrorState(control, form); // Custom error state checks for the validity of form that is not submitted or touched
        // since user can trigger a form change by calling for another step without directly
        // interacting with the current form.


        var customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
      }
    }]);

    return MatStep;
  }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.CdkStep);

  MatStep.ɵfac = function MatStep_Factory(t) {
    return new (t || MatStep)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function () {
      return MatStepper;
    })), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_9__.ErrorStateMatcher, 4), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.STEPPER_GLOBAL_OPTIONS, 8));
  };

  MatStep.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: MatStep,
    selectors: [["mat-step"]],
    contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, MatStepLabel, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, MatStepContent, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matStep"],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.ErrorStateMatcher,
      useExisting: MatStep
    }, {
      provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.CdkStep,
      useExisting: MatStep
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    consts: [[3, "cdkPortalOutlet"]],
    template: function MatStep_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MatStep_ng_template_0_Template, 2, 1, "ng-template");
      }
    },
    directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__.CdkPortalOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
  return MatStep;
}();

var _MatProxyStepperBase = /*@__PURE__*/function () {
  var _MatProxyStepperBase = /*#__PURE__*/function (_CdkStepper) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(_MatProxyStepperBase, _CdkStepper);

    var _super5 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(_MatProxyStepperBase);

    function _MatProxyStepperBase() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, _MatProxyStepperBase);

      return _super5.apply(this, arguments);
    }

    return _MatProxyStepperBase;
  }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.CdkStepper);

  _MatProxyStepperBase.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵ_MatProxyStepperBase_BaseFactory;
    return function _MatProxyStepperBase_Factory(t) {
      return (ɵ_MatProxyStepperBase_BaseFactory || (ɵ_MatProxyStepperBase_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](_MatProxyStepperBase)))(t || _MatProxyStepperBase);
    };
  }();

  _MatProxyStepperBase.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
    type: _MatProxyStepperBase,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
  });
  return _MatProxyStepperBase;
}();

var MatHorizontalStepper = /*@__PURE__*/function () {
  var MatHorizontalStepper = /*#__PURE__*/function (_MatProxyStepperBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatHorizontalStepper, _MatProxyStepperBase2);

    var _super6 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatHorizontalStepper);

    function MatHorizontalStepper() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatHorizontalStepper);

      return _super6.apply(this, arguments);
    }

    return MatHorizontalStepper;
  }(_MatProxyStepperBase);

  MatHorizontalStepper.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatHorizontalStepper_BaseFactory;
    return function MatHorizontalStepper_Factory(t) {
      return (ɵMatHorizontalStepper_BaseFactory || (ɵMatHorizontalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](MatHorizontalStepper)))(t || MatHorizontalStepper);
    };
  }();

  MatHorizontalStepper.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
    type: MatHorizontalStepper,
    selectors: [["mat-horizontal-stepper"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
  });
  return MatHorizontalStepper;
}();

var MatVerticalStepper = /*@__PURE__*/function () {
  var MatVerticalStepper = /*#__PURE__*/function (_MatProxyStepperBase3) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatVerticalStepper, _MatProxyStepperBase3);

    var _super7 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatVerticalStepper);

    function MatVerticalStepper() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatVerticalStepper);

      return _super7.apply(this, arguments);
    }

    return MatVerticalStepper;
  }(_MatProxyStepperBase);

  MatVerticalStepper.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatVerticalStepper_BaseFactory;
    return function MatVerticalStepper_Factory(t) {
      return (ɵMatVerticalStepper_BaseFactory || (ɵMatVerticalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](MatVerticalStepper)))(t || MatVerticalStepper);
    };
  }();

  MatVerticalStepper.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
    type: MatVerticalStepper,
    selectors: [["mat-vertical-stepper"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
  });
  return MatVerticalStepper;
}();

var MatStepper = /*@__PURE__*/function () {
  var MatStepper = /*#__PURE__*/function (_CdkStepper2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatStepper, _CdkStepper2);

    var _super8 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatStepper);

    function MatStepper(dir, changeDetectorRef, elementRef, _document) {
      var _this4;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatStepper);

      _this4 = _super8.call(this, dir, changeDetectorRef, elementRef, _document);
      /** Steps that belong to the current stepper, excluding ones from nested steppers. */

      _this4.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.QueryList();
      /** Event emitted when the current step is done transitioning in. */

      _this4.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
      /**
       * Whether the label should display in bottom or end position.
       * Only applies in the `horizontal` orientation.
       */

      _this4.labelPosition = 'end';
      /** Consumer-specified template-refs to be used to override the header icons. */

      _this4._iconOverrides = {};
      /** Stream of animation `done` events when the body expands/collapses. */

      _this4._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
      var nodeName = elementRef.nativeElement.nodeName.toLowerCase();
      _this4.orientation = nodeName === 'mat-vertical-stepper' ? 'vertical' : 'horizontal';
      return _this4;
    }

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(MatStepper, [{
      key: "ngAfterContentInit",
      value: function ngAfterContentInit() {
        var _this5 = this;

        (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.default)(MatStepper.prototype), "ngAfterContentInit", this).call(this);

        this._icons.forEach(function (_ref) {
          var name = _ref.name,
              templateRef = _ref.templateRef;
          return _this5._iconOverrides[name] = templateRef;
        }); // Mark the component for change detection whenever the content children query changes


        this.steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this._destroyed)).subscribe(function () {
          _this5._stateChanged();
        });

        this._animationDone.pipe( // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
        // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
        // See https://github.com/angular/angular/issues/24084
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)(function (x, y) {
          return x.fromState === y.fromState && x.toState === y.toState;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this._destroyed)).subscribe(function (event) {
          if (event.toState === 'current') {
            _this5.animationDone.emit();
          }
        });
      }
    }, {
      key: "_stepIsNavigable",
      value: function _stepIsNavigable(index, step) {
        return step.completed || this.selectedIndex === index || !this.linear;
      }
    }]);

    return MatStepper;
  }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.CdkStepper);

  MatStepper.ɵfac = function MatStepper_Factory(t) {
    return new (t || MatStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT));
  };

  MatStepper.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: MatStepper,
    selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]],
    contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, MatStep, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, MatStepperIcon, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._steps = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._icons = _t);
      }
    },
    viewQuery: function MatStepper_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](MatStepHeader, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
      }
    },
    hostAttrs: ["role", "tablist"],
    hostVars: 9,
    hostBindings: function MatStepper_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-orientation", ctx.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-stepper-horizontal", ctx.orientation === "horizontal")("mat-stepper-vertical", ctx.orientation === "vertical")("mat-stepper-label-position-end", ctx.orientation === "horizontal" && ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.orientation === "horizontal" && ctx.labelPosition == "bottom");
      }
    },
    inputs: {
      selectedIndex: "selectedIndex",
      labelPosition: "labelPosition",
      disableRipple: "disableRipple",
      color: "color"
    },
    outputs: {
      animationDone: "animationDone"
    },
    exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.CdkStepper,
      useExisting: MatStepper
    }, {
      provide: MatHorizontalStepper,
      useExisting: MatStepper
    }, {
      provide: MatVerticalStepper,
      useExisting: MatStepper
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 5,
    vars: 3,
    consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["stepTemplate", ""], [1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], ["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color", "click", "keydown"]],
    template: function MatStepper_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MatStepper_ng_container_1_Template, 5, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MatStepper_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MatStepper_ng_template_3_Template, 1, 23, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "vertical");
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, MatStepHeader],
    styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"],
    encapsulation: 2,
    data: {
      animation: [matStepperAnimations.horizontalStepTransition, matStepperAnimations.verticalStepTransition]
    },
    changeDetection: 0
  });
  return MatStepper;
}();

var MatStepperNext = /*@__PURE__*/function () {
  var MatStepperNext = /*#__PURE__*/function (_CdkStepperNext) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatStepperNext, _CdkStepperNext);

    var _super9 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatStepperNext);

    function MatStepperNext() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatStepperNext);

      return _super9.apply(this, arguments);
    }

    return MatStepperNext;
  }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.CdkStepperNext);

  MatStepperNext.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatStepperNext_BaseFactory;
    return function MatStepperNext_Factory(t) {
      return (ɵMatStepperNext_BaseFactory || (ɵMatStepperNext_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](MatStepperNext)))(t || MatStepperNext);
    };
  }();

  MatStepperNext.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
    type: MatStepperNext,
    selectors: [["button", "matStepperNext", ""]],
    hostAttrs: [1, "mat-stepper-next"],
    hostVars: 1,
    hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵhostProperty"]("type", ctx.type);
      }
    },
    inputs: {
      type: "type"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
  });
  return MatStepperNext;
}();

var MatStepperPrevious = /*@__PURE__*/function () {
  var MatStepperPrevious = /*#__PURE__*/function (_CdkStepperPrevious) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatStepperPrevious, _CdkStepperPrevious);

    var _super10 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatStepperPrevious);

    function MatStepperPrevious() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatStepperPrevious);

      return _super10.apply(this, arguments);
    }

    return MatStepperPrevious;
  }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.CdkStepperPrevious);

  MatStepperPrevious.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatStepperPrevious_BaseFactory;
    return function MatStepperPrevious_Factory(t) {
      return (ɵMatStepperPrevious_BaseFactory || (ɵMatStepperPrevious_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](MatStepperPrevious)))(t || MatStepperPrevious);
    };
  }();

  MatStepperPrevious.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
    type: MatStepperPrevious,
    selectors: [["button", "matStepperPrevious", ""]],
    hostAttrs: [1, "mat-stepper-previous"],
    hostVars: 1,
    hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵhostProperty"]("type", ctx.type);
      }
    },
    inputs: {
      type: "type"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
  });
  return MatStepperPrevious;
}();

var MatStepperModule = /*@__PURE__*/function () {
  var MatStepperModule = function MatStepperModule() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatStepperModule);
  };

  MatStepperModule.ɵfac = function MatStepperModule_Factory(t) {
    return new (t || MatStepperModule)();
  };

  MatStepperModule.ɵmod =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: MatStepperModule
  });
  MatStepperModule.ɵinj =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.ErrorStateMatcher],
    imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.CdkStepperModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRippleModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatCommonModule]
  });
  return MatStepperModule;
}();
/*@__PURE__*/


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MatStepperModule, {
    declarations: function declarations() {
      return [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent];
    },
    imports: function imports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.CdkStepperModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRippleModule];
    },
    exports: function exports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatCommonModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 47340:
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatCell": function() { return /* binding */ MatCell; },
/* harmony export */   "MatCellDef": function() { return /* binding */ MatCellDef; },
/* harmony export */   "MatColumnDef": function() { return /* binding */ MatColumnDef; },
/* harmony export */   "MatFooterCell": function() { return /* binding */ MatFooterCell; },
/* harmony export */   "MatFooterCellDef": function() { return /* binding */ MatFooterCellDef; },
/* harmony export */   "MatFooterRow": function() { return /* binding */ MatFooterRow; },
/* harmony export */   "MatFooterRowDef": function() { return /* binding */ MatFooterRowDef; },
/* harmony export */   "MatHeaderCell": function() { return /* binding */ MatHeaderCell; },
/* harmony export */   "MatHeaderCellDef": function() { return /* binding */ MatHeaderCellDef; },
/* harmony export */   "MatHeaderRow": function() { return /* binding */ MatHeaderRow; },
/* harmony export */   "MatHeaderRowDef": function() { return /* binding */ MatHeaderRowDef; },
/* harmony export */   "MatNoDataRow": function() { return /* binding */ MatNoDataRow; },
/* harmony export */   "MatRecycleRows": function() { return /* binding */ MatRecycleRows; },
/* harmony export */   "MatRow": function() { return /* binding */ MatRow; },
/* harmony export */   "MatRowDef": function() { return /* binding */ MatRowDef; },
/* harmony export */   "MatTable": function() { return /* binding */ MatTable; },
/* harmony export */   "MatTableDataSource": function() { return /* binding */ MatTableDataSource; },
/* harmony export */   "MatTableModule": function() { return /* binding */ MatTableModule; },
/* harmony export */   "MatTextColumn": function() { return /* binding */ MatTextColumn; },
/* harmony export */   "_MatTableDataSource": function() { return /* binding */ _MatTableDataSource; }
/* harmony export */ });
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ 42578);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ 27078);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ 43620);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/table */ 25722);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ 58378);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 56602);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/coercion */ 19861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 78512);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 55959);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 31906);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 40878);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 31305);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 79996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 35366);














/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
 * tables that animate rows.
 */



var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
var _c1 = ["caption", "colgroup, col"];

function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
  }
}

function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var data_r2 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
  }
}

var MatRecycleRows = /*@__PURE__*/function () {
  var MatRecycleRows = function MatRecycleRows() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatRecycleRows);
  };

  MatRecycleRows.ɵfac = function MatRecycleRows_Factory(t) {
    return new (t || MatRecycleRows)();
  };

  MatRecycleRows.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
    type: MatRecycleRows,
    selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__._VIEW_REPEATER_STRATEGY,
      useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__._RecycleViewRepeaterStrategy
    }])]
  });
  return MatRecycleRows;
}();

var MatTable = /*@__PURE__*/function () {
  var MatTable = /*#__PURE__*/function (_CdkTable) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatTable, _CdkTable);

    var _super = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatTable);

    function MatTable() {
      var _this;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTable);

      _this = _super.apply(this, arguments);
      /** Overrides the sticky CSS class set by the `CdkTable`. */

      _this.stickyCssClass = 'mat-table-sticky';
      /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */

      _this.needsPositionStickyOnElement = false;
      return _this;
    }

    return MatTable;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkTable);

  MatTable.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatTable_BaseFactory;
    return function MatTable_Factory(t) {
      return (ɵMatTable_BaseFactory || (ɵMatTable_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatTable)))(t || MatTable);
    };
  }();

  MatTable.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: MatTable,
    selectors: [["mat-table"], ["table", "mat-table", ""]],
    hostAttrs: [1, "mat-table"],
    hostVars: 2,
    hostBindings: function MatTable_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-table-fixed-layout", ctx.fixedLayout);
      }
    },
    exportAs: ["matTable"],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([// TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
    //  is only included in the build if used.
    {
      provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__._VIEW_REPEATER_STRATEGY,
      useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__._DisposeViewRepeaterStrategy
    }, {
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkTable,
      useExisting: MatTable
    }, {
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CDK_TABLE,
      useExisting: MatTable
    }, {
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__._COALESCED_STYLE_SCHEDULER,
      useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__._CoalescedStyleScheduler
    }, // Prevent nested tables from seeing this table's StickyPositioningListener.
    {
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.STICKY_POSITIONING_LISTENER,
      useValue: null
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c1,
    decls: 6,
    vars: 0,
    consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
    template: function MatTable_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](5, 3);
      }
    },
    directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.HeaderRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.DataRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.NoDataRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.FooterRowOutlet],
    styles: [".mat-table:not(table){display:block}.mat-table:not(table) .mat-cell,.mat-table:not(table) .mat-header-cell,.mat-table:not(table) .mat-footer-cell{display:flex}.mat-table:not(table) .mat-row,.mat-table:not(table) .mat-header-row,.mat-table:not(table) .mat-footer-row{display:flex}.mat-table:not(table) .mat-row::after,.mat-table:not(table) .mat-header-row::after,.mat-table:not(table) .mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}.mat-header-row{min-height:56px}.mat-row,.mat-footer-row{min-height:48px}.mat-row,.mat-header-row,.mat-footer-row{border-bottom-width:1px;border-bottom-style:solid;align-items:center;box-sizing:border-box}.mat-cell,.mat-header-cell,.mat-footer-cell{flex:1;overflow:hidden;word-wrap:break-word;min-height:inherit;align-items:center}.mat-cell:first-of-type,.mat-header-cell:first-of-type,.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] .mat-cell:first-of-type:not(:only-of-type),[dir=rtl] .mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] .mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}.mat-cell:last-of-type,.mat-header-cell:last-of-type,.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] .mat-cell:last-of-type:not(:only-of-type),[dir=rtl] .mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] .mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n"],
    encapsulation: 2
  });
  return MatTable;
}();

var MatCellDef = /*@__PURE__*/function () {
  var MatCellDef = /*#__PURE__*/function (_CdkCellDef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatCellDef, _CdkCellDef);

    var _super2 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatCellDef);

    function MatCellDef() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatCellDef);

      return _super2.apply(this, arguments);
    }

    return MatCellDef;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkCellDef);

  MatCellDef.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatCellDef_BaseFactory;
    return function MatCellDef_Factory(t) {
      return (ɵMatCellDef_BaseFactory || (ɵMatCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatCellDef)))(t || MatCellDef);
    };
  }();

  MatCellDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
    type: MatCellDef,
    selectors: [["", "matCellDef", ""]],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkCellDef,
      useExisting: MatCellDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
  });
  return MatCellDef;
}();

var MatHeaderCellDef = /*@__PURE__*/function () {
  var MatHeaderCellDef = /*#__PURE__*/function (_CdkHeaderCellDef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatHeaderCellDef, _CdkHeaderCellDef);

    var _super3 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatHeaderCellDef);

    function MatHeaderCellDef() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatHeaderCellDef);

      return _super3.apply(this, arguments);
    }

    return MatHeaderCellDef;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkHeaderCellDef);

  MatHeaderCellDef.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatHeaderCellDef_BaseFactory;
    return function MatHeaderCellDef_Factory(t) {
      return (ɵMatHeaderCellDef_BaseFactory || (ɵMatHeaderCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatHeaderCellDef)))(t || MatHeaderCellDef);
    };
  }();

  MatHeaderCellDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
    type: MatHeaderCellDef,
    selectors: [["", "matHeaderCellDef", ""]],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkHeaderCellDef,
      useExisting: MatHeaderCellDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
  });
  return MatHeaderCellDef;
}();

var MatFooterCellDef = /*@__PURE__*/function () {
  var MatFooterCellDef = /*#__PURE__*/function (_CdkFooterCellDef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatFooterCellDef, _CdkFooterCellDef);

    var _super4 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatFooterCellDef);

    function MatFooterCellDef() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatFooterCellDef);

      return _super4.apply(this, arguments);
    }

    return MatFooterCellDef;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkFooterCellDef);

  MatFooterCellDef.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatFooterCellDef_BaseFactory;
    return function MatFooterCellDef_Factory(t) {
      return (ɵMatFooterCellDef_BaseFactory || (ɵMatFooterCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatFooterCellDef)))(t || MatFooterCellDef);
    };
  }();

  MatFooterCellDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
    type: MatFooterCellDef,
    selectors: [["", "matFooterCellDef", ""]],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkFooterCellDef,
      useExisting: MatFooterCellDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
  });
  return MatFooterCellDef;
}();

var MatColumnDef = /*@__PURE__*/function () {
  var MatColumnDef = /*#__PURE__*/function (_CdkColumnDef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatColumnDef, _CdkColumnDef);

    var _super5 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatColumnDef);

    function MatColumnDef() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatColumnDef);

      return _super5.apply(this, arguments);
    }

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(MatColumnDef, [{
      key: "name",
      get:
      /** Unique name for this column. */
      function get() {
        return this._name;
      },
      set: function set(name) {
        this._setNameInput(name);
      }
      /**
       * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
       * In the future, this will only add "mat-column-" and columnCssClassName
       * will change from type string[] to string.
       * @docs-private
       */

    }, {
      key: "_updateColumnCssClassName",
      value: function _updateColumnCssClassName() {
        (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__.default)((0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(MatColumnDef.prototype), "_updateColumnCssClassName", this).call(this);

        this._columnCssClassName.push("mat-column-".concat(this.cssClassFriendlyName));
      }
    }]);

    return MatColumnDef;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkColumnDef);

  MatColumnDef.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatColumnDef_BaseFactory;
    return function MatColumnDef_Factory(t) {
      return (ɵMatColumnDef_BaseFactory || (ɵMatColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatColumnDef)))(t || MatColumnDef);
    };
  }();

  MatColumnDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
    type: MatColumnDef,
    selectors: [["", "matColumnDef", ""]],
    inputs: {
      sticky: "sticky",
      name: ["matColumnDef", "name"]
    },
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkColumnDef,
      useExisting: MatColumnDef
    }, {
      provide: 'MAT_SORT_HEADER_COLUMN_DEF',
      useExisting: MatColumnDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
  });
  return MatColumnDef;
}();

var MatHeaderCell = /*@__PURE__*/function () {
  var MatHeaderCell = /*#__PURE__*/function (_CdkHeaderCell) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatHeaderCell, _CdkHeaderCell);

    var _super6 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatHeaderCell);

    function MatHeaderCell() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatHeaderCell);

      return _super6.apply(this, arguments);
    }

    return MatHeaderCell;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkHeaderCell);

  MatHeaderCell.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatHeaderCell_BaseFactory;
    return function MatHeaderCell_Factory(t) {
      return (ɵMatHeaderCell_BaseFactory || (ɵMatHeaderCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatHeaderCell)))(t || MatHeaderCell);
    };
  }();

  MatHeaderCell.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
    type: MatHeaderCell,
    selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
    hostAttrs: ["role", "columnheader", 1, "mat-header-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
  });
  return MatHeaderCell;
}();

var MatFooterCell = /*@__PURE__*/function () {
  var MatFooterCell = /*#__PURE__*/function (_CdkFooterCell) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatFooterCell, _CdkFooterCell);

    var _super7 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatFooterCell);

    function MatFooterCell() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatFooterCell);

      return _super7.apply(this, arguments);
    }

    return MatFooterCell;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkFooterCell);

  MatFooterCell.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatFooterCell_BaseFactory;
    return function MatFooterCell_Factory(t) {
      return (ɵMatFooterCell_BaseFactory || (ɵMatFooterCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatFooterCell)))(t || MatFooterCell);
    };
  }();

  MatFooterCell.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
    type: MatFooterCell,
    selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
    hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
  });
  return MatFooterCell;
}();

var MatCell = /*@__PURE__*/function () {
  var MatCell = /*#__PURE__*/function (_CdkCell) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatCell, _CdkCell);

    var _super8 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatCell);

    function MatCell() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatCell);

      return _super8.apply(this, arguments);
    }

    return MatCell;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkCell);

  MatCell.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatCell_BaseFactory;
    return function MatCell_Factory(t) {
      return (ɵMatCell_BaseFactory || (ɵMatCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatCell)))(t || MatCell);
    };
  }();

  MatCell.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
    type: MatCell,
    selectors: [["mat-cell"], ["td", "mat-cell", ""]],
    hostAttrs: ["role", "gridcell", 1, "mat-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
  });
  return MatCell;
}();

var MatHeaderRowDef = /*@__PURE__*/function () {
  var MatHeaderRowDef = /*#__PURE__*/function (_CdkHeaderRowDef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatHeaderRowDef, _CdkHeaderRowDef);

    var _super9 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatHeaderRowDef);

    function MatHeaderRowDef() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatHeaderRowDef);

      return _super9.apply(this, arguments);
    }

    return MatHeaderRowDef;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkHeaderRowDef);

  MatHeaderRowDef.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatHeaderRowDef_BaseFactory;
    return function MatHeaderRowDef_Factory(t) {
      return (ɵMatHeaderRowDef_BaseFactory || (ɵMatHeaderRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatHeaderRowDef)))(t || MatHeaderRowDef);
    };
  }();

  MatHeaderRowDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
    type: MatHeaderRowDef,
    selectors: [["", "matHeaderRowDef", ""]],
    inputs: {
      columns: ["matHeaderRowDef", "columns"],
      sticky: ["matHeaderRowDefSticky", "sticky"]
    },
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkHeaderRowDef,
      useExisting: MatHeaderRowDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
  });
  return MatHeaderRowDef;
}();

var MatFooterRowDef = /*@__PURE__*/function () {
  var MatFooterRowDef = /*#__PURE__*/function (_CdkFooterRowDef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatFooterRowDef, _CdkFooterRowDef);

    var _super10 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatFooterRowDef);

    function MatFooterRowDef() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatFooterRowDef);

      return _super10.apply(this, arguments);
    }

    return MatFooterRowDef;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkFooterRowDef);

  MatFooterRowDef.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatFooterRowDef_BaseFactory;
    return function MatFooterRowDef_Factory(t) {
      return (ɵMatFooterRowDef_BaseFactory || (ɵMatFooterRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatFooterRowDef)))(t || MatFooterRowDef);
    };
  }();

  MatFooterRowDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
    type: MatFooterRowDef,
    selectors: [["", "matFooterRowDef", ""]],
    inputs: {
      columns: ["matFooterRowDef", "columns"],
      sticky: ["matFooterRowDefSticky", "sticky"]
    },
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkFooterRowDef,
      useExisting: MatFooterRowDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
  });
  return MatFooterRowDef;
}();

var MatRowDef = /*@__PURE__*/function () {
  var MatRowDef = /*#__PURE__*/function (_CdkRowDef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatRowDef, _CdkRowDef);

    var _super11 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatRowDef);

    function MatRowDef() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatRowDef);

      return _super11.apply(this, arguments);
    }

    return MatRowDef;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkRowDef);

  MatRowDef.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatRowDef_BaseFactory;
    return function MatRowDef_Factory(t) {
      return (ɵMatRowDef_BaseFactory || (ɵMatRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatRowDef)))(t || MatRowDef);
    };
  }();

  MatRowDef.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
    type: MatRowDef,
    selectors: [["", "matRowDef", ""]],
    inputs: {
      columns: ["matRowDefColumns", "columns"],
      when: ["matRowDefWhen", "when"]
    },
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkRowDef,
      useExisting: MatRowDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
  });
  return MatRowDef;
}();

var MatHeaderRow = /*@__PURE__*/function () {
  var MatHeaderRow = /*#__PURE__*/function (_CdkHeaderRow) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatHeaderRow, _CdkHeaderRow);

    var _super12 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatHeaderRow);

    function MatHeaderRow() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatHeaderRow);

      return _super12.apply(this, arguments);
    }

    return MatHeaderRow;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkHeaderRow);

  MatHeaderRow.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatHeaderRow_BaseFactory;
    return function MatHeaderRow_Factory(t) {
      return (ɵMatHeaderRow_BaseFactory || (ɵMatHeaderRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatHeaderRow)))(t || MatHeaderRow);
    };
  }();

  MatHeaderRow.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: MatHeaderRow,
    selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-header-row"],
    exportAs: ["matHeaderRow"],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkHeaderRow,
      useExisting: MatHeaderRow
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatHeaderRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 0);
      }
    },
    directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkCellOutlet],
    encapsulation: 2
  });
  return MatHeaderRow;
}();

var MatFooterRow = /*@__PURE__*/function () {
  var MatFooterRow = /*#__PURE__*/function (_CdkFooterRow) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatFooterRow, _CdkFooterRow);

    var _super13 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatFooterRow);

    function MatFooterRow() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatFooterRow);

      return _super13.apply(this, arguments);
    }

    return MatFooterRow;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkFooterRow);

  MatFooterRow.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatFooterRow_BaseFactory;
    return function MatFooterRow_Factory(t) {
      return (ɵMatFooterRow_BaseFactory || (ɵMatFooterRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatFooterRow)))(t || MatFooterRow);
    };
  }();

  MatFooterRow.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: MatFooterRow,
    selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-footer-row"],
    exportAs: ["matFooterRow"],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkFooterRow,
      useExisting: MatFooterRow
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatFooterRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 0);
      }
    },
    directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkCellOutlet],
    encapsulation: 2
  });
  return MatFooterRow;
}();

var MatRow = /*@__PURE__*/function () {
  var MatRow = /*#__PURE__*/function (_CdkRow) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatRow, _CdkRow);

    var _super14 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatRow);

    function MatRow() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatRow);

      return _super14.apply(this, arguments);
    }

    return MatRow;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkRow);

  MatRow.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatRow_BaseFactory;
    return function MatRow_Factory(t) {
      return (ɵMatRow_BaseFactory || (ɵMatRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatRow)))(t || MatRow);
    };
  }();

  MatRow.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: MatRow,
    selectors: [["mat-row"], ["tr", "mat-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-row"],
    exportAs: ["matRow"],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkRow,
      useExisting: MatRow
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 0);
      }
    },
    directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkCellOutlet],
    encapsulation: 2
  });
  return MatRow;
}();

var MatNoDataRow = /*@__PURE__*/function () {
  var MatNoDataRow = /*#__PURE__*/function (_CdkNoDataRow) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatNoDataRow, _CdkNoDataRow);

    var _super15 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatNoDataRow);

    function MatNoDataRow() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatNoDataRow);

      return _super15.apply(this, arguments);
    }

    return MatNoDataRow;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkNoDataRow);

  MatNoDataRow.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatNoDataRow_BaseFactory;
    return function MatNoDataRow_Factory(t) {
      return (ɵMatNoDataRow_BaseFactory || (ɵMatNoDataRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatNoDataRow)))(t || MatNoDataRow);
    };
  }();

  MatNoDataRow.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
    type: MatNoDataRow,
    selectors: [["ng-template", "matNoDataRow", ""]],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkNoDataRow,
      useExisting: MatNoDataRow
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
  });
  return MatNoDataRow;
}();

var MatTextColumn = /*@__PURE__*/function () {
  var MatTextColumn = /*#__PURE__*/function (_CdkTextColumn) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatTextColumn, _CdkTextColumn);

    var _super16 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatTextColumn);

    function MatTextColumn() {
      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTextColumn);

      return _super16.apply(this, arguments);
    }

    return MatTextColumn;
  }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkTextColumn);

  MatTextColumn.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatTextColumn_BaseFactory;
    return function MatTextColumn_Factory(t) {
      return (ɵMatTextColumn_BaseFactory || (ɵMatTextColumn_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatTextColumn)))(t || MatTextColumn);
    };
  }();

  MatTextColumn.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: MatTextColumn,
    selectors: [["mat-text-column"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 3,
    vars: 0,
    consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
    template: function MatTextColumn_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      }
    },
    directives: [MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderCell, MatCell],
    encapsulation: 2
  });
  return MatTextColumn;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var EXPORTED_DECLARATIONS = [// Table
MatTable, MatRecycleRows, // Template defs
MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, // Cell directives
MatHeaderCell, MatCell, MatFooterCell, // Row directives
MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];

var MatTableModule = /*@__PURE__*/function () {
  var MatTableModule = function MatTableModule() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTableModule);
  };

  MatTableModule.ɵfac = function MatTableModule_Factory(t) {
    return new (t || MatTableModule)();
  };

  MatTableModule.ɵmod =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: MatTableModule
  });
  MatTableModule.ɵinj =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [[_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatCommonModule]
  });
  return MatTableModule;
}();
/*@__PURE__*/


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MatTableModule, {
    declarations: function declarations() {
      return [MatTable, MatRecycleRows, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
    },
    imports: function imports() {
      return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatCommonModule];
    },
    exports: function exports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatCommonModule, MatTable, MatRecycleRows, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
 * flaky browser support and the value not being defined in Closure's typings.
 */


var MAX_SAFE_INTEGER = 9007199254740991;
/** Shared base class with MDC-based implementation. */

var _MatTableDataSource = /*#__PURE__*/function (_DataSource) {
  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(_MatTableDataSource, _DataSource);

  var _super17 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(_MatTableDataSource);

  function _MatTableDataSource() {
    var _this2;

    var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, _MatTableDataSource);

    _this2 = _super17.call(this);
    /** Stream emitting render data to the table (depends on ordered data changes). */

    _this2._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject([]);
    /** Stream that emits when a new filter string is set on the data source. */

    _this2._filter = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject('');
    /** Used to react to internal changes of the paginator that are made by the data source itself. */

    _this2._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    /**
     * Subscription to the changes that should trigger an update to the table's rendered rows, such
     * as filtering, sorting, pagination, or base data changes.
     */

    _this2._renderChangesSubscription = null;
    /**
     * Data accessor function that is used for accessing data properties for sorting through
     * the default sortData function.
     * This default function assumes that the sort header IDs (which defaults to the column name)
     * matches the data's properties (e.g. column Xyz represents data['Xyz']).
     * May be set to a custom function for different behavior.
     * @param data Data object that is being accessed.
     * @param sortHeaderId The name of the column that represents the data.
     */

    _this2.sortingDataAccessor = function (data, sortHeaderId) {
      var value = data[sortHeaderId];

      if ((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__._isNumberValue)(value)) {
        var numberValue = Number(value); // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
        // leave them as strings. For more info: https://goo.gl/y5vbSg

        return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
      }

      return value;
    };
    /**
     * Gets a sorted copy of the data array based on the state of the MatSort. Called
     * after changes are made to the filtered data or when sort changes are emitted from MatSort.
     * By default, the function retrieves the active sort and its direction and compares data
     * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
     * of data ordering.
     * @param data The array of data that should be sorted.
     * @param sort The connected MatSort that holds the current sort state.
     */


    _this2.sortData = function (data, sort) {
      var active = sort.active;
      var direction = sort.direction;

      if (!active || direction == '') {
        return data;
      }

      return data.sort(function (a, b) {
        var valueA = _this2.sortingDataAccessor(a, active);

        var valueB = _this2.sortingDataAccessor(b, active); // If there are data in the column that can be converted to a number,
        // it must be ensured that the rest of the data
        // is of the same type so as not to order incorrectly.


        var valueAType = typeof valueA;
        var valueBType = typeof valueB;

        if (valueAType !== valueBType) {
          if (valueAType === 'number') {
            valueA += '';
          }

          if (valueBType === 'number') {
            valueB += '';
          }
        } // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
        // one value exists while the other doesn't. In this case, existing value should come last.
        // This avoids inconsistent results when comparing values to undefined/null.
        // If neither value exists, return 0 (equal).


        var comparatorResult = 0;

        if (valueA != null && valueB != null) {
          // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
          if (valueA > valueB) {
            comparatorResult = 1;
          } else if (valueA < valueB) {
            comparatorResult = -1;
          }
        } else if (valueA != null) {
          comparatorResult = 1;
        } else if (valueB != null) {
          comparatorResult = -1;
        }

        return comparatorResult * (direction == 'asc' ? 1 : -1);
      });
    };
    /**
     * Checks if a data object matches the data source's filter string. By default, each data object
     * is converted to a string of its properties and returns true if the filter has
     * at least one occurrence in that string. By default, the filter string has its whitespace
     * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
     * filter matching.
     * @param data Data object used to check against the filter.
     * @param filter Filter string that has been set on the data source.
     * @returns Whether the filter matches against the data
     */


    _this2.filterPredicate = function (data, filter) {
      // Transform the data into a lowercase string of all property values.
      var dataStr = Object.keys(data).reduce(function (currentTerm, key) {
        // Use an obscure Unicode character to delimit the words in the concatenated string.
        // This avoids matches where the values of two columns combined will match the user's query
        // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
        // that has a very low chance of being typed in by somebody in a text field. This one in
        // particular is "White up-pointing triangle with dot" from
        // https://en.wikipedia.org/wiki/List_of_Unicode_characters
        return currentTerm + data[key] + '◬';
      }, '').toLowerCase(); // Transform the filter by converting it to lowercase and removing whitespace.

      var transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) != -1;
    };

    _this2._data = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(initialData);

    _this2._updateChangeSubscription();

    return _this2;
  }
  /** Array of data that should be rendered by the table, where each object represents one row. */


  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(_MatTableDataSource, [{
    key: "data",
    get: function get() {
      return this._data.value;
    },
    set: function set(data) {
      this._data.next(data); // Normally the `filteredData` is updated by the re-render
      // subscription, but that won't happen if it's inactive.


      if (!this._renderChangesSubscription) {
        this._filterData(data);
      }
    }
    /**
     * Filter term that should be used to filter out objects from the data array. To override how
     * data objects match to this filter string, provide a custom function for filterPredicate.
     */

  }, {
    key: "filter",
    get: function get() {
      return this._filter.value;
    },
    set: function set(filter) {
      this._filter.next(filter); // Normally the `filteredData` is updated by the re-render
      // subscription, but that won't happen if it's inactive.


      if (!this._renderChangesSubscription) {
        this._filterData(this.data);
      }
    }
    /**
     * Instance of the MatSort directive used by the table to control its sorting. Sort changes
     * emitted by the MatSort will trigger an update to the table's rendered data.
     */

  }, {
    key: "sort",
    get: function get() {
      return this._sort;
    },
    set: function set(sort) {
      this._sort = sort;

      this._updateChangeSubscription();
    }
    /**
     * Instance of the MatPaginator component used by the table to control what page of the data is
     * displayed. Page changes emitted by the MatPaginator will trigger an update to the
     * table's rendered data.
     *
     * Note that the data source uses the paginator's properties to calculate which page of data
     * should be displayed. If the paginator receives its properties as template inputs,
     * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
     * initialized before assigning it to this data source.
     */

  }, {
    key: "paginator",
    get: function get() {
      return this._paginator;
    },
    set: function set(paginator) {
      this._paginator = paginator;

      this._updateChangeSubscription();
    }
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     */

  }, {
    key: "_updateChangeSubscription",
    value: function _updateChangeSubscription() {
      var _this3 = this;

      var _a; // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
      // The events should emit whenever the component emits a change or initializes, or if no
      // component is provided, a stream with just a null event should be provided.
      // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
      // pipeline can progress to the next step. Note that the value from these streams are not used,
      // they purely act as a signal to progress in the pipeline.


      var sortChange = this._sort ? (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.merge)(this._sort.sortChange, this._sort.initialized) : (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(null);
      var pageChange = this._paginator ? (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.merge)(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(null);
      var dataStream = this._data; // Watch for base data or filter changes to provide a filtered set of data.

      var filteredData = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([dataStream, this._filter]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (_ref) {
        var _ref2 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, 1),
            data = _ref2[0];

        return _this3._filterData(data);
      })); // Watch for filtered data or sort changes to provide an ordered set of data.

      var orderedData = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([filteredData, sortChange]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (_ref3) {
        var _ref4 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref3, 1),
            data = _ref4[0];

        return _this3._orderData(data);
      })); // Watch for ordered data or page changes to provide a paged set of data.

      var paginatedData = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([orderedData, pageChange]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (_ref5) {
        var _ref6 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref5, 1),
            data = _ref6[0];

        return _this3._pageData(data);
      })); // Watched for paged data changes and send the result to the table to render.

      (_a = this._renderChangesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
      this._renderChangesSubscription = paginatedData.subscribe(function (data) {
        return _this3._renderData.next(data);
      });
    }
    /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterTermAccessor function. If no filter is set, returns the data array
     * as provided.
     */

  }, {
    key: "_filterData",
    value: function _filterData(data) {
      var _this4 = this;

      // If there is a filter string, filter out data that does not contain it.
      // Each data object is converted to a string using the function defined by filterTermAccessor.
      // May be overridden for customization.
      this.filteredData = this.filter == null || this.filter === '' ? data : data.filter(function (obj) {
        return _this4.filterPredicate(obj, _this4.filter);
      });

      if (this.paginator) {
        this._updatePaginator(this.filteredData.length);
      }

      return this.filteredData;
    }
    /**
     * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     */

  }, {
    key: "_orderData",
    value: function _orderData(data) {
      // If there is no active sort or direction, return the data without trying to sort.
      if (!this.sort) {
        return data;
      }

      return this.sortData(data.slice(), this.sort);
    }
    /**
     * Returns a paged slice of the provided data array according to the provided MatPaginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     */

  }, {
    key: "_pageData",
    value: function _pageData(data) {
      if (!this.paginator) {
        return data;
      }

      var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.slice(startIndex, startIndex + this.paginator.pageSize);
    }
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     */

  }, {
    key: "_updatePaginator",
    value: function _updatePaginator(filteredDataLength) {
      var _this5 = this;

      Promise.resolve().then(function () {
        var paginator = _this5.paginator;

        if (!paginator) {
          return;
        }

        paginator.length = filteredDataLength; // If the page index is set beyond the page, reduce it to the last page.

        if (paginator.pageIndex > 0) {
          var lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
          var newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);

          if (newPageIndex !== paginator.pageIndex) {
            paginator.pageIndex = newPageIndex; // Since the paginator only emits after user-generated changes,
            // we need our own stream so we know to should re-render the data.

            _this5._internalPageChanges.next();
          }
        }
      });
    }
    /**
     * Used by the MatTable. Called when it connects to the data source.
     * @docs-private
     */

  }, {
    key: "connect",
    value: function connect() {
      if (!this._renderChangesSubscription) {
        this._updateChangeSubscription();
      }

      return this._renderData;
    }
    /**
     * Used by the MatTable. Called when it disconnects from the data source.
     * @docs-private
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      var _a;

      (_a = this._renderChangesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
      this._renderChangesSubscription = null;
    }
  }]);

  return _MatTableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.DataSource);
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
 * which defines how row data is converted to a string for filter matching.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 */


var MatTableDataSource = /*#__PURE__*/function (_MatTableDataSource2) {
  (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatTableDataSource, _MatTableDataSource2);

  var _super18 = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatTableDataSource);

  function MatTableDataSource() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTableDataSource);

    return _super18.apply(this, arguments);
  }

  return MatTableDataSource;
}(_MatTableDataSource);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 37112:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatToolbar": function() { return /* binding */ MatToolbar; },
/* harmony export */   "MatToolbarModule": function() { return /* binding */ MatToolbarModule; },
/* harmony export */   "MatToolbarRow": function() { return /* binding */ MatToolbarRow; },
/* harmony export */   "throwToolbarMixedModesError": function() { return /* binding */ throwToolbarMixedModesError; }
/* harmony export */ });
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 56602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 93169);








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatToolbar.

/** @docs-private */



var _c0 = ["*", [["mat-toolbar-row"]]];
var _c1 = ["*", "mat-toolbar-row"];

var _MatToolbarBase = /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.mixinColor)( /*#__PURE__*/function () {
  function _class(_elementRef) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, _class);

    this._elementRef = _elementRef;
  }

  return _class;
}());

var MatToolbarRow = /*@__PURE__*/function () {
  var MatToolbarRow = function MatToolbarRow() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatToolbarRow);
  };

  MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) {
    return new (t || MatToolbarRow)();
  };

  MatToolbarRow.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: MatToolbarRow,
    selectors: [["mat-toolbar-row"]],
    hostAttrs: [1, "mat-toolbar-row"],
    exportAs: ["matToolbarRow"]
  });
  return MatToolbarRow;
}();

var MatToolbar = /*@__PURE__*/function () {
  var MatToolbar = /*#__PURE__*/function (_MatToolbarBase2) {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(MatToolbar, _MatToolbarBase2);

    var _super = (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(MatToolbar);

    function MatToolbar(elementRef, _platform, document) {
      var _this;

      (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatToolbar);

      _this = _super.call(this, elementRef);
      _this._platform = _platform; // TODO: make the document a required param when doing breaking changes.

      _this._document = document;
      return _this;
    }

    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(MatToolbar, [{
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        var _this2 = this;

        if (this._platform.isBrowser) {
          this._checkToolbarMixedModes();

          this._toolbarRows.changes.subscribe(function () {
            return _this2._checkToolbarMixedModes();
          });
        }
      }
      /**
       * Throws an exception when developers are attempting to combine the different toolbar row modes.
       */

    }, {
      key: "_checkToolbarMixedModes",
      value: function _checkToolbarMixedModes() {
        var _this3 = this;

        if (this._toolbarRows.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          // Check if there are any other DOM nodes that can display content but aren't inside of
          // a <mat-toolbar-row> element.
          var isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(function (node) {
            return !(node.classList && node.classList.contains('mat-toolbar-row'));
          }).filter(function (node) {
            return node.nodeType !== (_this3._document ? _this3._document.COMMENT_NODE : 8);
          }).some(function (node) {
            return !!(node.textContent && node.textContent.trim());
          });

          if (isCombinedUsage) {
            throwToolbarMixedModesError();
          }
        }
      }
    }]);

    return MatToolbar;
  }(_MatToolbarBase);

  MatToolbar.ɵfac = function MatToolbar_Factory(t) {
    return new (t || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT));
  };

  MatToolbar.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: MatToolbar,
    selectors: [["mat-toolbar"]],
    contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
      }
    },
    hostAttrs: [1, "mat-toolbar"],
    hostVars: 4,
    hostBindings: function MatToolbar_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matToolbar"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c1,
    decls: 2,
    vars: 0,
    template: function MatToolbar_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](1, 1);
      }
    },
    styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return MatToolbar;
}();
/**
 * Throws an exception when attempting to combine the different toolbar row modes.
 * @docs-private
 */


function throwToolbarMixedModesError() {
  throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
}

var MatToolbarModule = /*@__PURE__*/function () {
  var MatToolbarModule = function MatToolbarModule() {
    (0,C_Users_achok_Downloads_material_dashboard_angular2_master_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MatToolbarModule);
  };

  MatToolbarModule.ɵfac = function MatToolbarModule_Factory(t) {
    return new (t || MatToolbarModule)();
  };

  MatToolbarModule.ɵmod =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: MatToolbarModule
  });
  MatToolbarModule.ɵinj =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule]
  });
  return MatToolbarModule;
}();
/*@__PURE__*/


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MatToolbarModule, {
    declarations: function declarations() {
      return [MatToolbar, MatToolbarRow];
    },
    imports: function imports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule];
    },
    exports: function exports() {
      return [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 90578:
/*!****************************************************!*\
  !*** ./src/app/addproduct/addproduct.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddproductComponent": function() { return /* binding */ AddproductComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var app_modals_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modals/product */ 84340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/stepper */ 51093);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84369);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 13070);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 6174);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var app_detailsproduit_detailsproduit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/detailsproduit/detailsproduit.component */ 34230);











function AddproductComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Ajouter un produit");
    }
}
function AddproductComponent_ng_template_3_mat_error_13_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddproductComponent_ng_template_3_mat_error_13_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is max 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddproductComponent_ng_template_3_mat_error_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddproductComponent_ng_template_3_mat_error_13_span_1_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddproductComponent_ng_template_3_mat_error_13_span_2_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.addform.get("codeproduit").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.addform.get("codeproduit").errors.min);
    }
}
function AddproductComponent_ng_template_3_mat_error_18_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddproductComponent_ng_template_3_mat_error_18_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is max 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddproductComponent_ng_template_3_mat_error_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddproductComponent_ng_template_3_mat_error_18_span_1_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddproductComponent_ng_template_3_mat_error_18_span_2_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.addform.get("libelle").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.addform.get("libelle").errors.minlength);
    }
}
function AddproductComponent_ng_template_3_mat_error_23_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddproductComponent_ng_template_3_mat_error_23_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is max 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddproductComponent_ng_template_3_mat_error_23_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddproductComponent_ng_template_3_mat_error_23_span_1_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddproductComponent_ng_template_3_mat_error_23_span_2_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.addform.get("prixunitaire").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.addform.get("prixunitaire").errors.min);
    }
}
function AddproductComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Ajouter Produit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "saisir votre nouveau produit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddproductComponent_ng_template_3_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.product.codeproduit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AddproductComponent_ng_template_3_mat_error_13_Template, 3, 2, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddproductComponent_ng_template_3_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.product.libelle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AddproductComponent_ng_template_3_mat_error_18_Template, 3, 2, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddproductComponent_ng_template_3_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.product.prix_unitaire = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AddproductComponent_ng_template_3_mat_error_23_Template, 3, 2, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddproductComponent_ng_template_3_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.addform);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.product.codeproduit);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.addform.get("codeproduit").invalid && ctx_r1.addform.get("codeproduit").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.product.libelle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.addform.get("libelle").invalid && ctx_r1.addform.get("libelle").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.product.prix_unitaire);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.addform.get("prixunitaire").invalid && ctx_r1.addform.get("prixunitaire").touched);
    }
}
function AddproductComponent_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "details du produit");
    }
}
function AddproductComponent_ng_template_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-detailsproduit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddproductComponent_ng_template_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Stock");
    }
}
var AddproductComponent = /** @class */ /*@__PURE__*/ (function () {
    function AddproductComponent() {
        this.product = new app_modals_product__WEBPACK_IMPORTED_MODULE_0__.produit();
        this.request = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    AddproductComponent.prototype.ngOnInit = function () {
        this.addform = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            codeproduit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(100)])),
            libelle: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)])),
            prixunitaire: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(100)])),
        });
    };
    AddproductComponent.prototype.save = function () {
        this.request.emit(this.product);
    };
    AddproductComponent.prototype.upload = function () {
    };
    AddproductComponent.ɵfac = function AddproductComponent_Factory(t) { return new (t || AddproductComponent)(); };
    AddproductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddproductComponent, selectors: [["app-addproduct"]], outputs: { request: "request" }, decls: 13, vars: 0, consts: [["orientation", "vertical"], ["matStepLabel", "", "class", "x"], ["matStepContent", ""], ["matStepLabel", ""], ["mat-button", "", "matStepperPrevious", ""], [1, "col-md-8"], [1, "card"], [1, "card-header", "card-header-danger"], [1, "card-title"], [1, "card-category"], [1, "card-body"], [3, "formGroup"], [1, "row"], [1, "col-md-4"], [1, "example-full-width"], ["formControlName", "codeproduit", "matInput", "", "placeholder", "Code_Produit", "type", "number", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["formControlName", "libelle", "matInput", "", "placeholder", "Libelle", "type", "text", 3, "ngModel", "ngModelChange"], ["formControlName", "prixunitaire", "matInput", "", "placeholder", "Prix_unitaire", "type", "number", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-danger", "pull-right", 3, "click"], ["mat-button", "", "matStepperNext", ""]], template: function AddproductComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-stepper", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-step");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddproductComponent_ng_template_2_Template, 1, 0, "ng-template", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AddproductComponent_ng_template_3_Template, 28, 7, "ng-template", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-step");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AddproductComponent_ng_template_5_Template, 1, 0, "ng-template", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AddproductComponent_ng_template_6_Template, 5, 0, "ng-template", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-step");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AddproductComponent_ng_template_8_Template, 1, 0, "ng-template", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "This content was rendered eagerly");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Back");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
        }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__.MatStepLabel, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__.MatStepContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__.MatStepperPrevious, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__.MatStepperNext, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, app_detailsproduit_detailsproduit_component__WEBPACK_IMPORTED_MODULE_1__.DetailsproduitComponent], styles: [".mat-step-header .mat-step-icon-selected {\r\n    background-color: rgba(177, 26, 236, 0.815)!important;\r\n    color: #fff;\r\n}\r\n  .mat-step-header .mat-step-icon{\r\n    background-color: rgba(46, 255, 133, 0.918);\r\n}\r\n   .mat-step-icon .mat-icon {\r\nfont-size: 16px!important;\r\nheight: 16px!important; \r\n width: 16px!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0NBQ0M7SUFDRyxxREFBcUQ7SUFDckQsV0FBVztBQUNmO0FBQ0E7SUFDSSwyQ0FBMkM7QUFDL0M7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixzQkFBc0I7Q0FDckIscUJBQXFCO0FBQ3RCIiwiZmlsZSI6ImFkZHByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDI2LCAyMzYsIDAuODE1KSFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDYsIDI1NSwgMTMzLCAwLjkxOCk7XHJcbn1cclxuOjpuZy1kZWVwICAubWF0LXN0ZXAtaWNvbiAubWF0LWljb24ge1xyXG5mb250LXNpemU6IDE2cHghaW1wb3J0YW50O1xyXG5oZWlnaHQ6IDE2cHghaW1wb3J0YW50OyBcclxuIHdpZHRoOiAxNnB4IWltcG9ydGFudDtcclxufSJdfQ== */"] });
    return AddproductComponent;
}());




/***/ }),

/***/ 36162:
/*!*******************************************!*\
  !*** ./src/app/detailsproduct.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsproductService": function() { return /* binding */ DetailsproductService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 42693);


var DetailsproductService = /** @class */ /*@__PURE__*/ (function () {
    function DetailsproductService(_http) {
        this._http = _http;
    }
    DetailsproductService.prototype.getproduitdetail = function (id) {
        return this._http.get('http://localhost:8244/SpringMVC/detailproduit/getdetailsduproduit/' + id);
    };
    ;
    DetailsproductService.ɵfac = function DetailsproductService_Factory(t) { return new (t || DetailsproductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
    DetailsproductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DetailsproductService, factory: DetailsproductService.ɵfac });
    return DetailsproductService;
}());




/***/ }),

/***/ 34230:
/*!************************************************************!*\
  !*** ./src/app/detailsproduit/detailsproduit.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsproduitComponent": function() { return /* binding */ DetailsproduitComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 13070);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 6174);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ 13841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 56602);







function DetailsproduitComponent_mat_option_31_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var i_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r1.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r1.viewValue, " ");
    }
}
var DetailsproduitComponent = /** @class */ /*@__PURE__*/ (function () {
    function DetailsproduitComponent() {
        this.categorie = [
            { value: '0', viewValue: 'Electromenager' },
            { value: '1', viewValue: 'Alimentaire' },
            { value: '2', viewValue: 'Quincaillerie' },
        ];
    }
    DetailsproduitComponent.prototype.ngOnInit = function () {
    };
    DetailsproduitComponent.ɵfac = function DetailsproduitComponent_Factory(t) { return new (t || DetailsproduitComponent)(); };
    DetailsproduitComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsproduitComponent, selectors: [["app-detailsproduit"]], decls: 32, vars: 1, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-8"], [1, "card"], [1, "card-header", "card-header-danger"], [1, "card-title"], [1, "card-category"], [1, "card-body"], [1, "col-md-5"], [1, "example-full-width"], ["type", "date", "matInput", "", "placeholder", "Date de creation"], ["type", "date", "matInput", "", "placeholder", "Date du derniere modification "], [1, "titre"], ["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function DetailsproduitComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Les details du produits");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ajouter les details du produit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Les categories du produit ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Electromenager");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DetailsproduitComponent_mat_option_31_Template, 2, 2, "mat-option", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorie);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption], styles: [".titre[_ngcontent-%COMP%]{\r\n    font-size: inherit;\r\n    font-weight: 250; \r\n    line-height: 1;\r\n    \r\n    letter-spacing: normal;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-right: -50px;\r\n    margin-left: -15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHNwcm9kdWl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7O0lBRWQsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiZGV0YWlsc3Byb2R1aXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRyZXtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyNTA7IFxyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufSJdfQ== */"] });
    return DetailsproduitComponent;
}());




/***/ }),

/***/ 66463:
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditComponent": function() { return /* binding */ EditComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var app_modals_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modals/product */ 84340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 13070);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 6174);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84369);








function EditComponent_mat_error_13_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function EditComponent_mat_error_13_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "This field is max 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function EditComponent_mat_error_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditComponent_mat_error_13_span_1_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditComponent_mat_error_13_span_2_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.modifyForm.get("codeproduit").modifyForm.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.modifyForm.get("codeproduit").modifyForm.min);
    }
}
function EditComponent_mat_error_18_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function EditComponent_mat_error_18_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "This field is max 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function EditComponent_mat_error_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditComponent_mat_error_18_span_1_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditComponent_mat_error_18_span_2_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.modifyForm.get("libelle").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.modifyForm.get("libelle").errors.minlength);
    }
}
function EditComponent_mat_error_23_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function EditComponent_mat_error_23_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "This field is max 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function EditComponent_mat_error_23_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditComponent_mat_error_23_span_1_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditComponent_mat_error_23_span_2_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.modifyForm.get("prixunitaire").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.modifyForm.get("prixunitaire").errors.min);
    }
}
var EditComponent = /** @class */ /*@__PURE__*/ (function () {
    function EditComponent() {
        this.product = new app_modals_product__WEBPACK_IMPORTED_MODULE_0__.produit();
    }
    EditComponent.prototype.ngOnInit = function () {
        this.modifyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            codeproduit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(100)])),
            libelle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(5)])),
            prixunitaire: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(100)])),
        });
    };
    EditComponent.prototype.modify = function () {
    };
    EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(); };
    EditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 27, vars: 7, consts: [[1, "col-md-8"], [1, "card"], [1, "card-header", "card-header-danger"], [1, "card-title"], [1, "card-category"], [1, "card-body"], [3, "formGroup"], [1, "row"], [1, "col-md-4"], [1, "example-full-width"], ["formControlName", "codeproduit", "matInput", "", "placeholder", "Code_Produit", "type", "number", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["formControlName", "libelle", "matInput", "", "placeholder", "Libelle", "type", "text", 3, "ngModel", "ngModelChange"], ["formControlName", "prixunitaire", "matInput", "", "placeholder", "Prix_unitaire", "type", "number", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-danger", "pull-right", 3, "click"], [1, "clearfix"]], template: function EditComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Modifier le produit");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Modifier votre produit");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_12_listener($event) { return ctx.product.codeproduit = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EditComponent_mat_error_13_Template, 3, 2, "mat-error", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_17_listener($event) { return ctx.product.libelle = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, EditComponent_mat_error_18_Template, 3, 2, "mat-error", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_22_listener($event) { return ctx.product.prix_unitaire = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, EditComponent_mat_error_23_Template, 3, 2, "mat-error", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditComponent_Template_button_click_24_listener() { return ctx.modify(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Modify");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.modifyForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.product.codeproduit);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modifyForm.get("codeproduit").invalid && ctx.modifyForm.get("codeproduit").touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.product.libelle);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modifyForm.get("libelle").invalid && ctx.modifyForm.get("libelle").touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.product.prix_unitaire);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modifyForm.get("prixunitaire").invalid && ctx.modifyForm.get("prixunitaire").touched);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5jc3MifQ== */"] });
    return EditComponent;
}());




/***/ }),

/***/ 75498:
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutModule": function() { return /* binding */ AdminLayoutModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-layout.routing */ 54439);
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ 57620);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 47340);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ 51093);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84369);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 6174);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 5609);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 13841);
/* harmony import */ var app_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/addproduct/addproduct.component */ 90578);
/* harmony import */ var app_listproduct_listproduct_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/listproduct/listproduct.component */ 6994);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ 37112);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 77307);
/* harmony import */ var app_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/edit/edit.component */ 66463);
/* harmony import */ var app_detailsproduit_detailsproduit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/detailsproduit/detailsproduit.component */ 34230);
/* harmony import */ var app_listdetailsproduct_listdetailsproduct_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/listdetailsproduct/listdetailsproduct.component */ 8491);
/* harmony import */ var app_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/product.service */ 27195);
/* harmony import */ var app_detailsproduct_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/detailsproduct.service */ 36162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 35366);






















var AdminLayoutModule = /** @class */ /*@__PURE__*/ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule.ɵfac = function AdminLayoutModule_Factory(t) { return new (t || AdminLayoutModule)(); };
    AdminLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AdminLayoutModule });
    AdminLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [app_product_service__WEBPACK_IMPORTED_MODULE_7__.ProductService, app_detailsproduct_service__WEBPACK_IMPORTED_MODULE_8__.DetailsproductService], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
                _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule,
                _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
            ]] });
    return AdminLayoutModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AdminLayoutModule, { declarations: [app_detailsproduit_detailsproduit_component__WEBPACK_IMPORTED_MODULE_5__.DetailsproduitComponent,
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__.UserProfileComponent,
            app_listproduct_listproduct_component__WEBPACK_IMPORTED_MODULE_3__.ListproductComponent,
            app_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__.EditComponent,
            app_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_2__.AddproductComponent,
            app_listdetailsproduct_listdetailsproduct_component__WEBPACK_IMPORTED_MODULE_6__.ListdetailsproductComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule] });
})();



/***/ }),

/***/ 54439:
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutRoutes": function() { return /* binding */ AdminLayoutRoutes; }
/* harmony export */ });
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ 57620);
/* harmony import */ var app_listproduct_listproduct_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/listproduct/listproduct.component */ 6994);
/* harmony import */ var app_client_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/client/client.component */ 16599);
/* harmony import */ var app_fournisseur_fournisseur_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/fournisseur/fournisseur.component */ 41353);
/* harmony import */ var app_stock_stock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/stock/stock.component */ 2557);
/* harmony import */ var app_rayon_rayon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/rayon/rayon.component */ 21301);
/* harmony import */ var app_acceuil_acceuil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/acceuil/acceuil.component */ 58366);
/* harmony import */ var app_facture_facture_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/facture/facture.component */ 58384);
/* harmony import */ var app_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/edit/edit.component */ 66463);









var AdminLayoutRoutes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: app_acceuil_acceuil_component__WEBPACK_IMPORTED_MODULE_6__.AcceuilComponent },
    { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent },
    { path: 'produit', component: app_listproduct_listproduct_component__WEBPACK_IMPORTED_MODULE_1__.ListproductComponent, children: [
            { path: 'modifier', component: app_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__.EditComponent },
        ] },
    { path: 'typography', component: app_stock_stock_component__WEBPACK_IMPORTED_MODULE_4__.StockComponent },
    { path: 'icons', component: app_fournisseur_fournisseur_component__WEBPACK_IMPORTED_MODULE_3__.FournisseurComponent },
    { path: 'maps', component: app_client_client_component__WEBPACK_IMPORTED_MODULE_2__.ClientComponent },
    { path: 'notifications', component: app_rayon_rayon_component__WEBPACK_IMPORTED_MODULE_5__.RayonComponent },
    { path: 'facture', component: app_facture_facture_component__WEBPACK_IMPORTED_MODULE_7__.FactureComponent },
];



/***/ }),

/***/ 8491:
/*!********************************************************************!*\
  !*** ./src/app/listdetailsproduct/listdetailsproduct.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListdetailsproductComponent": function() { return /* binding */ ListdetailsproductComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 92935);
/* harmony import */ var app_modals_detailproduit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modals/detailproduit */ 86069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var app_detailsproduct_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/detailsproduct.service */ 36162);





var ListdetailsproductComponent = /** @class */ /*@__PURE__*/ (function () {
    function ListdetailsproductComponent(dialogRef, data, ec) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.ec = ec;
        this.detail_produit = new app_modals_detailproduit__WEBPACK_IMPORTED_MODULE_0__.detailproduit();
    }
    ListdetailsproductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ec.getproduitdetail(this.data).subscribe(function (res) {
            _this.detail_produit = res;
            console.log(_this.detail_produit);
        });
    };
    ListdetailsproductComponent.ɵfac = function ListdetailsproductComponent_Factory(t) { return new (t || ListdetailsproductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_detailsproduct_service__WEBPACK_IMPORTED_MODULE_1__.DetailsproductService)); };
    ListdetailsproductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListdetailsproductComponent, selectors: [["app-listdetailsproduct"]], decls: 27, vars: 3, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", "card-header-danger"], [1, "card-title"], [1, "card-category"], [1, "content", "table-responsive", "table-full-width"], [1, "table", "table-hover", "table-striped"], ["ngFor", "let details in detailproduit"]], template: function ListdetailsproductComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Les details du produit");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "p", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "table", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "thead", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Date creation");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Date dernieire modification");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "categorie du produit");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.detail_produit.date_creation);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.detail_produit.date_dermodification);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.detail_produit.categorieproduit);
            }
        }, styles: ["th[_ngcontent-%COMP%]{\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RkZXRhaWxzcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNENBQTRDO0FBQ2hEIiwiZmlsZSI6Imxpc3RkZXRhaWxzcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGh7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufSJdfQ== */"] });
    return ListdetailsproductComponent;
}());




/***/ }),

/***/ 6994:
/*!******************************************************!*\
  !*** ./src/app/listproduct/listproduct.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListproductComponent": function() { return /* binding */ ListproductComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 5609);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 47340);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 59241);
/* harmony import */ var app_listdetailsproduct_listdetailsproduct_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/listdetailsproduct/listdetailsproduct.component */ 8491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var app_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/product.service */ 27195);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 92935);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 77307);
/* harmony import */ var app_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/addproduct/addproduct.component */ 90578);














function ListproductComponent_th_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " codeproduit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function ListproductComponent_td_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var element_r11 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r11.codeproduit, " ");
    }
}
function ListproductComponent_th_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " libelle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function ListproductComponent_td_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var element_r12 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r12.libelleproduit, " ");
    }
}
function ListproductComponent_th_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " prix_unitaire ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function ListproductComponent_td_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var element_r13 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r13.prixunitaire, " ");
    }
}
function ListproductComponent_th_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
var _c0 = function () { return ["/produit/modifier"]; };
function ListproductComponent_td_19_Template(rf, ctx) {
    if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListproductComponent_td_19_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); var element_r14 = restoredCtx.$implicit; var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.delete(element_r14.idproduit); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListproductComponent_td_19_Template_button_click_12_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); var element_r14 = restoredCtx.$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.openDialog(element_r14.idproduit); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Show details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
    }
}
function ListproductComponent_tr_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 29);
    }
}
function ListproductComponent_tr_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 30);
    }
}
function ListproductComponent_app_addproduct_26_Template(rf, ctx) {
    if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-addproduct", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("request", function ListproductComponent_app_addproduct_26_Template_app_addproduct_request_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.ajouter_list($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
var _c1 = function () { return [2, 10, 20]; };
var ListproductComponent = /** @class */ /*@__PURE__*/ (function () {
    function ListproductComponent(ec, dialog) {
        this.ec = ec;
        this.dialog = dialog;
        this.change = false;
        this.listproduits = [];
        this.displayedColumns = ["codeproduit", "libelle", "prix_unitaire", "status"];
    }
    ListproductComponent.prototype.openDialog = function (id) {
        var dialogRef = this.dialog.open(app_listdetailsproduct_listdetailsproduct_component__WEBPACK_IMPORTED_MODULE_0__.ListdetailsproductComponent, {
            width: '700px',
            height: '500px',
            data: id,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ListproductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ec.allproducts().subscribe(function (res) {
            _this.listproduits = res;
            console.log(_this.listproduits);
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(_this.listproduits);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    ListproductComponent.prototype.changer = function () {
        this.change = true;
    };
    ListproductComponent.prototype.ajouter_list = function ($event) {
        console.log($event);
        this.listproduits.push($event);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(this.listproduits);
        this.dataSource.paginator = this.paginator;
    };
    ListproductComponent.prototype.delete = function (id) {
        this.ec.deleteProduct(id).subscribe();
    };
    ListproductComponent.ɵfac = function ListproductComponent_Factory(t) { return new (t || ListproductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
    ListproductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ListproductComponent, selectors: [["app-listproduct"]], viewQuery: function ListproductComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            }
        }, decls: 28, vars: 6, consts: [[1, "col-md-8"], [1, "card", "margin-position"], [1, "card-header", "card-header-danger"], [1, "card-title"], [1, "card-category"], [1, "card-body"], ["matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "codeproduit"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "libelle"], ["matColumnDef", "prix_unitaire"], ["matColumnDef", "status"], ["class", "pad", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [1, "position"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-danger", 2, "margin-left", "600px", 3, "click"], [3, "request", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "pad"], [2, "padding", "5px", "display", "flex"], ["mat-fab", "", "color", "warn", "type", "button", "aria-label", "Example icon button with a delete icon", 3, "click"], [2, "padding-left", "5px"], [3, "routerLink"], ["mat-fab", "", "color", "primary", "type", "button", "aria-label", "Example icon button with a delete icon"], ["mat-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [3, "request"]], template: function ListproductComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "La liste des produits");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "p", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-table", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ListproductComponent_th_9_Template, 2, 0, "th", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ListproductComponent_td_10_Template, 2, 1, "td", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ListproductComponent_th_12_Template, 2, 0, "th", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ListproductComponent_td_13_Template, 2, 1, "td", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ListproductComponent_th_15_Template, 2, 0, "th", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ListproductComponent_td_16_Template, 2, 1, "td", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ListproductComponent_th_18_Template, 2, 0, "th", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ListproductComponent_td_19_Template, 14, 2, "td", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ListproductComponent_tr_20_Template, 1, 0, "tr", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ListproductComponent_tr_21_Template, 1, 0, "tr", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "mat-paginator", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListproductComponent_Template_button_click_24_listener() { return ctx.changer(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Ajouter produit");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ListproductComponent_app_addproduct_26_Template, 1, 0, "app-addproduct", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "router-outlet");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.change);
            }
        }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, app_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_2__.AddproductComponent], styles: [".mat-raised-button.btn[_ngcontent-%COMP%]:not([class*=mat-elevation-z]).btn-danger, .btn.btn-danger[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color: #f44336;\r\n    margin-top: 20px;\r\n    border-color: #f44336;\r\n    box-shadow: 0 2px 2px 0 rgb(244 67 54 / 14%), 0 3px 1px -2px rgb(244 67 54 / 20%), 0 1px 5px 0 rgb(244 67 54 / 12%);\r\n    text-transform:none;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n.margin-position[_ngcontent-%COMP%]{\r\n      margin-top:140px;\r\n  }\r\n  .mat-fab{\r\n      width: 30px!important;\r\n      height: 30px!important;\r\n    \r\n    \r\n  }\r\n  .mat-icon{\r\n    padding-bottom: 7px;\r\n    height: 29px!important;\r\n    width: 29px!important;\r\n    font-size: 20px!important;\r\n  }\r\n  .mat-button-wrapper {\r\n    padding: 1px!important;\r\n   \r\n  }\r\n  td.mat-cell{\r\n      padding:2px;\r\n  }\r\n.mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Rwcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsbUhBQW1IO0lBQ25ILG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztFQUNiO0FBQ0E7TUFDSSxnQkFBZ0I7RUFDcEI7QUFDQTtNQUNJLHFCQUFxQjtNQUNyQixzQkFBc0I7OztFQUcxQjtBQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxzQkFBc0I7O0VBRXhCO0FBQ0E7TUFDSSxXQUFXO0VBQ2Y7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJsaXN0cHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1yYWlzZWQtYnV0dG9uLmJ0bjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKS5idG4tZGFuZ2VyLCAuYnRuLmJ0bi1kYW5nZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y0NDMzNjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYigyNDQgNjcgNTQgLyAxNCUpLCAwIDNweCAxcHggLTJweCByZ2IoMjQ0IDY3IDU0IC8gMjAlKSwgMCAxcHggNXB4IDAgcmdiKDI0NCA2NyA1NCAvIDEyJSk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTpub25lO1xyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubWFyZ2luLXBvc2l0aW9ue1xyXG4gICAgICBtYXJnaW4tdG9wOjE0MHB4O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1mYWJ7XHJcbiAgICAgIHdpZHRoOiAzMHB4IWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAzMHB4IWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LWljb257XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgaGVpZ2h0OiAyOXB4IWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyOXB4IWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDFweCFpbXBvcnRhbnQ7XHJcbiAgIFxyXG4gIH1cclxuICA6Om5nLWRlZXAgdGQubWF0LWNlbGx7XHJcbiAgICAgIHBhZGRpbmc6MnB4O1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9Il19 */"] });
    return ListproductComponent;
}());




/***/ }),

/***/ 86069:
/*!*****************************************!*\
  !*** ./src/app/modals/detailproduit.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detailproduit": function() { return /* binding */ detailproduit; }
/* harmony export */ });
var detailproduit = /** @class */ /*@__PURE__*/ (function () {
    function detailproduit() {
    }
    return detailproduit;
}());




/***/ }),

/***/ 84340:
/*!***********************************!*\
  !*** ./src/app/modals/product.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "produit": function() { return /* binding */ produit; }
/* harmony export */ });
var produit = /** @class */ /*@__PURE__*/ (function () {
    function produit() {
    }
    return produit;
}());




/***/ }),

/***/ 27195:
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": function() { return /* binding */ ProductService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 42693);


var ProductService = /** @class */ /*@__PURE__*/ (function () {
    function ProductService(_http) {
        this._http = _http;
    }
    ProductService.prototype.deleteProduct = function (id) {
        return this._http.delete('http://localhost:8244/SpringMVC/produit/remove-produit/' + id);
    };
    ProductService.prototype.allproducts = function () {
        return this._http.get('http://localhost:8244/SpringMVC/produit/retrieve-all-produits/');
    };
    ;
    ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
    ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac });
    return ProductService;
}());




/***/ }),

/***/ 57620:
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": function() { return /* binding */ UserProfileComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);

var UserProfileComponent = /** @class */ /*@__PURE__*/ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(); };
    UserProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 0, vars: 0, template: function UserProfileComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"] });
    return UserProfileComponent;
}());




/***/ })

}]);
//# sourceMappingURL=498.js.map