# Heading Component

The requirement for this web component is actually very simple.
It shall provide the linkability feature just like every markdown
file has is on github, [see this project's README for example][example].
Hover over the headline, or click it on a touch device.
A little icon appears beside the headline and clicking that icon
the URL gets a hash added to it, for example "#heading-component"
and now the URL can be copied and pasted anywhere and it will take
the visitor straight to this paragraph of the text.

[example]: https://github.com/more-html/heading-component/blob/master/README.md#heading-component

## How to build it?

There are multiple ways this can be implemented. Especially since
customized built-ins are [specified][cb-spec] but seemingly [not coming to all browsers][cb-denied],
this might require some thought (please correct me if this is outdated). 

[cb-spec]: https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element
[cb-denied]: https://github.com/w3c/webcomponents/issues/509#issuecomment-230599443

Knowing that the `is` attribute (customized built-ins) is never adapted everywhere, we have to find
a solution that will also work without it.

## The requirements

To understand and evaluate possible solutions, here are the requirements for this web component.

1) ***It must degrade***. It must be usable (rendering like a heading and not degrading the actual heading experience)
   without JavaScript (aka without web components). This is mostly a requirement for the
   syntax of such a component. Something like `<morehtml-h1>...</morehtml-h1>` won't degrade since
   it does not degrade down to an `<h1>` without lot's of work and additional styling, etc.  
1) ***It must render SEO compatible***. H1s are one of the crucial SEO elements to outline content
   and give it structure, make SEO crawlers understand content. This must stay enabled.
1) ***Rendering must be preserved*** (an H1 must look like an H1). When using customized built-ins
   this would be easy, since only a new attribute is added to the heading tag (like so `<h1 is="morehtml-h1">`),
   if this approach can't be used all styling and event listening, etc. might be a bit harder
   for the end user of the component.

## Possible solutions

The following are different approaches 

### Solution 1): Customized built-in elements (CBEs)

For reasons mentioned above, this seems not to become natively supported in Safari.
By using CBEs, see code below, all native behavior of the heading could be preserved.

```html
<h1 is="morehtml-h1">An H1 CBE</h1>
```
  
Pros:
1) Native behavior of heading stays intact (no special styling or JS needed).
1) Progressive enhancement
1) SEO enabled as before.
1) User only has to a) load the JS file and b) add the attribute `is="morehtml-h1"`.
1) Non-JS browsers will just ignore the attribute. The added funtionality 
   of the web component does not exist.

Cons:
1) Not supported in Safari (and might never be, requires polyfill?).
1) Special code for a solution that might never become a standard.

Supported browsers:
1) Chrome
1) Opera

For CBEs there seems to be no polyfill by https://github.com/webcomponents/custom-elements.git
so no FF, no Safari, etc.

### Solution 2): Wrapper (outside)

In order to preserve the `<h1>` tag it could be "enhanced" by wrapping it with
the according web component.

```html
  <morehtml-h1>
    <h1>An H1 CBE</h1>
  </morehtml-h1>
```
  
Pros:
1) Native styling of heading keeps working.
1) Progressive enhancement
1) SEO enabled as before.
1) User only has to a) load the JS file and b) add the tags around heading tags.
1) Non-JS browsers will just ignore `<morehtml-h1>` tag. The styling will not be influenced. Though the added funtionality 
   of the web component does also not exist.

Cons:
1) The web component needs to handle styling specialities. For example, `<h1 style="margin: 2rem">` when the 
   web component adds the "#"  (the link-icon) before the heading it has to adjust it's style so it renders
   correctly taking the margin into account. 
1) Styling of the "#" (link icon) to adapt the style of the heading (size, color, etc.) needs to be done in the web component.
   Even worse, since the link icon is not inside the H1 it needs to get the computed styles from the H1 and 
   apply them to the link icon, this sounds computation heavy.

Supported browsers:
1) Chrome
1) Opera
1) Safari
1) Firefox, native with FF soon, currently using webcomponentsjs polyfill, 70kB
1) Edge, requires webcomponentsjs polyfill, 70kB

### Solution 3): Wrapped (inside)

During development of Solution 2) the styling speciality mentioned in the Cons above led to the following solution.

```
  <h1>
    <morehtml-h1>An H1 CBE</morehtml-h1>
  </h1>
```

Pros:
1) Native styling of heading keeps working. If there are nodes inside the H1 and there are CSS selectors accessing them, 
   they might need to be adapted
1) Progressive enhancement
1) SEO enabled as before. (Unkown tags get ignored.)
1) User only has to a) load the JS file and b) add the tags inside the heading tag.
1) Non-JS browsers will just ignore `<morehtml-h1>` tag. The styling will not be influenced. Though the added funtionality 
   of the web component does also not exist.
1) As opposed to Solution 2) all stylings will apply, the H1 style is also applied to any new node added inside the 
   web component, which makes them automatically inherit the H1 styles and there is no styling work to do.

Cons:
1) This might just be a handy way to solve it for this special (edge) case!? The styling issue made it a bit hard.
1) Nesting the web component inside the original tag might work for H1, but won't work for an IMG tag.
1) Can this approach be applied to other use cases?

Supported browsers:
1) Chrome
1) Opera
1) Safari
1) Firefox, native with FF soon, currently using webcomponentsjs polyfill, 70kB
1) Edge, requires webcomponentsjs polyfill, 70kB

### Solution 4): Pure web component

```
  <morehtml-h1>An H1 CBE</morehtml-h1>
```

Pros:

Cons:      
1) No progressive enhancement
1) Does not degrade, without JS the tags become SPANs, dont even render as `display:block`.
   (Solvable via `:not(:defined)` selector?)
1) Is not SEO enabled. (Might be solvable by schema outline!?)

Supported browsers:
1) Chrome
1) Opera
1) Safari
1) Firefox, native with FF soon, currently using webcomponentsjs polyfill, 70kB
1) Edge, requires webcomponentsjs polyfill, 70kB

