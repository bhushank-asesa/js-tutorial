# Session storage

> **What** -> storage to store data persistent on user device

> **How it works** -> using sessionStorage object and methods like setItem, getItem, removeItem,clear

> **Size** -> Approx. 5 MB per domain, for safe consider 5 MB

> **Performance** -> Synchronizes

> **Data persistance** -> cleared when browser session ends _(tab/window closed)_
>
> > Duplicate tab will copy session storage for first time only
> > it does not sync with parent one after duplicating tab sessionStorage will be copied and but it become independent

> **Data Structure** key:value _(value alway string)_

> **Security** can encrypt, depends upon storage, CORS XSS ensure, storage limit, session expiry

> **When to use** -> temporary sensitive data

> **When not to use** -> large data set, long duration data, async operation data