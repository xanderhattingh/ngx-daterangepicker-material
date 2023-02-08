import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import dayjs, { Dayjs } from 'dayjs/esm';
import { LocaleConfig } from './daterangepicker.config';
import { LocaleService } from './locale.service';
import * as i0 from "@angular/core";
export declare enum SideEnum {
    left = "left",
    right = "right"
}
export interface DateRanges {
    [index: string]: [Dayjs, Dayjs];
}
export interface DateRange {
    label: string;
    dates: [Dayjs, Dayjs];
}
export interface ChosenDate {
    chosenLabel: string;
    startDate: Dayjs;
    endDate: Dayjs;
}
export interface TimePeriod {
    [index: string]: Dayjs;
    startDate: Dayjs;
    endDate: Dayjs;
}
export interface StartDate {
    startDate: Dayjs;
}
export interface EndDate {
    endDate: Dayjs;
}
interface TimePickerVariables {
    secondsLabel: string[];
    selectedMinute: number;
    selectedSecond: number;
    hours: number[];
    seconds: number[];
    disabledHours: number[];
    disabledMinutes: number[];
    minutes: number[];
    minutesLabel: string[];
    selectedHour: number;
    disabledSeconds: number[];
    amDisabled?: boolean;
    pmDisabled?: boolean;
    ampmModel?: string;
    selected: Dayjs;
}
interface TimePickerVariablesHolder {
    [index: string]: TimePickerVariables;
}
interface CalendarRowClasses {
    [index: number]: string;
    classList: string;
}
interface CalendarClasses {
    [index: number]: CalendarRowClasses;
}
interface Dropdowns {
    inMaxYear: boolean;
    yearArrays: number[];
    maxYear: number;
    minYear: number;
    currentMonth: number;
    inMinYear: boolean;
    monthArrays: number[];
    currentYear: number;
}
declare type CalendarArrayWithProps<T> = T[] & {
    firstDay?: Dayjs;
    lastDay?: Dayjs;
};
interface CalendarVariables {
    calRows: number[];
    calCols: number[];
    calendar: CalendarArrayWithProps<Dayjs[]>;
    minDate: dayjs.Dayjs;
    year: number;
    classes: CalendarClasses;
    lastMonth: number;
    minute: number;
    second: number;
    daysInMonth: number;
    dayOfWeek: number;
    month: number;
    hour: number;
    firstDay: dayjs.Dayjs;
    lastYear: number;
    lastDay: dayjs.Dayjs;
    maxDate: dayjs.Dayjs;
    daysInLastMonth: number;
    dropdowns?: Dropdowns;
}
interface CalendarVariableHolder {
    [index: string]: CalendarVariables;
}
interface VisibleCalendar {
    month: Dayjs;
    calendar: CalendarArrayWithProps<Dayjs[]>;
}
export declare class DaterangepickerComponent implements OnInit, OnChanges {
    private el;
    private ref;
    private localeHolderService;
    startDate: dayjs.Dayjs;
    endDate: dayjs.Dayjs;
    dateLimit: number;
    autoApply: boolean;
    singleDatePicker: boolean;
    showDropdowns: boolean;
    showWeekNumbers: boolean;
    showISOWeekNumbers: boolean;
    linkedCalendars: boolean;
    autoUpdateInput: boolean;
    alwaysShowCalendars: boolean;
    maxSpan: boolean;
    lockStartDate: boolean;
    timePicker: boolean;
    timePicker24Hour: boolean;
    timePickerIncrement: number;
    timePickerSeconds: boolean;
    showClearButton: boolean;
    firstMonthDayClass: string;
    lastMonthDayClass: string;
    emptyWeekRowClass: string;
    emptyWeekColumnClass: string;
    firstDayOfNextMonthClass: string;
    lastDayOfPreviousMonthClass: string;
    showCustomRangeLabel: boolean;
    showCancel: boolean;
    keepCalendarOpeningWithRange: boolean;
    showRangeLabelOnInput: boolean;
    customRangeDirection: boolean;
    drops: string;
    opens: string;
    closeOnAutoApply: boolean;
    choosedDate: EventEmitter<ChosenDate>;
    rangeClicked: EventEmitter<DateRange>;
    datesUpdated: EventEmitter<TimePeriod>;
    startDateChanged: EventEmitter<StartDate>;
    endDateChanged: EventEmitter<EndDate>;
    cancelClicked: EventEmitter<void>;
    clearClicked: EventEmitter<void>;
    pickerContainer: ElementRef;
    chosenLabel: string;
    calendarVariables: CalendarVariableHolder;
    timepickerVariables: TimePickerVariablesHolder;
    daterangepicker: {
        start: FormControl;
        end: FormControl;
    };
    applyBtn: {
        disabled: boolean;
    };
    sideEnum: typeof SideEnum;
    chosenRange: string;
    rangesArray: Array<string>;
    isShown: boolean;
    inline: boolean;
    leftCalendar: VisibleCalendar;
    rightCalendar: VisibleCalendar;
    showCalInRanges: boolean;
    nowHoveredDate: any;
    pickingDate: boolean;
    protected minDateHolder: dayjs.Dayjs;
    protected maxDateHolder: dayjs.Dayjs;
    protected localeHolder: LocaleConfig;
    protected rangesHolder: DateRanges;
    private cachedVersion;
    constructor(el: ElementRef, ref: ChangeDetectorRef, localeHolderService: LocaleService);
    get minDate(): dayjs.Dayjs;
    set minDate(value: dayjs.Dayjs | string);
    get locale(): LocaleConfig;
    set locale(value: LocaleConfig);
    get ranges(): DateRanges;
    set ranges(value: DateRanges);
    get maxDate(): dayjs.Dayjs;
    set maxDate(value: dayjs.Dayjs | string);
    isInvalidDate(date: Dayjs): boolean;
    isCustomDate(date: Dayjs): boolean;
    isTooltipDate(date: Dayjs): string | boolean | null;
    handleInternalClick(e: MouseEvent): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    renderRanges(): void;
    renderTimePicker(side: SideEnum): void;
    renderCalendar(side: SideEnum): void;
    setStartDate(startDate: string | Dayjs): void;
    setEndDate(endDate: string | Dayjs): void;
    updateView(): void;
    updateMonthsInView(): void;
    updateCalendars(): void;
    updateElement(): void;
    remove(): void;
    calculateChosenLabel(): void;
    clickApply(e?: MouseEvent): void;
    clickCancel(e: MouseEvent): void;
    monthChanged(monthEvent: Event, side: SideEnum): void;
    yearChanged(yearEvent: Event, side: SideEnum): void;
    timeChanged(timeEvent: Event, side: SideEnum): void;
    monthOrYearChanged(month: number, year: number, side: SideEnum): void;
    clickPrev(side: SideEnum): void;
    clickNext: (side: SideEnum) => void;
    hoverDate(e: Event, side: SideEnum, row: number, col: number): void;
    clickDate(e: Event, side: SideEnum, row: number, col: number): void;
    clickRange(e: MouseEvent, label: string): void;
    show(e?: Event): void;
    hide(e?: Event): void;
    updateLocale(locale: LocaleConfig): void;
    clear(): void;
    disableRange(range: string): boolean;
    private getDateWithTime;
    private buildLocale;
    private buildCells;
    static ɵfac: i0.ɵɵFactoryDeclaration<DaterangepickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DaterangepickerComponent, "ngx-daterangepicker-material", never, { "startDate": "startDate"; "endDate": "endDate"; "dateLimit": "dateLimit"; "autoApply": "autoApply"; "singleDatePicker": "singleDatePicker"; "showDropdowns": "showDropdowns"; "showWeekNumbers": "showWeekNumbers"; "showISOWeekNumbers": "showISOWeekNumbers"; "linkedCalendars": "linkedCalendars"; "autoUpdateInput": "autoUpdateInput"; "alwaysShowCalendars": "alwaysShowCalendars"; "maxSpan": "maxSpan"; "lockStartDate": "lockStartDate"; "timePicker": "timePicker"; "timePicker24Hour": "timePicker24Hour"; "timePickerIncrement": "timePickerIncrement"; "timePickerSeconds": "timePickerSeconds"; "showClearButton": "showClearButton"; "firstMonthDayClass": "firstMonthDayClass"; "lastMonthDayClass": "lastMonthDayClass"; "emptyWeekRowClass": "emptyWeekRowClass"; "emptyWeekColumnClass": "emptyWeekColumnClass"; "firstDayOfNextMonthClass": "firstDayOfNextMonthClass"; "lastDayOfPreviousMonthClass": "lastDayOfPreviousMonthClass"; "showCustomRangeLabel": "showCustomRangeLabel"; "showCancel": "showCancel"; "keepCalendarOpeningWithRange": "keepCalendarOpeningWithRange"; "showRangeLabelOnInput": "showRangeLabelOnInput"; "customRangeDirection": "customRangeDirection"; "drops": "drops"; "opens": "opens"; "closeOnAutoApply": "closeOnAutoApply"; "minDate": "minDate"; "locale": "locale"; "ranges": "ranges"; "maxDate": "maxDate"; "isInvalidDate": "isInvalidDate"; "isCustomDate": "isCustomDate"; "isTooltipDate": "isTooltipDate"; }, { "choosedDate": "choosedDate"; "rangeClicked": "rangeClicked"; "datesUpdated": "datesUpdated"; "startDateChanged": "startDateChanged"; "endDateChanged": "endDateChanged"; "cancelClicked": "cancelClicked"; "clearClicked": "clearClicked"; }, never, never>;
}
export {};
