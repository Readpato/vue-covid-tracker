# COVID-19 Tracker

## Description

A web application that shows COVID-19 data from different countries.

Try it here: <a href="#">Demo</a>

Disclaimer: This project was based on Traversy Media <a href="https://youtu.be/m-MAIpnH9ag">Tutorial</a> and I do not intend in owning or monetizing anything of this project. This was just recreated for educational purposes.

### Technologies Used

For this project the technologies and tools used were:

- Vue
- Cypress
- Tailwind CSS
- NPM

#

## Installation

As this project runs with Vue and Cypress you will have to have NPM or anything similar and then run this little code snippet on the CLI.

```
npm install
```

This will allow to download the dependencies you need to run the COVID-19 Tracker properly.

#

## Utilization

The COVID Tracker will automatically load some information for us when loaded. Two cards will appear respectively containing global information depicting cases (new and total) and deaths(new and total).

<img  src="https://github.com/Readpato/vue-covid-tracker/blob/main/src/images/covid-tracker-1.png" align="center">

If the client desires, he can choose a country from the list and that will automatically connect the web application to the API and fetch the COVID-19 data from the chosen country. Then, a button will render that will allow the user to delete the country data and go back to the default global data.

<img  src="https://github.com/Readpato/vue-covid-tracker/blob/main/src/images/covid-tracker-2.png" align="center">

#

## Challenges Faced

- Using the "v-if" directive to render an element when the binded data property is truthy.

- Understanding the concept of View.

- Getting a grasp on the Vue Router.

#

## What I learned

- Being this the second time I create a Vue app, I realize that Vanilla JavaScript ends up being too convoluted at one point and that's why we use frameworks like Vue and React to make it simpler for devs to create apps.

- Views are basically components, but we can differenciate them by saying this are the pages that the client is going to see, that's why its getting some "views"

- The $emit function that allows a child component to send data through an event to it's parent.

- Tailwind CSS usage. It's pretty cool, thanks to Vue way of being divided into components, the styling of the components can be donde directly into the component. This allows the deleting of the style element and not using plain CSS in them.

#

## Support

If some error should appear, you can contact me through:

- Twitter: @patoraedler
- Email: patoraedler@gmail.com

#

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate :)

#

## Author

Patrick Raedler.

#
