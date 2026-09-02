cookie-capture-utms

⚠️ This project is no longer maintained — it has been revamped.
A modernized version lives here: js-capture-utms-and-sources-cookie-bar — it drops document.write, fixes several logic bugs, runs in 'use strict', adds an optional consent bar + GA4, and ships a dependency-free variant. This repository is kept for reference / archival purposes.

A small vanilla-JS script that captures the UTM parameters of an incoming URL (utm_source, utm_medium, utm_campaign) into a cookie, so a visitor's original traffic source can be reused later.

How it works — reads the three UTM params, stores them as JSON in a cookie_utms cookie (120 days), appends new sources instead of overwriting (source1-source2…), and lets you read the cookie on any page. Depends on js-cookie (2.x).

(+ How to use, Cookie table, French tutorial link, and a "Known limitation" note about the document.write debug line)
  
  Retrouvez le tutoriel complet en français // Tutorial in French
  https://code.broker/tutorials/sauvegarder-utms-et-autres-liens-de-tracking-dans-un-cookie/
