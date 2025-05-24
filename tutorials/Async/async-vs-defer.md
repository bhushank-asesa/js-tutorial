# Async vs defer

> async and defer are boolean attribute of script tag

## Without async and defer

```html
<script src="">
```

- When html parsing finds script, it fetches from network and execute on browser, then html parsing continues after full script fetch and execute

## async

```html
<script async src="">
```

- While HTML parsing also scripts fetch from network simultaneously
  and then execution start(parsing stopped), after execution completes parsing starts again
- doesn't guarantee of order of execution.
- if some script depends upon each other then it fails
- in case of non dependent script, sue async

## defer

- script fetches from network parallel with html parsing
- and executed only after parsing complete
