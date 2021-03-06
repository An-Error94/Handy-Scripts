# Instructions on getting the polyfill working

First you need to install the script manager in your browser. [Click here to go to the page listing the script managers for the most popular web browsers](https://github.com/OpenUserJS/OpenUserJS.org/wiki/Userscript-Beginners-HOWTO). Then install [this script](JavaScript.js).

Now you install user style manager. [Find the extension suitable for your browser on this page](https://github.com/openstyles/stylus/wiki/Stylish-alternatives) and install it. Instead of installing the user style manager, you can try to manually add the user style sheet to your browser, but it is not possible for every browser! - example for `Firefox`: [Follow the instructions on this page](http://kb.mozillazine.org/UserContent.css), if you have Firefox version at least 69 - you need to change the `toolkit.legacyUserProfileCustomizations.styles` preferences to true in `about:config`.

Now you can use @document-polyfill in the user stylesheet.

## General idea of how this polyfill works

The [@document rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@document#Browser_compatibility) is only supported in Firefox (situation for the day 5 Feb 2020 - see  [content and date of the last update of the JSON file containing compatibility data for the @document rule](https://github.com/mdn/browser-compat-data/blob/master/css/at-rules/document.json)), while the [attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) is widely supported. You can use attribute selectors on attributes created by the script.

Our JavaScript adds two attributes on each page's `<html>` element:

* "data-a-domain": Contains the document's full domain name (fully qualified domain name)
* "data-a-url": Contains the URL of the document.

We use a [Descendant combinator (space)](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator) to indicate that the item you are looking for is contained in an "html" element with the appropriate attribute values, i.e. it is simply on the page that has the desired address or is on the desired domain.

Now you can use the right selector of any level of complexity, referring to a particular page element, e.g. each visited link (`a:visited;` selector).

## One additionally word from author: Specificity

To make sure that the rule will be executed - taking into account the [Specificity](https://web.archive.org/web/20210417202711/https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#to_summarize) - you must add ` !important` after your rule.

### Attention!!!
There must be a space before the exclamation mark, eg. `color: red;` replace by `color:red !important;`, `display:none;` replace by `display:none !important;`.

## Replacing the `url()` function

`html[data-a-url="addressUrl"] ` where `addressUrl` is the document's URL

In other words, `html[data-a-url="addressUrl"] ` - matches an exact URL.

### Attention!!!
A space after the selector is necessary because this is a descendant combinator.

### Example

Use

`html[data-a-url="https://example.com/An-Error94/Handy-Scripts"] ` instead of

```
url("https://example.com/An-Error94/Handy-Scripts")
```

### Attention!!!
```html[data-a-url="http://example.com/An-Error94/Handy-Scripts"] ``` NOT matches URL, which begins `https://`! To match an address that begins with `https://`, you must enter the string beginning with `https://`.

The following selector disables the display of all links (anchors) only on the page `https://example.com/An-Error94/Handy-Scripts`:

```
html[data-a-url="https://example.com/An-Error94/Handy-Scripts"] a {
  display:none !important;
}
```

## Replacing the `url-prefix()` function:

```html[data-a-url^="addressPrefix"] ```where `addressPrefix` is the prefix of the URL.

In other words, `html[data-a-url^="addressPrefix"] ` matches if the document URL starts with the value provided.

### Attention!!!
A space after the selector is necessary because this is a descendant combinator.

### Example

Use

```html[data-a-url^="https://example.com/An-Er"] ```instead of

```
url-prefix("https://example.com/An-Er")
```

```html[data-a-url^="https://example.com/An-Er"] ``` matches e.g. the following URL:

```
https://example.com/An-Er
https://example.com/An-Err
https://example.com/An-Error94
https://example.com/An-Error94/
https://example.com/An-Error94/Handy-Scripts
```

### Attention!!!
```html[data-a-url^="http://example.com/An-Er"] ``` NOT matches URL, which begins `https://`! To match an address that begins with `https://`, you must enter the string beginning with `https://`.

The following selector disables the display of all links (anchors) on all pages whose URL begins with `https://example.com/An-Er`:

```
html[data-a-url^="https://example.com/An-Er"] a {
  display:none !important;
}
```

## Replacing the `domain()` function:

`html[data-a-domain|="domainSpecialString"] `where `domainSpecialString` is a special string specifying the desired [domain](https://en.wikipedia.org/wiki/Domain_name) as follows:

You should write all [labels](https://en.wikipedia.org/wiki/Domain_name#Domain_name_syntax) of [fully qualified domain name](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) according to their decreasing importance in the hierarchy (the hierarchy of domains decrease from the right to the left), including the top-level domain. Each of label should be separated by a dash:`-`. If the dash is part of a label, replace it with a `^`.

In other words, find all the words at the beginning of the URL (except the words immediately before `://` - if `://` is visible at all - see [Address bar implementations](https://en.wikipedia.org/wiki/Address_bar#Address_bar_implementations)) that appear before the first occurrence of a single `/`, e.g. when (visible in the address bar of a web browser) the URLs are as follows: `http://example.com/An-Error94/Handy-Scripts`, `example.com/An-Error94/Handy-Scripts`, `https://example.com/An-Error94/Handy-Scripts` - the words you are looking for are: `example.com`.
These words are grouped into elements called "labels". Each label is separated by a period (`.`). On `domainSpecialString`, write these labels in reverse order than they appear in the URL and separate them with a dash: `-`. If the dash is part of a label, replace it with a `^`.

For example:

* `com` matches all pages in the top-level `com` domain and all subdomains thereof.
* `com-example` matches all pages in the `example.com` domain and all its subdomains.
* `com-example-abc` matches all pages in the domain `abc.example.com` and all its subdomains.
* `com-example-strange^part` matches all pages in the domain `strange-part.example.com` and all its subdomains.
* `com-example-abc-ghi` matches all pages in the domain `ghi.abc.example.com` and all its subdomains.
* `com-example-strange^part-klm` matches all pages in the domain `klm.strange-part.example.com` and all its subdomains.

In other words `html[data-a-domain|="domainSpecialString"] ` - matches if the document URL is on the domain provided (or a subdomain of it).

### Attention!!!
A space after the selector is necessary because this is a descendant combinator.

### Example

Use

```html[data-a-domain|="com-example"] ```instead of

```
domain("example.com")
```

The following selector disables the display of all links (anchors) on all pages in the `example.com` domain and all its subdomains:

```
html[data-a-domain|="com-example"] a{
  display:none !important;
}
```
