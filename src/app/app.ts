import { Component } from '@angular/core';
import {
  academicCvUrl,
  contactLinks,
  experience,
  projects,
  publications,
  references,
  skills,
} from './portfolio.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly academicCvUrl = academicCvUrl;
  protected readonly contactLinks = contactLinks;
  protected readonly publications = publications;
  protected readonly projects = projects;
  protected readonly experience = experience;
  protected readonly skills = skills;
  protected readonly references = references;
}
