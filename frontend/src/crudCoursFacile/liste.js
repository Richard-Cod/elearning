import React from "react";
import Admin from "react-crud-admin";
import Form from "react-jsonschema-form";

import {courses,categories} from '../data'
 
export default class Example extends Admin {
  constructor() {
    super();
    this.name = "Cours";
    this.name_plural = "Cours";
    this.list_display_links = ["name"];
    this.list_display = ["name","price","author.firstName","author.lastName","categorie.name"];
  }
  get_queryset(page_number, list_per_page, queryset) {
    return courses;
  }
  get_form(object = null) {
    let schema = {
      title: this.name,
      type: "object",
      required: ["name","price"],
      properties: {
        name: { type: "string", title: "Nom", default: "Nom" },
        price: { type: "string", title: "Nom", default: "Prix" },
        author: {
          type: "object",
          title: "Auteur",
          properties: {
            firstName: { type: "string", title: "Prenom" },
            lastName: { type: "string", title: "Nom" },
          }
        }
      }
    };
 
    if (!object) {
      return <Form schema={schema} />;
    } else {
      return <Form schema={schema} formData={object} />;
    }
  }
}