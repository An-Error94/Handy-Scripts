The goal of this polyfill is to replace the CSS `@document` rule, and the `url()`, `url-prefix()`, and `domain()` functions, using a combination of a user stylesheet (which can be placed in ``[profile directory]/chrome/userContent.css`` in the case of Firefox) and some JavaScript (contained in a an add-on) so that it can be used in any web browser.

The way the polyfill works is described in the [instruction.md](Instruction.md) file.

Note: This polyfill was created as a reaction to extremely strong indignation against: on the one hand, the `non-Firefox` browser developers have `not implemented` this very useful rule for almost `14 years!` on the other hand, `nobody work(?)` on this topic since December 13, 2012 (in the latest document - dated March 31, 2019 - editorial's draft which is destinated only for discussion, there is not even mentioned the @document rule) - i.e. `for 6 years`!

When I learned that there are currently no freely discussions on @document rule (I mean "CSS Conditional Rules Module Level 4
Editor’s Draft" dated March 31, 2019), I came up with an idea of how I can personally fix this lethargy. Personally, I only needed to replace the domain() function, but I saw that I can replace the url() and url-prefix() functions in an incredibly easy way. Seeing that no one came up with what I did - I couldn't find support for the @document rule anywhere - and reading that `"The '@document' rule is at risk`; if interoperable implementations are not found, it may be removed" I decided to act and write also two other functions.

Evidence of lethargy:

Web browsers:

[Archived MDN site about the @document rule (content from August 27, 2013)](http://web.archive.org/web/20130827170204/https://developer.mozilla.org/en-US/docs/Web/CSS/@document)

[MDN site about the @document rule (current)](https://developer.mozilla.org/en-US/docs/Web/CSS/@document)

[Firefox 1.5 release date: November 29, `2005` - Mozilla website about Firefox 1.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/releases/1.5)

CSS:

[The original version of "CSS Conditional Rules Module Level 3", which also contained the specification of the @document rule - publication date: September 11, 2012](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document)

[`Deferred` rule @document from "CSS Conditional Rules Module Level 3" to "CSS Conditional Rules Module Level 4" - publication date: `December 13, 2012`](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes)

[Current version of "CSS Conditional Rules Module Level 4" - publication date: March 31, 2019](https://drafts.csswg.org/css-conditional-4/)

Additionally:

[Current version of "CSS Conditional Rules Module Level 3" - publication date: October 29, 2019](https://drafts.csswg.org/css-conditional-3/)
