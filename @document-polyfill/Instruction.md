# Instructions on getting the polyfill working

Our JavaScript adds two attributes on each page's `<html>` element:

* "data-at-document-domain": Contains the document's full domain name
* "data-at-document-url": Contains the URL of the document.

## General idea of how this polyfill works

The @document rule is only supported in firefox, while the [attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) is widely supported.
You can use attribute selectors on attributes created by the script.

We use a [Descendant combinator (space)](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator) to indicate that the item you are looking for is contained in an "html" element with the appropriate attribute values, i.e. it is simply on the page that has the desired address or is on the desired domain.

Now you can use the right selector of any level of complexity, referring to a particular page element, e.g. each visited link ("a:visited" selector).


## Replacing the `url()` function

`html[data-at-document-url="addressUrl"] `,

where `addressUrl` is the document's URL

In other words, `html[data-at-document-url="addressUrl"] ` - matches an exact URL.

Attention!!!
A space after the selector is necessary because this is a descendant combinator.

### Example

Use

`html[data-at-document-url="https://developer.mozilla.org/en-US/docs/Web/CSS/@document"] `,

instead of

```url("https://developer.mozilla.org/en-US/docs/Web/CSS/@document")```

The following selector disables the display of all links (anchors) only on the page `https://developer.mozilla.org/en-US/docs/Web/CSS/@document`:

```
html[data-at-document-url="https://developer.mozilla.org/en-US/docs/Web/CSS/@document"] a {
  display:none;
}
```

## Replacing the `url-prefix()` function:

```html[data-at-document-url^="addressPrefix"] ```,

where `addressPrefix` is the prefix of the URL.

In other words, `html[data-at-document-url^="addressPrefix"] ` matches if the document URL starts with the value provided.

Attention!!!
A space after the selector is necessary because this is a descendant combinator.

### Example

Use

```html[data-at-document-url^="https://developer.mozilla.org/en-US/docs/Web"] ```,

instead of

```
url-prefix("https://developer.mozilla.org/en-US/docs/Web")
```

The following selector disables the display of all links (anchors) on all pages whose URL begins with `https://developer.mozilla.org/en-US/docs/Web`:

```
html[data-at-document-url^="https://developer.mozilla.org/en-US/docs/Web"] a {
  display:none;
}
```

## Replacing the `domain()` function:

`html[data-at-document-domain|="domainSpecialString"] `,

where `domainSpecialString` is a special string specifying the desired domain as follows:

You should write domains in hierarchy order, including the top-level domain, i.e. in reverse order of their occurrence in the address; each of them should be separated by a hyphen (-). If the hyphen is part of the domain name, replace it with a "^" character.

For example:

* `com` matches all top-level "com" domains and all subdomains thereof.
* `com-example` matches all pages in the "example.com" domain and all its subdomains.
* `com-example-developer` matches all pages in the domain "developer.example.com" and all its subdomains.
* `com-example-strange^part` matches all pages in the domain "strange-part.example.com" and all its subdomains.

In other words `html[data-at-document-domain|="domainSpecialString"] ` - matches if the document URL is on the domain provided (or a subdomain of it).

Attention!!!
A space after the selector is necessary because this is a descendant combinator.

### Example

Use

```html[data-at-document-domain|="org-mozilla"] ```,

instead of

```
domain("mozilla.org")
```

The following selector disables the display of all links (anchors) on all pages in the mozilla.org domain and all its subdomains:

```
html[data-at-document-domain|="org-mozilla"] a{
  display:none
}
```
