# heading-component
Enhance &lt;h1>, &lt;h2>, etc. for example to allow linking to them by default.

## How to use it?

In order to serve older (non web-component enabled, non-polyfilled) browsers too
use the following syntax. If you want to load no JS then this version is also for you.
The following is also the best for SEO compatibility, since the `<h1>` is still 
visible even without any page rendering needed.

```
<morehtml-h1><h1>More-HTML is coming</h1></morehtml-h1>

<!-- Alternatively you can also write, to not duplicate the `h1`. -->
<morehtml-heading><h1>More-HTML is coming</h1></morehtml-heading>
```

For now, we only suggest the above syntax. If you want to cater for a modern-only environment
you might want more comfortable syntax, like `<morehtml-h1>More-HTML is coming</morehtml-h1>`
but for convinience and for the reasons solved and listed for the above solution, this
way is not planned for now.

Why providing two ways to write it as shown above anyways?

1) This is still very early stage, so I am experimenting, trying to find out what is right.
1) The syntax `<morehtml-h1>` can be easier used as a replacement for `<h1>` since it contains the
   semantics of being an H1 (which `<morehtml-heading>` does not).
   Of course, the ideal thing would be to have `<h1 is="morehtml-h1">` but that is just [not happening for now][no-is].
   
[no-is]: ***missing link ...***

### Configuring the component

Note: For simplicity, below only `<morehtml-h1>` is used, but everything also applies
to `<morehtml-heading>`.

By default the component does the following things:
1) It builds a URL for any heading that can be clicked and reused to find this element again
1) To build the URL it removes any hash that might be on the URL.

#### Attribute `slug`

The slug that will be used to build the link can be auto-generated, simply by leaving out
the attribute `slug`. If you like to control your links you can determine the hash part of URL by 
passing a value to `slug`. For example like so:

```
<morehtml-h1 slug="more-html-is-coming">
  <h1>More-HTML is coming</h1>
<morehtml-h1>
```

When the user hovers the heading, the linkable URL will be: `https://your.domain/path/#more-html-is-coming`.
By default it might have some kind of hash at the end, just to make sure it never interfers with any
of your IDs on the page. So if you would leave out the `slug` attribute, the URL becomes something like
this: `https://your.domain/path/#more-html-is-coming-sa7y2s`.


## Make a new Release

You want to know if you are ready to release a new verison. 
Run `npm run releasable --silent`, this starts a script that checks the [CHANGELOG.md](./CHANGELOG.md), which
is your to-do list! What, to-do list? Yes. See below how and why?

## Development Process

After all changes, before releasing, I always want to get some kind of list of what we did, a changelog.
Creating a changelog after building the next cool feature is quite tedious, even scripts that run
through my commit messages (even when they have a certain format), is just not to the point, because
it starts from the code. Not from the user! Let's turn it around.

Just like in TDD, where I write first a test for what we are planning to code, I started to go one level
up and describe the user's feature first. I start writing things in the changelog, prefixed with the
github style checkboxes `[ ]` (for unchecked) and once I finished the thing I change it to `[x]`.

In the beginning this felt quite strange. But once I got used to it, 
the plan for the next version (see [Versioning](#versioning) below) had 
always been in the [CHANGELOG.md](./CHANGELOG.md) and I "just" had to work it off. Technical things, like
refactoring, etc. went into the commits, but never into the changelog, they naturally don't belong there
anyways. Meanwhile, the changelog lines even become my commit messages, once I really start or finish
building the feature. I tick the feature/task off in the changelog and one can even see in the commits
when a certain feature was done.

Here is the process in bullet points:
1) Write out all planned features, to-dos in the [CHANGELOG.md](./CHANGELOG.md)
1) Make each one line, and prefix this line with `[ ]`
1) The headline of this section, is the next (major) version number, e.g. `# v1.0.0`
1) (Every item, you plan for some future version put it either above the headline of the next version or in your issue tracker)
1) Work off one feature/to-do at a time
1) Tick off the line in the changelog and commit it
1) When all items are done release, using `npm run release`

Tip: If you write less features/to-dos per version, you can release more often, get faster feedback
and can stay focused. Don't overestimate your speed, add less features, and you will ship happier.

## Versioning

Semantic versioning looks nice on paper, but every change is essentially an external API change, if it is
for speed, compatibility or any other change that might be "invisible" (to tests). The browsers and many software vendors
have gone towards major-only versioning. Therefore I simplified the versioning process too, just use
major versions and provide a proper changelog, that a user can understand.
