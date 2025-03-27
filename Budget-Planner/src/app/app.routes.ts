import { Routes } from '@angular/router';
import { LoginComponent } from './budget-planner/login/login.component';

export const routes: Routes = [
{
    path:'',
    redirectTo:'budget-planner',
    pathMatch:'full'
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'budget-planner',
    loadChildren:()=> import('./budget-planner/budget-planner-routing.module').then(m=> m.BudgetPlannerRoutingModule)
}
    
];
