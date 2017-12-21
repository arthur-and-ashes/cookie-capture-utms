# cookie-capture-utms
Cookie creation (in JS) to capture UTM several sources, mediums and campaigns in order to use its

GOAL
1. Using the Library JS Cookie :
https://github.com/js-cookie/js-cookie
2. capture the utms source / medium / campaign on the url (Google Analytics trafic). 
3. If the utms are already in the cookie = do nothing. else = save it in the cookie.
4. can save several utms, to get the global trafic sources of each visitor ("source1-source2-Source3 ...")
5. get the cookie data and use it as you like

HOW TO USE
1. call the JS COOKIE Library on the <head> (or at the end of your body) on all your pages
2. Call the cookie capture UTMS file on the <head> (or at the end of your body) on all your pages
