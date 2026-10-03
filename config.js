/* =====================================================================
   HARBOR CLUB CHRISTMAS HOME TOUR — SITE SETTINGS
   This is the only file you should ever need to edit for event details.
   Homes are managed separately (Google Sheet or homes.json — see README).
   ===================================================================== */

window.TOUR_CONFIG = {
  // ---- Event details shown at the top of the page ----
  eventTitle: "Christmas Home Tour",
  hostName: "Harbor Club Ladies League",
  year: "2026",
  dateLine: "Thursday, November 19, 2026",
  timeLine: "10:00 am – 4:00 pm",
  priceLine: "Tickets $10",
  ticketNote: "Please bring your ticket. It is your admission at every home.",

  // ---- Where the list of homes comes from ----
  // Option A (recommended): paste your published Google Sheet CSV link here.
  // Edits to the sheet show up on the site within about 5 minutes. No redeploy.
  // Leave as "" to use homes.json instead (Option B).
  sheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRW9g6dprOpDN1WTWLuaVPg2zXUBnC39j_7NKnkoUTPm_YMFk6HBq0oJhvoeosXwzbikEyr53heB-Ne/pub?gid=1698211163&single=true&output=csv",

  // Town/state appended when looking up an address that has no lat/lng.
  defaultCityState: "Greensboro, GA 30642",

  // ---- Charity ----
  charity: {
    name: "Greene County Food Pantry",
    city: "Greensboro, Georgia",
    url: "https://www.gcfpantry.org",
    aboutUrl: "https://www.gcfpantry.org/about",
    donateUrl: "https://www.gcfpantry.org/donate",
    // Local copy first (save their logo as assets/gcfp-logo.png), then their hosted copy.
    logo: "assets/gcfp-logo.png",
    logoFallback: "https://images.squarespace-cdn.com/content/v1/6827a0bccf1ecf43869d1a7b/93524bb2-21d5-461c-ac94-294f60c55cea/GC+Food+Pantry+logo.png?format=750w",
    blurb: "Since 2007 the Greene County Food Pantry has fought hunger here at home, providing about 600 local families each month with 40 to 50 pounds of groceries. More than half of the neighbors they serve are seniors or children."
  },

  // ---- Ticket artwork (save your ticket graphic as assets/ticket-art.jpg) ----
  ticketArt: "ticket-art.jpg",

  // ---- Optional contact line in the footer ----
  contactLine: "Questions on tour day? Ask any hostess at the door."
};
