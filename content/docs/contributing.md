---
weight: 30
---

## Contributing

Thanks for wanting to contribute to the api-docs! We are grateful for your help.

## Contributing to the API Docs.

Anyone can contribute to the docs. We only ask that you follow a few guidelines when contributing.

1.  **Follow the file structure.** Each topic (or sub-topic) has language specific folders and a basic guide. Inside each language folder there should be a tutorial and a code file if applicable. *You do not need to tackle an entire topic by yourself.* Completing even one tutorial is helpful!

2.  **Follow the tutorial structure.** Try to keep each tutorial as objective as possible. You can have some personal expression but try to keep it limited. We want these guides to be as short and as simple as they can get. The tutorial should be written in [Markdown](https://stackedit.io/). Explain every step and clearly document any code used. **Don't** do [this](https://www.youtube.com/watch?v=MAlSjtxy5ak).

3.  **Run any code through a prettier software.** Try to keep the code looking nice! It doesn't matter which formatter you use but we want the code to be readable.

4.  **Follow the Glimesh and Github TOS (Terms of Service).** Any tutorial that violates either of the TOS will be removed. Any malicious code will be removed.

## Process

Start by forking the repository. Access the fork on your PC or on `https://github.com/YOURNAME/api-docs` . You will want an environment capable of editing markdown (.md) files. Any IDE will do.

>  [Stack Edit](https://stackedit.io/app#) is a free markdown editor running in the browser. It is easy to use and has many tools for markdown formatting. You can copy the contents of the files there to edit them.

You will need to create your tutorial as described above. You will also need [Hugo](https://github.com/gohugoio/hugo/releases) installed. Get the extended features edition.

> This installation can be a bit complex for Windows users so you may want to follow a [tutorial](https://youtu.be/C04dlR1Ufj4).

In the command line navigate to the folder containing your fork.  Run `hugo server --minify --theme book` in your terminal. If you get a theme error you can run `git clone https://github.com/alex-shpak/hugo-book themes/book` or install the git submodules.  It will install the necessary theme files. When it finishes installing run the server command again. This will open a server on [http://localhost:1313/api-docs](http://localhost:1313/api-docs).


> The server will restart when any changes are saved. Editing config or other important files will require a manual restart though.

You can add special markdown formatting if you want to.  If you are making a new file Hugo will detect the it and update the menu on the left side of the page with your new file. The menu will alter itself to match the file directory. This may require a restart of the server for the menu to update.

> Notice that every folder with content has a _index.md file. Create a new _index.md file and fill it with the info below if you created a new folder. This allows the tutorial to be collapsible in the menu. If the weight is the same they will be alphabetically sorted.

```MD
---
bookCollapseSection: true
weight: 20
---
```

When you are satisfied with the look of your tutorial you can submit a PR. Close the server. Commit and push your changes. Create a pull request with a brief overview of your tutorial/topic. We may ask you to make changes. Once accepted we will add your tutorial to the repo and add it to the website.

Thank you for contributing!