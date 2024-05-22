import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolsexperienceComponent } from "../toolsexperience/toolsexperience.component";
import { AboutComponent } from "../about/about.component";
import { SertificationComponent } from "../sertification/sertification.component";
import { MyProjectComponent } from "../my-project/my-project.component";
import { ContactComponent } from "../contact/contact.component";
import { CrouselPageComponent } from "../crousel/crousel-page.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RouterLink, ToolsexperienceComponent, AboutComponent, SertificationComponent, MyProjectComponent, ContactComponent, CrouselPageComponent]
})
export class HomeComponent {

}
