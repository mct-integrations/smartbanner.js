import SmartBanner from './smartbanner.js';

const smartbanner = new SmartBanner();
window.smartbanner = smartbanner;
!smartbanner.apiEnabled && smartbanner.publish();
