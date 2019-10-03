import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'testear',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../testear/testear.module').then(m => m.TestearPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/testear',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/testear',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [TabsPage]
})
export class TabsPageModule {}
