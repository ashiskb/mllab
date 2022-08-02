# Machine Learning (ML) Lab page


This is repository for [ML Lab page](http://ml.cse.ucdenver.edu/). We use Jekyll to run our Github page. We are welcome for other people to contribute to our site not just lab members. Feel free to fork and pull-request!


## Run the page locally

To run locally, follow instruction [here](https://jekyllrb.com) to install Jekyll then run `jekyll serve` to see in `localhost:4000`. Here is a brief install guidelines.

### On MacOS
You must not use the Ruby that comes with the system. Please follow the guidelines [here](https://jekyllrb.com/docs/installation/macos/) to install Ruby using `brew`. Also, make sure your `$PATH` environment variable is set accordingly (in `zsh`) so that newly installed `Ruby` can be recognized. Here are sample `~/.zshrc` entries:

```zsh
if [ -d "/usr/local/opt/ruby/bin" ]; then
  export PATH=/usr/local/opt/ruby/bin:$PATH
  export PATH=`gem environment gemdir`/bin:$PATH
fi

export LDFLAGS="-L/usr/local/opt/ruby/lib"
export CPPFLAGS="-I/usr/local/opt/ruby/include"
```

Also, make sure to run `ruby -v` command to check if the version matches with your installation. Once installed the `ruby` correctly, run the followng to install `jekyll`:

```zsh
gem install jekyll bundler
```

When the jekyll is installed successfully, navigate to the project folder (assuming you have jekyll project created already) and run the following to build/serve:

### Build a Jekyll project

Since Jekyll is a static site generator, it has to build the site before we can view it. Run either of the following commands to build your site:
* `jekyll build` - Builds the site and outputs a static site to a directory called `_site`.
* `jekyll serve` - Does jekyll build and runs it on a local web server at [http://localhost:4000](http://localhost:4000), rebuilding the site any time you make a change.



## Add posts

It's very easy to add post. All the posts are located in `_posts` folder. It arrangement is based on date. Each post can be written in markdown format. You just have to state headers before writing: `title`, `description` and `categories`. `description` will be shown when you share on social media like Facebook or twitter. See the following headers:

```
---
title: Summer School in Computational Sensory-Motor Neuroscience (CoSMo)
description: all links to CoSMo summer school in computational neuroscience materials
categories: scientists
---
```

We have 4 categories: `scientists`, `students`, `discussion`, `blog` you can choose and this will be rendered to different location.


## How to add posts


- **Directly edit on Github**, you can simply go to `_posts` and click `New file` then put some markdown file e.g. `2022-08-02-post-name.md` and start writing blog post. Github also allows you to preview it so it's nice for people who don't want to clone the repo. 

- **Clone the repository**, kind of the same as directly add post on Github. You just have to clone the repository. Then add new post file, commit and push to the repo.

The changes will take approximately half a minute to render. You can see the new posts or changes on [ML Lab page](http://ml.cse.ucdenver.edu/)!


## Add yourself

You can add yourself to the page in `_people` folder just create file name `<firstname>_<lastname>.md` in the folder. We require few line of header before you start writing your own page. See the following for the header

```
---
name: Ashis Biswas
position: assistant professor
avatar: ashiskb.jpg
twitter:
joined: 2017
---
```

If you don't have information, just leave it blank. The avatar will bring photo from `images/people` folder and display it on people page. 
For lab position, you can choose position from 4 classes including `postdoc`, `gradstudent`, `visiting`, `others` (so called Honorary members). Position will put you into section that you choose.

## Add new publications

All publications from the lab are located in `publications.md`. Please upload new publication on your own!
