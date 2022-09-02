to run: run normally as you would the boilerplate
(i.e. yarn run dev -> yarn run start)

new folder: src/components (that is where the MUI button is imported)

the button component is exported and used in src/renderer/App.tsx

no additional installs needed (mui is added as a dependancy in package.json) <br />
change that apparently fixes the issue is commented in webpack cfg file.
