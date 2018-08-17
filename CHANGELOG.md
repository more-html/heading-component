- [ ] Move the `check-todo-list.js` into it's own repo, including the description how and why to use it.
- [ ] Write out some project guidelines (like gold standard, progressive enhancement by default, etc.)
      Every component in this orga can also use a different web component compiling framework/library, in the
      end it has to deliver a web component, no matter if it is with pure JS, stencil, skate, etc.
- [ ] Plan/Write about the core/loader component, which can be loaded for common web-component loading/polyfilling/etc.
      will land in a separate repo some day (might start out being embedded in here)
- [ ] Allow passing in a template which shall be used as the link icon.

# v2.0.0

- [x] Attribute to statically show the link icon, just like MDN does it.
- [x] Rename the attribute `slug` to `hash`. Since it is the URL hash, that gets added.
- [ ] On touch devices, show the link onclick, hide it on a second click.
- [ ] Auto generate the hash if none given.
- [x] Apply style of the slotted element.
- [x] Render the link-icon to the left/right of the headline, depending on rtl setting, if there is space
- [x] Switched approach to CBEs (see [./SOLUTIONS.md])
- [ ] Feature detect CBEs properly and only load comp when CBEs work, e.g. in Safari

# v1.0.0

- [x] Make `npm start` provide a dev env
- [x] Setup release scripts, including CHANGELOG check
- [x] Make the example page
- [x] Make the first version work without JS (without fancyness)
- [x] Build a version work WITH JS, as a web component (requiring a `slug` attribute)
- [x] Describe the development process
- [x] Document what the component shall do
