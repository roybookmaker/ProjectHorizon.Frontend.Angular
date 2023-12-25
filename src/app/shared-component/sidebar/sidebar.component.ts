import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  title: string;
  link?: string;
  subMenu?: MenuItem[];
  isOpen?: boolean;
  roles?: string[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  menuItems: MenuItem[] = [
    {
      name: 'mainaccount',
      title: 'Account',
      subMenu: [
        {
          name: 'account',
          title: 'Account Management',
          link: '/account'
        },
        {
          name: 'role',
          title: 'Role Management',
          link: '/role'
        }
      ]
    },
    {
      name: 'mainfeatures',
      title: 'Features',
      subMenu: [
        {
          name: 'gptintegration',
          title: 'ChatGPT Integration',
          link: '/gptintegration'
        },
        {
          name: 'formgenerator',
          title: 'Form Generation',
          link: '/formgenerator'
        },
        {
          name: 'tabulation',
          title: 'Tabulation System',
          link: '/tabulation'
        },
        {
          name: 'documentmanagement',
          title: 'Document Management',
          subMenu: [
            {
              name: 'documenthandling',
              title: 'Document Handling',
              link: '/documenthandling'
            },
            {
              name: 'documentsigning',
              title: 'Document Signing',
              link: '/documentsigning'
            }
          ]
        }
      ]
    },
    {
      name: 'logout',
      title: 'Logout',
      link: '/logout'
    }
    // Add more menu items and sub-menu items as needed
  ];

  toggleSubMenu(menuItem: MenuItem): void {
    menuItem.isOpen = !menuItem.isOpen;
  }
}
