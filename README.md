## IQuOD.org

This repo contains all the assets for www.iquod.org.

## Git & GitHub Quickstart

### Suggestions

If you see any mistakes, have any requests or encounter any problems with iquod.org, please [click here to file an Issue](https://github.com/IQuOD/IQuOD.github.io/issues/new), and describe your suggestion there.

### Contributing

Updates to this website are made by pull request. Follow the steps below to set up and start contributing:

#### First-time setup

Do these steps just once, the first time you want to start contributing:

1. Click *Fork* at the top-right corner of this repo. Your fork is your own personal copy that you can change at will.

2. Install git on your computer.

3. In a terminal on your computer, type:

    ```
    git clone <URL to your fork>
    cd IQuOD.github.io/
    git remote add upstream https://github.com/IQuOD/IQuOD.github.io
    ```

    The URL to your fork will look like `https://github.com/<your github username>/IQuOD.github.io`; it's the page GitHub automatically took you to when you created your fork.

#### Every time you want to contribute

Do these steps every time you want to propose a change:

1. In a terminal on your computer, navigate to the `IQuOD.github.io/` directory, and type:

    ```
    git checkout master
    git pull upstream master
    git checkout -b proposal-1234
    ```

    This fetches everything that's new since last time, and creates a new branch called 'proposal-1234' to hold your work. You can change this name to anything you like; usually a one word label of your changes is best.

2. Make whatever changes you like.

3. When you're ready to submit, type:

    ```
    git commit -a -m '<commit message>'
    git push origin proposal-1234
    ```

    This sends your changes to your fork on GitHub.

4. Finally, head back to your fork on GitHub