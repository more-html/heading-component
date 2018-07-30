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

1) It must degrade. It must be usable (rendering like a heading and not degrading the actual heading experience)
   without JavaScript (aka without web components). This is mostly a requirement for the
   syntax of such a component. Something like `<morehtml-h1>...</morehtml-h1>` won't degrade since
   it does not degrade down to an `<h1>` without lot's of work and additional styling, etc.  
1) It must render SEO compatible. H1s are one of the crucial SEO elements to outline content
   and give it structure, make SEO crawlers understand content. This must stay enabled.
1) Rendering must be preserved by using it as a web component. When using customized built-ins
   this would be easy, since only a new attribute is added to the heading tag (like so `<h1 is="morehtml-h1">`),
   if this approach can't be used all styling and event listening, etc. might be a bit harder
   for the end user of the component.

 Approach | Example | Pros | Cons
--------- | ------- | ---- | ----  
 customized built-ins | ``` |  |   
                      | <h1 is="morehtml-h1">An H1 CBE</h1> | | |  
                      | ``` | | |  
  
   
   
<table>
  <tr>
    <th>Approach</th>
    <th>Example</th>
    <th>Pros</th>
    <th>Cons</th>
  </tr>
  
  <tr>
    <td>customized built-ins</td>
    <td>
      <code>
        <h1 is="morehtml-h1">An H1 CBE</h1>
      </code>
    </td>
    <td></td>
    <td></td>
  </tr>
  
  <tr>
    <td>wrapper (outside)</td>
    <td>
    
      ```
        <morehtml-h1>
          <h1>An H1 CBE</h1>
        </morehtml-h1>
      ```
      
    </td>
    <td></td>
    <td></td>
  </tr>
  
  <tr>
    <td>wrapped (inside)</td>
    <td>
    
      ```
        <h1>
          <morehtml-h1>An H1 CBE</morehtml-h1>
        </h1>
      ```
      
    </td>
    <td></td>
    <td></td>
  </tr>
  
  <tr>
    <td>pure web component</td>
    <td>
    
      ```
        <morehtml-h1>An H1 CBE</morehtml-h1>
      ```
      
    </td>
    <td></td>
    <td>
    
      1) does not degrade (without JS)
      
    </td>
  </tr>
  
</table>  
  