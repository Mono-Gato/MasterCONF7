[![MasterCONF7](https://raw.githubusercontent.com/Mono-Gato/MasterCONF7/main/md/Readme.md.jpg "MasterCONF7")](https://masterconf7.herokuapp.com/ "MasterCONF7")

>See **MasterConf7** at https://masterconf7.herokuapp.com/

>To test the **API** got to https://masterconf.herokuapp.com/.

# What is MasterCONF7?
MasterCONF7 is the first project of the PlatziMaster Cohort 7 program, the team is made up of Juan David Niño FrontEnd Developer [**@Mono-Gato**](https://github.com/Mono-Gato "@Mono-Gato") and Ruben Hernandez BackEnd Developer [**@RubDevs**](http://https//github.com/RubDevs "@RubDevs") supervised by MasterCoach Joshua Pedraza [**@JoshuaPCruz**](http://https//github.com/JoshuaPCruz "@JoshuaPCruz")

------------



#### The Brief:
**Overview**
The organizers of a new Platzi conference are looking for a website that breaks down all of the information for their event. This is important, because it helps to get
people interested in the event, but also figure out how to actually enjoy the event.

See full brief [**here**](http://https//github.com/Mono-Gato/MasterCONF7/blob/main/md/Conference_Schedule_A.pdf "PDF")

>Learn more about multi-page website at https://github.com/Mono-Gato/MasterCONF7

>Learn more about the API at https://github.com/RubDevs/MasterConf

------------

#### The Design:
For the graphic identity and the user interface, FIGMA was used.

In the following link you will find: MoodBoard, BrainStorming for the project name, diferent options to use in typography and Logo, color selection and the wireframes

See the full design [**Here**](https://www.figma.com/file/1U9LD4aEpVcQMbDy7CGvOD/Conference-Schedule-A?node-id=0%3A1 "** Here**")

------------
#### The Code:

This project is built on the basis of HTML5, CSS3 and Vanilla JS, BEM methodology and Desktop First

The general structure
>Home (index.html)

>--- / Features / Location / (Location.html)

>--- / Features / Food / (Food.html)

>--- / Features / Hotels / (Hotel.html)


**To Get API** 

```javascript
const API = "https://masterconf.herokuapp.com/"

const getData = async (endpoint) => {
    const urlAPI = endpoint ? `${API}${endpoint}` : API;
    try {
        const response = await fetch(urlAPI)
        const data = await response.json();
        return data
    } catch (error) {
        console.log("Fetch Error", error)
    }
};

export default getData;
```

------------

#### The Deploy:


To deploy the project was used Heroku, See al [**MasterCONF7**](https://masterconf7.herokuapp.com/ "**MasterCONF7**")

The only branch used to do deploy is https://github.com/Mono-Gato/MasterCONF7/tree/deploy

------------

#### Contributing:

1. Fork it (https://github.com/Mono-Gato/MasterCONF7/fork)
2. Create your feature branch ( git checkout -b feature/shedule )
3. Commit your changes ( git commit -am 'Add feature shedule' )
4. Push to the branch ( git push origin feature/shedule )
5. Create a new Pull Request

------------

#### License:

Distributed under the MIT license.

------------
#### About Me:

Juan David Niño Rodriguez

- **GitHub:** [@Mono-Gato](https://github.com/Mono-Gato "@Mono-Gato")
- **Instagram:** [@monogato.type](https://www.instagram.com/monogato.type/ "@monogato.type")
- **Behance:** [@MonoGato](https://www.behance.net/monogatodesign "@MonoGato")
- **Linkedin:** [@monogatodesign](https://www.linkedin.com/in/monogatodesign/ "@monogatodesign")
- **eMail:** monogato.dg@gmail.com
