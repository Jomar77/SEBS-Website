1. Customer Website – UML Class Diagram Guidelines

Purpose
Define class diagram standards for the customer-facing website. Focus on classes specific to website functionality while referencing shared domain entities from the API project.

General Principle

Treat the website as a subsystem.

Reference shared entities (User, Booking, Event) without redefining attributes or methods.

Include website-specific classes like controllers, view models, or services that interact with the API.

Diagram Rules

Shared entities appear as references only (use notes or dashed boxes).

Website classes define methods relevant to user actions (e.g., submitBooking(), searchEvents()).

Encapsulation: private attributes, public methods.

Naming: nouns for data classes, verbs for service/controller classes.

Standard UML notation: class name, attributes, methods, visibility, associations.

Avoid API endpoint details; show interaction only through references to shared entities.
