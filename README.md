# We.Unkeyboardinated

Reference Site: https://templated.co/ion
* It's worth noting that I completely removed the responsive code (skel.css) from the code base. Rather, I just used the aem grid system. Worked like a charm!

Features Used:
 - Core Components 1.0.6
 - Editable Templates
 - Reusable Content Policies
 - Layout Container
 - AEM-Grid
 - Component clientlibs 
 - Fully Responsive

![We.Unkeyboardinated Screenshot](screenshots/site-image.png?raw=true)

### Includes 6 different Editable Templates
![We.Unkey Templates](screenshots/site-templates.png?raw=true)

### 6 Core components and 5 custom components total. Clientlibs all moved to /apps for modularity
![We.Unkey Templates](screenshots/we-unkey-components.png?raw=true)


### Custom Footer component with Custom Policy (cq:design_dialog)
![We.Unkey Templates](screenshots/footer-component.png?raw=true)

![We.Unkey Templates](screenshots/footer-policy.png?raw=true)


## Modules

The main parts of the template are:

* core: Java bundle containing all core functionality like OSGi services, listeners or schedulers, as well as component-related Java code such as servlets or request filters.
* ui.apps: contains the /apps (and /etc) parts of the project, ie JS&CSS clientlibs, components, templates, runmode specific configs as well as Hobbes-tests
* ui.content: contains sample content using the components from the ui.apps
* ui.tests: Java bundle containing JUnit tests that are executed server-side. This bundle is not to be deployed onto production.
* ui.launcher: contains glue code that deploys the ui.tests bundle (and dependent bundles) to the server and triggers the remote JUnit execution

## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

If you have a running AEM instance you can build and package the whole project and deploy into AEM with  

    mvn clean install -PautoInstallPackage
    
Or to deploy it to a publish instance, run

    mvn clean install -PautoInstallPackagePublish
    
Or to deploy only the bundle to the author, run

    mvn clean install -PautoInstallBundle

## Testing

There are three levels of testing contained in the project:

* unit test in core: this show-cases classic unit testing of the code contained in the bundle. To test, execute:

    mvn clean test

* server-side integration tests: this allows to run unit-like tests in the AEM-environment, ie on the AEM server. To test, execute:

    mvn clean integration-test -PintegrationTests

* client-side Hobbes.js tests: JavaScript-based browser-side tests that verify browser-side behavior. To test:

    in the browser, open the page in 'Developer mode', open the left panel and switch to the 'Tests' tab and find the generated 'MyName Tests' and run them.


## Maven settings

The project comes with the auto-public repository configured. To setup the repository in your Maven settings, refer to:

    http://helpx.adobe.com/experience-manager/kb/SetUpTheAdobeMavenRepository.html
