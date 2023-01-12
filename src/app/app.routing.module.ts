import { NgModule } from "@angular/core";
import { Routes, RouterModule  } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { FormComponent } from "./pages/form/form.component";

const routes : Routes =[
    {path : "" , component : AboutComponent},
    {path : "formulario" , component : FormComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})


export class AppRoutersModule {}