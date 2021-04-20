<h1 align="center"> Widget-support-user </h1>
<h3 align="center">Design of an application in Nodejs a support to the user with live chat.</h3>

<p align="center">

[![GitHub license](https://img.shields.io/github/license/phsilva0101/Widget-support-user?color=green&label=License)](https://github.com/phsilva0101/Widget-support-user/blob/master/LICENSE)

<a href="https://github.com/phsilva0101/Widget-support-user/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/phsilva0101/Widget-support-user"></a>

[![Made withNodeJS](https://img.shields.io/badge/Made%20with-NodeJS-green?style=for-the-badge&logo=NodeJS)](https://nodejs.org/en/)

[![ForTheBadge progress](http://ForTheBadge.com/images/badges/progress-10%.svg)](http://ForTheBadge.com)

</p>

##Development environment

## Node and NPM
The first step is to install Node.js, which comes with NPM.

## Windows

For Windows we will use the package manager ** [Chocolatey] (https://chocolatey.org/) **, but before the installation steps we will talk briefly about which shell you should use.

- ** CMD **: also known as ** Command Prompt **, it is one of the oldest shells today (it was built to be compatible with ** MS-DOS **) and, despite its fame, today nowadays it has been used less and less.
- ** Powershell **: new shell introduced by Microsoft around 2005, it presents several improvements in relation to ** CMD **, making it popular today.

Choosing the shell, let's start the installation:

- Search the Windows search field for ** Windows Powershell **, right-click on the program and choose the option ** Run as administrator **.
- Powershell works with an authorization scheme (known as `Execution Policy`) for executing scripts and, therefore, we need to check if the present in the system is compatible with what Chocolatey needs. Run the following command:

```bash
Get-ExecutionPolicy
```

If it returns `Restricted`, run the command:

```bash
Set-ExecutionPolicy RemoteSigned
```

And choose the option [[A] Yes for Everyone`

If the above command has an error, try using:

`Set-ExecutionPolicy Bypass -Scope Process`

Verify that the permission change has occurred successfully by running the command again:

```bash
Get-ExecutionPolicy
```

Once the permission has been changed, just install ** Chocolatey ** with the command:

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager] :: SecurityProtocol = [System.Net.ServicePointManager] :: SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient) .DownloadString ('https://chocolatey.org/install.ps1'))
```

If the command above shows an error, check if your machine meets the minimum requirements

`Windows 7+ / Windows Server 2003+
PowerShell v3 +
.NET Framework 4.5 + `

If the error shown is `Exception when setting" SecurityProtocol ":" Cannot convert the value "3312" `, follow ** [this guide] (https://blog.chocolatey.org/2020/01/remove-support -for-old-tls-versions /).**

- After installation is complete, close and open powershell as an administrator again and run:

```bash
cuttlefish -v
```

If he returns the version of ** Chocolatey **, the installation was a success. To finish, just install the latest LTS version of Node with the following command:

```bash
cinst nodejs-lts
```

And choose the option [[A] ll - yes to all`

After installation is complete, close and open powershell as an administrator again and run:

```bash
node -v
npm -v
```

If you return the Node and npm versions, your installation was successful.
-------------------------------------------------- -------------------------------------------------- ----------
# Yarn 1

## Windows

To install Yarn 1 on Windows follow these steps, run the command in Powershell (as admin):

```bash
 cinst yarn
```

And choose the option [[A] ll - yes to all`.

Close and open the terminal again, then run the command:

```bash
 yarn --version
```

If the Yarn version is returned (above 1.0, below 2.0), the installation was successful.

### Possible problems

When using Yarn on Windows to install dependencies in your projects, make sure that your username does not have spaces, as in this case, some errors may occur during this process, such as: with the name "Diego Fernandes" , the path to the project folder (assuming it was in the * Documents * folder) would be something like `C: \ Users \ Diego Fernandes \ Documents \ NLW \ Project` and in this case, a solution would be to create the project already at the root of the project. ** Disc C **. Thus, the path to the folder would not pass through the user's name, leaving `C: \ NLW \ Project`.
-------------------------------------------------- -------------------------------------------------- -----------

 ## Starting node project and installing packages

## Create package.json
```bash
yarn init -y
```
## Install first Express Dependency

```bash
npm install express --save
or
yarn add express
```
## Installing the express typing IN DEVELOPMENT ENVIRONMENT

```bash
yarn add @ types / express -D
```
## Installing Typescript IN DEVELOPMENT ENVIRONMENT
```bash
yarn add typescript -D
```
## Creating the tsconfig.json file

```bash
yarn tsc --init
```
## Inside tsconfig

Set strict to false.

## Install a "translator" for the node.

```bash
yarn add ts-node-dev -D
```

Add the following script to package.json:
 "scripts": {
    "dev": "ts-node-dev src / server.ts"
  },
-------------------------------------------------- --------------------------






