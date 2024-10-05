/*!
 * Thorium Initialization for framework7 projects
 * Version 3.2.0 november, 2021
 * framework7 v6.x (https://framework7.io) MIT Licensed
 * Copyright 2018-2021 Thorium builder, All Rights Reserved.
*/
const kDebugMessagesLevel= 1;
const kHybridAppsLog = true;
const kAutoUpdate=false;
const kShowPreloader=false;
const kLocalRoot = "http://localhost:8080/thabiso_today/";
const kMediaRoot = './db/dbassets/';
const kRemoteHost="https://thabiso.today/";
const kTimeOut =6000;
const kCrossDomain =false;
const kAuthMode =0;
const kWebShareApi =true;
const kAutoClosePanels =true;
const kDesktopAllowed =true;
const kOneSignalAppId="";
const kTheme='.color-theme-black';
const kCustomColor=null;
const kFillMode=false;

const kPhotoBrowserBackLinkText="close";
const kPhotoBrowserTheme="dark";
const kPhotoBrowserEffect="fade";
const kPhotoBrowserAutoPlay="";

const kForceInstall = false;
const kAddToHomeScreenIos = true;
const kAddToHomeScreenMd = true;
const kSkipButton=true;
const kSkipButtonText="Skip";
const kAddToHomeScreenTitle="TK";
const kAddToHomeScreenMdText="Save to desktop now";
const kAddToHomeScreenIosText="Save to home screen now";
const kImgMaxSize=10;
const kDocMaxSize=10;
const kMultilingual=false;
const kDbHTMLRendering= false;

/*-- Dates --*/
const kDateFormat="mm.dd.yyyy"; //"mm.dd.yyyy";
const kDateTimeFormat="mm.dd.yyyy hh::mm a"; //"mm.dd.yyyy hh::mm a";
const kHours12=false;
var kdayNames=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
var kdayNamesShort=['sun','mon','tue','wed','thu','fri','sat'];
var kmonthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
var kmonthNamesShort=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

/*-- dbExpress --*/
const kDbExpressEcommerce = false;
const kDbExpressSocial = false;
const kDeliveryAmount="0";
const kCurrencySymbol= "$";  
const kCurrencyLeftSide= false; 


/*-- dbExpress Additional Strings --*/
const kLogout="Logout";
const kEmailSent="A Message has been sent to your email address";

/*-- dbExpress API --*/
const kApiRoot="db/webservices/";
const kAuthManagerApi="thorium.auth.signin.php";
const kGetDataApi="thorium.data.get.php";
const kSetDataApi="thorium.data.set.php";
const kRegisterApi ="thorium.auth.register.php";
const kSetProfileApi ="thorium.auth.set.php";
const kGetProfileApi ="thorium.auth.get.php";
const kSetShoppingCartQtyApi ="thorium.cart.qty.php";
const kGetShoppingCartApi ="thorium.cart.get.php";
const kSetShoppingCartApi ="thorium.cart.set.php";
const kSetOrderApi ="thorium.order.set.php";
const kSignOutApi ="thorium.auth.signout.php";
const kDeleteDataApi ="thorium.data.delete.php";
const kClearShoppingCartApi ="thorium.cart.clear.php";
const kgetChatMessages="thorium.chat.get.php";
const ksetChatMessages="thorium.chat.set.php"; 
const kresetPassword="thorium.auth.resetpassword.php";


const kTextEditorButtons=[
    ['bold', 'italic', 'underline', 'strikeThrough'],
    ['alignLeft', 'alignCenter', 'alignRight'],
    ['indent', 'outdent'],
  ];

const kMode="no-cors"; //cors, no-cors, same-origin
const kCache="default"; //default, no-cache, reload, force-cache, only-if-cached
const kCredentials="omit"; //include, same-origin, omit
const kContenttype="application/json"; //application/json, application/x-www-form-urlencoded ...
const kRedirect="follow"; //manual, follow, error
const kReferrerpolicy="no-referrer"; //no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
const kAuthorization=""; //'Authorization': 'Basic xxxxx'




var $ = Dom7; 
var routes = [
{
    path: '/',
    url: './index.html',
    name: 'index',
},
{
    path: '(.*)',
    url: './pages/404.html',
},
];




