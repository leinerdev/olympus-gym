import { Component, OnInit } from '@angular/core';

interface Plans {
  title: string
  description: string
}

@Component({
  selector: 'app-content-row',
  templateUrl: './content-row.component.html',
  styleUrls: ['./content-row.component.css'],
})
export class ContentRowComponent implements OnInit {
  plans: Plans[] = [
    {
      title: 'Plan Zéus',
      description:
        'Acceso a todas las sedes con las que cuente el gimnasio. Acceso ilimitado durante el mes a las clases grupales de zumba, spinning, yoga, pilates, Cross Training; Xcore; Body Combat; HBX Boxing.',
    },
    {
      title: 'Plan Poseidón',
      description:
        'Acceso a todas las sedes con las que cuente el gimnasio. Acceso a diez clases grupales de zumba, spinning, yoga, pilates o Body Combat.',
    },
    {
      title: 'Plan Hércules',
      description:
        'Acceso a todas las sedes con las que cuente el gimnasio. Acceso solo a tres clases grupales de zumba, spinning, yoga, pilates o Body Combat (el usuario podrá elegir a cuál de las clases desea ingresar teniendo en cuenta que solo tendrá tres accesos).',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
