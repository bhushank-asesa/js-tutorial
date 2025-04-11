# Cookie Storage

> **What** -> storage to store persistent data

> **How it works** -> Data can be set by client or server & cookie get transmitted via http call(e.g. Next JS, PHP, not for react app). Server can read all cookie but client may read server cookie based pre condition. **_Session Cookie_** Expired on browser. **_Persistent Cookie_** expire on date, browser close

> **Size** -> 4 KB per domain

> **Performance** -> Http req/res can be effected due to cookie size (for PHP and Next JS etc)

> **Data persistance** -> on expiry date, browser close.

> **Data Structure** key:value _(value alway string)_

> **Security** csrf, xsrf, httpOnly, same site attribute, domain path, expiry, expiry configuration

> **When to use** -> authorization, light data

> **When not to use** -> large data set, don't put blindly sensitive data

> In NEXT, Node you can clear data like cache storage cookies