var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}
var app = new Framework7({
    "version": "1.0.4",
    "id": "today.thabiso",
    "root": "#app",
    "theme": theme,
    "autoDarkTheme": false,
    "language": "en",
    "routes": routes,
    "name": "TK",
    "initOnDeviceReady": true,
    "init": true,
    "iosTranslucentBars": true,
    "iosTranslucentModals": true,
    "touch": {
        "disableContextMenu": true,
        "tapHold": false,
        "tapHoldDelay": 2,
        "tapHoldPreventClicks": false,
        "activeState": true,
        "activeStateElements": "a, button, label, span, .actions-button",
        "materialRipple": true,
        "iosTouchRipple": false,
        "materialRippleElements": ".ripple, .link, .item-link, .links-list a, .button, button, .input-clear-button, .dialog-button, .tab-link, .item-radio, .item-checkbox, .actions-button, .searchbar-disable-button, .fab a, .checkbox, .radio, .data-table .sortable-cell, .notification-close-button"
    },
    "clicks": {
        "externalLinks": ".external"
    },
    "statusbar": {
        "enabled": "true",
        "overlay": "auto",
        "scrollTopOnClick": true,
        "iosOverlaysWebView": true,
        "iosTextColor": "black",
        "iosBackgroundColor": "white",
        "materialBackgroundColor": null
    },
    "view": {
        "main": true,
        "router": true,
        "reloadAll": true,
        "stackPages": true,
        "reloadPages": false,
        "reloadDetail": true,
        "keepAlive": false,
        "linksView": null,
        "xhrCache": true,
        "xhrCacheIgnore": [],
        "xhrCacheIgnoreGetParameters": false,
        "xhrCacheDuration": 600000,
        "preloadPreviousPage": true,
        "uniqueHistory": false,
        "uniqueHistoryIgnoreGetParameters": false,
        "allowDuplicateUrls": false,
        "removeElements": true,
        "removeElementsWithTimeout": false,
        "removeElementsTimeout": 0,
        "restoreScrollTopOnBack": true,
        "unloadTabContent": true,
        "iosSwipeBack": true,
        "iosSwipeBackAnimateShadow": true,
        "iosSwipeBackAnimateOpacity": false,
        "iosSwipeBackActiveArea": 30,
        "iosSwipeBackThreshold": 0,
        "pushState": false,
        "pushStateAnimate": true,
        "pushStateAnimateOnLoad": true,
        "pushStateSeparator": "#!",
        "pushStateOnLoad": false,
        "animate": true,
        "animateWithJS": false,
        "iosDynamicNavbar": false,
        "iosSeparateDynamicNavbar": true,
        "iosAnimateNavbarBackIcon": true,
        "iosPageLoadDelay": 0,
        "materialPageLoadDelay": 0
    },
    "navbar": {
        "scrollTopOnTitleClick": true,
        "iosCenterTitle": true,
        "hideOnPageScroll": false,
        "showOnPageScrollEnd": true,
        "showOnPageScrollTop": true
    },
    "toolbar": {
        "hideOnPageScroll": false,
        "showOnPageScrollEnd": true,
        "showOnPageScrollTop": true
    },
    "modal": {
        "moveToRoot": true,
        "queueDialogs": true
    },
    "dialog": {
        "buttonOk": "OK",
        "buttonCancel": "Cancel",
        "usernamePlaceholder": "Username",
        "passwordPlaceholder": "Password",
        "preloaderTitle": "Loading... ",
        "progressTitle": "Loading... ",
        "closeByBackdropClick": false
    },
    "popup": {
        "backdrop": true,
        "closeByBackdropClick": true
    },
    "popover": {
        "closeByBackdropClick": true,
        "closeByOutsideClick": true,
        "backdrop": true
    },
    "actions": {
        "convertToPopover": true,
        "forceToPopover": false,
        "closeByBackdropClick": true,
        "render": null,
        "renderPopover": null,
        "backdrop": true
    },
    "sheet": {
        "closeByBackdropClick": true,
        "closeByOutsideClick": false
    },
    "toast": {
        "icon": null,
        "text": null,
        "position": "bottom",
        "closeButton": false,
        "closeButtonColor": null,
        "closeButtonText": "Ok",
        "closeTimeout": null,
        "cssClass": null,
        "render": null
    },
    "sortable": false,
    "swipeout": {
        "actionsNoFold": false,
        "noFollow": false,
        "removeElements": true,
        "removeElementsWithTimeout": false,
        "removeElementsTimeout": 0
    },
    "panel": {
        "leftBreakpoint": 0,
        "rightBreakpoint": 0,
        "swipeActiveArea": 0,
        "swipeCloseOpposite": true,
        "swipeOnlyClose": true,
        "swipeNoFollow": false,
        "swipeThreshold": 0,
        "closeByBackdropClick": true
    },
    "input": {
        "scrollIntoViewOnFocus": false,
        "scrollIntoViewCentered": false
    },
    "smartSelect": {
        "openIn": "page",
        "pageBackLinkText": "Back",
        "popupCloseLinkText": "Close",
        "sheetCloseLinkText": "Done",
        "searchbar": false,
        "searchbarPlaceholder": "Search",
        "searchbarDisableText": "Cancel",
        "closeOnSelect": false,
        "virtualList": false,
        "routableModals": true,
        "url": "select/"
    },
    "calendar": {
        "monthNames": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        "monthNamesShort": [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        "dayNames": [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "dayNamesShort": [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ],
        "firstDay": 1,
        "weekendDays": [
            0,
            6
        ],
        "multiple": false,
        "rangePicker": false,
        "dateFormat": kDateFormat,
        "direction": "horizontal",
        "minDate": null,
        "maxDate": null,
        "disabled": null,
        "events": null,
        "rangesClasses": null,
        "touchMove": true,
        "animate": true,
        "closeOnSelect": false,
        "monthSelector": true,
        "yearSelector": true,
        "weekHeader": true,
        "value": null,
        "containerEl": null,
        "openIn": "auto",
        "formatValue": null,
        "inputEl": null,
        "inputReadOnly": false,
        "closeByOutsideClick": true,
        "scrollToInput": true,
        "header": false,
        "headerPlaceholder": "Select date",
        "footer": false,
        "toolbar": true,
        "toolbarCloseText": "Done",
        "cssClass": null,
        "routableModals": true,
        "view": null,
        "url": "date/",
        "renderWeekHeader": null,
        "renderMonths": null,
        "renderMonth": null,
        "renderMonthSelector": null,
        "renderYearSelector": null,
        "renderHeader": null,
        "renderFooter": null,
        "renderToolbar": null,
        "renderInline": null,
        "renderPopover": null,
        "renderSheet": null,
        "render": null
    },
    "picker": {
        "updateValuesOnMomentum": false,
        "updateValuesOnTouchmove": true,
        "rotateEffect": false,
        "momentumRatio": 7,
        "freeMode": false,
        "cols": [],
        "containerEl": null,
        "openIn": "auto",
        "formatValue": null,
        "inputEl": null,
        "inputReadOnly": true,
        "closeByOutsideClick": true,
        "scrollToInput": true,
        "toolbar": true,
        "toolbarCloseText": "Done",
        "cssClass": null,
        "routableModals": true,
        "view": null,
        "url": "select/",
        "renderColumn": null,
        "renderToolbar": null,
        "renderInline": null,
        "renderPopover": null,
        "renderSheet": null,
        "render": null
    },
    "lazy": {
        "placeholder": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXCwsK592mkAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",
        "threshold": 0,
        "sequential": true
    },
    "photoBrowser": {
        "photos": [],
        "exposition": true,
        "expositionHideCaptions": false,
        "type": "standalone",
        "navbar": true,
        "toolbar": true,
        "theme": "light",
        "swipeToClose": true,
        "backLinkText": "Close",
        "navbarOfText": "of",
        "url": "photos/",
        "routableModals": true,
        "virtualSlides": true,
        "swiper": {
            "initialSlide": 0,
            "spaceBetween": 20,
            "speed": 300,
            "loop": false,
            "preloadImages": true,
            "navigation": {
                "nextEl": ".photo-browser-next",
                "prevEl": ".photo-browser-prev"
            },
            "zoom": {
                "enabled": true,
                "maxRatio": 3,
                "minRatio": 1
            },
            "lazy": {
                "enabled": true
            }
        }
    },
    "notification": {
        "icon": null,
        "title": null,
        "titleRightText": null,
        "subtitle": null,
        "text": null,
        "closeButton": false,
        "closeTimeout": null,
        "closeOnClick": false,
        "swipeToClose": true,
        "cssClass": null,
        "render": null
    },
    "autocomplete": {
        "typeahead": false,
        "highlightMatches": true,
        "expandInput": false,
        "updateInputValueOnSelect": true,
        "multiple": false,
        "valueProperty": "id",
        "textProperty": "text",
        "openIn": "page",
        "pageBackLinkText": "Back",
        "popupCloseLinkText": "Close",
        "searchbarPlaceholder": "Search...",
        "searchbarDisableText": "Cancel",
        "animate": true,
        "autoFocus": false,
        "closeOnSelect": false,
        "notFoundText": " Nothing found",
        "requestSourceOnOpen": false,
        "preloader": false,
        "routableModals": true,
        "url": "select"
    },
    "vi": {
        "enabled": false,
        "autoplay": true,
        "fallbackOverlay": true,
        "fallbackOverlayText": "Please watch this ad",
        "showMute": true,
        "startMuted": true,
        "appId": null,
        "appVer": null,
        "language": null,
        "width": null,
        "height": null,
        "placementId": "pltd4o7ibb9rc653x14",
        "placementType": "interstitial",
        "videoSlot": null,
        "showProgress": true,
        "showBranding": true,
        "os": null,
        "osVersion": null,
        "orientation": null,
        "age": null,
        "gender": null,
        "advertiserId": null,
        "latitude": null,
        "longitude": null,
        "accuracy": null,
        "storeId": null,
        "ip": null,
        "manufacturer": null,
        "model": null,
        "connectionType": null,
        "connectionProvider": null
    },
    textEditor: {
        buttons: [
            ['bold', 'italic', 'underline', 'strikeThrough'],
            ['orderedList', 'unorderedList'],
            ['link', 'image'],
            ['paragraph', 'h1', 'h2', 'h3'],
            ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify'],
            ['subscript', 'superscript'],
            ['indent', 'outdent']
          ]
    }
    
});
