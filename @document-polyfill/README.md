The goal of this polyfill is to replace the CSS `@document` rule, and the `url()`, `url-prefix()`, and `domain()` functions, using a combination of a user stylesheet (which can be placed in ``[profile directory]/chrome/userContent.css` in the case of Firefox) and some JavaScript (contained in a an add-on) so that it can be used in any web browser.

The way the polyfill works is described in the [instruction.md](Instruction) file.

Note: A possible extension could be replacing the `regexp()` function or the `media-document()` function so they will work in any browser. This was not needed for my purposes.
