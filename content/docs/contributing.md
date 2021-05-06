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

> [Stack Edit](https://stackedit.io/app#) is a free markdown editor running in the browser. It is easy to use and has many tools for markdown formatting. You can copy the contents of the files here to edit them. 

### Option 1

Create (*or edit*) the tutorial in the `Topics` folder. You should try to mirror the directory structure within the repo. The file is a normal markdown file and does not have access to special extensions beyond the basic [Github spec](https://github.github.com/gfm/). If you have code included in your tutorial you should create a code file with all of the code you used in the same directory.  When you are finished commit and push the changes. Finally create a pull request with a brief overview of your tutorial/topic. We may ask you to make changes. Once accepted we will add your tutorial to the repo and manually add it to the website. 

### Option 2

This will allow you to view the tutorial on the api-docs website and use all of the special extensions/formatting available with [Hugo](https://gohugo.io/). We use the [book theme](https://themes.gohugo.io/hugo-book/).

You will need to create your tutorial as described in the option above. You will also need [Hugo](https://github.com/gohugoio/hugo/releases) installed. Get the extended features edition.  
> This installation can be a bit complex for Windows users so you may want to follow a [tutorial](https://youtu.be/C04dlR1Ufj4).

In the command line navigate to the folder containing your fork.  *CD* into the api-docs folder. Run `hugo server --minify --theme book` in your terminal. If you get a theme error you can run `git clone https://github.com/alex-shpak/hugo-book themes/book`. It will install the necessary theme files. When it finishes installing run the server command again. This will open a server on [http://localhost:1313/api-docs](http://localhost:1313/api-docs).

> The server will restart when any changes are saved. Major changes will require a manual restart though.

Create a copy of the markdown file you created above. You can add special formatting if you want to. You need to paste it in the `api-docs/docs` folder in the proper directory. If it is a new tutorial you should try to mirror the directory in the `Topics` folder. Hugo will detect the file and update the menu on the left side of the page with your new file. The menu will alter itself to match the file directory.  This may require a restart of the server. 

> Notice that every folder with content has a _index.md file. Create a new _index.md file and fill it with the info below if you created a new folder. This allows the tutorial to be collapsible in the menu. If the weight is the same they will be alphabetically sorted. 
```MD
---
bookCollapseSection: true
weight: 20
---
```
When you are satisfied with the look of your tutorial you need to build the site. This will allow Github Pages to use the website. Close the server. In your terminal run `hugo --theme book` in the same directory. It will build the site to the `docs` folder. It should replace a few files. Commit and push your changes. Create a pull request with a brief overview of your tutorial/topic. We may ask you to make changes. Once accepted we will add your tutorial to the repo and add it to the website. 

> Different versions and platforms treat Hugo differently. If the commands are not working talk to us in [Discord](https://discord.gg/Glimesh) or on the api-docs issues page.

Thank you for contributing!
