# Developer Application

Although making an application is easy, developers new to OAuth may find some of it confusing. This tutorial will explain the basics of what information is asked for and what is it used for.

## Name 

The name of your project is a user friendly name for your application. Both Glimesh and your users will see this when they authenticate with your app.

## Homepage

The homepage of your app is where your product (if applicable) is located. This could be a website for a chatbot, an online tool, or anything that uses the Glimesh API. You do not need to have a public domain to show your product if you don't want to.  Using a localhost URL is fine.

## Description 

The description is a basic explanation of your app.  This should be a brief overview of what your app will be used for.  *Details, details, details!*

## Image

The image you choose here is shown to all users who authenticate with your app. It should be representative of your app and must not violate the Glimesh Terms of Service. 

## Allowed Redirect URIs

The redirect URIs are where Glimesh will redirect users of your app after they authenticate with your app. You specify which one to redirect to in the client request. You should have one URL per line. We prefer HTTPS over HTTP but using a locally hosted HTTP server will be fine. 

A complete dev app will look like this when authenticating. 

![Auth Image](https://i.imgur.com/fWawNSS.png)