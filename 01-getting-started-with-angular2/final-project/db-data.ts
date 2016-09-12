export const dbData = {
  "courses": [
    {
      "url": "getting-started-with-angular2",
      "description": "Angular 2 Tutorial For Beginners",
      "iconUrl": "https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg",
      "courseListIcon": "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png",
      "longDescription": "Establish a solid layer of fundamentals, learn what's under the hood of Angular 2",
      "lessons": [
        {
          "url": "angular2-hello-world-write-first-application",
          "description": "Angular 2 Tutorial For Beginners - Build Your First App - Hello World Step By Step",
          "duration": "2:49",
          "tags": "BEGINNER",
          videoUrl: "https://www.youtube.com/embed/du6sKwEFrhQ",
          "longDescription": "This is step by step guide to create your first Angular 2 application. Its aimed at beginners just starting out with the framework.This lesson will show how to create a component, and how to link the component to a given custom HTML tag. It will show how to give the component a given template."
        },
        {
          "url": "angular2-build-your-first-component",
          "description": "Building Your First Angular 2 Component - Component Composition",
          "duration": "2:07",
          "tags": "BEGINNER",
          videoUrl: "https://www.youtube.com/embed/VES1eTNxi1s",
          "longDescription": "In this lesson we are going to see how to include a component inside another component. We are going to create a simple search box component and include it in our main application."
        },
        {
          "url": "angular2-passing-data-to-component-using-input",
          "description": "Component @Input - How To Pass Input Data To an Angular 2 Component",
          "duration": "2:33",
          "tags": "BEGINNER",
          "videoUrl": "https://www.youtube.com/embed/Yfebo2mFrTU",
          "longDescription": "In this lesson we are going to learn how to use the Angular 2 template syntax for properties, and learn how we can use it to pass input data to a component. We are going to see also a simplified input syntax for passing constant strings as component inputs."
        },
        {
          "url": "angular2-component-events",
          "description": "Angular 2 Component Events - Using @Output to create custom events",
          "duration": "4:44",
          "tags": "BEGINNER",
          videoUrl: "https://www.youtube.com/embed/dgyVrJ2XCq4",
          "longDescription": "In this lesson we are going to see how components can emit custom events via EventEmitter and the @Output decorator. We are going to see how we can subscribe to standard browser events, and how the syntax for that is exactly the same as in the case of custom component events. We will also learn how Typescript literals can be used to output variables inside template strings."
        },
        {
          "url": "angular2-component-templates-internal-vs-external",
          "description": "Angular 2 Component Templates - Inline Vs External",
          "duration": "2:55",
          "tags": "BEGINNER",
          "pro": true,
          "longDescription": "In this lesson we are going to learn how a component template can be defined both inline and in an external file. We are going to learn how to configure the component so that Angular can find the template at the correct location, using the module commonjs variable. We are going to learn also some best practices for component naming, from the official Angular 2 Style Guide."
        },
        {
          "url": "angular2-components-styling-component-isolation",
          "description": "Styling Angular 2 Components - Learn About Component Style Isolation",
          "duration": "3:27",
          "tags": "BEGINNER",
          "pro": true,
          "longDescription": "In this lesson we are going to learn how components can be styled using both inline styles and an external css file. We will learn some more best practices on file naming. We will learn how the mechanism for style isolation works in Angular 2."
        },
        {
          "url": "angular2-components-component-interaction",
          "description": "Angular 2 Component Interaction - Extended Components Example",
          "duration": "9:22",
          "pro": true,
          "tags": "BEGINNER",
          "longDescription": "In this lesson we are going to put together all that we have learned so far about components to create a more complex example. We are going to create two components: a color picker and a color previewer and see how they can interact."
        },
        {
          "url": "angular2-components-exercise",
          "description": "Angular 2 Components Tutorial For Beginners - Components Exercise !",
          "duration": "1:26",
          "tags": "BEGINNER",
          "pro": true,
          "longDescription": "In this video we are going to present an exercise for putting in practice the several concepts that we have learned so far about components."
        },
        {
          "url": "angular2-components-exercise-solution",
          "description": "Angular 2 Components Tutorial For Beginners - Components Exercise Solution Inside",
          "duration": "2:08",
          "tags": "BEGINNER",
          "pro": true,
          "longDescription": "This video contains the solution for the introduction to components exercise."
        },
        {
          "url": "angular2-directives-inputs-outputs-event-emitters",
          "description": "Angular 2 Directives - Inputs, Output Event Emitters and How To Export Template References",
          "duration": "4:01",
          "tags": "BEGINNER",
          "pro": true,
          "longDescription": "Angular 2 Components are actually simply just Directives. All the functionality that we have learned so far about Components also applies to Directives. In this lesson we are going to learn how to Directives can also have inputs and outputs, and how the use of the decorators @Input and @Output also applies to directives. We are also learn a new functionality for exporting a template reference for the directive itself into the template on which the directive is being used. "
        },
        {
          "description": "Angular 2 Core Directives  - ngFor",
          "duration": "3:46",
          "url": "angular2-core-directives-ngfor",
          "tags": "BEGINNER",
          "pro": true,
          "longDescription": "This is an overview on the ngFor core directive, how it works and some common use cases on how it should be used to build templates. It demonstrates how ngFor can be used with any iterable and not only arrays, and how to use together with other mechanisms of the framework like @ContentChildren."
        },
        {
          "description": "Angular 2 Core Directives - ngClass and ngStyle",
          "duration": "3:15",
          "url": "angular2-core-directives-ngclass-ngstyle",
          "tags": "BEGINNER",
          "pro": true,
          "longDescription": "This lesson is an overview on how to use the ngClass and ngStyle Directives, when to use which, and alternative syntax in case we only to modify one property/style."
        },
        {
          "description": "Angular 2 Core Directives - ngIf",
          "duration": "3:56",
          "url": "angular2-core-directives-ngIf",
          "tags": "BEGINNER",
          "pro": true,
          "longDescription": "This lesson covers the use of the core directive ngIf, as well as two other alternative way of showing or hiding elements from the DOM: the hidden property and the visibility CSS property."
        },
        {
          "description": "Directives Guided Tour - Learn Why Directives Might be a Better Choice Than Components",
          "url": "angular2-guided-tour-directives",
          "duration": "7:58",
          "tags": "BEGINNER",
          "pro": true,
          "longDescription": "This lesson is an extended tour on Angular 2 directives. This is an extremely powerful feature of Angular 2 that often remains underused. Its super powerful and and if used correctly can be used to create functionality that is much more reusable than components themselves."
        },
        {
          "description": "Introduction to Angular 2 Directives - Exercise - Improve the Collapsible Directive",
          "duration": "1:30",
          "url": "angular2-directives-exercise-improve-collapsible-directive",
          "tags": "BEGINNER",
          "pro": true,
          "longDescription": "In this video we are going to present the exercise for the Introduction To Directives section. The goal of the exercise is to take the learned functionality about how to build a custom directive and how to use the standard Angular 2 Core directives to build an improved version of the collapse-on-click directive."
        },
        {
          "description": "Introduction to Angular 2 Directives - Exercise Solution",
          "duration": "2:40",
          "url": "angular2-directives-exercise-solution-improve-collapsible-directive",
          "tags": "BEGINNER",
          "pro": true,
          "longDescription": "In this video we are going to present the exercise solution for the Introduction To Directives section."
        }
      ]
    },
    {
      "url": "angular2-http",
      "description": "Angular 2 HTTP and Services",
      "longDescription": "<p class='course-description'>Build Services using Observables, learn to use the HTTP module effectively.",
      "iconUrl": "https://angular-academy.s3.amazonaws.com/thumbnails/services-and-http.jpg",
      "courseListIcon": "https://angular-academy.s3.amazonaws.com/course-logos/observables_rxjs.png",
      "lessons": [
        {
          "description": "What is an Observable ? Introduction to Streams and RxJs Observables",
          "duration": "5:41",
          "url": "angular2-what-is-an-observable",
          "tags": "BEGINNER",
          "videoUrl": "https://www.youtube.com/embed/Sol2uLolmUM",
          "longDescription": "In this lesson we are going to present a couple of baseline concepts that are essential for being able to build service layers in Angular 2: we will introduce the notions of stream and Observable. We are going to understand that these are two  different concepts: an Observable is not a stream. During the lesson we will write our first Observable and we will learn one of the main properties of Observables: that they are inherently inert, and that we need to subscribe to them in order for them to work. We are also going to introduce our first RxJs operator: the do operator which should only be used for debugging purposes as it introduces side effects."
        },
        {
          "description": "Observables Error Handling and Completion - How do Observables handle Errors?",
          "duration": "5:28",
          "url": "angular2-observables-error-handling-and-completion-network-calls-as-observables",
          "tags": "BEGINNER",
          "videoUrl": "https://www.youtube.com/embed/ot_FrQbmEmU",
          "longDescription": "In this lesson we are going to present two other foundation concepts of Observables: error handling and completion. We are going to initially call our backend server using the browser Fetch API, which is promises based. We will then learn how to create an Observable from a promise, and see how and why an observable is a good way to model a network call. We will learn about some advantages of Observables vs Promises."
        },
        {
          "description": "How does Angular 2 HTTP use Observables ? The HTTP Response object",
          "duration": "4:32",
          "url": "how-does-angular2-use-observables-http-response-object",
          "tags": "BEGINNER",
          "longDescription": "In this lesson we are going to learn the relation between the Angular 2 HTTP module and Observables, and how its essential to understand Observables in order to do even the most common backend-communication tasks using the HTTP module. We are going to learn how Angular 2 HTTP models network responses using Observables, and how completion is handled. "
        },
        {
          "description": "How to use Observables and HTTP to build a Service Layer",
          "duration": "4:32",
          "url": "angular2-how-to-use-observables-and-http-to-build-a-servicelayer",
          "tags": "BEGINNER",
          "videoUrl": "",
          "longDescription": "In this lesson we are going to learn how to use Angular 2 HTTP to build the service layer of our application. We are going to learn how to build strongly typed services and we are going to learn how the service layer can be designed around the notion of Observables."
        },
        {
          "description": "Introduction to Functional Reactive Programming - Using the Async Pipe - Pitfalls to Avoid",
          "duration": "4:36",
          "url": "angular2-how-to-use-the-async-pipe-to-pass-observables-into-a-template",
          "tags": "BEGINNER",
          "pro": true,
          "longDescription": "In this lesson we are going to do an introduction to Functional Reactive Programming, and we are going to see how an application can be built around the notion of Observables. We are going to see how programs can be build with very little state variables, and how data can be passed on from Observables directly to templates by using the Async Pipe. We are going to learn also why in some cases its not a good idea to call the service layer directly from a template expression - this is a pitfall to avoid."
        },
        {
          "description": "The RxJs Map Operator - How to create an Observable from another Observable",
          "duration": "3:04",
          "url": "angular2-observable-map-operator-how-to-create-an-observable-from-another",
          "tags": "BEGINNER",
          "pro": true,
          "longDescription": "In this lesson we are going to learn one of the key concepts about Observables: we can easily derive new Observables from existing Observables using the many RxJs operators available to us. In this lesson we are going to create an Observable from another Observable by using the RxJs map operator."
        },
        {
          "description": "Observable Composition - combine multiple Observables Using combineLatest",
          "duration": "5:59",
          "url": "angular2-observable-composition-combine-latests",
          "tags": "BEGINNER",
          "pro": true,
          "longDescription": "In this lesson we are going to learn that Observables can be combined with other Observables. In this case we are going to create an Observable of mouse moves that only emits if the mouse is bellow a certain region of the page. We are also going to create an Observable of mouse clicks, that emits if the user clicks anywhere on the page - both of these Observables will be created using fromEvent. We will then combine these two Observables to create third Observable using the RxJs combineLatests operator. "
        },
        {
          "description": "Avoid the Biggest Pitfall of Angular 2 HTTP - Learn the RxJs Cache Operator",
          "duration": "5:10",
          "url": "angular2-how-to--aAvoid-duplicate-http-requests-rxjs-cache-operator",
          "tags": "INTERMEDIATE",
          "pro": true,
          "longDescription": "In this lesson we are going to use the HTTP module to implement a modification operation: we are going to add a lesson to a lessons list via an HTTP POST call, and then reload the data from the server.  While implementing this simple use case, we are going to come across something that might be surprising at first: its really simple to do duplicate network calls accidentally while using Angular 2 HTTP. We are going to learn the reason why that is the case, and learn how we can avoid that using the RxJs Cache Operator."
        },
        {
          "description": "How to do multiple HTTP requests using the RxJs Concat Operator",
          "duration": "4:19",
          "url": "angular2-how-to-do-multiple-http-requests-using-the-rxjs-concat-operator",
          "tags": "INTERMEDIATE",
          "pro": true,
          "longDescription": "In this lesson we are going to learn how we make multiple sequential requests to the server by using the RxJs Concat operator. This is another example of how from the point of view of the Angular 2 HTTP module network requests are really just Observables that can be easily combined using the many RxJs operators available. We are going to implement the following concrete example: do a delete on the server, then a second delete and finally reload the new list from the server and display it on the screen."
        },
        {
          "description": "How to do two HTTP Requests in Parallel using the RxJs combineLatest Operator",
          "duration": "3:58",
          "url": "angular2-how-to-do-two-http-requests-in-parallel-using-the-rxjs-combinelatest-operator",
          "tags": "INTERMEDIATE",
          "pro": true,
          "longDescription": "In this lesson we are going to learn how to do two HTTP requests in parallel, wait for each to return and produce a result that contains the combination of the two HTTP calls. For that we are going to use an operator that we presented before, the combineLatest Operator which will in this time be used in a completely different context. This is a good example of the power of the approach that the Angular 2 HTTP module gives us, by modeling network calls as Observables; any RxJs operator can potentially by used to process network calls."
        },
        {
          "description": "How to setup an HTTP request sequence using the RxJs switchMap Operator",
          "duration": "4:33",
          "url": "angular2-how-to-setup-an-http-request-sequence-using-the-rxjs-switchmap-operator",
          "tags": "INTERMEDIATE",
          "pro": true,
          "longDescription": "In this lesson we are going to learn how we can build a chain of HTTP requests, but now we will be able to take the result of one request and then use it to build the next request. For this we are going to introduce a new RxJs Operator for combining Observables, the switchMap Operator. This lesson will give us a first contact with the more general Switch strategy of combining Observables."
        },
        {
          "description": "Retry HTTP requests in Error using the retry and retryWhen RxJs Operators",
          "duration": "3:42",
          "url": "angular2-retry-http-requests-in-error-using-the-retry-and-retrywhen-rxjs-operators",
          "tags": "INTERMEDIATE",
          "pro": true,
          "longDescription": "In this lesson we are going to learn how RxJs and Observables make it very simple to deal with certain uses cases that before might be challenging. For example, we are going to learn how to retry a network call in case of error. This is very useful in situations when the backend occasionally returns errors that are of an intermittent nature. In those scenarios a good strategy is to try to send the network call again a second time, usually after a certain delay has elapsed. In this lesson we are going to learn how we can use the RxJs Operators retry and retryWhen to implement service layers that are resilient to temporary errors."
        },
        {
          "description": "How to Cancel an HTTP Request using an RxJs Subscription",
          "duration": "2:56",
          "url": "angular2-how-to-cancel-an-http-request-using-an-rxjs-subscription",
          "tags": "INTERMEDIATE",
          "pro": true,
          "longDescription": "In this lesson we are going to learn how to implement a use case using RxJs and Observables that was very hard to do previously: the cancellation of an ongoing HTTP request. We are going to learn about the RxJs subscription object and how to use it to implement cancellation."
        },
        {
          "description": "Exercise - Improve a Search Service and Build a Typeahead",
          "duration": "3:15",
          "url": "angular2-exercise-improve-a-search-service-and-build-a-typeahead",
          "tags": "INTERMEDIATE",
          "pro": true,
          "longDescription": "This lesson is the setup for the exercise of the Services and HTTP series. We are going to implement a Typeahead that continuously retrieves from the backend new search results depending on what the use is typing. We are going to show how to use the Angular 2 HTTP API to pass a GET parameter request to the backend."
        },
        {
          "description": "Exercise Solution - Learn How to build a Typeahead that cancels obsolete search requests",
          "duration": "5:07",
          "url": "angular2-exercise-solution-learn-how-to-build-a-typeahead-that-cancels-obsolete-search-requests",
          "tags": "INTERMEDIATE",
          "pro": true,
          "longDescription": "This is the solution for the HTTP and Services exercise, where we will build a Typeahead. For that we are going to use a couple of RxJs Operators that we have previously presented in this course. We are going to see how results from a previous search can be implicitly canceled."
        }
      ]
    }
  ]
};








